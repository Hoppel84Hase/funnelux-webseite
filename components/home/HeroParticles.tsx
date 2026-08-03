"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 70;
const MAX_LINE_DISTANCE = 5.5;
const COLOR = 0x6366f1;

// Reines Hintergrund-Deko-Element hinter dem Hero-Text. Wird nur gerendert,
// wenn HeroParticlesLoader zuvor geprueft hat, dass prefers-reduced-motion
// nicht aktiv ist und das Geraet nicht als schwach eingestuft wurde.
export function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeContainer = containerRef.current;
    if (!maybeContainer) return;
    const container: HTMLDivElement = maybeContainer;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / Math.max(height, 1), 0.1, 100);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const bounds = { x: 24, y: 14 };
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities: THREE.Vector2[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * bounds.x;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * bounds.y;
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 6;
      velocities.push(new THREE.Vector2((Math.random() - 0.5) * 0.012, (Math.random() - 0.5) * 0.012));
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: COLOR,
      size: 0.35,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(points);

    const maxPairs = (PARTICLE_COUNT * (PARTICLE_COUNT - 1)) / 2;
    const linePositions = new Float32Array(maxPairs * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: COLOR, transparent: true, opacity: 0.12 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    let animationFrame: number | null = null;
    let running = false;

    function updateLines() {
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      let vertexIndex = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = posAttr.getX(i) - posAttr.getX(j);
          const dy = posAttr.getY(i) - posAttr.getY(j);
          const dz = posAttr.getZ(i) - posAttr.getZ(j);
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < MAX_LINE_DISTANCE) {
            linePositions[vertexIndex++] = posAttr.getX(i);
            linePositions[vertexIndex++] = posAttr.getY(i);
            linePositions[vertexIndex++] = posAttr.getZ(i);
            linePositions[vertexIndex++] = posAttr.getX(j);
            linePositions[vertexIndex++] = posAttr.getY(j);
            linePositions[vertexIndex++] = posAttr.getZ(j);
          }
        }
      }
      lineGeometry.setDrawRange(0, vertexIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;
    }

    function tick() {
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        let x = posAttr.getX(i) + velocities[i].x;
        let y = posAttr.getY(i) + velocities[i].y;
        if (x > bounds.x) x = -bounds.x;
        if (x < -bounds.x) x = bounds.x;
        if (y > bounds.y) y = -bounds.y;
        if (y < -bounds.y) y = bounds.y;
        posAttr.setX(i, x);
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;
      updateLines();
      renderer.render(scene, camera);
      if (running) animationFrame = requestAnimationFrame(tick);
    }

    function start() {
      if (running) return;
      running = true;
      animationFrame = requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && document.visibilityState === "visible") start();
          else stop();
        });
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    function handleVisibility() {
      if (document.visibilityState === "visible") {
        const rect = container.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) start();
      } else {
        stop();
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);

    function handleResize() {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      stop();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}

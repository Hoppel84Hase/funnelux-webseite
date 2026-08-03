import fs from "fs";
import path from "path";
import Image from "next/image";
import { cn } from "@/lib/cn";

type FallbackImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  placeholderLabel?: string;
  sizes?: string;
  priority?: boolean;
};

// Server-Komponente: prueft beim Rendern (Build-Zeit bei SSG), ob die Bilddatei
// unter /public existiert, und zeigt sonst einen dezenten Platzhalter statt
// eines kaputten Bilds.
export function FallbackImage({
  src,
  alt,
  className,
  imageClassName,
  placeholderLabel,
  sizes,
  priority,
}: FallbackImageProps) {
  const filePath = path.join(process.cwd(), "public", src);
  const exists = fs.existsSync(filePath);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border bg-surface", className)}>
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.18),transparent_60%)] bg-grid-pattern bg-grid p-6 text-center">
          <PlaceholderIcon />
          <p className="max-w-[16rem] text-sm text-text-secondary">{placeholderLabel ?? alt}</p>
        </div>
      )}
    </div>
  );
}

function PlaceholderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-9 w-9 text-accent-light/70"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 15l-5-5-9 9" />
    </svg>
  );
}

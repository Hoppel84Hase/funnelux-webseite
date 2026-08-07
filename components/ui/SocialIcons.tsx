export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.94c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.66 1.8-2.66 3.66V23h-4V8z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.8c0-1 .28-1.7 1.73-1.7H16.5V3.14C16.2 3.1 15.2 3 14 3c-2.5 0-4.2 1.53-4.2 4.33V10H7v3.5h2.8V22h3.7z" />
    </svg>
  );
}

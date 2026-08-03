"use client";

import { useLeadModal } from "@/components/leads/LeadModalProvider";
import { cn } from "@/lib/cn";

type WhatsAppButtonProps = {
  section: string;
  label?: string;
  size?: "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
};

const sizeClasses = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function WhatsAppButton({
  section,
  label = "Jetzt Kontakt aufnehmen",
  size = "md",
  variant = "solid",
  className,
}: WhatsAppButtonProps) {
  const { openModal } = useLeadModal();

  return (
    <button
      type="button"
      onClick={() => openModal(section)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap",
        sizeClasses[size],
        variant === "solid"
          ? "bg-whatsapp text-background hover:bg-whatsapp-dark"
          : "border border-whatsapp text-whatsapp hover:bg-whatsapp/10",
        className
      )}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </button>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.876.52 3.68 1.5 5.253L2 22l4.879-1.474A9.945 9.945 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.062a8.03 8.03 0 0 1-4.375-1.291l-.313-.187-2.895.875.883-2.815-.204-.324A8.043 8.043 0 0 1 3.938 12c0-4.452 3.612-8.062 8.063-8.062S20.062 7.548 20.062 12 16.452 20.062 12.001 20.062z" />
    </svg>
  );
}

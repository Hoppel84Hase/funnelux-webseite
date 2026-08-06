"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type LeadModalContextValue = {
  isOpen: boolean;
  section: string | null;
  interest: string | null;
  openModal: (section: string, interest?: string) => void;
  closeModal: () => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const [interest, setInterest] = useState<string | null>(null);

  const openModal = useCallback((s: string, i?: string) => {
    setSection(s);
    setInterest(i ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, section, interest, openModal, closeModal }),
    [isOpen, section, interest, openModal, closeModal]
  );

  return <LeadModalContext.Provider value={value}>{children}</LeadModalContext.Provider>;
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) {
    throw new Error("useLeadModal muss innerhalb von LeadModalProvider verwendet werden");
  }
  return ctx;
}

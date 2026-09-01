import type { Metadata } from "next";
import { DeckPageClient } from "@/components/deck/DeckPageClient";

export const metadata: Metadata = {
  title: "Enterprise Compliance Gateway — Barloworld Equipment Lesotho",
  description:
    "Infinity Business Dynamics proposal for the Enterprise Compliance Gateway (EBS) — Microsoft Dynamics 365 & CRM Integration for Barloworld Equipment Lesotho.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <DeckPageClient />;
}

"use client";

import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Banknote,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  ClipboardCheck,
  ClipboardList,
  FileCheck,
  FileSignature,
  FileText,
  GitBranch,
  GraduationCap,
  Handshake,
  Headphones,
  Layers,
  LayoutList,
  LineChart,
  Lock,
  Mail,
  Network,
  Package,
  QrCode,
  Receipt,
  RefreshCw,
  Route,
  Scale,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { BweMark, IbdMark } from "@/components/deck/IbdMark";
import { slideTitles, getTocSectionNumber } from "@/lib/deck-content";

const SLIDE_ICONS: LucideIcon[] = [
  Package, // 0 Cover
  Mail, // 1 Executive Letter
  LayoutList, // 2 Table of Contents
  FileText, // 3 Executive Summary
  Target, // 4 Strategic Business Outcomes
  Building2, // 5 Understanding Barloworld Equipment
  ClipboardCheck, // 6 Business Challenges
  Building2, // 7 About Infinity
  Award, // 8 Why Infinity
  BadgeCheck, // 9 RSL Accreditation
  Layers, // 10 Enterprise Compliance Gateway
  Network, // 11 Enterprise Solution Architecture
  Server, // 12 Dynamics 365 ERP Integration
  Users, // 13 CRM Integration
  Workflow, // 14 API Integration Framework
  Route, // 15 Motheo Compliance Engine
  Shield, // 16 Security Architecture
  RefreshCw, // 17 Transaction Lifecycle
  GitBranch, // 18 Online & Offline Processing
  Lock, // 19 Digital Certificate Management
  QrCode, // 20 QR Code Management
  BarChart3, // 21 Compliance Monitoring & Analytics
  ShieldCheck, // 22 Business Continuity & DR
  LineChart, // 23 Compliance Analytics & Reporting
  Sparkles, // 24 Implementation Methodology
  Scale, // 25 Project Governance
  Users, // 26 Project Organisation & Delivery Team
  GitBranch, // 27 Project Implementation Plan
  Calendar, // 28 Project Timeline
  FileCheck, // 29 Testing & Quality Assurance
  GraduationCap, // 30 Training & Change Management
  Headphones, // 31 Support & Managed Services
  Timer, // 32 Service Level Commitments
  Lock, // 33 Risk Management
  Banknote, // 34 Commercial Proposal
  ClipboardList, // 35 Supplier Responses
  Award, // 36 Why Infinity
  Sparkles, // 37 Conclusion
  FileSignature, // 38 Proposal Acceptance
  BookOpen, // 39 Barloworld RFQ Annexures
  FileCheck, // 40 Mandatory Supporting Documents (RFQ §2)
];

type SectionBadgeProps = {
  index: number;
  className?: string;
};

export function DeckEyebrow({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div className="deck-title-pill gms-eyebrow inline-flex items-center rounded-full uppercase">
      <span className="deck-title-pill__icon">{icon}</span>
      <span className="deck-title-pill__label font-semibold">{children}</span>
    </div>
  );
}

export function SectionBadge({ index, className = "" }: SectionBadgeProps) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "Proposal";

  return (
    <div
      className={`gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase ${className}`.trim()}
    >
      <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      <span>{label}</span>
    </div>
  );
}

/** Top-of-slide section label — always includes icon + title from slide metadata */
export function SlideEyebrow({
  index,
  sectionNumber,
}: {
  index: number;
  /** Override TOC numbering, e.g. "32.5" for appendix sub-sections */
  sectionNumber?: string;
}) {
  const Icon = SLIDE_ICONS[index] ?? Sparkles;
  const label = slideTitles[index] ?? "Proposal";
  const tocSection =
    sectionNumber ??
    (getTocSectionNumber(index) !== null
      ? String(getTocSectionNumber(index)).padStart(2, "0")
      : null);
  const prefix = tocSection ? `${tocSection} · ` : "";

  return (
    <DeckEyebrow icon={<Icon aria-hidden />}>
      {prefix}
      {label}
    </DeckEyebrow>
  );
}

/** Slide header brand — BWE + IBD on every slide */
export function DeckHeaderBrand() {
  return (
    <div className="gms-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase backdrop-blur">
      <BweMark size="sm" />
      <span>BWE | Infinity Business Dynamics</span>
      <IbdMark size="sm" />
    </div>
  );
}

/** @deprecated Use DeckHeaderBrand */
export function CoverSlideHeaderBadge() {
  return <DeckHeaderBrand />;
}

/** Bottom-right certification label — same on every slide */
export function SlideSectionCorner() {
  return (
    <div className="deck-corner-badge gms-eyebrow inline-flex items-center rounded-full uppercase">
      <Shield className="deck-corner-badge__icon" aria-hidden />
      <span className="deck-corner-badge__label font-semibold">RSL Certified | Lekuka Partner</span>
    </div>
  );
}
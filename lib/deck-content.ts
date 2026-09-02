export * from "@/lib/deck-proposal-content";

import { appendices } from "@/lib/deck-proposal-content";

export const APPENDIX_COUNT = 0;
export const APPENDIX_START_SLIDE = 44;
export const SLIDE_COUNT = 44;

/** A4 portrait at ~150 DPI (210mm × 297mm) */
export const SLIDE_WIDTH = 1240;
export const SLIDE_HEIGHT = 1754;

export const SLIDE_PADDING_X = 104;
export const SLIDE_PADDING_TOP = 96;
export const SLIDE_PADDING_BOTTOM = 88;
export const SLIDE_HEADER_BODY_GAP = 56;
export const SLIDE_INTRO_BODY_GAP = 20;
export const SLIDE_FOOTER_GAP = 40;

export const slideTitles = [
  "Cover",
  "Executive Letter",
  "Table of Contents",
  "Executive Summary",
  "Strategic Business Outcomes",
  "Understanding Barloworld Equipment",
  "Business Challenges",
  "About Infinity Business Dynamics",
  "Why Infinity Business Dynamics",
  "RSL Accreditation & Solution Positioning",
  "Enterprise Compliance Gateway",
  "Enterprise Solution Architecture",
  "Dynamics 365 ERP Integration",
  "CRM Integration",
  "API Integration Framework",
  "Motheo Compliance Engine",
  "Security Architecture",
  "Transaction Lifecycle",
  "Online & Offline Processing",
  "Digital Certificate Management",
  "QR Code Management",
  "Compliance Monitoring & Analytics",
  "Business Continuity & Disaster Recovery",
  "Compliance Analytics & Reporting",
  "Implementation Methodology",
  "Key Deliverables",
  "Project Governance",
  "Project Organisation & Delivery Team",
  "Project Implementation Plan",
  "Project Timeline",
  "Testing & Quality Assurance",
  "Training & Change Management",
  "Support & Managed Services",
  "Service Level Commitments",
  "Risk Management",
  "Commercial Proposal",
  "Supplier Responses",
  "BFR Requirement Traceability",
  "Acceptance Evidence",
  "Why Infinity Business Dynamics",
  "Conclusion",
  "Proposal Acceptance",
  "Barloworld RFQ Annexures",
  "Mandatory Supporting Documents (RFQ §2)",
] as const;

export const coverMeta = {
  platform: "ENTERPRISE COMPLIANCE GATEWAY",
  subtitle: "Electronic Billing System (EBS)",
  subjectLines: [
    "Compliance Gateway Solution (EBS)",
    "Microsoft Dynamics 365 & CRM Integration",
  ],
  preparedFor: "BARLOWORLD EQUIPMENT LS",
  preparedForClient: "Barloworld Equipment Lesotho",
  preparedForLocation: "Lesotho",
  preparedBy: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  preparedByDisplay: "Infinity Business Dynamics (Pty) Ltd",
  tagline: "Harnessing the Power of Technology",
  address: "P.O. Box 13145, Maseru 100, Lesotho",
  email: "services@ibd.co.ls",
  phone1: "+266 62554433",
  phone2: "+266 62553300",
  website: "www.ibd.co.ls",
  location: "Maseru, Lesotho",
  tin: "200116903-2",
  date: "29th of June 2026",
  reference: "IBD-BWE-EBS-2026-001",
  accreditation: "Revenue Services Lesotho Accredited Solution Provider",
  primaryContactName: "Fusi Monyolo",
  primaryContactRole: "Primary Proposal Contact",
  primaryContactEmail: "services@ibd.co.ls",
  primaryContactPhone: "+266 62554433",
  rfqContact: "Fusi Monyolo",
  rfqContactEmail: "services@ibd.co.ls",
  keyDates: [] as const,
};

const TOC_TITLE_ALIASES: Record<string, string> = {
  "Why Infinity": "Why Infinity Business Dynamics",
  "Revenue Services Lesotho Accreditation": "RSL Accreditation & Solution Positioning",
  "Enterprise Architecture": "Enterprise Solution Architecture",
  "Dynamics 365 Integration Architecture": "Dynamics 365 ERP Integration",
  "QR Code Framework": "QR Code Management",
  "Monitoring & Reporting": "Compliance Monitoring & Analytics",
  "Business Continuity": "Business Continuity & Disaster Recovery",
  "Project Team": "Project Organisation & Delivery Team",
  "Testing Strategy": "Testing & Quality Assurance",
  "User Training": "Training & Change Management",
  "Support Model": "Support & Managed Services",
  "Terms & Conditions Acceptance": "Proposal Acceptance",
};

const TOC_ENTRIES = [
  "Executive Summary",
  "Strategic Business Outcomes",
  "Understanding Barloworld Equipment",
  "Business Challenges",
  "About Infinity Business Dynamics",
  "Why Infinity",
  "Revenue Services Lesotho Accreditation",
  "Enterprise Compliance Gateway",
  "Enterprise Architecture",
  "Dynamics 365 Integration Architecture",
  "CRM Integration",
  "API Integration Framework",
  "Motheo Compliance Engine",
  "Security Architecture",
  "Transaction Lifecycle",
  "QR Code Framework",
  "Monitoring & Reporting",
  "Business Continuity",
  "Implementation Methodology",
  "Key Deliverables",
  "Project Governance",
  "Project Team",
  "Project Timeline",
  "Testing Strategy",
  "User Training",
  "Support Model",
  "Service Level Commitments",
  "Risk Management",
  "Commercial Proposal",
  "Annual Managed Services",
  "Supplier Responses",
  "BFR Requirement Traceability",
  "Acceptance Evidence",
  "Terms & Conditions Acceptance",
  "Barloworld RFQ Annexures",
  "Mandatory Supporting Documents (RFQ §2)",
] as const;

export const tableOfContents = TOC_ENTRIES.map((title) => {
  const slideTitle = TOC_TITLE_ALIASES[title] ?? title;
  const slideIndex = slideTitles.indexOf(slideTitle as (typeof slideTitles)[number]);
  return {
    title,
    page: slideIndex >= 0 ? slideIndex + 1 : 0,
  };
});

export function getTocSectionNumber(slideIndex: number): number | null {
  const entryIndex = TOC_ENTRIES.findIndex((title) => {
    const slideTitle = TOC_TITLE_ALIASES[title] ?? title;
    return slideTitles.indexOf(slideTitle as (typeof slideTitles)[number]) === slideIndex;
  });
  return entryIndex >= 0 ? entryIndex + 1 : null;
}

export function getAppendixSlideIndex(_appendixIndex: number) {
  return null;
}

export function getAppendixIndexForSlide(_slideIndex: number): number | null {
  return null;
}

export type AppendixItem = (typeof appendices)[number];

/** Legacy flow export for existing visuals */
export const solutionArchitectureFlow = [
  "Barloworld Users",
  "Dynamics 365 ERP",
  "CRM",
  "Infinity Compliance Gateway",
  "Motheo Compliance Engine",
  "Revenue Services Lesotho",
] as const;

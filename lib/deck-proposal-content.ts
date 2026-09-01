/** Verbatim proposal copy — pages 1–42 */

export const proposalCover = {
  title: "ENTERPRISE COMPLIANCE GATEWAY",
  subtitle: "Electronic Billing System (EBS)",
  tagline: "Microsoft Dynamics 365 & CRM Integration",
  preparedFor: "BARLOWORLD EQUIPMENT LS",
  preparedBy: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  preparedByTagline: "Harnessing the Power of Technology",
  location: "Maseru, Lesotho",
  address: "P.O. Box 13145, Maseru 100, Lesotho",
  website: "www.ibd.co.ls",
  email: "services@ibd.co.ls",
  phone: "+266 62554433",
  date: "29th of June 2026",
  reference: "IBD-BWE-EBS-2026-001",
  accreditation: "Revenue Services Lesotho Accredited Solution Provider",
} as const;

export const executiveLetter = {
  to: "Procurement Committee",
  toOrg: "Barloworld Equipment Lesotho",
  toLocation: "Maseru, Lesotho",
  salutation: "Dear Evaluation Committee,",
  paragraphs: [
    "Infinity Business Dynamics appreciates the opportunity to submit this proposal for the design, supply, implementation and long-term support of an Enterprise Compliance Gateway (Electronic Billing System) for Barloworld Equipment Lesotho.",
    "As Revenue Services Lesotho continues to modernise tax administration through the Lekuka Electronic Billing System, organisations operating complex enterprise environments must ensure that fiscal transactions are processed securely, accurately and in real time while maintaining uninterrupted business operations.",
    "Under the Lekuka mandate, invoices, credit notes, debit notes, receipts and payouts must be submitted to RSL in real time. Returned fiscal signatures and QR codes must appear on every printed customer document.",
    "For Barloworld Equipment, compliance extends beyond regulatory reporting. The solution must integrate seamlessly with existing Microsoft Dynamics 365 ERP and CRM environments, support multiple business processes — including manual invoice capture — and provide a resilient architecture capable of supporting future operational growth.",
    "To address these requirements, Infinity Business Dynamics proposes the Infinity Compliance Gateway, powered by the Motheo Compliance Engine. The solution introduces a dedicated enterprise integration and compliance layer between Barloworld's business systems and the Revenue Services Lesotho Lekuka platform.",
    "Our implementation approach combines enterprise architecture, Microsoft Dynamics 365 integration expertise, regulatory compliance and managed support services to deliver a scalable solution that aligns with Barloworld's strategic objectives.",
    "We appreciate the opportunity to participate in this Request for Quotation and look forward to partnering with Barloworld Equipment on this important compliance transformation initiative.",
  ],
  closing: "Yours faithfully,",
  signatureName: "Fusi Munyolo",
  signatureRole: "Director",
  signatureOrg: "Infinity Business Dynamics (Pty) Ltd",
  signatureTagline: "Harnessing the Power of Technology",
} as const;

export const tableOfContentsSections = [
  {
    section: "Executive",
    entries: [
      { title: "Executive Summary", page: 4 },
      { title: "Strategic Business Outcomes", page: 5 },
      { title: "Understanding Barloworld Equipment", page: 6 },
      { title: "Business Challenges", page: 7 },
    ],
  },
  {
    section: "Company",
    entries: [
      { title: "About Infinity Business Dynamics", page: 8 },
      { title: "Why Infinity", page: 9 },
      { title: "Revenue Services Lesotho Accreditation", page: 10 },
    ],
  },
  {
    section: "Solution",
    entries: [
      { title: "Enterprise Compliance Gateway", page: 11 },
      { title: "Enterprise Architecture", page: 12 },
      { title: "Dynamics 365 Integration Architecture", page: 13 },
      { title: "CRM Integration", page: 14 },
      { title: "API Integration Framework", page: 15 },
      { title: "Motheo Compliance Engine", page: 16 },
      { title: "Security Architecture", page: 17 },
      { title: "Transaction Lifecycle", page: 18 },
      { title: "QR Code Framework", page: 21 },
      { title: "Monitoring & Reporting", page: 22 },
      { title: "Business Continuity", page: 23 },
    ],
  },
  {
    section: "Delivery",
    entries: [
      { title: "Implementation Methodology", page: 25 },
      { title: "Project Governance", page: 26 },
      { title: "Project Team", page: 27 },
      { title: "Project Timeline", page: 29 },
      { title: "Testing Strategy", page: 30 },
      { title: "User Training", page: 31 },
      { title: "Support Model", page: 32 },
      { title: "Service Level Commitments", page: 33 },
      { title: "Risk Management", page: 34 },
    ],
  },
  {
    section: "Commercial",
    entries: [
      { title: "Commercial Proposal", page: 35 },
      { title: "Annual Managed Services", page: 35 },
      { title: "Supplier Responses", page: 36 },
      { title: "BFR Requirement Traceability", page: 37 },
      { title: "Terms & Conditions Acceptance", page: 40 },
      { title: "Barloworld RFQ Annexures", page: 41 },
      { title: "Mandatory Supporting Documents (RFQ §2)", page: 42 },
    ],
  },
] as const;

export const executiveSummaryFlow = {
  current: ["Dynamics 365 ERP", "CRM", "Manual Compliance"],
  future: [
    "Infinity Compliance Gateway",
    "Motheo Compliance Engine",
    "Revenue Services Lesotho",
    "Future Enterprise Compliance",
  ],
} as const;

export const strategicOutcomes = [
  {
    title: "Regulatory Compliance",
    description: "Automated reporting aligned with Revenue Services Lesotho requirements.",
    benefit: "Automated fiscal reporting",
  },
  {
    title: "Operational Excellence",
    description: "Reduced manual intervention through intelligent automation.",
    benefit: "Improved operational efficiency",
  },
  {
    title: "Enterprise Visibility",
    description: "Real-time monitoring and operational dashboards.",
    benefit: "Enhanced audit readiness",
  },
  {
    title: "Audit Readiness",
    description: "Complete transaction traceability and audit evidence.",
    benefit: "Reduced compliance risk",
  },
  {
    title: "Future Scalability",
    description: "Enterprise architecture designed for future growth and regulatory change.",
    benefit: "Future-proof regulatory compliance",
  },
] as const;

export const keyBusinessBenefits = [
  "Improved operational efficiency",
  "Reduced compliance risk",
  "Increased reporting accuracy",
  "Faster audit preparation",
  "Enhanced governance",
  "Scalable enterprise platform",
] as const;

export const barloworldBusinessAreas = [
  "Equipment Sales",
  "Equipment Rental",
  "Parts Distribution",
  "Workshop Operations",
  "Field Service",
  "Customer Billing",
  "Accounts Receivable",
  "Finance Operations",
] as const;

export const businessChallenges = [
  "Maintaining uninterrupted Microsoft Dynamics 365 ERP operations.",
  "Integrating enterprise systems with external regulatory platforms.",
  "Managing digital certificates and secure communications.",
  "Supporting high transaction volumes with minimal latency.",
  "Providing complete audit traceability.",
  "Remaining compliant with future regulatory changes.",
] as const;

export const gatewayCapabilities = [
  "Enterprise integration layer",
  "Secure API gateway",
  "Certificate management",
  "High-volume processing",
  "Complete audit logging",
  "Regulatory update support",
] as const;

export const aboutInfinityIntro = [
  "Infinity Business Dynamics is an enterprise technology company specialising in systems integration, regulatory compliance platforms, digital transformation and managed technology services.",
  "We partner with organisations to modernise business operations through intelligent software solutions that improve efficiency, governance and regulatory compliance.",
  "Our multidisciplinary team combines expertise in enterprise architecture, Microsoft Dynamics 365 integration, API development, compliance automation and project delivery.",
] as const;

export const companyCredentials = [
  {
    title: "Registration",
    description: "A2023/5840 — business licence renewed 23 April 2026 (expires 23 April 2029).",
    inline: true,
  },
  {
    title: "Taxpayer ID",
    description: "TIN 200116903-2 with RSL tax clearance valid until 12 May 2027.",
    inline: true,
  },
  {
    title: "Registered address",
    description: "Ha Tsosane, Maseru, Lesotho.",
    inline: true,
  },
] as const;

export const lekukaDocumentTypes = [
  "Invoices",
  "Credit notes",
  "Debit notes",
  "Receipts",
  "Payouts",
] as const;

export const coreCapabilities = [
  {
    title: "Enterprise Integration",
    description:
      "Connecting business systems, data flows and compliance platforms across the enterprise landscape.",
  },
  {
    title: "Dynamics 365 ERP Integration",
    description:
      "Specialist Microsoft Dynamics 365 connectivity that preserves existing workflows while enabling fiscal compliance.",
  },
  {
    title: "Compliance Automation",
    description:
      "Automated fiscal validation, reporting and regulatory submission aligned with Revenue Services Lesotho.",
  },
  {
    title: "API Development",
    description:
      "Secure API design and development for enterprise applications and regulatory platform connectivity.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture supporting resilient, high-availability compliance operations.",
  },
  {
    title: "Managed Services",
    description:
      "Long-term monitoring, support and maintenance of business-critical compliance systems.",
  },
  {
    title: "Digital Transformation",
    description:
      "Technology solutions that improve operational efficiency, governance and business visibility.",
  },
  {
    title: "Certificate Management",
    description:
      "Digital certificate lifecycle management for secure, authenticated communication with Revenue Services Lesotho.",
  },
] as const;

export const whyChooseInfinity = [
  {
    title: "Revenue Services Lesotho Accredited",
    description:
      "Infinity Business Dynamics is accredited to deliver Lekuka-compliant electronic billing solutions aligned with current Revenue Services Lesotho requirements.",
  },
  {
    title: "Enterprise Integration Specialists",
    description:
      "Proven capability designing secure middleware that connects enterprise systems with external regulatory and compliance platforms.",
  },
  {
    title: "Dynamics 365 ERP Integration Expertise",
    description:
      "Specialist experience integrating Microsoft Dynamics 365 environments with compliance gateways while preserving existing business workflows.",
  },
  {
    title: "Secure API Architecture",
    description:
      "Enterprise-grade API design ensuring authenticated, encrypted communication between business systems and Revenue Services Lesotho.",
  },
  {
    title: "Local Implementation Team",
    description:
      "Lesotho-based implementation resources providing local delivery, training and ongoing client engagement.",
  },
  {
    title: "Long-Term Managed Services",
    description:
      "Continuous monitoring, support and maintenance of compliance systems beyond initial deployment.",
  },
  {
    title: "Future Regulatory Readiness",
    description:
      "A scalable platform designed to adapt to evolving Revenue Services Lesotho and enterprise compliance requirements.",
  },
  {
    title: "Proven Implementation Track Record",
    description:
      "Structured delivery methodology with clear milestones, governance and successful enterprise compliance implementations.",
  },
] as const;

export const whyChooseInfinityProse = [
  "As Barloworld Equipment scales fiscal compliance across sales, billing and service operations, the selected partner must bridge certified Motheo technology with robust enterprise integration.",
  "Infinity Business Dynamics brings deep Dynamics 365 experience, local implementation presence and a managed services model designed to keep compliance continuous — not a one-time project.",
  "Our delivery model spans solution design, integration, testing, training and long-term support — giving Barloworld a single accountable partner from discovery through production operations.",
] as const;

export const rslAccreditationIntro = [
  "Infinity Business Dynamics is an accredited provider of Revenue Services Lesotho electronic billing solutions. This accreditation confirms that Infinity is authorised to implement and support Lekuka-compliant fiscal reporting for enterprise organisations operating in Lesotho.",
  "Our proposed Enterprise Compliance Gateway leverages the certified Motheo Compliance Engine while adding enterprise integration, monitoring, security and orchestration capabilities specifically designed for large organisations. The gateway extends the certified core with the middleware, controls and operational tooling required for a complex Microsoft Dynamics 365 ERP and CRM environment.",
  "This approach provides Barloworld Equipment with a certified, enterprise-grade solution that reduces implementation risk while supporting long-term operational success. Barloworld gains a proven compliance pathway without disrupting core ERP processes, together with the scalability to accommodate regulatory change and future business growth.",
] as const;

export const gatewayIncludes = [
  "Certified Motheo Compliance Engine",
  "Enterprise Integration Layer",
  "Dynamics 365 ERP Connectivity",
  "CRM Integration",
  "Manual Invoice Capture",
  "Secure API Gateway",
  "Monitoring & Analytics",
  "Audit Logging",
  "Managed Support Services",
] as const;

export const rslAccreditationFlowSteps = [
  {
    title: "Enterprise Users",
    description: "Barloworld teams initiate invoices and compliance transactions.",
  },
  {
    title: "Dynamics 365 ERP & CRM",
    description: "Core enterprise systems generate qualifying fiscal events.",
  },
  {
    title: "Infinity Compliance Gateway",
    description: "Secure middleware orchestrates regulatory communication.",
  },
  {
    title: "Motheo Compliance Engine",
    description: "Certified engine validates and fiscalises each transaction.",
  },
  {
    title: "Revenue Services Lesotho",
    description: "Compliant submissions delivered to the Lekuka platform.",
  },
] as const;

export const rslAccreditationFlow = rslAccreditationFlowSteps.map((step) => step.title);

export const solutionEcosystemFlow = [
  "Barloworld Users",
  "Dynamics 365 ERP",
  "CRM",
  "Infinity Compliance Gateway",
  "Motheo Compliance Engine",
  "Revenue Services Lesotho",
] as const;

/** Compact five-step overview — Users → Dynamics 365/CRM → gateway → Motheo → RSL */
export const solutionOverviewFlow = [
  "Barloworld Users",
  "Dynamics 365 ERP & CRM",
  "Infinity Compliance Gateway",
  "Motheo Compliance Engine",
  "Revenue Services Lesotho",
] as const;

export const solutionFloatingCards = [
  "Security",
  "Monitoring",
  "Audit",
  "Reporting",
  "Analytics",
] as const;

export const solutionComponents = [
  {
    title: "Dynamics 365 ERP",
    description:
      "Financial transactions, billing, customer master data and accounts receivable remain within Microsoft Dynamics 365 as the system of record.",
  },
  {
    title: "CRM Platform",
    description:
      "Customer information, quotations, sales activities and service interactions continue to operate independently while sharing relevant billing information with the Compliance Gateway.",
  },
  {
    title: "Infinity Compliance Gateway",
    description:
      "Acts as the enterprise integration and orchestration platform responsible for: Transaction validation, API orchestration, Security enforcement, Monitoring, Error handling, Compliance reporting",
  },
  {
    title: "Motheo Compliance Engine",
    description:
      "Provides certified fiscalisation services including: Fiscal validation, QR Code generation, Certificate management, Digital signatures, Receipt submission",
  },
  {
    title: "Revenue Services Lesotho",
    description: "Receives validated fiscal transactions through secure APIs.",
  },
] as const;

export const solutionBusinessBenefits = [
  "No disruption to Dynamics 365",
  "Enterprise-grade scalability",
  "Centralised compliance",
  "Secure integration",
  "Future-ready architecture",
  "Improved operational efficiency",
  "Reduced compliance risk",
  "Increased reporting accuracy",
  "Faster audit preparation",
  "Enhanced governance",
] as const;

export const architectureLayers = [
  { label: "Business Users", color: "var(--ibd-blue)" },
  { label: "Business Applications", color: "#5c3d9e" },
  { label: "Integration Services", color: "var(--ibd-green)" },
  { label: "Compliance Platform", color: "#b8960c" },
  { label: "Government Services", color: "var(--ibd-red)" },
] as const;

export const architecturePrinciples = [
  "Loose coupling",
  "API-first integration",
  "Event-driven processing",
  "High availability",
  "Centralised monitoring",
] as const;

export const enterprisePrinciples = [
  { title: "Reliability", description: "Ensuring continuous processing of business transactions." },
  { title: "Security", description: "Protecting enterprise data through secure communication and certificate-based authentication." },
  { title: "Scalability", description: "Supporting future business growth without architectural redesign." },
  { title: "Compliance", description: "Maintaining alignment with Revenue Services Lesotho regulations." },
  { title: "Auditability", description: "Providing complete transaction traceability." },
  { title: "Interoperability", description: "Enabling seamless integration across ERP, CRM and external compliance platforms." },
] as const;

export const dynamicsIntegrationScope = [
  {
    title: "Dynamics 365 Sales & Billing",
    description: "Sales orders and billing documents triggered at invoice post.",
    inline: true,
  },
  {
    title: "Finance & Accounts Receivable",
    description: "Financial accounting invoices, credits and adjustments within D365 Finance.",
    inline: true,
  },
  {
    title: "Customer Service / Field Service Billing",
    description: "Field service transactions routed through the same compliance path.",
    inline: true,
  },
  {
    title: "Customer Master",
    description: "Validated customer and tax reference data for fiscal submission.",
    inline: true,
  },
  {
    title: "Tax Configuration",
    description: "Lesotho VAT codes and fiscal fields aligned to Lekuka requirements.",
    inline: true,
  },
  {
    title: "Document Write-back",
    description:
      "QR code, verification code, device ID, tax data and fiscal data returned to D365 invoice documents.",
    inline: true,
  },
  {
    title: "Manual Invoice Capture",
    description: "Standalone manual invoice entry processed through the same compliance workflow.",
    inline: true,
  },
] as const;

export const erpIntegrationServices = [
  "Secure API communication",
  "Data transformation",
  "Validation",
  "Error handling",
  "Monitoring",
  "Retry mechanisms",
] as const;

export const dynamicsArchitectureFlow = [
  "D365 Finance",
  "D365 Sales",
  "Customer Master",
  "Billing",
  "D365 APIs",
  "Infinity Compliance Gateway",
  "Motheo Engine",
  "Lekuka",
] as const;

export const erpSideCards = ["Monitoring", "Audit", "Retry", "Notifications"] as const;

export const crmIntegrationServices = [
  {
    title: "Customer Synchronisation",
    description: "Keep CRM and ERP customer records aligned for accurate fiscal reporting.",
    inline: true,
  },
  {
    title: "Billing Events",
    description: "Route CRM-generated billing triggers into the unified compliance pathway.",
    inline: true,
  },
  {
    title: "Customer Validation",
    description: "Verify tax and fiscal reference data before regulatory submission.",
    inline: true,
  },
  {
    title: "Sales Transactions",
    description: "Capture qualifying sales activity for consistent compliance processing.",
    inline: true,
  },
  {
    title: "Invoice Requests",
    description: "Initiate compliant invoice creation directly from CRM workflows.",
    inline: true,
  },
  {
    title: "Service Billing",
    description: "Integrate field service and service billing into the same compliance flow.",
    inline: true,
  },
] as const;

export const crmBenefits = [
  {
    title: "Unified reporting",
    description: "Single compliance view across CRM and ERP transactions.",
    inline: true,
  },
  {
    title: "Consistent customer data",
    description: "One authoritative customer profile shared across enterprise systems.",
    inline: true,
  },
  {
    title: "Reduced duplication",
    description: "Eliminate re-keying and duplicate fiscal submissions.",
    inline: true,
  },
  {
    title: "Improved governance",
    description: "Centralised controls, audit trails and exception handling.",
    inline: true,
  },
  {
    title: "End-to-end traceability",
    description: "Full visibility from CRM engagement through to fiscal submission and receipt.",
    inline: true,
  },
  {
    title: "Faster compliance turnaround",
    description: "Automated routing reduces manual handoffs between CRM and finance teams.",
    inline: true,
  },
] as const;

export const crmFlowSteps = [
  {
    title: "CRM",
    description: "Customer engagement, sales and service billing events.",
  },
  {
    title: "Compliance Gateway",
    description: "Routes CRM transactions into the unified compliance pipeline.",
  },
  {
    title: "Dynamics 365 ERP",
    description: "Authoritative financial and master data source of record.",
  },
  {
    title: "Motheo",
    description: "Validates, fiscalises and formats regulatory payloads.",
  },
  {
    title: "Revenue Services Lesotho",
    description: "Receives compliant fiscal submissions to Lekuka.",
  },
] as const;

export const crmFlow = crmFlowSteps.map((step) => step.title);

export const apiServices = [
  {
    title: "Taxpayer verification",
    description: "Confirms taxpayer registration and eligibility with RSL before processing.",
    inline: true,
  },
  {
    title: "Device registration",
    description: "Registers fiscal devices and endpoints authorised to submit to Lekuka.",
    inline: true,
  },
  {
    title: "Device ID configuration",
    description: "Configure and manage fiscal device identifiers per submission endpoint.",
    inline: true,
  },
  {
    title: "Digital certificate management",
    description: "Provisions, renews and applies signing certificates for compliant submission.",
    inline: true,
  },
  {
    title: "Invoice submission",
    description: "Submits sales invoices to RSL in the required fiscal format.",
    inline: true,
  },
  {
    title: "Credit note submission",
    description: "Reports credit adjustments against previously issued invoices.",
    inline: true,
  },
  {
    title: "Debit note submission",
    description: "Reports debit adjustments to correct or amend fiscal records.",
    inline: true,
  },
  {
    title: "Receipt submission",
    description: "Submits customer receipts to RSL for fiscal signing and QR generation.",
    inline: true,
  },
  {
    title: "Payout submission",
    description: "Reports payout transactions required under the Lekuka document set.",
    inline: true,
  },
  {
    title: "Receipt status enquiries",
    description: "Queries acceptance, rejection or pending status of submitted documents.",
    inline: true,
  },
  {
    title: "QR code validation",
    description: "Verifies invoice QR codes against RSL fiscal data for authenticity.",
    inline: true,
  },
  {
    title: "Batch file submission",
    description: "Processes high-volume transaction files in a single controlled upload.",
    inline: true,
  },
  {
    title: "Daily transaction reconciliation",
    description: "Matches submitted transactions against RSL records for day-end compliance.",
    inline: true,
  },
] as const;

export const apiFeatures = [
  {
    title: "REST APIs",
    description: "Standard HTTP endpoints compatible with modern enterprise integration.",
    inline: true,
  },
  {
    title: "JSON payloads",
    description: "Structured message format for straightforward parsing and transformation.",
    inline: true,
  },
  {
    title: "Secure authentication",
    description: "Token and certificate-based controls protect all API traffic.",
    inline: true,
  },
  {
    title: "Certificate management",
    description: "Automated lifecycle handling for device and signing certificates.",
    inline: true,
  },
  {
    title: "Error handling",
    description: "Structured error responses enable rapid diagnosis and correction.",
    inline: true,
  },
  {
    title: "Automatic retries",
    description: "Transient failures are retried with backoff to improve success rates.",
    inline: true,
  },
  {
    title: "Monitoring",
    description: "Real-time visibility into API health, throughput and exception rates.",
    inline: true,
  },
] as const;

export const apiBusinessBenefits = [
  "Standardised integrations",
  "Reduced maintenance",
  "Improved reliability",
  "Simplified upgrades",
] as const;

export const apiGatewayFlow = [
  "Enterprise Applications",
  "API Gateway",
  "Authentication",
  "Transformation",
  "Compliance Services",
  "Revenue Services Lesotho",
] as const;

export const motheoCoreServices = [
  { title: "Validation Engine", description: "Verifies transaction completeness and compliance." },
  { title: "Tax Rules Engine", description: "Applies fiscal rules and tax validations." },
  { title: "QR Code Engine", description: "Generates compliant fiscal QR codes." },
  { title: "Certificate Manager", description: "Handles digital certificates securely." },
  { title: "Audit Logs", description: "Maintains complete transaction history." },
  { title: "Monitoring Engine", description: "Tracks submission status and system health." },
  { title: "Retry Engine", description: "Automatically resubmits failed transactions." },
  { title: "API Connectivity", description: "Manages secure communication with Revenue Services Lesotho APIs." },
] as const;

export const motheoRadialNodes = [
  "Validation",
  "Tax Rules",
  "QR",
  "Certificates",
  "Audit",
  "Monitoring",
  "Retry",
  "API Connectivity",
] as const;

export const motheoEnterpriseBenefits = [
  {
    title: "Certified compliance",
    description: "Revenue Services Lesotho accredited fiscal processing meeting current Lekuka requirements.",
    inline: true,
  },
  {
    title: "Reliable processing",
    description: "High-availability engine ensuring continuous transaction validation and submission.",
    inline: true,
  },
  {
    title: "Enterprise scalability",
    description: "Architecture supporting growth in transaction volumes without redesign.",
    inline: true,
  },
  {
    title: "Future regulatory readiness",
    description: "Platform designed to adapt to evolving RSL compliance requirements.",
    inline: true,
  },
] as const;

export const securityPrinciples = [
  { title: "Confidentiality", description: "Protect sensitive financial and customer information from unauthorised access." },
  { title: "Integrity", description: "Ensure transactions cannot be altered during processing or transmission." },
  { title: "Availability", description: "Provide continuous access to compliance services through resilient infrastructure." },
  { title: "Authentication", description: "Use digital certificates and secure authentication mechanisms to validate system identities." },
  { title: "Authorisation", description: "Role-based access control ensures users only access authorised functionality." },
] as const;

export const securityControls = [
  "TLS 1.2+ encrypted communication",
  "Digital Certificates",
  "Role-Based Access Control (RBAC)",
  "Secure API Authentication",
  "Audit Logging",
  "Activity Monitoring",
  "Secure Configuration Management",
] as const;

export const securityFlow = [
  "Users",
  "Authentication",
  "API Gateway",
  "Compliance Gateway",
  "Encryption Layer",
  "Revenue Services Lesotho",
] as const;

export const securityBadges = ["TLS", "Certificates", "RBAC", "Encryption", "Audit Logs", "Monitoring"] as const;

export const securityBusinessBenefits = [
  {
    title: "Secure enterprise communications",
    description: "Encrypted, authenticated channels between Dynamics 365, CRM, gateway and RSL.",
    inline: true,
  },
  {
    title: "Reduced cyber risk",
    description: "Defence-in-depth controls limit exposure across the platform.",
    inline: true,
  },
  {
    title: "Compliance with regulatory security requirements",
    description: "Meets RSL obligations and Barloworld enterprise security standards.",
    inline: true,
  },
  {
    title: "Improved governance",
    description: "RBAC and monitoring enforce accountability across users and systems.",
    inline: true,
  },
  {
    title: "Stronger audit evidence",
    description: "Complete activity logs support compliance reviews and investigations.",
    inline: true,
  },
] as const;

export const transactionLifecycleSteps = [
  { step: "01", title: "Transaction Created", description: "Invoice, credit note, debit note, receipt or payout generated in Dynamics 365 Finance/Sales or CRM — or captured manually via the gateway." },
  { step: "02", title: "Validation", description: "Business rules and mandatory fields are validated." },
  { step: "03", title: "Transformation", description: "Transaction converted into the Revenue Services Lesotho API format." },
  { step: "04", title: "Fiscal Processing", description: "Transaction processed through the Motheo Compliance Engine." },
  { step: "05", title: "QR Code Generation", description: "Fiscal QR Code automatically generated." },
  { step: "06", title: "Submission", description: "Secure submission to Revenue Services Lesotho." },
  { step: "07", title: "Response Processing", description: "Acceptance or rejection response received and recorded." },
  { step: "08", title: "Audit Archiving", description: "Transaction history stored for reporting and audit purposes." },
] as const;

export const transactionWorkflow = [
  "Create",
  "Validate",
  "Transform",
  "Fiscalise",
  "QR",
  "Submit",
  "Response",
  "Archive",
] as const;

export const onlineProcessing = [
  {
    title: "Real-time validation",
    description: "Checks transaction data against RSL rules before submission.",
    inline: true,
  },
  {
    title: "Immediate submission",
    description: "Sends compliant invoices to Lekuka as soon as they are generated.",
    inline: true,
  },
  {
    title: "Instant acknowledgement",
    description: "Records RSL acceptance or rejection without processing delay.",
    inline: true,
  },
  {
    title: "Live monitoring",
    description: "Tracks submission status and errors in real time during operations.",
    inline: true,
  },
] as const;

export const offlineProcessing = [
  {
    title: "Secure local queue",
    description: "Stores pending transactions locally until connectivity is restored.",
    inline: true,
  },
  {
    title: "Automatic retry",
    description: "Resubmits queued items when the RSL link becomes available again.",
    inline: true,
  },
  {
    title: "Status monitoring",
    description: "Tracks queue depth and retry outcomes until each item clears.",
    inline: true,
  },
  {
    title: "Automatic reconciliation",
    description: "Aligns queued submissions with RSL records once back online.",
    inline: true,
  },
] as const;

export const certificateLifecycleItems = [
  {
    title: "Certificate Request",
    description: "Generate and submit a certificate signing request for RSL registration.",
    inline: true,
  },
  {
    title: "Registration",
    description: "Register credentials with Revenue Services Lesotho for platform access.",
    inline: true,
  },
  {
    title: "Validation",
    description: "Verify identity and organisational details before certificate issuance.",
    inline: true,
  },
  {
    title: "Certificate Issued",
    description: "Receive the approved digital certificate for secure communication.",
    inline: true,
  },
  {
    title: "Deployment",
    description: "Install and activate the certificate across compliance gateway services.",
    inline: true,
  },
  {
    title: "Renewal",
    description: "Renew certificates before expiry to maintain uninterrupted connectivity.",
    inline: true,
  },
  {
    title: "Replacement",
    description: "Replace compromised or outdated certificates without service disruption.",
    inline: true,
  },
  {
    title: "Revocation",
    description: "Revoke invalid certificates and enforce updated trust credentials.",
    inline: true,
  },
] as const;

export const certificateLifecycle = certificateLifecycleItems.map((item) => item.title);

export const certificateServices = [
  {
    title: "CSR Generation",
    description: "Create certificate signing requests aligned to RSL security requirements.",
    inline: true,
  },
  {
    title: "Certificate Installation",
    description: "Deploy issued certificates to gateway and integration endpoints.",
    inline: true,
  },
  {
    title: "Renewal Management",
    description: "Automate renewal workflows ahead of certificate expiry dates.",
    inline: true,
  },
  {
    title: "Expiry Monitoring",
    description: "Proactive alerts before certificates lapse to prevent outages.",
    inline: true,
  },
  {
    title: "Secure Storage",
    description: "Protect private keys and credentials in hardened, access-controlled storage.",
    inline: true,
  },
  {
    title: "Rotation Management",
    description: "Rotate certificates on schedule without interrupting live transactions.",
    inline: true,
  },
] as const;

export const certificateBusinessBenefits = [
  {
    title: "Trusted communications",
    description: "Authenticated, encrypted exchange with Revenue Services Lesotho.",
    inline: true,
  },
  {
    title: "Simplified administration",
    description: "Centralised lifecycle management reduces manual certificate handling.",
    inline: true,
  },
  {
    title: "Reduced operational risk",
    description: "Fewer outages and security incidents from expired or misconfigured certificates.",
    inline: true,
  },
  {
    title: "Continuous compliance",
    description: "Valid credentials maintained throughout the platform operational lifecycle.",
    inline: true,
  },
] as const;

export const qrFeatures = [
  {
    title: "Automatic generation",
    description: "QR codes created automatically when fiscal documents are processed.",
    inline: true,
  },
  {
    title: "Validation",
    description: "Payload verified against RSL requirements before issuance.",
    inline: true,
  },
  {
    title: "Secure encoding",
    description: "Compliant encoding of fiscal data within the QR payload.",
    inline: true,
  },
  {
    title: "Invoice integration",
    description: "QR codes embedded directly on Dynamics 365 invoice documents.",
    inline: true,
  },
  {
    title: "Customer verification",
    description: "Enables customers to verify transaction authenticity via scan.",
    inline: true,
  },
] as const;

export const qrBusinessBenefits = [
  {
    title: "Regulatory compliance",
    description: "Meets Revenue Services Lesotho QR requirements on every fiscal document.",
    inline: true,
  },
  {
    title: "Faster processing",
    description: "Eliminates manual QR creation and reduces invoice turnaround time.",
    inline: true,
  },
  {
    title: "Improved accuracy",
    description: "Automated generation removes human error from fiscal encoding.",
    inline: true,
  },
  {
    title: "Enhanced customer trust",
    description: "Verifiable QR codes give customers confidence in transaction legitimacy.",
    inline: true,
  },
] as const;

export const qrCallouts = [
  "Invoice Number",
  "Fiscal Identifier",
  "Verification URL",
  "QR Payload",
] as const;

export const dashboardModules = [
  {
    title: "Transaction Volume",
    description: "Total fiscal transactions processed in the period.",
    inline: true,
  },
  {
    title: "Accepted Transactions",
    description: "Invoices accepted by Revenue Services Lesotho.",
    inline: true,
  },
  {
    title: "Pending Transactions",
    description: "Submissions awaiting confirmation or in queue.",
    inline: true,
  },
  {
    title: "Rejected Transactions",
    description: "Failed submissions requiring review.",
    inline: true,
  },
  {
    title: "Average Processing Time",
    description: "Gateway receipt to RSL acknowledgement latency.",
    inline: true,
  },
  {
    title: "API Health",
    description: "Endpoint availability and response performance.",
    inline: true,
  },
  {
    title: "Certificate Status",
    description: "Digital signing certificate validity and expiry.",
    inline: true,
  },
  {
    title: "Compliance Score",
    description: "Overall regulatory submission success rate.",
    inline: true,
  },
] as const;

export const dashboardBenefits = [
  {
    title: "Proactive monitoring",
    description: "Detect issues before they impact compliance or operations.",
    inline: true,
  },
  {
    title: "Faster issue resolution",
    description: "Real-time alerts shorten time to diagnose and fix failures.",
    inline: true,
  },
  {
    title: "Improved governance",
    description: "Audit-ready visibility for finance and compliance teams.",
    inline: true,
  },
  {
    title: "Better operational insights",
    description: "Trend data supports capacity planning and performance tuning.",
    inline: true,
  },
  {
    title: "Regulatory confidence",
    description: "Live compliance metrics confirm ongoing RSL adherence.",
    inline: true,
  },
  {
    title: "Reduced manual reporting",
    description: "Automated dashboards replace spreadsheet-based status tracking.",
    inline: true,
  },
  {
    title: "Stakeholder transparency",
    description: "Shared visibility for finance, IT and executive oversight.",
    inline: true,
  },
] as const;

export const dashboardSampleMetrics = [
  "12,480",
  "11,920",
  "124",
  "36",
  "2.4s",
  "99.2%",
  "Valid",
  "98.5%",
] as const;

export const resilienceFeatures = [
  {
    title: "Retry Processing",
    description: "Automatically resubmits failed transactions without manual intervention.",
    inline: true,
  },
  {
    title: "Queue Management",
    description: "Buffers submissions during outages until connectivity is restored.",
    inline: true,
  },
  {
    title: "Error Recovery",
    description: "Isolates and resolves transient failures without data loss.",
    inline: true,
  },
  {
    title: "Failover Support",
    description: "Switches to alternate paths when primary services are unavailable.",
    inline: true,
  },
  {
    title: "Monitoring & Alerts",
    description: "Proactive notification when submission or infrastructure issues arise.",
    inline: true,
  },
  {
    title: "Audit Preservation",
    description: "Protects transaction records throughout recovery for compliance traceability.",
    inline: true,
  },
] as const;

export const recoveryObjectives = [
  {
    title: "Minimise downtime",
    description: "Limit interruption to fiscal processing and day-to-day operations.",
    inline: true,
  },
  {
    title: "Prevent transaction loss",
    description: "No invoice data is discarded during failure or recovery events.",
    inline: true,
  },
  {
    title: "Restore processing quickly",
    description: "Automated recovery returns normal submission flow within defined targets.",
    inline: true,
  },
  {
    title: "Maintain compliance",
    description: "Regulatory obligations continue to be met throughout recovery.",
    inline: true,
  },
] as const;

export const resilienceBusinessBenefits = [
  {
    title: "Increased reliability",
    description: "Consistent submission performance across normal and degraded conditions.",
    inline: true,
  },
  {
    title: "Reduced operational risk",
    description: "Less manual recovery work and fewer compliance gaps from outages.",
    inline: true,
  },
  {
    title: "Continuous compliance",
    description: "Fiscal reporting obligations remain satisfied during disruptions.",
    inline: true,
  },
  {
    title: "Business continuity",
    description: "Core finance operations continue with minimal impact on Barloworld users.",
    inline: true,
  },
] as const;

export const recoveryWorkflow = ["Failure", "Detection", "Retry", "Recovery", "Submission", "Audit"] as const;

export const availableReports = [
  {
    title: "Daily Transaction Summary",
    description: "Volume and status of fiscal transactions processed each day.",
    inline: true,
  },
  {
    title: "Compliance Status Report",
    description: "Current RSL submission compliance across all business units.",
    inline: true,
  },
  {
    title: "Submission Success Rate",
    description: "Share of invoices accepted versus rejected or pending.",
    inline: true,
  },
  {
    title: "Exception Report",
    description: "Failed or anomalous transactions requiring review and action.",
    inline: true,
  },
  {
    title: "Audit Trail Report",
    description: "Complete event history for governance and investigations.",
    inline: true,
  },
  {
    title: "Certificate Health Report",
    description: "Digital signing certificate validity, expiry and renewal status.",
    inline: true,
  },
  {
    title: "API Performance Report",
    description: "Gateway endpoint availability, latency and error rates.",
    inline: true,
  },
] as const;

export const reportingBusinessBenefits = [
  {
    title: "Better decision-making",
    description: "Timely compliance data supports informed operational and financial choices.",
    inline: true,
  },
  {
    title: "Improved governance",
    description: "Scheduled reports strengthen oversight and audit readiness.",
    inline: true,
  },
  {
    title: "Enhanced visibility",
    description: "Finance and IT teams share a single view of reporting performance.",
    inline: true,
  },
  {
    title: "Performance optimisation",
    description: "Trend analysis identifies bottlenecks and improvement opportunities.",
    inline: true,
  },
] as const;

export const implementationPhases = [
  {
    phase: "Phase 1 – Discover",
    summary: "Understand Barloworld's business processes, Dynamics 365 environment, CRM landscape and compliance requirements.",
    activities: ["Project Kick-off", "Stakeholder Workshops", "Requirements Gathering", "Infrastructure Assessment", "Dynamics 365 & CRM Assessment", "Compliance Review"],
    deliverables: ["Project Charter", "Requirements Specification", "Solution Scope", "Risk Register"],
  },
  {
    phase: "Phase 2 – Design",
    summary: "Design the enterprise solution architecture and integration framework.",
    activities: ["Architecture Design", "API Mapping", "Dynamics 365 Integration Design", "Security Design", "Compliance Configuration"],
    deliverables: ["Solution Architecture", "Integration Design", "Technical Specification"],
  },
  {
    phase: "Phase 3 – Build",
    summary: "Configure and develop the Compliance Gateway.",
    activities: ["Gateway Configuration", "API Development", "Dynamics 365 Integration", "CRM Integration", "Compliance Rules", "Certificate Configuration"],
    deliverables: ["Configured Platform", "Integration Services", "Test Environment"],
  },
  {
    phase: "Phase 4 – Validate",
    summary: "Ensure the solution meets all functional and regulatory requirements.",
    activities: ["Functional Testing", "Integration Testing", "User Acceptance Testing", "Performance Testing", "Security Validation"],
    deliverables: ["Test Results", "UAT Sign-off", "Go-Live Approval"],
  },
  {
    phase: "Phase 5 – Deploy",
    summary: "Transition the solution into production.",
    activities: ["Production Deployment", "Data Validation", "Hypercare Support", "Project Closure"],
    deliverables: ["Live Environment", "Support Handover", "Project Closure Report"],
  },
] as const;

export const implementationLifecycle = ["Discover", "Design", "Build", "Validate", "Deploy", "Support"] as const;

export const governanceObjectives = [
  { title: "Strategic Oversight", description: "Ensure alignment with Barloworld's strategic objectives." },
  { title: "Risk Management", description: "Identify, assess and mitigate project risks." },
  { title: "Quality Assurance", description: "Ensure all deliverables meet agreed quality standards." },
  { title: "Stakeholder Engagement", description: "Maintain regular communication with project stakeholders." },
  { title: "Delivery Assurance", description: "Monitor progress against agreed milestones and timelines." },
] as const;

export const governanceStructure = [
  {
    title: "Executive Steering Committee",
    description:
      "Senior Barloworld leadership sets strategic direction, approves major decisions and confirms alignment with enterprise priorities. Convenes at stage gates to review progress, risks, budget and readiness for production.",
  },
  {
    title: "Project Sponsor",
    description:
      "Owns business outcomes and champions the initiative across finance, operations and IT. Secures resources, escalates blockers and provides executive sign-off on deliverables, scope changes and go-live approval.",
  },
  {
    title: "Project Manager",
    description:
      "Plans and coordinates delivery across all workstreams, maintaining schedules, RAID logs and stakeholder communication. Reports status to the sponsor and steering committee and drives issue resolution through to closure.",
  },
  {
    title: "Technical Workstream",
    description:
      "Delivers Dynamics 365 integration, API orchestration, infrastructure provisioning and security configuration for the Compliance Gateway. Ensures technical readiness, integration testing and performance validation before deployment.",
  },
  {
    title: "Compliance Workstream",
    description:
      "Defines RSL fiscal validation rules, certificate lifecycle controls and regulatory test scenarios. Confirms submissions meet accreditation requirements and supports compliance sign-off ahead of production.",
  },
  {
    title: "Business Workstream",
    description:
      "Aligns finance and operations processes, leads user acceptance, training and change management. Coordinates business readiness, hypercare planning and formal acceptance of the solution at go-live.",
  },
] as const;

export const governanceOrgChart = [
  "Executive Steering Committee",
  "Project Sponsor",
  "Project Manager",
  "Technical Team",
  "Compliance Team",
  "Business Team",
] as const;

export const projectTeam = [
  ["Executive Sponsor", "Executive oversight and governance"],
  ["Project Manager", "Project planning and delivery"],
  ["Enterprise Solution Architect", "Overall solution architecture"],
  ["Dynamics 365 Integration Specialist", "Dynamics 365 integration and configuration"],
  ["API Integration Engineer", "API development and orchestration"],
  ["Compliance Consultant", "Revenue Services Lesotho compliance"],
  ["QA & Test Lead", "Testing and quality assurance"],
  ["Training Lead", "User enablement"],
  ["Support Team", "Post-go-live managed services"],
] as const;

export const projectPrinciples = [
  {
    title: "Collaboration",
    description:
      "Joint planning with Barloworld SMEs across business, IT and compliance, with shared ownership of outcomes from discovery through hypercare.",
    inline: true,
  },
  {
    title: "Transparency",
    description:
      "Open reporting on progress, RAID logs, decisions and dependencies via status updates, steering packs and accessible project documentation.",
    inline: true,
  },
  {
    title: "Accountability",
    description:
      "Named owners for every deliverable, milestone and workstream output, with traceable actions, deadlines and clear escalation paths to go-live.",
    inline: true,
  },
  {
    title: "Quality",
    description:
      "Documented standards applied to design, build, testing, UAT and deployment, with formal review gates before each phase is signed off.",
    inline: true,
  },
  {
    title: "Continuous Communication",
    description:
      "Regular status meetings, workshops and steering forums to keep sponsors, stakeholders and delivery teams aligned on priorities and risks.",
    inline: true,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Every design, build and test decision validated against RSL fiscal rules and Barloworld compliance obligations before production sign-off.",
    inline: true,
  },
  {
    title: "Smooth Go-Live Transition",
    description:
      "Controlled cutover planning, rehearsal and hypercare support so Barloworld moves into production with minimal disruption and full operational confidence.",
    inline: true,
  },
] as const;

export const workstreams = [
  {
    title: "Business Workstream",
    items: [
      {
        title: "Requirements",
        description: "Capture fiscal, Dynamics 365 and CRM compliance needs with Barloworld SMEs.",
        inline: true,
      },
      {
        title: "Process Alignment",
        description: "Map invoice and billing flows to gateway submission paths.",
        inline: true,
      },
      {
        title: "User Readiness",
        description: "Confirm finance and operations teams are prepared for go-live.",
        inline: true,
      },
    ],
  },
  {
    title: "Technical Workstream",
    items: [
      {
        title: "Dynamics 365 Integration",
        description: "Configure ERP triggers, mappings and error handling.",
        inline: true,
      },
      {
        title: "API Configuration",
        description: "Set up secure gateway connectivity and orchestration rules.",
        inline: true,
      },
      {
        title: "Infrastructure",
        description: "Provision hosting, certificates and monitoring for production.",
        inline: true,
      },
    ],
  },
  {
    title: "Compliance Workstream",
    items: [
      {
        title: "Fiscal Rules",
        description: "Apply RSL validation and tax rules per Lesotho requirements.",
        inline: true,
      },
      {
        title: "Validation",
        description: "Verify QR codes, certificates and submission payloads pre-production.",
        inline: true,
      },
      {
        title: "Certification",
        description: "Complete accreditation tests and regulatory sign-off.",
        inline: true,
      },
    ],
  },
  {
    title: "Training Workstream",
    items: [
      {
        title: "Knowledge Transfer",
        description: "Hand over solution configuration to Barloworld IT and support teams.",
        inline: true,
      },
      {
        title: "Documentation",
        description: "Deliver runbooks, user guides and operational procedures.",
        inline: true,
      },
      {
        title: "User Training",
        description: "Enable finance and service desk users on day-to-day processing.",
        inline: true,
      },
    ],
  },
] as const;

export const successFactors = [
  {
    title: "Strong stakeholder engagement",
    description: "Active sponsorship and SME participation throughout delivery.",
    inline: true,
  },
  {
    title: "Clear communication",
    description: "Transparent status updates, RAID logs and decision tracking.",
    inline: true,
  },
  {
    title: "Early issue identification",
    description: "Proactive risk monitoring with timely escalation and resolution.",
    inline: true,
  },
  {
    title: "Structured testing",
    description: "Phased SIT, integration and UAT before production cutover.",
    inline: true,
  },
  {
    title: "Controlled deployment",
    description: "Governed go-live with rollback plans and hypercare support.",
    inline: true,
  },
] as const;

export const projectTimeline = [
  ["Project Initiation", "Week 1"],
  ["Discovery & Assessment", "Week 1–2"],
  ["Solution Design", "Week 2–3"],
  ["Configuration & Development", "Week 3–6"],
  ["Integration & Testing", "Week 6–7"],
  ["User Acceptance Testing", "Week 8"],
  ["Training", "Week 8"],
  ["Production Go-Live", "Week 9"],
  ["Hypercare Support", "Week 10"],
] as const;

export const keyMilestones = [
  {
    title: "Project Kick-off",
    description: "Formal start with scope, team, governance and delivery plan confirmed.",
    inline: true,
  },
  {
    title: "Architecture Sign-off",
    description: "Approved solution design for Dynamics 365, CRM, gateway and security integration.",
    inline: true,
  },
  {
    title: "Dynamics 365 Integration Complete",
    description: "ERP connectivity tested with end-to-end fiscal submission flows.",
    inline: true,
  },
  {
    title: "UAT Complete",
    description: "Business users sign off validated processes and exception handling.",
    inline: true,
  },
  {
    title: "Go-Live",
    description: "Production cutover with live RSL fiscal reporting enabled.",
    inline: true,
  },
  {
    title: "Project Closure",
    description: "Handover complete, documentation delivered and hypercare concluded.",
    inline: true,
  },
] as const;

export const testingActivities = [
  { title: "Unit Testing", description: "Individual components." },
  { title: "Integration Testing", description: "Dynamics 365, CRM and Gateway integration." },
  { title: "Functional Testing", description: "Business process validation." },
  { title: "Performance Testing", description: "High transaction volumes." },
  { title: "Security Testing", description: "Authentication and encryption validation." },
  { title: "User Acceptance Testing", description: "Business user verification and sign-off." },
] as const;

export const testingPyramid = [
  {
    title: "UAT",
    description: "Business user verification and formal sign-off before go-live.",
  },
  {
    title: "Performance",
    description: "Validates throughput under expected invoice volumes.",
  },
  {
    title: "Integration",
    description: "Confirms Dynamics 365, CRM and Gateway work together end-to-end.",
  },
  {
    title: "Unit",
    description: "Tests individual components and services in isolation.",
  },
] as const;

export const trainingAudience = [
  { title: "Finance Team", description: "Invoice processing and reporting." },
  { title: "IT Team", description: "System administration." },
  { title: "Compliance Team", description: "Monitoring and exception management." },
  { title: "Management", description: "Reporting and governance." },
] as const;

export const trainingDeliverables = [
  "Training Sessions",
  "Administrator Guides",
  "User Manuals",
  "Standard Operating Procedures",
  "Knowledge Transfer Workshops",
] as const;

export const learningJourney = ["Awareness", "Training", "Practice", "Confidence", "Operational Excellence"] as const;

export const managedServices = [
  { title: "Application Support", description: "Resolution of application-related issues and platform optimisation." },
  { title: "Infrastructure Monitoring", description: "Continuous monitoring of system health, connectivity and performance." },
  { title: "System Uptime Monitoring", description: "24/7 availability monitoring with alerts for platform, API and submission outages." },
  { title: "Compliance Monitoring", description: "Monitoring of Revenue Services Lesotho transaction submissions, exceptions and reporting status." },
  { title: "Regulatory Updates", description: "Implementation of future Revenue Services Lesotho regulatory changes and compliance updates." },
  { title: "Performance Optimisation", description: "Ongoing tuning and optimisation to maintain system efficiency and reliability." },
] as const;

export const supportLifecycle = ["Monitor", "Support", "Improve", "Maintain", "Comply"] as const;

export const serviceLevels = [
  ["Critical", "Complete service outage", "2 Hours", "4 Hours"],
  ["High", "Major business functionality affected", "4 Hours", "1 Business Day"],
  ["Medium", "Partial service impact", "1 Business Day", "2 Business Days"],
  ["Low", "General enquiry or enhancement", "2 Business Days", "Agreed Schedule"],
] as const;

export const escalationLevels = [
  "Service Desk",
  "Technical Support",
  "Compliance Specialists",
  "Engineering Team",
  "Executive Oversight",
] as const;

export const supportChannels = [
  "Dedicated support desk and service request portal",
  "Email: services@ibd.co.ls",
  "Phone: +266 62554433",
  "Critical incidents flagged for immediate triage",
] as const;

export const servicePrinciples = [
  {
    title: "Accountability",
    description:
      "Named owners for every incident from logging through resolution and formal closure.",
    inline: true,
  },
  {
    title: "Responsiveness",
    description:
      "Prioritised response aligned to SLA tiers, with critical outages escalated immediately.",
    inline: true,
  },
  {
    title: "Transparency",
    description:
      "Clear status updates, incident tracking and visibility for Barloworld stakeholders throughout.",
    inline: true,
  },
  {
    title: "Customer Success",
    description:
      "Focus on platform availability, compliance continuity and long-term operational outcomes.",
    inline: true,
  },
  {
    title: "Proactive Monitoring",
    description:
      "Continuous platform, API and system uptime monitoring to detect and resolve issues before business impact.",
    inline: true,
  },
  {
    title: "Regulatory Continuity",
    description:
      "RSL submission performance and compliance uptime maintained as core managed service commitments.",
    inline: true,
  },
  {
    title: "Structured Escalation",
    description:
      "Defined escalation paths ensure critical incidents reach the right expertise without delay.",
    inline: true,
  },
] as const;

export const projectRisks = [
  ["Integration Complexity", "Early architecture validation and integration workshops"],
  ["Data Quality", "Data assessment and validation prior to integration"],
  ["Regulatory Changes", "Ongoing monitoring of RSL requirements"],
  ["User Adoption", "Structured training and change management"],
  ["Connectivity Issues", "Retry mechanisms and offline queue processing"],
  ["Project Delays", "Formal governance and milestone tracking"],
] as const;

export const assessedRiskMatrix = [
  {
    category: "Technical",
    risk: "Integration Complexity",
    severity: "high",
  },
  {
    category: "Data",
    risk: "Data Quality",
    severity: "medium",
  },
  {
    category: "Regulatory",
    risk: "Regulatory Changes",
    severity: "medium",
  },
  {
    category: "Adoption",
    risk: "User Adoption",
    severity: "medium",
  },
  {
    category: "Schedule",
    risk: "Project Delays",
    severity: "medium",
  },
] as const;

export const riskPrinciples = [
  "Early identification",
  "Continuous monitoring",
  "Controlled escalation",
  "Preventative action",
  "Regular stakeholder reporting",
] as const;

export const riskTreatment = ["Identify", "Assess", "Mitigate", "Monitor", "Close"] as const;

export const implementationServicesIncludes = [
  {
    title: "Solution Design",
    description: "End-to-end blueprint for gateway architecture, integrations and compliance flows.",
    inline: true,
  },
  {
    title: "Enterprise Architecture",
    description: "Scalable, secure platform design aligned to Barloworld enterprise standards.",
    inline: true,
  },
  {
    title: "Dynamics 365 ERP Integration",
    description: "Connectivity for invoices, credits and fiscal fields from D365 Finance.",
    inline: true,
  },
  {
    title: "CRM Integration",
    description: "Customer and transaction data routed through the compliance pathway.",
    inline: true,
  },
  {
    title: "API Configuration",
    description: "Lekuka API setup, authentication, routing and error handling.",
    inline: true,
  },
  {
    title: "Security Configuration",
    description: "TLS, RBAC, encryption and audit controls per enterprise policy.",
    inline: true,
  },
  {
    title: "Testing",
    description: "Functional, integration, performance and compliance validation.",
    inline: true,
  },
  {
    title: "User Training",
    description: "Structured sessions for finance, IT and compliance teams.",
    inline: true,
  },
  {
    title: "Go-Live Support",
    description: "Hypercare and issue resolution during production cutover.",
    inline: true,
  },
] as const;

export const implementationServicesExplainer =
  "One-time delivery to design, build, integrate and deploy the Enterprise Compliance Gateway." as const;

export const annualManagedServicesIncludes = [
  {
    title: "Application Support",
    description: "Incident resolution and ongoing platform optimisation.",
    inline: true,
  },
  {
    title: "Compliance Monitoring",
    description: "Tracking of submissions, exceptions and reporting status.",
    inline: true,
  },
  {
    title: "System Uptime Monitoring",
    description: "24/7 platform and API availability monitoring with proactive alerting.",
    inline: true,
  },
  {
    title: "Regulatory Updates",
    description: "Implementation of future Lekuka and regulatory changes.",
    inline: true,
  },
  {
    title: "Performance Optimisation",
    description: "Tuning to maintain system efficiency and reliability.",
    inline: true,
  },
  {
    title: "Preventative Maintenance",
    description: "Proactive health checks and preventative fixes.",
    inline: true,
  },
] as const;

export const annualManagedServicesExplainer =
  "Recurring support to keep the platform compliant, available and continuously optimised." as const;

export const pricingSummary = [
  ["Integration Fees (one-time)", "LSL 248,934.78"],
  ["Managed Compliance Service (Year 1)", "LSL 91,500.00"],
  ["Year 1 Total", "LSL 391,500.00"],
  ["Year 2 onwards — Annual Managed Compliance Service", "LSL 91,500.00 per annum"],
] as const;

export const pricingNotes = [
  "All amounts quoted in LSL (Lesotho Loti) unless otherwise stated.",
  "Year 1 total comprises integration fees and the first year managed compliance service per IBD Estimate EST-000278.",
  "Annual managed compliance service applies from year two onward for application support, compliance monitoring and preventative maintenance.",
  "Volume assumption: ~400 invoices per month (subject to confirmation with BWE).",
  "Commercials remain valid for 190 business days from RFQ submission date.",
] as const;

export const pricingAnnexureFootnote =
  "Detailed pricing per Annexure D: Pricing Requirements (separate submission document)." as const;

export {
  appendices,
  submissionSections,
  primaryContact,
  companyPostalAddress,
  companyProfile,
  bbbeeGapStatement,
  submissionPdfMergeOrder,
} from "@/lib/submission-pack";

export const keyDeliverables = [
  "Configured Compliance Gateway solution",
  "API documentation and integration specifications (Annexure B)",
  "Barloworld Equipment onboarding and configuration setup",
  "Test evidence including sandbox validation",
  "Production deployment and go-live support",
  "Operational support model and Service Level Agreement",
  "User training documentation",
] as const;

export const bfrTraceability = [
  ["SOL-01", "RSL-certified solution", "Accredited Motheo engine + Enterprise Gateway", "10–11"],
  ["SOL-02", "Lekuka compliance", "Lekuka API integration and document types", "15–16"],
  ["SOL-03", "Manual invoice capture", "Gateway manual entry workflow", "2, 13"],
  ["INT-01", "D365 integration", "Dynamics 365 Finance/Sales connectivity", "13"],
  ["INT-02", "CRM integration", "CRM unified compliance pathway", "14"],
  ["INT-03", "REST API", "REST/JSON API framework", "15"],
  ["INT-04", "Transaction types", "Invoices, credits, debits, manual capture", "13, 18"],
  ["CMP-01", "Real-time submission", "Near real-time fiscalisation and submission", "16, 18"],
  ["CMP-02", "Compliance response", "QR, verification code, device ID, tax & fiscal data", "13, 20–21"],
  ["DEV-01", "Device registration", "Fiscal device registration API", "15"],
  ["DEV-02", "Device ID configuration", "Per-endpoint device identifier setup", "15"],
  ["DEV-03", "Tax configuration", "Lesotho VAT and fiscal field mapping", "13"],
  ["MON-01", "Transaction dashboard", "Accepted / Rejected / Pending visibility", "22"],
  ["MON-02", "Audit trail", "End-to-end submission audit logging", "17, 22–24"],
  ["MON-03", "Reporting", "Daily transaction and reconciliation reports", "22, 24"],
  ["RES-01", "Offline queue", "Secure local transaction queue", "19"],
  ["RES-02", "Auto resubmission", "Retry engine and automatic sync", "19, 23"],
  ["IMP-01", "Sandbox environment", "Dedicated test environment deliverable", "25, 30"],
  ["IMP-02", "Integration testing", "End-to-end integration testing support", "30"],
  ["IMP-03", "Go-live support", "Production deployment and hypercare", "29, 31"],
  ["SUP-01", "Managed service", "Managed compliance service model", "31–32"],
  ["SUP-02", "Regulatory updates", "Future Lekuka and regulatory changes", "31"],
  ["SUP-03", "Uptime monitoring", "24/7 system uptime and API monitoring", "31–32"],
] as const;

export const supplierResponses = [
  ["Enterprise Compliance Gateway", "Fully Compliant"],
  ["Dynamics 365 ERP Integration", "Supported"],
  ["Manual Invoice Capture", "Supported"],
  ["CRM Integration", "Supported"],
  ["Revenue Services Lesotho Integration", "Supported"],
  ["Lekuka Document Types (5)", "Invoices · Credits · Debits · Receipts · Payouts"],
  ["API Integration", "Supported"],
  ["Digital Certificates", "Supported"],
  ["QR Code Generation", "Supported"],
  ["Managed Support", "Included"],
  ["User Training", "Included"],
  ["Future Regulatory Updates", "Included within the support model"],
] as const;

export const whyInfinityClosing = [
  {
    title: "Revenue Services Lesotho Accredited",
    description:
      "Certified Electronic Billing Solutions provider with direct RSL accreditation — ensuring fiscal invoices, digital certificates and QR codes meet Lesotho regulatory requirements from day one.",
  },
  {
    title: "Enterprise Integration Expertise",
    description:
      "Proven capability connecting Microsoft Dynamics 365 ERP, CRM and compliance platforms through secure APIs — enabling automated invoice submission without disrupting existing finance and operations workflows.",
  },
  {
    title: "Dynamics 365 Capability",
    description:
      "Deep Microsoft Dynamics 365 integration experience across finance, distribution and equipment operations — supporting high-volume, multi-entity invoicing within Barloworld's enterprise landscape.",
  },
  {
    title: "Managed Services",
    description:
      "Ongoing application support, compliance monitoring and preventative maintenance — keeping the platform stable, current with regulatory changes and aligned to agreed SLA commitments.",
  },
  {
    title: "Future-Ready Platform",
    description:
      "ERP-agnostic gateway architecture preserves Motheo and Lekuka investments — future ERP transitions require connector updates only, not a full compliance rebuild.",
  },
] as const;

export const conclusionBenefits = [
  {
    title: "Certified compliance",
    description:
      "RSL-accredited fiscal submission with digital certificates and QR validation meeting Lesotho regulatory requirements.",
    inline: true,
  },
  {
    title: "Enterprise integration",
    description:
      "Seamless Dynamics 365 ERP and CRM connectivity — eliminating manual re-keying and duplicate data capture across finance and operations.",
    inline: true,
  },
  {
    title: "Secure API connectivity",
    description:
      "TLS-encrypted, authenticated integration between Barloworld systems, the Compliance Gateway and Revenue Services Lesotho.",
    inline: true,
  },
  {
    title: "Real-time monitoring",
    description:
      "Live dashboards and alerts for submission status, failures and compliance exceptions — enabling rapid operational response.",
    inline: true,
  },
  {
    title: "Complete audit traceability",
    description:
      "End-to-end logging of every invoice, certificate and regulatory transaction to support governance, audits and investigations.",
    inline: true,
  },
  {
    title: "Long-term managed support",
    description:
      "Ongoing application support, regulatory updates and SLA-backed service continuity beyond go-live.",
    inline: true,
  },
] as const;

export const closingStatementParagraphs = [
  "We appreciate the opportunity to participate in this procurement process and look forward to partnering with Barloworld Equipment to deliver a successful implementation.",
  "Infinity Business Dynamics is committed to providing the technical expertise, accredited compliance capability and long-term support required to make this initiative a success for Barloworld Equipment.",
  "We welcome the opportunity to discuss our proposal in further detail and to work alongside Barloworld Equipment in building a compliant, resilient and future-ready fiscal reporting platform for Lesotho.",
] as const;

export const closingQuote = "Building Enterprise Compliance Through Intelligent Integration.";

export const barloworldHubUnits = [
  "Sales",
  "Rental",
  "Parts",
  "Workshop",
  "Field Service",
  "Finance",
  "Customers",
] as const;

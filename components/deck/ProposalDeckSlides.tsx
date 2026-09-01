"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { DeckCoverFooter } from "@/components/deck/DeckCoverFooter";
import { DeckCoverTitle } from "@/components/deck/DeckCoverHero";
import { DeckHeaderBrand, SlideEyebrow } from "@/components/deck/SlideEyebrow";
import { ClosingBackdrop } from "@/components/deck/visuals/ClosingBackdrop";
import {
  BadgeRow,
  CertificateCycleDiagram,
  ComplianceMatrix,
  DashboardMockup,
  EscalationDiagram,
  ExecutiveSummaryVisual,
  FloatingCardsFlow,
  GanttChart,
  HorizontalWorkflow,
  HubSpokeDiagram,
  InvoiceQrMockup,
  LayeredArchitectureDiagram,
  LearningJourneyDiagram,
  OnlineOfflineCompare,
  RadialEngineDiagram,
  RiskHeatMap,
  SideCardRow,
  SplitCompareDiagram,
  SupportLifecycleDiagram,
  TestingPyramidDiagram,
  ValueCardsVisual,
  VerticalFlowDiagram,
  WorkstreamConverge,
} from "@/components/deck/visuals/ProposalDiagrams";
import {
  DeckClosingQuote,
  DeckSectionedTableOfContents,
  DeckSignoffTaglineLogo,
} from "@/components/deck/DeckSectionedToc";
import {
  DeckBody,
  DeckBulletList,
  DeckFeatureGrid,
  DeckOutcomeCardList,
  DeckSectionLabel,
  DeckSlideFrame,
  DeckSlideBodySplit,
  DeckTable,
  DeckTitle,
} from "@/components/deck/DeckSlideFrame";
import {
  appendices,
  architectureLayers,
  architecturePrinciples,
  availableReports,
  barloworldBusinessAreas,
  barloworldHubUnits,
  businessChallenges,
  certificateLifecycle,
  certificateServices,
  closingQuote,
  conclusionBenefits,
  coreCapabilities,
  crmBenefits,
  crmFlow,
  crmIntegrationServices,
  enterprisePrinciples,
  escalationLevels,
  executiveLetter,
  gatewayIncludes,
  gatewayCapabilities,
  implementationLifecycle,
  implementationPhases,
  implementationServicesIncludes,
  annualManagedServicesIncludes,
  keyBusinessBenefits,
  keyMilestones,
  learningJourney,
  managedServices,
  motheoCoreServices,
  motheoEnterpriseBenefits,
  motheoRadialNodes,
  onlineProcessing,
  offlineProcessing,
  pricingNotes,
  pricingSummary,
  projectPrinciples,
  projectRisks,
  projectTeam,
  projectTimeline,
  qrCallouts,
  qrFeatures,
  recoveryWorkflow,
  resilienceFeatures,
  riskPrinciples,
  riskTreatment,
  rslAccreditationFlow,
  dynamicsArchitectureFlow,
  dynamicsIntegrationScope,
  erpIntegrationServices,
  erpSideCards,
  serviceLevels,
  servicePrinciples,
  solutionBusinessBenefits,
  solutionComponents,
  solutionEcosystemFlow,
  solutionFloatingCards,
  strategicOutcomes,
  successFactors,
  supplierResponses,
  supportLifecycle,
  testingActivities,
  testingPyramid,
  trainingAudience,
  trainingDeliverables,
  transactionLifecycleSteps,
  transactionWorkflow,
  whyChooseInfinity,
  whyInfinityClosing,
  workstreams,
  apiBusinessBenefits,
  apiFeatures,
  apiGatewayFlow,
  apiServices,
  dashboardModules,
  governanceObjectives,
  governanceOrgChart,
  governanceStructure,
  securityBadges,
  securityControls,
  securityFlow,
  securityPrinciples,
} from "@/lib/deck-proposal-content";
import {
  CORE_SERVICE_AREA_ICONS,
  GOVERNANCE_OBJECTIVE_ICONS,
  MOTHEO_COMPONENT_ICONS,
  STRATEGIC_OUTCOME_ICONS,
  WHY_INFINITY_CARD_ICONS,
  deckIcon,
  mapDeckIcons,
} from "@/components/deck/deck-icons";
import { renderProposalSlidesExtended } from "@/components/deck/ProposalDeckSlidesExtended";

export function renderProposalSlide(index: number) {
  if (index >= 5) {
    return renderProposalSlidesExtended(index);
  }

  switch (index) {
    case 0:
      return (
        <DeckSlideFrame index={0} layout="full" backgroundImage={ASSETS.cover} hideFooter>
          <div className="deck-cover-content">
            <div className="deck-cover-lower">
              <div className="deck-cover-title-stack">
                <DeckHeaderBrand />
                <DeckCoverTitle />
              </div>
              <DeckCoverFooter />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 1:
      return (
        <DeckSlideFrame index={1}>
          <SlideEyebrow index={1} />
          <DeckTitle>Letter of Submission</DeckTitle>
          <div className="deck-executive-letter">
            <div className="deck-executive-letter__body space-y-3 pr-1">
              <div className="deck-type-body">
                <p>
                  <span className="font-medium text-[color:var(--gms-text)]">To:</span>{" "}
                  {executiveLetter.to}
                </p>
                <p className="mt-1">{executiveLetter.toOrg}</p>
                <p>{executiveLetter.toLocation}</p>
              </div>
              <p className="deck-type-body">{executiveLetter.salutation}</p>
              {executiveLetter.paragraphs.slice(0, 5).map((paragraph) => (
                <DeckBody key={paragraph}>{paragraph}</DeckBody>
              ))}
              <p className="deck-type-body text-deck-accent">The implementation includes:</p>
              <DeckBulletList compact items={[...gatewayIncludes]} />
              {executiveLetter.paragraphs.slice(5).map((paragraph) => (
                <DeckBody key={paragraph}>{paragraph}</DeckBody>
              ))}
            </div>
            <div className="deck-executive-letter__signoff pt-4">
              <DeckBody>{executiveLetter.closing}</DeckBody>
              <p className="deck-type-body mt-2 font-semibold">{executiveLetter.signatureName}</p>
              <p className="deck-type-body text-[color:var(--gms-text-muted)]">
                {executiveLetter.signatureRole}
              </p>
              <div className="deck-executive-letter__signature-line">
                <Image
                  src={ASSETS.fusiSignature}
                  alt={`${executiveLetter.signatureName} signature`}
                  width={260}
                  height={90}
                  unoptimized
                  className="deck-executive-letter__signature-img"
                />
              </div>
              <p className="deck-type-body mt-2 font-semibold">{executiveLetter.signatureOrg}</p>
              <DeckSignoffTaglineLogo compact tagline={executiveLetter.signatureTagline} />
            </div>
          </div>
        </DeckSlideFrame>
      );

    case 2:
      return (
        <DeckSlideFrame index={2}>
          <SlideEyebrow index={2} />
          <div className="deck-toc-header flex w-full shrink-0 items-end justify-between">
            <p className="deck-title-lg">Proposal Outline</p>
            <span className="deck-title-lg">Page</span>
          </div>
          <DeckSectionedTableOfContents />
        </DeckSlideFrame>
      );

    case 3:
      return (
        <DeckSlideFrame index={3}>
          <SlideEyebrow index={3} />
          <DeckSlideBodySplit visual={<ExecutiveSummaryVisual />}>
            <DeckTitle highlight="Intelligent Integration">
              Enabling Enterprise Compliance Through
            </DeckTitle>
            <DeckBody>
              Barloworld Equipment operates a sophisticated enterprise environment that supports
              equipment sales, rental operations, aftermarket parts, workshop services and customer
              support across multiple business functions.
            </DeckBody>
            <DeckBody>
              The introduction of Revenue Services Lesotho&apos;s Electronic Billing System (EBS)
              requires qualifying fiscal transactions to be validated, digitally signed and reported
              through the Lekuka platform in accordance with statutory requirements.
            </DeckBody>
            <DeckBody>
              For Barloworld Equipment, compliance must be achieved without disrupting existing Microsoft Dynamics 365
              ERP and CRM business processes.
            </DeckBody>
            <DeckBody>
              Infinity Business Dynamics proposes the Infinity Compliance Gateway, powered by the
              Motheo Compliance Engine, as a secure middleware platform that bridges enterprise
              systems with the Revenue Services Lesotho compliance ecosystem.
            </DeckBody>
            <DeckBody>
              The solution provides an intelligent compliance layer that automates fiscal validation,
              transaction reporting, QR code generation, certificate management and regulatory
              monitoring while preserving operational continuity.
            </DeckBody>
            <DeckSectionLabel>Expected Business Outcomes</DeckSectionLabel>
            <DeckBulletList
              items={[
                "Automated fiscal reporting",
                "Seamless Dynamics 365 ERP and CRM integration",
                "Reduced compliance risk",
                "Improved operational efficiency",
                "Enhanced audit readiness",
                "Future-proof regulatory compliance",
              ]}
            />
            <DeckBody>
              The proposed solution enables Barloworld Equipment to meet statutory obligations while
              maintaining enterprise-grade security, scalability and business continuity.
            </DeckBody>
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    case 4:
      return (
        <DeckSlideFrame index={4}>
          <SlideEyebrow index={4} />
          <DeckTitle highlight="Delivering Value Beyond Compliance">
            Strategic Business Outcomes
          </DeckTitle>
          <DeckBody>
            The implementation of the Infinity Compliance Gateway provides measurable business value
            across finance, operations, governance and customer service.
          </DeckBody>
          <DeckBody>Compliance is only one outcome of the proposed solution.</DeckBody>
          <DeckBody>
            The platform also improves operational efficiency, strengthens governance and provides
            a scalable foundation for future digital transformation initiatives.
          </DeckBody>
          <DeckSlideBodySplit
            visual={
              <DeckOutcomeCardList
                items={strategicOutcomes.map((item) => ({
                  title: item.title,
                  description: item.description,
                }))}
                icons={STRATEGIC_OUTCOME_ICONS}
              />
            }
          >
            <DeckSectionLabel>Key Business Benefits</DeckSectionLabel>
            <DeckBulletList items={[...keyBusinessBenefits]} />
          </DeckSlideBodySplit>
        </DeckSlideFrame>
      );

    default:
      return renderProposalSlidesExtended(index);
  }
}

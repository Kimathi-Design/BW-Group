"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowRight, BadgeCheck, CheckCircle2, Plug, QrCode, Rocket } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { ASSETS } from "@/lib/assets";
import {
  deckIcon,
  SOLUTION_OVERVIEW_FLOW_ICONS,
  TRANSACTION_WORKFLOW_ICONS,
  ONLINE_PROCESSING_ICONS,
  OFFLINE_PROCESSING_ICONS,
  CERTIFICATE_LIFECYCLE_ICONS,
  QR_CALLOUT_ICONS,
  DASHBOARD_MODULE_ICONS,
  AVAILABLE_REPORT_ICONS,
  IMPLEMENTATION_PHASE_ICONS,
  GANTT_PHASE_ICONS,
  WORKSTREAM_ICONS,
  TESTING_PYRAMID_ICONS,
  LEARNING_JOURNEY_ICONS,
  SUPPORT_LIFECYCLE_ICONS,
  ESCALATION_LEVEL_ICONS,
  SLA_PRIORITY_ICONS,
  RISK_TREATMENT_ICONS,
  SECURITY_FLOW_ICONS,
  GOVERNANCE_STRUCTURE_ICONS,
  SUPPLIER_RESPONSE_ICONS,
  MOTHEO_RADIAL_NODE_ICONS,
  SAP_INTEGRATION_FLOW_ICONS,
  SAP_INTEGRATION_SIDE_ICONS,
  KEY_DELIVERABLE_ICONS,
  SOLUTION_ECOSYSTEM_SIDE_ICONS,
  SOLUTION_ECOSYSTEM_STEP_ICONS,
} from "@/components/deck/deck-icons";
import { DeckFeatureGrid, DeckVisualZone } from "@/components/deck/DeckSlideFrame";
import { escalationLevels, governanceStructure, securityBadges, securityFlow, serviceLevels } from "@/lib/deck-content";

function FlowArrow({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <span className="deck-flow-connector" aria-hidden>
      {horizontal ? <ArrowRight strokeWidth={3} /> : <ArrowDown strokeWidth={3} />}
    </span>
  );
}

function FlowStepTile({
  compact,
  children,
}: {
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`deck-flow-step-card__tile${
        compact ? " deck-flow-step-card__tile--compact" : " deck-flow-step-card__tile--default"
      }`}
    >
      {children}
    </div>
  );
}

export function VerticalFlowDiagram({
  items,
  compact = true,
  icons,
  className,
  centerContent = false,
}: {
  items: readonly (string | { title: string; description?: string })[];
  compact?: boolean;
  icons?: readonly LucideIcon[];
  className?: string;
  centerContent?: boolean;
}) {
  const hasDescriptions = items.some(
    (item) => typeof item !== "string" && Boolean(item.description),
  );

  return (
    <div
      className={`deck-architecture-flow flex h-full min-h-0 w-full flex-1 flex-col${
        hasDescriptions ? " deck-architecture-flow--described" : ""
      }${centerContent ? " deck-architecture-flow--centered" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {items.map((item, index) => {
        const title = typeof item === "string" ? item : item.title;
        const description = typeof item === "string" ? undefined : item.description;
        const Icon = icons?.[index] ?? icons?.[icons.length - 1];

        return (
          <div
            key={`${title}-${index}`}
            className={`deck-architecture-flow__step flex min-h-0 flex-1 flex-col items-center${
              hasDescriptions ? " deck-architecture-flow__step--described" : ""
            }`}
          >
            <div className="flex w-full min-h-0 flex-1 items-stretch">
              <div
                className={`deck-flow-step-card gms-card w-full rounded-2xl ${
                  hasDescriptions ? "deck-flow-step-card--described" : "h-full"
                } ${compact ? "p-2.5" : "p-5"}`}
              >
                <div
                  className={`deck-flow-step-card__row ${
                    centerContent || !description ? "items-center" : "items-start"
                  }`}
                >
                  {compact && (
                    <div
                      className={`deck-flow-step-card__number-col${
                        compact ? " deck-flow-step-card__number-col--compact" : ""
                      }`}
                    >
                      <FlowStepTile compact={compact}>
                        <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </FlowStepTile>
                    </div>
                  )}
                  <div
                    className={`min-w-0 flex-1${
                      centerContent ? " deck-flow-step-card__content--centered" : ""
                    }`}
                  >
                    <p
                      className={`deck-flow-step-card__title${
                        compact ? " deck-flow-step-card__title--compact" : ""
                      }`}
                    >
                      {title}
                    </p>
                    {description && (
                      <p className="deck-type-card-body mt-1 text-[color:var(--gms-text-muted)]">
                        {description}
                      </p>
                    )}
                  </div>
                  {Icon && (
                    <div
                      className={`deck-flow-step-card__icon-col${
                        compact ? " deck-flow-step-card__icon-col--compact" : ""
                      }${description ? " self-center" : ""}`}
                    >
                      <FlowStepTile compact={compact}>{deckIcon(Icon, "sm")}</FlowStepTile>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {index < items.length - 1 && <FlowArrow />}
          </div>
        );
      })}
    </div>
  );
}

function TransactionWorkflowStepCard({
  step,
  index,
  icon,
}: {
  step: string;
  index: number;
  icon?: LucideIcon;
}) {
  return (
    <div className="transaction-workflow-visual__card gms-card flex h-full min-h-0 w-full flex-col rounded-2xl">
      <div className="transaction-workflow-visual__number-col flex shrink-0 justify-center">
        <FlowStepTile>
          <span className="transaction-workflow-visual__number deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </FlowStepTile>
      </div>
      <p className="transaction-workflow-visual__label deck-type-card-title min-h-0 flex-1">
        {step}
      </p>
      {icon && (
        <div className="transaction-workflow-visual__icon-col flex shrink-0 justify-center">
          <FlowStepTile>
            {deckIcon(icon, "md")}
          </FlowStepTile>
        </div>
      )}
    </div>
  );
}

export function TransactionWorkflowVisual({
  steps,
  icons = TRANSACTION_WORKFLOW_ICONS,
}: {
  steps: readonly string[];
  icons?: readonly LucideIcon[];
}) {
  const row1 = steps.slice(0, 4);
  const row2 = steps.slice(4, 8);

  return (
    <div className="transaction-workflow-visual flex h-full min-h-0 w-full flex-col">
      <DeckVisualZone label="Transaction Lifecycle" variant="tint" className="flex min-h-0 flex-1 flex-col">
        <div className="transaction-workflow-visual__row flex min-h-0 flex-1 items-stretch">
        {row1.map((step, index) => (
          <Fragment key={step}>
            <div className="flex min-h-0 min-w-0 flex-1">
              <TransactionWorkflowStepCard
                step={step}
                index={index}
                icon={icons[index] ?? icons[icons.length - 1]}
              />
            </div>
            {index < row1.length - 1 && (
              <div className="transaction-workflow-visual__arrow-h flex shrink-0 items-center">
                <FlowArrow horizontal />
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="transaction-workflow-visual__bridge grid shrink-0 grid-cols-4">
        <div aria-hidden />
        <div aria-hidden />
        <div aria-hidden />
        <div className="flex items-center justify-center">
          <FlowArrow />
        </div>
      </div>
      <div className="transaction-workflow-visual__row flex min-h-0 flex-1 items-stretch">
        {row2.map((step, index) => (
          <Fragment key={step}>
            <div className="flex min-h-0 min-w-0 flex-1">
              <TransactionWorkflowStepCard
                step={step}
                index={index + 4}
                icon={icons[index + 4] ?? icons[icons.length - 1]}
              />
            </div>
            {index < row2.length - 1 && (
              <div className="transaction-workflow-visual__arrow-h flex shrink-0 items-center">
                <FlowArrow horizontal />
              </div>
            )}
          </Fragment>
        ))}
      </div>
      </DeckVisualZone>
    </div>
  );
}

export function HorizontalWorkflow({
  steps,
}: {
  steps: readonly string[];
}) {
  return (
    <div className="flex h-full min-h-0 w-full flex-1 items-center overflow-x-auto">
      <div className="flex min-w-full items-center justify-between gap-1 px-1">
        {steps.map((step, index) => (
          <div key={step} className="flex min-w-0 flex-1 items-center">
            <div className="gms-card flex min-w-0 flex-1 flex-col items-center rounded-md px-2 py-3 text-center">
              <span className="text-[10px] font-semibold tracking-[0.12em] text-deck-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[11px] font-semibold leading-tight text-[color:var(--gms-text)]">
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span className="mx-0.5 shrink-0 text-deck-accent" aria-hidden>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LayeredArchitectureDiagram({
  layers,
  icons,
}: {
  layers: readonly { label: string; color: string }[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <DeckVisualZone label="Architecture Layers" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="deck-layered-architecture flex h-full min-h-0 w-full flex-1 flex-col">
      {layers.map((layer, index) => {
        const Icon = icons?.[index] ?? icons?.[icons.length - 1];

        return (
          <div key={layer.label} className="deck-layered-architecture__segment flex min-h-0 flex-1 flex-col">
            <div
              className="deck-layered-architecture__layer flex h-full w-full min-h-0 flex-1 items-center gap-2 rounded-2xl border px-3 py-2 shadow-sm"
              style={{ backgroundColor: layer.color, borderColor: layer.color }}
            >
              <div className="deck-layered-architecture__number-col shrink-0">
                <div className="deck-layered-architecture__tile">
                  <span className="text-[13px] font-semibold tabular-nums tracking-[0.16em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <p className="deck-layered-architecture__label min-w-0 flex-1 text-center text-[15px] font-semibold leading-snug text-white">
                {layer.label}
              </p>
              {Icon && (
                <div className="deck-layered-architecture__icon-col shrink-0">
                  <div className="deck-layered-architecture__tile text-white">
                    {deckIcon(Icon, "sm")}
                  </div>
                </div>
              )}
            </div>
            {index < layers.length - 1 && (
              <div className="deck-layered-architecture__arrow" aria-hidden>
                <FlowArrow />
              </div>
            )}
          </div>
        );
      })}
      </div>
    </DeckVisualZone>
  );
}

function SplitCompareCard({
  item,
  index,
  icon,
  numberTone = "accent",
}: {
  item: string;
  index: number;
  icon?: LucideIcon;
  numberTone?: "accent" | "green";
}) {
  return (
    <div className="deck-split-compare-card deck-flow-step-card gms-card flex min-h-0 flex-1 flex-col justify-center rounded-2xl p-2.5">
      <div className="deck-flow-step-card__row">
        <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact">
          <FlowStepTile compact>
            <span
              className={`deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums${
                numberTone === "green" ? " text-[color:var(--ibd-green)]" : ""
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </FlowStepTile>
        </div>
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">{item}</p>
        {icon && (
          <div className="deck-flow-step-card__icon-col deck-flow-step-card__icon-col--compact">
            <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
          </div>
        )}
      </div>
    </div>
  );
}

export function SplitCompareDiagram({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
  leftIcons,
  rightIcons,
}: {
  leftTitle: string;
  rightTitle: string;
  leftItems: readonly string[];
  rightItems: readonly string[];
  leftIcons?: readonly LucideIcon[];
  rightIcons?: readonly LucideIcon[];
}) {
  return (
    <div className="deck-split-compare grid h-full min-h-0 flex-1 grid-cols-2 gap-4">
      <DeckVisualZone label={leftTitle} variant="tint" className="flex min-h-0 flex-col">
        <div className="deck-split-compare__list flex min-h-0 flex-1 flex-col gap-2">
          {leftItems.map((item, index) => (
            <SplitCompareCard
              key={item}
              item={item}
              index={index}
              icon={leftIcons?.[index] ?? leftIcons?.[leftIcons.length - 1]}
            />
          ))}
        </div>
      </DeckVisualZone>
      <DeckVisualZone label={rightTitle} variant="neutral" className="flex min-h-0 flex-col">
        <div className="deck-split-compare__list flex min-h-0 flex-1 flex-col gap-2">
          {rightItems.map((item, index) => (
            <SplitCompareCard
              key={item}
              item={item}
              index={index}
              icon={rightIcons?.[index] ?? rightIcons?.[rightIcons.length - 1]}
              numberTone="green"
            />
          ))}
        </div>
      </DeckVisualZone>
    </div>
  );
}

const SECURITY_FLOW_DISPLAY = [
  "Users",
  "Authentication",
  "API Gateway",
  "Compliance Gateway",
  "Encryption",
  "Revenue Services",
] as const;

function SecurityFlowGridCard({
  title,
  icon,
}: {
  title: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="security-architecture-visual__card gms-card flex h-full min-h-0 items-center justify-center rounded-xl">
      <div className="security-architecture-visual__card-inner flex min-w-0 items-center justify-center gap-2">
        {icon && (
          <FlowStepTile compact>
            {deckIcon(icon, "xs")}
          </FlowStepTile>
        )}
        <p className="security-architecture-visual__label deck-flow-step-card__title deck-flow-step-card__title--compact min-w-0">
          {title}
        </p>
      </div>
    </div>
  );
}

export function SecurityArchitectureVisual() {
  return (
    <div className="security-architecture-visual flex h-full min-h-0 w-full flex-col">
      <DeckVisualZone label="Defence-in-Depth Flow" variant="tint" className="flex h-full min-h-0 flex-1 flex-col">
        <div className="security-architecture-visual__grid flex min-h-0 flex-1 flex-col gap-1.5">
          <div className="security-architecture-visual__flow grid min-h-0 flex-1 grid-rows-2 gap-1.5">
            {[0, 1].map((rowIndex) => (
              <div key={rowIndex} className="grid min-h-0 grid-cols-3 gap-1.5">
                {securityFlow.slice(rowIndex * 3, rowIndex * 3 + 3).map((step, index) => {
                  const globalIndex = rowIndex * 3 + index;
                  return (
                    <SecurityFlowGridCard
                      key={step}
                      title={SECURITY_FLOW_DISPLAY[globalIndex] ?? step}
                      icon={
                        SECURITY_FLOW_ICONS[globalIndex] ??
                        SECURITY_FLOW_ICONS[SECURITY_FLOW_ICONS.length - 1]
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div
            className="security-architecture-visual__badges-row flex shrink-0 flex-wrap items-center justify-center gap-1"
            aria-label="Security controls"
          >
            {securityBadges.map((badge) => (
              <span key={badge} className="security-architecture-visual__badge-pill">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </DeckVisualZone>
    </div>
  );
}

function GovernanceRoleCard({
  item,
  index,
  icon,
}: {
  item: { title: string; description: string };
  index: number;
  icon: LucideIcon;
}) {
  return (
    <div className="governance-framework-visual__card gms-card flex min-h-0 flex-1 flex-col rounded-2xl">
      <div className="governance-framework-visual__card-head flex items-center">
        <FlowStepTile>
          <span className="governance-framework-visual__number deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </FlowStepTile>
        <p className="governance-framework-visual__title deck-type-card-title min-w-0 flex-1">
          {item.title}
        </p>
        <FlowStepTile>{deckIcon(icon, "sm")}</FlowStepTile>
      </div>
      <p className="governance-framework-visual__description deck-type-card-body">
        {item.description}
      </p>
    </div>
  );
}

export function GovernanceFrameworkVisual() {
  const leadership = governanceStructure.slice(0, 3);
  const workstreams = governanceStructure.slice(3);

  return (
    <div className="governance-framework-visual flex h-full min-h-0 w-full flex-col gap-3 overflow-hidden">
      <DeckVisualZone label="Executive Oversight" variant="tint" className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="governance-framework-visual__list flex min-h-0 flex-1 flex-col gap-2">
          {leadership.map((item, index) => (
            <GovernanceRoleCard
              key={item.title}
              item={item}
              index={index}
              icon={
                GOVERNANCE_STRUCTURE_ICONS[index] ??
                GOVERNANCE_STRUCTURE_ICONS[GOVERNANCE_STRUCTURE_ICONS.length - 1]!
              }
            />
          ))}
        </div>
      </DeckVisualZone>
      <DeckVisualZone label="Delivery Workstreams" variant="neutral" className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="governance-framework-visual__list flex min-h-0 flex-1 flex-col gap-2">
          {workstreams.map((item, index) => (
            <GovernanceRoleCard
              key={item.title}
              item={item}
              index={index + 3}
              icon={
                GOVERNANCE_STRUCTURE_ICONS[index + 3] ??
                GOVERNANCE_STRUCTURE_ICONS[GOVERNANCE_STRUCTURE_ICONS.length - 1]!
              }
            />
          ))}
        </div>
      </DeckVisualZone>
    </div>
  );
}

const HUB_SPOKE_LAYOUTS: Record<number, readonly { x: number; y: number }[]> = {
  7: [
    { x: 50, y: 12 },
    { x: 80, y: 20 },
    { x: 88, y: 44 },
    { x: 70, y: 76 },
    { x: 30, y: 76 },
    { x: 12, y: 44 },
    { x: 20, y: 20 },
  ],
};

function getHubNodePosition(
  index: number,
  total: number,
  hubX: number,
  hubY: number,
  radiusX: number,
  radiusY: number,
) {
  const layout = HUB_SPOKE_LAYOUTS[total];
  if (layout?.[index]) {
    return layout[index]!;
  }

  const angle = ((360 / total) * index - 90) * (Math.PI / 180);
  return {
    x: hubX + radiusX * Math.cos(angle),
    y: hubY + radiusY * Math.sin(angle),
  };
}

export function HubSpokeDiagram({
  center,
  nodes,
  gateway = "Infinity Compliance Gateway",
  icons,
}: {
  center: string;
  nodes: readonly string[];
  gateway?: string;
  icons?: readonly LucideIcon[];
}) {
  const hubX = 50;
  const hubY = 46;
  const gatewayY = 94;

  return (
    <div className="hub-spoke-visual flex h-full min-h-0 w-full flex-1 flex-col gap-2">
      <DeckVisualZone label="Enterprise Integration Hub" variant="tint" className="flex min-h-0 flex-1 flex-col">
        <div className="hub-spoke-visual__diagram relative min-h-0 flex-1">
        <div className="hub-spoke-visual__stage absolute inset-0">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-deck-accent/35"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {nodes.map((node, index) => {
              const { x: nodeX, y: nodeY } = getHubNodePosition(
                index,
                nodes.length,
                hubX,
                hubY,
                32,
                26,
              );

              return (
                <g key={`${node}-line`}>
                  <line
                    x1={hubX}
                    y1={hubY}
                    x2={nodeX}
                    y2={nodeY}
                    stroke="currentColor"
                    strokeWidth="0.35"
                    strokeDasharray="1.2 0.8"
                  />
                  <line
                    x1={nodeX}
                    y1={nodeY}
                    x2={hubX}
                    y2={gatewayY}
                    stroke="currentColor"
                    strokeWidth="0.25"
                    strokeDasharray="0.8 0.6"
                    opacity="0.65"
                  />
                </g>
              );
            })}
          </svg>

          <div
            className="hub-spoke-visual__center gms-card absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center"
          >
            <Image
              src={ASSETS.brands.bweLogo}
              alt=""
              width={1799}
              height={483}
              aria-hidden
              className="hub-spoke-visual__center-logo relative z-10 shrink-0 object-contain"
            />
            <p className="hub-spoke-visual__center-label relative z-10">{center}</p>
          </div>

          {nodes.map((node, index) => {
            const { x: nodeX, y: nodeY } = getHubNodePosition(
              index,
              nodes.length,
              hubX,
              hubY,
              32,
              26,
            );
            const Icon = icons?.[index] ?? icons?.[icons.length - 1];

            return (
              <div
                key={node}
                className="hub-spoke-visual__node absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${nodeX}%`, top: `${nodeY}%` }}
              >
                <div className="hub-spoke-visual__card gms-card rounded-2xl">
                  <div className="hub-spoke-visual__card-head">
                    <FlowStepTile compact>
                      <span className="hub-spoke-visual__number deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </FlowStepTile>
                    {Icon && (
                      <FlowStepTile compact>{deckIcon(Icon, "sm")}</FlowStepTile>
                    )}
                  </div>
                  <p className="hub-spoke-visual__label">{node}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </DeckVisualZone>

      <div className="hub-spoke-visual__gateway gms-card flex shrink-0 items-center justify-center gap-3 rounded-2xl">
        <Image
          src={ASSETS.brands.ibdFavicon}
          alt=""
          width={16}
          height={16}
          aria-hidden
          className="h-5 w-5 shrink-0 object-contain"
        />
        <p className="hub-spoke-visual__gateway-label">{gateway}</p>
        <Image
          src={ASSETS.brands.motheoLogo}
          alt=""
          width={3770}
          height={3290}
          aria-hidden
          className="h-4 w-auto shrink-0 object-contain"
        />
      </div>
    </div>
  );
}

/** Compact Motheo strip — hub left (2 rows tall), 4×2 service grid right */
export function MotheoEngineStripVisual({
  nodes,
  icons = MOTHEO_RADIAL_NODE_ICONS,
}: {
  nodes: readonly string[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <DeckVisualZone label="Motheo Core Services" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="motheo-engine-strip flex h-full min-h-0 w-full items-stretch gap-1.5">
      <div className="motheo-engine-strip__hub flex shrink-0 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center">
        <Image
          src={ASSETS.brands.motheoLogo}
          alt=""
          width={3770}
          height={3290}
          aria-hidden
          className="motheo-engine-strip__hub-logo h-8 w-auto shrink-0 object-contain"
        />
        <span className="text-[13px] font-semibold leading-tight text-white">Motheo</span>
        <span className="text-[13px] font-semibold leading-tight text-white">Engine</span>
      </div>
      <div className="motheo-engine-strip__grid grid min-h-0 min-w-0 flex-1 grid-cols-4 grid-rows-2 gap-1.5">
        {nodes.map((node, index) => (
          <div
            key={node}
            className="motheo-engine-strip__card gms-card flex min-h-0 min-w-0 items-center justify-center gap-1.5 rounded-xl px-2 py-1.5"
          >
            <FlowStepTile compact>
              {deckIcon(icons[index] ?? icons[icons.length - 1]!, "xs")}
            </FlowStepTile>
            <span className="deck-type-body-compact shrink-0 leading-tight text-center">{node}</span>
          </div>
        ))}
      </div>
      </div>
    </DeckVisualZone>
  );
}

/** @deprecated Use MotheoEngineStripVisual */
export function MotheoEngineHorizontalVisual({
  center: _center,
  nodes,
  icons,
}: {
  center: string;
  nodes: readonly string[];
  icons?: readonly LucideIcon[];
}) {
  return <MotheoEngineStripVisual nodes={nodes} icons={icons} />;
}

export function RadialEngineDiagram({
  center,
  nodes,
}: {
  center: string;
  nodes: readonly string[];
}) {
  const angleStep = 360 / nodes.length;
  return (
    <div className="relative mx-auto flex h-full min-h-0 w-full max-w-md flex-1 items-center justify-center">
      <div className="relative flex h-56 w-56 items-center justify-center">
        <div className="absolute inset-8 rounded-full border border-dashed border-[color:var(--gms-border)]" />
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-deck-accent p-2 text-center text-[10px] font-bold leading-tight text-white">
          {center}
        </div>
        {nodes.map((node, index) => {
          const angle = (angleStep * index - 90) * (Math.PI / 180);
          const radius = 108;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={node}
              className="gms-card absolute flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md px-1 text-center text-[9px] font-semibold leading-tight text-[color:var(--gms-text)]"
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            >
              {node}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EcosystemFlowCard({
  title,
  index,
  icon,
}: {
  title: string;
  index: number;
  icon?: LucideIcon;
}) {
  return (
    <div className="deck-flow-step-card gms-card flex h-full w-full flex-col justify-center rounded-2xl px-2.5 py-2">
      <div className="deck-flow-step-card__row gap-2">
        <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact">
          <FlowStepTile compact>
            <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
              {String(index).padStart(2, "0")}
            </span>
          </FlowStepTile>
        </div>
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact min-w-0 flex-1">
          {title}
        </p>
        {icon && (
          <div className="deck-flow-step-card__icon-col deck-flow-step-card__icon-col--compact">
            <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
          </div>
        )}
      </div>
    </div>
  );
}

function EcosystemFlowSegment({
  children,
  showArrow = false,
}: {
  children: ReactNode;
  showArrow?: boolean;
}) {
  return (
    <div className="solution-ecosystem-visual__segment flex min-h-0 flex-1 flex-col">
      <div className="flex w-full min-h-0 flex-1 items-stretch">{children}</div>
      {showArrow && (
        <div className="solution-ecosystem-visual__arrow" aria-hidden>
          <FlowArrow />
        </div>
      )}
    </div>
  );
}

/** Enterprise ecosystem flow per PAGE 11 — users → Dynamics 365/CRM branch → gateway → Motheo → RSL + side cards */
export function SolutionEcosystemVisual({
  sideCards,
}: {
  sideCards: readonly string[];
}) {
  const steps = [
    { title: "Barloworld Users", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[0] },
    { title: "Dynamics 365 ERP", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[1] },
    { title: "CRM", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[2] },
    { title: "Infinity Compliance Gateway", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[3] },
    { title: "Motheo Compliance Engine", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[4] },
    { title: "Revenue Services Lesotho", icon: SOLUTION_ECOSYSTEM_STEP_ICONS[5] },
  ] as const;

  return (
    <div className="solution-ecosystem-visual flex h-full min-h-0 flex-1 flex-col gap-3">
      <div className="solution-ecosystem-visual grid min-h-0 flex-1 grid-cols-[1fr_5.75rem] gap-3">
        <DeckVisualZone label="Enterprise Compliance Flow" variant="tint" className="flex min-h-0 flex-1 flex-col">
          <div className="solution-ecosystem-visual__flow flex h-full min-h-0 flex-1 flex-col">
            <EcosystemFlowSegment showArrow>
              <EcosystemFlowCard title={steps[0].title} index={1} icon={steps[0].icon} />
            </EcosystemFlowSegment>
            <EcosystemFlowSegment showArrow>
              <div className="solution-ecosystem-visual__branch grid h-full w-full min-h-0 grid-cols-2 gap-2">
                <EcosystemFlowCard title={steps[1].title} index={2} icon={steps[1].icon} />
                <EcosystemFlowCard title={steps[2].title} index={3} icon={steps[2].icon} />
              </div>
            </EcosystemFlowSegment>
            <EcosystemFlowSegment showArrow>
              <EcosystemFlowCard title={steps[3].title} index={4} icon={steps[3].icon} />
            </EcosystemFlowSegment>
            <EcosystemFlowSegment showArrow>
              <EcosystemFlowCard title={steps[4].title} index={5} icon={steps[4].icon} />
            </EcosystemFlowSegment>
            <EcosystemFlowSegment>
              <EcosystemFlowCard title={steps[5].title} index={6} icon={steps[5].icon} />
            </EcosystemFlowSegment>
          </div>
        </DeckVisualZone>
        <DeckVisualZone label="Platform Capabilities" variant="neutral" className="flex min-h-0 flex-col">
          <div className="solution-ecosystem-visual__side-cards flex h-full min-h-0 flex-col gap-2">
            {sideCards.map((card, index) => (
              <div
                key={card}
                className="gms-card flex min-h-0 flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-1.5 py-2 text-center"
              >
                <FlowStepTile compact>
                  {deckIcon(
                    SOLUTION_ECOSYSTEM_SIDE_ICONS[index] ??
                      SOLUTION_ECOSYSTEM_SIDE_ICONS[SOLUTION_ECOSYSTEM_SIDE_ICONS.length - 1]!,
                    "sm",
                  )}
                </FlowStepTile>
                <span className="text-[11px] font-semibold leading-tight tracking-[0.06em] text-deck-accent uppercase">
                  {card}
                </span>
              </div>
            ))}
          </div>
        </DeckVisualZone>
      </div>
    </div>
  );
}

/** @deprecated Import DeckVisualZone from DeckSlideFrame */
export { DeckVisualZone } from "@/components/deck/DeckSlideFrame";

function ApiGatewayGridCard({
  title,
  icon,
}: {
  title: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="api-gateway-grid-visual__card gms-card flex h-full min-h-0 w-full flex-col rounded-2xl">
      <p className="api-gateway-grid-visual__label deck-type-card-title min-h-0 flex-1">{title}</p>
      {icon && (
        <div className="api-gateway-grid-visual__icon-col flex shrink-0 justify-center">
          <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
        </div>
      )}
    </div>
  );
}

/** API gateway flow — 2 rows of 3 vertical step cards */
export function ApiGatewayGridVisual({
  label,
  items,
  icons,
}: {
  label: string;
  items: readonly string[];
  icons?: readonly LucideIcon[];
}) {
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3, 6);

  return (
    <DeckVisualZone label={label} variant="tint" className="flex h-full min-h-0 flex-1 flex-col">
      <div className="api-gateway-grid-visual grid min-h-0 flex-1 grid-rows-2 gap-2">
        {[row1, row2].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="api-gateway-grid-visual__row grid min-h-0 grid-cols-3 gap-2"
          >
            {row.map((title, index) => {
              const globalIndex = rowIndex * 3 + index;
              return (
                <ApiGatewayGridCard
                  key={title}
                  title={title}
                  icon={icons?.[globalIndex] ?? icons?.[icons.length - 1]}
                />
              );
            })}
          </div>
        ))}
      </div>
    </DeckVisualZone>
  );
}

/** Vertical flow wrapped in a labelled zone panel */
export function ZoneFlowVisual({
  label,
  items,
  icons,
  variant = "tint",
  compact = true,
  centerContent = false,
  className,
}: {
  label: string;
  items: readonly (string | { title: string; description?: string })[];
  icons?: readonly LucideIcon[];
  variant?: "tint" | "neutral" | "plain";
  compact?: boolean;
  centerContent?: boolean;
  className?: string;
}) {
  return (
    <DeckVisualZone label={label} variant={variant} className="flex h-full min-h-0 flex-1 flex-col">
      <VerticalFlowDiagram
        items={items}
        icons={icons}
        compact={compact}
        centerContent={centerContent}
        className={className}
      />
    </DeckVisualZone>
  );
}

/** Compact solution overview — single-column flow + bottom capability strip */
export function SolutionOverviewVisual({
  flow,
  sideCards,
}: {
  flow: readonly string[];
  sideCards: readonly string[];
}) {
  return (
    <div className="solution-overview-visual flex h-full min-h-0 flex-1 flex-col gap-2">
      <DeckVisualZone
        label="Enterprise Compliance Flow"
        variant="tint"
        className="solution-overview-visual__flow-zone min-h-0 flex-1"
      >
        <div className="solution-overview-visual__flow flex min-h-0 flex-1 flex-col overflow-hidden">
          <VerticalFlowDiagram
            items={flow}
            icons={SOLUTION_OVERVIEW_FLOW_ICONS}
            compact
            centerContent
          />
        </div>
      </DeckVisualZone>
      <DeckVisualZone label="Platform Capabilities" variant="neutral" className="shrink-0">
        <div className="solution-overview-visual__side grid shrink-0 grid-cols-5 gap-2">
          {sideCards.map((card, index) => (
            <div
              key={card}
              className="deck-flow-step-card gms-card flex h-full w-full flex-col justify-center rounded-2xl px-2 py-2"
            >
              <div className="deck-flow-step-card__row items-center gap-1.5">
                <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact shrink-0">
                  <FlowStepTile compact>
                    {deckIcon(
                      SOLUTION_ECOSYSTEM_SIDE_ICONS[index] ??
                        SOLUTION_ECOSYSTEM_SIDE_ICONS[SOLUTION_ECOSYSTEM_SIDE_ICONS.length - 1]!,
                      "sm",
                    )}
                  </FlowStepTile>
                </div>
                <p className="solution-overview-visual__side-label deck-flow-step-card__title deck-flow-step-card__title--compact min-w-0 flex-1">
                  {card}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DeckVisualZone>
    </div>
  );
}

/** Dynamics 365 integration — layered architecture (source → API → compliance → capabilities) */
function DynamicsModuleTile({
  title,
  index,
  icon,
}: {
  title: string;
  index: number;
  icon: LucideIcon;
}) {
  return (
    <div className="dynamics-integration-visual__module deck-flow-step-card gms-card flex min-h-0 flex-col justify-center rounded-2xl px-2.5 py-2.5">
      <div className="deck-flow-step-card__row items-center gap-2">
        <div className="deck-flow-step-card__number-col deck-flow-step-card__number-col--compact shrink-0">
          <FlowStepTile compact>{deckIcon(icon, "md")}</FlowStepTile>
        </div>
        <div className="min-w-0 flex-1">
          <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
          <p className="deck-flow-step-card__title deck-flow-step-card__title--compact mt-0.5">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicsComplianceStep({
  title,
  index,
  icon,
  emphasis = false,
}: {
  title: string;
  index: number;
  icon: LucideIcon;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`dynamics-integration-visual__compliance-step deck-flow-step-card gms-card flex min-h-0 min-w-0 flex-1 flex-col justify-center rounded-2xl px-3 py-3 ${
        emphasis ? "dynamics-integration-visual__compliance-step--emphasis" : ""
      }`.trim()}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <FlowStepTile compact>{deckIcon(icon, "md")}</FlowStepTile>
        <span className="deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        <p className="deck-flow-step-card__title deck-flow-step-card__title--compact">
          {title}
        </p>
      </div>
    </div>
  );
}

export function SapIntegrationVisual({
  flow,
  sideCards,
}: {
  flow: readonly string[];
  sideCards: readonly string[];
}) {
  const d365Modules = flow.slice(0, 4);
  const apiLayer = flow[4] ?? "D365 APIs";
  const compliancePath = flow.slice(5, 8);

  return (
    <div className="dynamics-integration-visual flex h-full min-h-0 flex-1 flex-col gap-3">
      <DeckVisualZone label="Microsoft Dynamics 365" variant="tint">
        <div className="dynamics-integration-visual__module-grid">
          {d365Modules.map((title, index) => (
            <DynamicsModuleTile
              key={title}
              title={title}
              index={index + 1}
              icon={
                SAP_INTEGRATION_FLOW_ICONS[index] ??
                  SAP_INTEGRATION_FLOW_ICONS[SAP_INTEGRATION_FLOW_ICONS.length - 1]!
              }
            />
          ))}
        </div>
      </DeckVisualZone>

      <div className="dynamics-integration-visual__connector" aria-hidden>
        <span className="dynamics-integration-visual__connector-line" />
        <div className="dynamics-integration-visual__connector-pill gms-card inline-flex items-center gap-2 rounded-full px-3 py-2">
          <FlowStepTile compact>{deckIcon(SAP_INTEGRATION_FLOW_ICONS[4] ?? Plug, "md")}</FlowStepTile>
          <span className="deck-flow-step-card__title deck-flow-step-card__title--compact dynamics-integration-visual__connector-label">
            {apiLayer}
          </span>
        </div>
        <span className="dynamics-integration-visual__connector-line" />
        <ArrowDown className="dynamics-integration-visual__connector-arrow h-5 w-5 shrink-0 text-deck-accent" strokeWidth={2.5} />
      </div>

      <DeckVisualZone label="Compliance Pathway" variant="neutral" className="min-h-0 flex-1">
        <div className="dynamics-integration-visual__compliance-row flex min-h-0 flex-1 items-stretch gap-2">
          {compliancePath.map((title, index) => (
            <Fragment key={title}>
              <DynamicsComplianceStep
                title={title}
                index={index + 6}
                icon={
                  SAP_INTEGRATION_FLOW_ICONS[index + 5] ??
                    SAP_INTEGRATION_FLOW_ICONS[SAP_INTEGRATION_FLOW_ICONS.length - 1]!
                }
                emphasis={index === 0}
              />
              {index < compliancePath.length - 1 && (
                <span className="dynamics-integration-visual__compliance-arrow flex shrink-0 items-center text-deck-accent">
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </DeckVisualZone>

      <DeckVisualZone label="Platform Capabilities" variant="neutral" className="shrink-0">
        <div className="dynamics-integration-visual__capabilities grid shrink-0 grid-cols-4 gap-2">
          {sideCards.map((card, index) => (
            <div
              key={card}
              className="dynamics-integration-visual__capability deck-flow-step-card gms-card flex flex-col items-center justify-center gap-2 rounded-2xl px-2.5 py-2.5 text-center"
            >
              <FlowStepTile compact>
                {deckIcon(
                  SAP_INTEGRATION_SIDE_ICONS[index] ??
                    SAP_INTEGRATION_SIDE_ICONS[SAP_INTEGRATION_SIDE_ICONS.length - 1]!,
                  "md",
                )}
              </FlowStepTile>
              <span className="dynamics-integration-visual__capability-label deck-flow-step-card__title deck-flow-step-card__title--compact">
                {card}
              </span>
            </div>
          ))}
        </div>
      </DeckVisualZone>
    </div>
  );
}

/** @deprecated Use SolutionEcosystemVisual */
export function FloatingCardsFlow({
  flow,
  sideCards,
}: {
  flow: readonly string[];
  sideCards: readonly string[];
}) {
  return <SolutionEcosystemVisual sideCards={sideCards} />;
}

export function BadgeRow({ badges }: { badges: readonly string[] }) {
  return (
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-[color:var(--gms-border)] bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.08em] text-deck-accent uppercase"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export function SideCardRow({ cards }: { cards: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {cards.map((card) => (
        <div key={card} className="gms-card rounded-md px-3 py-2 text-[12px] font-semibold text-deck-accent">
          {card}
        </div>
      ))}
    </div>
  );
}

export function OnlineOfflineCompare({
  onlineItems,
  offlineItems,
}: {
  onlineItems: readonly string[];
  offlineItems: readonly string[];
}) {
  return (
    <SplitCompareDiagram
      leftTitle="Online"
      rightTitle="Offline"
      leftItems={onlineItems}
      rightItems={offlineItems}
      leftIcons={ONLINE_PROCESSING_ICONS}
      rightIcons={OFFLINE_PROCESSING_ICONS}
    />
  );
}

export function CertificateCycleDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <TransactionWorkflowVisual steps={steps} icons={CERTIFICATE_LIFECYCLE_ICONS} />
  );
}

function splitPhaseItems(items: readonly string[]) {
  if (items.length <= 1) {
    return [items.join(" · ")];
  }
  if (items.length <= 3) {
    return [items.join(" · ")];
  }
  if (items.length === 4) {
    return [
      items.slice(0, 3).join(" · "),
      items.slice(3).join(" · "),
    ];
  }
  const perLine = Math.ceil(items.length / 2);
  const lines: string[] = [];
  for (let i = 0; i < items.length; i += perLine) {
    lines.push(items.slice(i, i + perLine).join(" · "));
  }
  return lines;
}

function ImplementationPhaseList({
  label,
  items,
  variant,
}: {
  label: string;
  items: readonly string[];
  variant: "activities" | "deliverables";
}) {
  const lines = splitPhaseItems(items);

  return (
    <div
      className={`implementation-phases-visual__list implementation-phases-visual__list--${variant} min-w-0`}
    >
      <p className="implementation-phases-visual__list-label">
        {label}
      </p>
      <div className="implementation-phases-visual__items">
        {lines.map((line) => (
          <p key={line} className="implementation-phases-visual__items-line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ImplementationPhasesVisual({
  phases,
}: {
  phases: readonly {
    phase: string;
    summary: string;
    activities: readonly string[];
    deliverables: readonly string[];
  }[];
}) {
  return (
    <DeckVisualZone label="Implementation Phases" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="implementation-phases-visual flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="implementation-phases-visual__grid grid min-h-0 flex-1">
        {phases.map((phase, index) => (
          <div
            key={phase.phase}
            className="implementation-phases-visual__card gms-card flex h-full min-h-0 flex-col"
          >
            <div className="implementation-phases-visual__card-head flex min-w-0 items-center">
              <FlowStepTile compact>
                {deckIcon(
                  IMPLEMENTATION_PHASE_ICONS[index] ??
                    IMPLEMENTATION_PHASE_ICONS[IMPLEMENTATION_PHASE_ICONS.length - 1]!,
                  "sm",
                )}
              </FlowStepTile>
              <p className="implementation-phases-visual__phase-title min-w-0 flex-1">
                {phase.phase}
              </p>
            </div>
            <p className="implementation-phases-visual__summary">
              {phase.summary}
            </p>
            <div className="implementation-phases-visual__details">
              <ImplementationPhaseList variant="activities" label="Activities" items={phase.activities} />
              <div className="implementation-phases-visual__divider" aria-hidden />
              <ImplementationPhaseList variant="deliverables" label="Deliverables" items={phase.deliverables} />
            </div>
          </div>
        ))}
      </div>
      </div>
    </DeckVisualZone>
  );
}

function DashboardModuleCard({
  title,
  icon,
  value,
}: {
  title: string;
  icon?: LucideIcon;
  value?: string;
}) {
  return (
    <div className="dashboard-mockup-visual__cell gms-card flex min-h-0 min-w-0 flex-col rounded-xl">
      {icon && (
        <div className="dashboard-mockup-visual__cell-icon flex shrink-0 justify-center">
          <FlowStepTile>{deckIcon(icon, "sm")}</FlowStepTile>
        </div>
      )}
      <p className="dashboard-mockup-visual__cell-label deck-type-card-title min-h-0">{title}</p>
      {value && (
        <span className="dashboard-mockup-visual__cell-metric tabular-nums">{value}</span>
      )}
    </div>
  );
}

export function DashboardMockup({
  modules,
  values,
  icons,
  variant = "modules",
}: {
  modules: readonly (string | { title: string })[];
  values?: readonly string[];
  icons?: readonly LucideIcon[];
  variant?: "modules" | "reports";
}) {
  const resolvedIcons =
    icons ??
    (variant === "reports" ? AVAILABLE_REPORT_ICONS : DASHBOARD_MODULE_ICONS);
  const isReports = variant === "reports";

  return (
    <DeckVisualZone
      label={isReports ? "Compliance Reports" : "Operations Dashboard"}
      variant="tint"
      className="flex h-full min-h-0 w-full flex-1 flex-col"
    >
      <div className="dashboard-mockup-visual flex h-full min-h-0 w-full items-stretch gap-1.5">
      <div className="dashboard-mockup-visual__hub flex shrink-0 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center">
        <Image
          src={ASSETS.brands.motheoLogo}
          alt=""
          width={3770}
          height={3290}
          aria-hidden
          className="dashboard-mockup-visual__hub-logo h-8 w-auto shrink-0 object-contain"
        />
        <span className="dashboard-mockup-visual__hub-label text-white">
          {isReports ? "Compliance" : "Operations"}
        </span>
        <span className="dashboard-mockup-visual__hub-label text-white">
          {isReports ? "Reports" : "Dashboard"}
        </span>
      </div>
      <div
        className={`dashboard-mockup-visual__grid grid min-h-0 min-w-0 flex-1 gap-2 ${
          modules.length > 4 ? "grid-cols-4 grid-rows-2" : "grid-cols-2 grid-rows-2"
        }`}
      >
        {modules.map((mod, index) => {
          const title = typeof mod === "string" ? mod : mod.title;

          return (
            <DashboardModuleCard
              key={title}
              title={title}
              icon={resolvedIcons[index] ?? resolvedIcons[resolvedIcons.length - 1]}
              value={values?.[index]}
            />
          );
        })}
      </div>
      </div>
    </DeckVisualZone>
  );
}

export function TestingPyramidDiagram({
  levels,
}: {
  levels: readonly ({ title: string; description?: string } | string)[];
}) {
  return (
    <DeckVisualZone label="Testing Pyramid" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="testing-pyramid-visual flex h-full min-h-0 w-full flex-1 flex-col">
      {levels.map((level, index) => {
        const title = typeof level === "string" ? level : level.title;
        const description = typeof level === "string" ? undefined : level.description;
        const pyramidWidth = 40 + (levels.length - index) * 14;

        return (
          <Fragment key={title}>
            <div
              className="testing-pyramid-visual__card gms-card flex min-h-0 flex-1 items-center rounded-2xl"
              style={{ width: `${pyramidWidth}%` }}
            >
              <div className="testing-pyramid-visual__card-inner flex w-full items-center">
                <FlowStepTile compact>
                  <span className="testing-pyramid-visual__number tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </FlowStepTile>
                <div className="testing-pyramid-visual__content min-w-0 flex-1">
                  <p className="testing-pyramid-visual__label deck-type-card-title">{title}</p>
                  {description && (
                    <p className="testing-pyramid-visual__description deck-type-card-body mt-1">
                      {description}
                    </p>
                  )}
                </div>
                <FlowStepTile compact>
                  {deckIcon(
                    TESTING_PYRAMID_ICONS[index] ??
                      TESTING_PYRAMID_ICONS[TESTING_PYRAMID_ICONS.length - 1]!,
                    "sm",
                  )}
                </FlowStepTile>
              </div>
            </div>
            {index < levels.length - 1 && (
              <div className="testing-pyramid-visual__arrow shrink-0">
                <FlowArrow />
              </div>
            )}
          </Fragment>
        );
      })}
      </div>
    </DeckVisualZone>
  );
}

const GANTT_TOTAL_WEEKS = 10;

const GANTT_BAR_COLORS = [
  "var(--gms-accent)",
  "#5c3d9e",
  "var(--ibd-green)",
  "#7a5c14",
  "#34216b",
  "#4cbb17",
  "#5c3d9e",
  "var(--ibd-green)",
  "var(--gms-accent)",
] as const;

function parseWeekRange(duration: string): { start: number; end: number } {
  const match = duration.match(/Week\s*(\d+)(?:\s*[–-]\s*(\d+))?/i);
  if (!match) {
    return { start: 1, end: 1 };
  }
  const start = Number.parseInt(match[1]!, 10);
  const end = match[2] ? Number.parseInt(match[2], 10) : start;
  return { start, end };
}

export function GanttChart({ phases }: { phases: readonly (readonly [string, string])[] }) {
  return (
    <DeckVisualZone label="10-Week Implementation Schedule" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="gantt-chart-visual flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="gantt-chart-visual__panel gms-card flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl">
        <div className="gantt-chart-visual__header">
          <div className="gantt-chart-visual__header-label">Phase</div>
          {Array.from({ length: GANTT_TOTAL_WEEKS }, (_, index) => (
            <div key={`week-${index + 1}`} className="gantt-chart-visual__week-header">
              W{index + 1}
            </div>
          ))}
        </div>
        <div className="gantt-chart-visual__rows min-h-0 flex-1">
          {phases.map(([phase, duration], index) => {
            const { start, end } = parseWeekRange(duration);
            const span = end - start + 1;
            const Icon = GANTT_PHASE_ICONS[index] ?? GANTT_PHASE_ICONS[GANTT_PHASE_ICONS.length - 1]!;

            return (
              <div key={phase} className="gantt-chart-visual__row">
                <div className="gantt-chart-visual__label">
                  <p className="gantt-chart-visual__phase-name">{phase}</p>
                </div>
                <div className="gantt-chart-visual__track">
                  {Array.from({ length: GANTT_TOTAL_WEEKS }, (_, weekIndex) => (
                    <div
                      key={`${phase}-week-${weekIndex + 1}`}
                      className="gantt-chart-visual__week-cell"
                      aria-hidden
                    />
                  ))}
                  <div
                    className="gantt-chart-visual__bar"
                    style={{
                      gridColumn: `${start} / ${end + 1}`,
                      backgroundColor: GANTT_BAR_COLORS[index % GANTT_BAR_COLORS.length],
                    }}
                    title={`${phase} — ${duration}`}
                  >
                    <span className="gantt-chart-visual__bar-icon">
                      {deckIcon(Icon, "xs")}
                    </span>
                    {span > 1 && (
                      <span className="gantt-chart-visual__duration">{duration}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </DeckVisualZone>
  );
}

function WorkstreamCompactCard({
  title,
  icon,
}: {
  title: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="workstream-converge-visual__card gms-card flex h-full min-h-0 flex-col items-center justify-center rounded-xl">
      {icon && (
        <div className="workstream-converge-visual__card-icon flex shrink-0 justify-center">
          <FlowStepTile compact>{deckIcon(icon, "sm")}</FlowStepTile>
        </div>
      )}
      <p className="workstream-converge-visual__title deck-type-card-title min-w-0">{title}</p>
    </div>
  );
}

export function WorkstreamConverge({
  workstreams,
  target,
}: {
  workstreams: readonly {
    title: string;
    items: readonly (string | { title: string })[];
  }[];
  target: string;
}) {
  return (
    <div className="workstream-converge-visual flex h-full min-h-0 w-full flex-col">
      <DeckVisualZone label="Delivery Workstreams" variant="tint" className="flex h-full min-h-0 flex-1 flex-col">
        <div className="workstream-converge-visual__layout flex min-h-0 flex-1 flex-col gap-2">
          <div className="workstream-converge-visual__grid grid min-h-0 flex-1 grid-cols-4 gap-2">
            {workstreams.map((ws, index) => (
              <WorkstreamCompactCard
                key={ws.title}
                title={ws.title}
                icon={WORKSTREAM_ICONS[index] ?? WORKSTREAM_ICONS[WORKSTREAM_ICONS.length - 1]}
              />
            ))}
          </div>
          <div className="workstream-converge-visual__target gms-card flex shrink-0 items-center justify-center gap-2 rounded-xl">
            <FlowStepTile compact>{deckIcon(Rocket, "xs")}</FlowStepTile>
            <p className="workstream-converge-visual__target-label deck-type-card-title-accent m-0">
              {target}
            </p>
          </div>
        </div>
      </DeckVisualZone>
    </div>
  );
}

export function SupportLifecycleDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <DeckVisualZone label="Support Lifecycle" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="support-lifecycle-visual flex h-full min-h-0 w-full items-stretch">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div className="support-lifecycle-visual__step flex min-h-0 min-w-0 flex-1">
            <div className="support-lifecycle-visual__card gms-card flex h-full w-full min-h-0 flex-col rounded-2xl">
              <div className="support-lifecycle-visual__number-col flex shrink-0 justify-center">
                <FlowStepTile>
                  <span className="support-lifecycle-visual__number deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </FlowStepTile>
              </div>
              <p className="support-lifecycle-visual__label deck-type-card-title min-h-0 flex-1">
                {step}
              </p>
              <div className="support-lifecycle-visual__icon-col flex shrink-0 justify-center">
                <FlowStepTile>
                  {deckIcon(
                    SUPPORT_LIFECYCLE_ICONS[index] ??
                      SUPPORT_LIFECYCLE_ICONS[SUPPORT_LIFECYCLE_ICONS.length - 1]!,
                    "md",
                  )}
                </FlowStepTile>
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="support-lifecycle-visual__arrow flex shrink-0 items-center">
              <FlowArrow horizontal />
            </div>
          )}
        </Fragment>
      ))}
      </div>
    </DeckVisualZone>
  );
}

export function EscalationDiagram({ levels }: { levels: readonly string[] }) {
  return (
    <VerticalFlowDiagram
      items={levels}
      icons={ESCALATION_LEVEL_ICONS}
      compact
      className="escalation-visual"
    />
  );
}

const SLA_PRIORITY_ACCENTS = [
  "var(--ibd-red)",
  "#e65100",
  "#f9a825",
  "var(--gms-accent)",
] as const;

function SlaPriorityCard({
  priority,
  description,
  response,
  resolution,
  index,
  icon,
}: {
  priority: string;
  description: string;
  response: string;
  resolution: string;
  index: number;
  icon: LucideIcon;
}) {
  return (
    <div className="sla-priority-visual__card gms-card flex min-h-0 min-w-0 flex-1 flex-col rounded-2xl">
      <div
        className="sla-priority-visual__accent shrink-0"
        style={{ backgroundColor: SLA_PRIORITY_ACCENTS[index] ?? SLA_PRIORITY_ACCENTS[SLA_PRIORITY_ACCENTS.length - 1] }}
        aria-hidden
      />
      <div className="sla-priority-visual__number-col flex shrink-0 justify-center">
        <FlowStepTile>
          <span className="sla-priority-visual__number deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </FlowStepTile>
      </div>
      <p className="sla-priority-visual__priority deck-type-card-title">{priority}</p>
      <p className="sla-priority-visual__description deck-type-inline-feature">{description}</p>
      <div className="sla-priority-visual__metrics">
        <p className="sla-priority-visual__metric deck-type-inline-feature">
          <span className="font-semibold">Response</span>
          <span className="text-[color:var(--gms-text-muted)]"> · {response}</span>
        </p>
        <p className="sla-priority-visual__metric deck-type-inline-feature">
          <span className="font-semibold">Resolution</span>
          <span className="text-[color:var(--gms-text-muted)]"> · {resolution}</span>
        </p>
      </div>
      <div className="sla-priority-visual__icon-col flex shrink-0 justify-center">
        <FlowStepTile>
          {deckIcon(icon, "md")}
        </FlowStepTile>
      </div>
    </div>
  );
}

export function SlaPriorityVisual({
  levels = serviceLevels,
}: {
  levels?: readonly (readonly [string, string, string, string])[];
}) {
  return (
    <div className="sla-priority-visual__strip flex min-h-0 flex-1 items-stretch">
      {levels.map(([priority, description, response, resolution], index) => (
        <Fragment key={priority}>
          <SlaPriorityCard
            priority={priority}
            description={description}
            response={response}
            resolution={resolution}
            index={index}
            icon={
              SLA_PRIORITY_ICONS[index] ??
              SLA_PRIORITY_ICONS[SLA_PRIORITY_ICONS.length - 1]!
            }
          />
          {index < levels.length - 1 && (
            <div className="sla-priority-visual__arrow flex shrink-0 items-center">
              <FlowArrow horizontal />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function SlaEscalationVisual() {
  return (
    <div className="sla-escalation-visual flex h-full min-h-0 w-full flex-col overflow-hidden">
      <DeckVisualZone
        label="SLA Priority Matrix"
        variant="tint"
        className="sla-escalation-visual__sla flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        <SlaPriorityVisual />
      </DeckVisualZone>
      <DeckVisualZone
        label="Escalation Model"
        variant="neutral"
        className="sla-escalation-visual__escalation-zone flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        <div className="sla-escalation-visual__escalation min-h-0 flex-1">
          <EscalationDiagram levels={escalationLevels} />
        </div>
      </DeckVisualZone>
    </div>
  );
}

export function RiskHeatMap({
  assessments,
}: {
  assessments: readonly {
    category: string;
    risk: string;
    severity: "low" | "medium" | "high" | "critical";
  }[];
}) {
  const levels = ["Low", "Medium", "High", "Critical"] as const;
  const severityIndex = { low: 0, medium: 1, high: 2, critical: 3 } as const;
  const severityColors = [
    "var(--risk-heatmap-low)",
    "var(--risk-heatmap-medium)",
    "var(--risk-heatmap-high)",
    "var(--risk-heatmap-critical)",
  ] as const;

  return (
    <DeckVisualZone label="Risk Matrix" variant="tint" className="flex h-full min-h-0 min-w-0 flex-1 flex-col">
      <div className="risk-heatmap-visual flex h-full min-h-0 min-w-0 flex-1 flex-col">
      <div className="risk-heatmap-visual__panel gms-card flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl">
        <div className="risk-heatmap-visual__grid min-h-0 flex-1">
          <div className="risk-heatmap-visual__corner" aria-hidden />
          {levels.map((level) => (
            <div key={level} className="risk-heatmap-visual__header">
              {level}
            </div>
          ))}
          {assessments.map((assessment) => {
            const activeCol = severityIndex[assessment.severity];

            return (
              <Fragment key={assessment.category}>
                <div className="risk-heatmap-visual__category">{assessment.category}</div>
                {levels.map((level, col) => {
                  const isAssessed = col === activeCol;

                  return (
                    <div
                      key={`${assessment.category}-${level}`}
                      className={`risk-heatmap-visual__cell${
                        isAssessed
                          ? " risk-heatmap-visual__cell--assessed"
                          : " risk-heatmap-visual__cell--empty"
                      }`}
                      style={
                        isAssessed
                          ? { backgroundColor: severityColors[col] }
                          : undefined
                      }
                      title={isAssessed ? `${assessment.risk} — ${level}` : undefined}
                      aria-label={
                        isAssessed
                          ? `${assessment.category}: ${assessment.risk}, ${level} severity`
                          : undefined
                      }
                      aria-hidden={!isAssessed}
                    >
                      {isAssessed && (
                        <p className="risk-heatmap-visual__cell-label">
                          {assessment.risk}
                        </p>
                      )}
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
      </div>
    </DeckVisualZone>
  );
}

export function RiskTreatmentDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <DeckVisualZone label="Treatment Cycle" variant="neutral" className="flex h-full min-h-0 min-w-0 flex-1 flex-col">
      <div className="risk-treatment-visual__flow min-h-0 flex-1">
        <VerticalFlowDiagram
          items={steps}
          icons={RISK_TREATMENT_ICONS}
          compact
          className="escalation-visual risk-treatment-visual__steps"
        />
      </div>
    </DeckVisualZone>
  );
}

export function RiskManagementVisual({
  assessments,
  treatmentSteps,
}: {
  assessments: readonly {
    category: string;
    risk: string;
    severity: "low" | "medium" | "high" | "critical";
  }[];
  treatmentSteps: readonly string[];
}) {
  return (
    <div className="risk-management-visual grid h-full min-h-0 w-full flex-1 grid-cols-2 gap-3">
      <RiskHeatMap assessments={assessments} />
      <RiskTreatmentDiagram steps={treatmentSteps} />
    </div>
  );
}

export function ComplianceMatrix({
  items,
}: {
  items: readonly (readonly [string, string])[];
}) {
  return (
    <DeckVisualZone label="Supplier Compliance Response" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="compliance-matrix-visual flex h-full min-h-0 w-full flex-1 flex-col">
      {items.map(([requirement, response], index) => (
        <div key={requirement} className="compliance-matrix-visual__row flex min-h-0 flex-1">
          <div className="compliance-matrix-visual__card gms-card flex h-full w-full min-h-0 rounded-2xl">
            <FlowStepTile compact>
              <span className="compliance-matrix-visual__number tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </FlowStepTile>
            <p className="compliance-matrix-visual__requirement">{requirement}</p>
            <span className="compliance-matrix-visual__status">
              {deckIcon(CheckCircle2, "sm")}
              {response}
            </span>
            <FlowStepTile compact>
              {deckIcon(
                SUPPLIER_RESPONSE_ICONS[index] ??
                  SUPPLIER_RESPONSE_ICONS[SUPPLIER_RESPONSE_ICONS.length - 1]!,
                "md",
              )}
            </FlowStepTile>
          </div>
        </div>
      ))}
      </div>
    </DeckVisualZone>
  );
}

export function InvoiceQrMockup({ callouts }: { callouts: readonly string[] }) {
  return (
    <div className="invoice-qr-visual flex h-full min-h-0 w-full items-stretch gap-3">
      <DeckVisualZone label="Fiscal Invoice" variant="tint" className="flex shrink-0 flex-col">
        <div className="invoice-qr-visual__document gms-card flex min-h-0 flex-1 flex-col">
          <div className="invoice-qr-visual__body">
            <dl className="invoice-qr-visual__fields">
              <div className="invoice-qr-visual__field">
                <dt>Invoice No.</dt>
                <dd>INV-0847</dd>
              </div>
              <div className="invoice-qr-visual__field">
                <dt>Fiscal ID</dt>
                <dd>FSL-883921</dd>
              </div>
            </dl>
          </div>
          <div className="invoice-qr-visual__qr-zone">
            <div className="invoice-qr-visual__qr-tile">{deckIcon(QrCode, "hero")}</div>
            <p className="invoice-qr-visual__qr-caption">Scan to verify</p>
          </div>
        </div>
      </DeckVisualZone>
      <DeckVisualZone label="QR Payload" variant="neutral" className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="invoice-qr-visual__flow min-h-0 flex-1">
          <VerticalFlowDiagram
            items={callouts}
            icons={QR_CALLOUT_ICONS}
            compact
            centerContent
          />
        </div>
      </DeckVisualZone>
    </div>
  );
}

export function LearningJourneyDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <DeckVisualZone label="Learning Journey" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="learning-journey-visual flex h-full min-h-0 w-full items-stretch">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div className="learning-journey-visual__step flex min-h-0 min-w-0 flex-1">
            <div className="learning-journey-visual__card gms-card flex h-full w-full min-h-0 flex-col rounded-2xl">
              <div className="learning-journey-visual__number-col flex shrink-0 justify-center">
                <FlowStepTile>
                  <span className="learning-journey-visual__number deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </FlowStepTile>
              </div>
              <p className="learning-journey-visual__label deck-type-card-title min-h-0">
                {step}
              </p>
              <div className="learning-journey-visual__icon-col flex shrink-0 justify-center">
                <FlowStepTile>
                  {deckIcon(
                    LEARNING_JOURNEY_ICONS[index] ??
                      LEARNING_JOURNEY_ICONS[LEARNING_JOURNEY_ICONS.length - 1]!,
                    "md",
                  )}
                </FlowStepTile>
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="learning-journey-visual__arrow flex shrink-0 items-center">
              <FlowArrow horizontal />
            </div>
          )}
        </Fragment>
      ))}
      </div>
    </DeckVisualZone>
  );
}

export { ExecutiveSummaryVisual } from "@/components/deck/visuals/ExecutiveSummaryVisual";

export function WhyInfinityValueVisual({
  items,
  icons,
}: {
  items: readonly { title: string; description: string }[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <DeckVisualZone label="Why Infinity (IBD)" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden">
      <div className="governance-framework-visual__list flex min-h-0 flex-1 flex-col gap-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="governance-framework-visual__card gms-card flex min-h-0 flex-1 flex-col rounded-2xl"
          >
            <div className="governance-framework-visual__card-head flex items-center">
              <FlowStepTile>
                <span className="governance-framework-visual__number deck-flow-step-card__number deck-flow-step-card__number--compact tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </FlowStepTile>
              <p className="governance-framework-visual__title deck-type-card-title min-w-0 flex-1">
                {item.title}
              </p>
              <FlowStepTile>
                {deckIcon(
                  icons?.[index] ?? icons?.[icons.length - 1] ?? BadgeCheck,
                  "sm",
                )}
              </FlowStepTile>
            </div>
            <p className="governance-framework-visual__description deck-type-card-body">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </DeckVisualZone>
  );
}

export function ValueCardsVisual({
  items,
  icons,
}: {
  items: readonly { title: string; description: string }[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <DeckVisualZone label="Value Proposition" variant="tint" className="flex h-full min-h-0 flex-1 flex-col">
      <div className="grid h-full min-h-0 flex-1 grid-cols-2 gap-2 content-start overflow-auto">
      {items.map((item, index) => (
        <div key={item.title} className="gms-card rounded-lg p-4">
          {icons?.[index] && (
            <div className="deck-flow-step-card__tile deck-flow-step-card__tile--compact mb-2">
              {deckIcon(icons[index], "sm")}
            </div>
          )}
          <p className="deck-type-card-title">{item.title}</p>
          <p className="deck-type-card-body mt-1 text-[color:var(--gms-text-muted)]">
            {item.description}
          </p>
        </div>
      ))}
      </div>
    </DeckVisualZone>
  );
}

export function KeyDeliverablesVisual({
  items,
  icons,
}: {
  items: readonly { title: string; description: string }[];
  icons?: readonly LucideIcon[];
}) {
  return (
    <DeckVisualZone label="Delivery Outputs" variant="tint" className="key-deliverables-visual__zone flex h-full min-h-0 w-full flex-1 flex-col">
      <DeckFeatureGrid
        uniform
        columns={2}
        fill
        items={items.map((item, index) => ({
          title: item.title,
          description: item.description,
          icon: deckIcon(
            icons?.[index] ?? KEY_DELIVERABLE_ICONS[index] ?? KEY_DELIVERABLE_ICONS[0]!,
            "sm",
          ),
        }))}
      />
    </DeckVisualZone>
  );
}

export function AcceptanceEvidenceVisual({
  items,
}: {
  items: readonly (readonly [string, string, string])[];
}) {
  return (
    <DeckVisualZone label="Acceptance Criteria" variant="tint" className="flex h-full min-h-0 w-full flex-1 flex-col">
      <div className="acceptance-evidence-visual flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {items.map(([id, area, evidence]) => (
          <div
            key={id}
            className="acceptance-evidence-visual__card gms-card flex min-w-0 items-start gap-3 rounded-xl p-3"
          >
            <FlowStepTile compact>
              {deckIcon(CheckCircle2, "sm")}
            </FlowStepTile>
            <div className="min-w-0">
              <p className="acceptance-evidence-visual__id deck-type-premium-label text-deck-accent">
                {id}
              </p>
              <p className="deck-type-card-title mt-1">{area}</p>
              <p className="deck-type-body-compact mt-1 text-[color:var(--gms-text-muted)]">
                {evidence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </DeckVisualZone>
  );
}

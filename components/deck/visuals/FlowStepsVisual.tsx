"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { deckIcon } from "@/components/deck/deck-icons";
import { DeckVisualZone } from "@/components/deck/DeckSlideFrame";

type Step = { step?: string; title: string };

export function FlowConnector({ className = "" }: { className?: string }) {
  return (
    <span className={`deck-flow-connector ${className}`.trim()} aria-hidden>
      <ArrowDown strokeWidth={3} />
    </span>
  );
}

function FlowStepCard({
  step,
  Icon,
  compact = false,
}: {
  step: Step;
  Icon?: LucideIcon;
  compact?: boolean;
}) {
  const stepLabel = step.step?.replace(/^step\s*/i, "").trim();

  return (
    <div
      className={`deck-flow-step-card gms-card h-full w-full rounded-2xl ${
        compact ? "p-2.5" : "p-5"
      }`}
    >
      <div className="deck-flow-step-card__row">
        {stepLabel && (
          <div
            className={`deck-flow-step-card__number-col${
              compact ? " deck-flow-step-card__number-col--compact" : ""
            }`}
          >
            <div
              className={`deck-flow-step-card__tile${
                compact ? " deck-flow-step-card__tile--compact" : " deck-flow-step-card__tile--default"
              }`}
            >
              <span
                className={`deck-flow-step-card__number tabular-nums${
                  compact ? " deck-flow-step-card__number--compact" : ""
                }`}
              >
                {stepLabel}
              </span>
            </div>
          </div>
        )}
        <p
          className={`deck-flow-step-card__title${
            compact ? " deck-flow-step-card__title--compact" : ""
          }`}
        >
          {step.title}
        </p>
        {Icon && (
          <div
            className={`deck-flow-step-card__icon-col${
              compact ? " deck-flow-step-card__icon-col--compact" : ""
            }`}
          >
            <div
              className={`deck-flow-step-card__tile${
                compact ? " deck-flow-step-card__tile--compact" : " deck-flow-step-card__tile--default"
              }`}
            >
              {deckIcon(Icon, "sm")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function FlowStepsVisual({
  steps,
  columns = 2,
  icons,
  fill = false,
}: {
  steps: Step[];
  columns?: 1 | 2 | 4;
  icons?: readonly LucideIcon[];
  fill?: boolean;
}) {
  if (columns === 1) {
    return (
      <div
        className={`deck-flow-steps-visual deck-flow-steps-visual--stack${
          fill ? " deck-flow-steps-visual--fill h-full min-h-0 flex-1" : ""
        }`}
      >
        {steps.map((step, index) => {
          const Icon = icons?.[index];
          const isLast = index === steps.length - 1;

          return (
            <div
              key={`${step.title}-${index}`}
              className={fill ? "deck-flow-step-slot" : "deck-flow-step-slot flex flex-col"}
            >
              <div
                className={
                  fill
                    ? "flex w-full min-h-0 flex-1 items-stretch"
                    : "w-full"
                }
              >
                <FlowStepCard step={step} Icon={Icon} />
              </div>
              {!isLast && <FlowConnector />}
            </div>
          );
        })}
      </div>
    );
  }

  const gridClass =
    columns === 4 ? "grid-cols-4" : "grid-cols-2";

  return (
    <div
      className={`deck-flow-steps-visual grid ${gridClass} items-stretch gap-4${
        fill ? " deck-flow-steps-visual--fill" : ""
      }`}
    >
      {steps.map((step, index) => {
        const Icon = icons?.[index];
        return (
          <div key={`${step.title}-${index}`} className="h-full">
            <FlowStepCard step={step} Icon={Icon} />
          </div>
        );
      })}
    </div>
  );
}

export function ArchitectureStackVisual({
  items,
  icons,
  fill = false,
  label = "Architecture Stack",
}: {
  items: readonly string[];
  icons?: readonly LucideIcon[];
  fill?: boolean;
  label?: string;
}) {
  const stack = icons ? (
    <div className="deck-architecture-flow flex h-full min-h-0 w-full flex-1 flex-col">
      {items.map((title, index) => (
        <div
          key={title}
          className="deck-architecture-flow__step flex min-h-0 flex-1 flex-col items-center"
        >
          <div className="flex w-full min-h-0 flex-1 items-stretch">
            <FlowStepCard
              step={{
                step: String(index + 1).padStart(2, "0"),
                title,
              }}
              Icon={icons[index]}
              compact
            />
          </div>
          {index < items.length - 1 && <FlowConnector />}
        </div>
      ))}
    </div>
  ) : (
    <div
      className={`deck-flow-steps-visual deck-flow-steps-visual--stack h-full min-h-0 w-full flex-1${
        fill ? " deck-flow-steps-visual--fill" : ""
      }`}
    >
      {items.map((item, index) => (
        <div
          key={item}
          className={`deck-flow-step-slot flex flex-col items-center${
            fill ? " min-h-0 flex-1" : ""
          }`}
        >
          <div
            className={
              fill
                ? "flex w-full min-h-0 flex-1 items-stretch"
                : "w-full"
            }
          >
            <div className="gms-card flex h-full w-full items-center justify-center rounded-2xl px-4 py-5 text-center text-[15px] font-medium leading-snug text-deck-accent">
              {item}
            </div>
          </div>
          {index < items.length - 1 && <FlowConnector />}
        </div>
      ))}
    </div>
  );

  return (
    <DeckVisualZone label={label} variant="tint" className="flex h-full min-h-0 flex-1 flex-col">
      {stack}
    </DeckVisualZone>
  );
}

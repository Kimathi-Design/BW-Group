"use client";

import { ArrowRight } from "lucide-react";
import { DeckVisualZone } from "@/components/deck/DeckSlideFrame";
import {
  EXECUTIVE_SUMMARY_CURRENT_ICONS,
  EXECUTIVE_SUMMARY_FUTURE_ICONS,
} from "@/components/deck/deck-icons";
import { executiveSummaryFlow } from "@/lib/deck-content";
import { VerticalFlowDiagram } from "@/components/deck/visuals/ProposalDiagrams";

export function ExecutiveSummaryVisual() {
  return (
    <div className="executive-summary-visual">
      <DeckVisualZone
        label="Current State"
        variant="tint"
        className="executive-summary-visual__zone--current min-h-0 flex-1"
      >
        <div className="executive-summary-visual__flow min-h-0 flex-1">
          <VerticalFlowDiagram
            items={executiveSummaryFlow.current}
            icons={EXECUTIVE_SUMMARY_CURRENT_ICONS}
            compact
            className="escalation-visual executive-summary-visual__steps"
          />
        </div>
      </DeckVisualZone>
      <div className="executive-summary-visual__bridge" aria-hidden>
        <span className="deck-flow-connector">
          <ArrowRight strokeWidth={3} />
        </span>
      </div>
      <DeckVisualZone
        label="Future State"
        variant="neutral"
        className="executive-summary-visual__zone--future min-h-0 flex-1"
      >
        <div className="executive-summary-visual__flow min-h-0 flex-1">
          <VerticalFlowDiagram
            items={executiveSummaryFlow.future}
            icons={EXECUTIVE_SUMMARY_FUTURE_ICONS}
            compact
            className="escalation-visual executive-summary-visual__steps"
          />
        </div>
      </DeckVisualZone>
    </div>
  );
}

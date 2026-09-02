# BW-Group — Enterprise Compliance Gateway Proposal Deck

Interactive proposal presentation and downloadable submission pack for **Barloworld Equipment Lesotho**, prepared by **Infinity Business Dynamics (Pty) Ltd**.

The deck presents the **Infinity Compliance Gateway** (Electronic Billing System) with **Microsoft Dynamics 365 & CRM integration**, **Motheo Compliance Engine**, and **Revenue Services Lesotho (Lekuka)** fiscal compliance.

---

## Live deployment

| Resource | URL |
|----------|-----|
| **Production deck** | [https://bw-group-chi.vercel.app](https://bw-group-chi.vercel.app) |
| **Alternate domain** | [https://bw-group-kimathi-designs-projects.vercel.app](https://bw-group-kimathi-designs-projects.vercel.app) |
| **Downloadable PDF** | [BW-Group-Motheo-Proposal.pdf](https://bw-group-chi.vercel.app/BW-Group-Motheo-Proposal.pdf) |
| **GitHub** | [Kimathi-Design/BW-Group](https://github.com/Kimathi-Design/BW-Group) |

---

## Overview

This is a **42-slide**, A4-portrait proposal deck built as a **Next.js** web application. It is designed for:

- **Live presentation** — fullscreen slide viewer with keyboard navigation
- **RFQ submission** — embedded high-resolution PDF with annexures and mandatory documents merged
- **Traceability** — BFR requirement matrix and acceptance evidence register aligned to Barloworld's Business Functional Requirements

**Proposal reference:** `IBD-BWE-EBS-2026-001`  
**Prepared for:** Barloworld Equipment Lesotho  
**Prepared by:** Infinity Business Dynamics (Pty) Ltd

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, custom GMS/IBD design tokens in `app/globals.css` |
| Animation | Framer Motion (slide transitions, stat counters) |
| Icons | Lucide React |
| Maps / diagrams | d3-geo, custom SVG flow visuals |
| PDF export | Playwright (2× PNG capture) + pdf-lib (merge) |
| Client PDF utilities | html-to-image, pdf-lib |
| Hosting | Vercel |

---

## Quick start

### Prerequisites

- **Node.js** 20+ (Vercel production uses Node 24.x)
- **npm**

For PDF generation only, also install Playwright browsers:

```bash
npx playwright install chromium
```

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the interactive deck.

### Production build

```bash
npm run build
npm start
```

Print/export route (all 42 slides, export styling): [http://localhost:3000/print](http://localhost:3000/print)

---

## Functionality

### Slide viewer (`DeckViewer`)

- **42 slides** (indices `0–41`) rendered from `ProposalDeckSlides.tsx` and `ProposalDeckSlidesExtended.tsx`
- **Responsive scaling** — deck fits viewport while preserving A4 aspect ratio (1240 × 1754 px)
- **Keyboard shortcuts**
  - `→` / `Space` / `Page Down` — next slide
  - `←` / `Page Up` — previous slide
  - `Home` / `End` — first / last slide
  - `F` — toggle fullscreen
- **Progress bar** — current position in deck
- **Download PDF** — fetches embedded `public/BW-Group-Motheo-Proposal.pdf` (~186 pages: 42 slides + submission annexures)

### Slide structure

Slides are organised into five proposal sections (see Table of Contents, slide 3):

| Section | Slides (page #) | Topics |
|---------|-----------------|--------|
| Executive | 4–7 | Summary, outcomes, client context, challenges |
| Company | 8–10 | About IBD, Why Infinity, RSL accreditation |
| Solution | 11–23 | Gateway, architecture, D365/CRM/API, Motheo, security, lifecycle, QR, monitoring, continuity |
| Delivery | 24–34 | Methodology, deliverables, governance, team, plan, timeline, testing, training, support, SLA, risk |
| Commercial | 35–42 | Pricing, supplier responses, BFR traceability, acceptance evidence, conclusion, signatures, annexures |

### Key solution slides

- **Dynamics 365 ERP Integration** (slide 13) — visual flow: D365 modules → D365 APIs → Compliance Gateway → Motheo → Lekuka, plus manual invoice capture scope
- **BFR Requirement Traceability** (slide 37) — maps each mandatory BFR ID to proposal response and evidence page references
- **Acceptance Evidence** (slide 38) — register of required proof at go-live
- **Barloworld RFQ Annexures** (slide 41) — index of annexures A–F with download references
- **Mandatory Supporting Documents** (slide 42) — RFQ §2 compliance document index

### PDF generation

Regenerate the full submission PDF after content or design changes:

```bash
npm run generate-pdf
```

This script:

1. Runs `next build`
2. Builds/updates submission pack files in `public/appendices/` (`build-submission-pack.mjs`)
3. Starts the production server and captures each slide from `/print` at **2× resolution** (crisp PNG → PDF pages)
4. Merges **15 appendix PDFs** in RFQ submission order
5. Writes `public/BW-Group-Motheo-Proposal.pdf`

**Export styling:** Print/export mode sets `data-deck-export="true"` on the document root, which:

- Removes card shadows and blur effects (no shadow bleed at card edges)
- Hides decorative particles and glow orbs
- Uses flat 1px borders and exact colour rendering for print

### Submission pack

Annexures and mandatory documents live in `public/appendices/`. Merge order is defined in `lib/submission-pack.ts` (`submissionPdfMergeOrder`).

To refresh generated placeholders and copy signed documents from local source folders:

```bash
npm run build-submission-pack
```

Place signed RFQ documents in `BW appendexis/signed and filled/` (see `scripts/build-submission-pack.mjs` for expected filenames).

---

## Design system

### Brand palette (`lib/ibd-brand.ts`)

| Token | Hex | Usage |
|-------|-----|-------|
| IBD Blue | `#34216B` | Primary accent, headings, gradients |
| IBD Red | `#F41C28` | Secondary accent, cover gradient |
| IBD Black | `#0D0F1A` | Body text |
| IBD Gray | `#F5F7FB` | Deck background, panels |
| IBD White | `#FFFFFF` | Slide surface |

### Layout constants (`lib/deck-content.ts`)

- **Slide canvas:** 1240 × 1754 px (A4 portrait at ~150 DPI)
- **Margins:** 104 px horizontal, 96 px top, 88 px bottom
- **Typography:** Uppercase section labels, large display titles with gradient highlights, 17 px body in slides

### Visual components

| Component | Location | Purpose |
|-----------|----------|---------|
| `DeckSlideFrame` | `components/deck/DeckSlideFrame.tsx` | Slide shell, padding, footer, background |
| `DeckSlideBodySplit` | same | Prose + visual panel layouts (top/bottom/horizontal) |
| `DeckVisualZone` | same | Labelled diagram zones (tint / neutral) |
| `EcosystemFlowCard` | `components/deck/visuals/ProposalDiagrams.tsx` | Numbered flow step cards with icons |
| `SapIntegrationVisual` | same | Dynamics 365 integration diagram |
| `DeckFeatureGrid` | `DeckSlideFrame.tsx` | Capability / outcome card grids |
| `DeckTable` | `DeckSlideFrame.tsx` | Traceability, pricing, evidence tables |

### Slide-specific layout modifiers

Custom CSS classes in `app/globals.css` tune complex slides, for example:

- `deck-slide-body-split--dynamics-integration` — grid split for D365 slide prose vs visual
- `deck-slide-body-split--governance` — governance framework + objectives panel
- `deck-slide-body-split--key-deliverables` — deliverables visual fill
- `deck-slide-body-split--monitoring-analytics` — dashboard mockup layout

---

## Project structure

```
├── app/
│   ├── globals.css          # Full deck design system + export/print rules
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main deck entry
│   └── print/page.tsx       # Print/export route (42 slides)
├── components/
│   ├── deck/                # Slide frame, viewer, TOC, cover, slides
│   │   ├── ProposalDeckSlides.tsx          # Slides 0–4
│   │   ├── ProposalDeckSlidesExtended.tsx    # Slides 5–41
│   │   ├── DeckViewer.tsx                  # Interactive viewer + PDF download
│   │   ├── DeckPrintView.tsx               # Export render target
│   │   └── visuals/                        # Diagram components
│   └── effects/             # Particles, GlowOrbs (hidden in PDF export)
├── lib/
│   ├── deck-content.ts      # Slide count, titles, dimensions, TOC helpers
│   ├── deck-proposal-content.ts  # All proposal copy and data tables
│   ├── submission-pack.ts   # Annexure index + PDF merge order
│   ├── export-deck-pdf.ts   # Client-side PDF export utilities
│   └── assets.ts            # Public asset paths
├── public/
│   ├── BW-Group-Motheo-Proposal.pdf   # Full submission PDF (download button)
│   ├── appendices/                  # Annexures A–F + mandatory §2 docs
│   └── images/                      # Logos, cover, signature
├── scripts/
│   ├── generate-proposal-pdf.mjs    # Playwright PDF pipeline
│   └── build-submission-pack.mjs    # Annexure pack builder
├── vercel.json
└── package.json
```

---

## Editing content

**All proposal copy** is centralised in `lib/deck-proposal-content.ts` — executive letter, bullet lists, BFR traceability rows, pricing, governance, deliverables, etc.

**Slide metadata** (titles, count, dimensions) is in `lib/deck-content.ts`.

**Slide layout and composition** is in:

- `components/deck/ProposalDeckSlides.tsx` (slides 0–4)
- `components/deck/ProposalDeckSlidesExtended.tsx` (slides 5–41)

After copy changes, run `npm run build` to verify, then `npm run generate-pdf` to refresh the downloadable PDF.

---

## Deployment (Vercel)

The project is deployed as **`bw-group`** on Vercel under **kimathi-designs-projects**.

```bash
# Link local folder to existing Vercel project (first time)
vercel link --project bw-group

# Deploy production
vercel deploy --prod
```

Or push to the `BW-Group` branch on GitHub if the Vercel project is connected to the repository (auto-deploy on push).

**Framework preset:** Next.js (`vercel.json`)

**Important:** The downloadable PDF (`public/BW-Group-Motheo-Proposal.pdf`, ~38 MB) is committed to the repo so the Download button works without server-side PDF generation at runtime.

---

## Scripts reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production Next.js build |
| `npm start` | Serve production build |
| `npm run build-submission-pack` | Generate/copy annexure PDFs in `public/appendices/` |
| `npm run generate-pdf` | Full pipeline: build → submission pack → capture slides → merge PDF |

---

## Licence & confidentiality

Proprietary proposal materials prepared for Barloworld Equipment Lesotho RFQ submission. Not for public distribution without authorisation.

**Infinity Business Dynamics (Pty) Ltd** — [www.ibd.co.ls](https://www.ibd.co.ls) · services@ibd.co.ls · +266 62554433

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

const submissionPdfMergeOrder = [
  "annexure-c-intent-to-respond-signed.pdf",
  "annexure-d-pricing-requirements.pdf",
  "annexure-b-e-invoicing-gateway-api-spec.pdf",
  "annexure-e-framework-agreement-deviations.pdf",
  "annexure-f-nda-confidentiality-agreement-signed.pdf",
  "mandatory-compliance-documents-2026.pdf",
  "mandatory-shareholder-identification.pdf",
  "mandatory-good-standing-letter.pdf",
  "mandatory-vat-registration-certificate.pdf",
  "mandatory-banking-details.pdf",
  "mandatory-bbbee-gap-statement.pdf",
  "support-a-rsl-accreditation-letter.pdf",
  "support-b-motheo-integrator-guide.pdf",
  "support-f-supplier-self-assessment-signed.pdf",
  "support-g-supplier-code-of-conduct-signed.pdf",
];

const SLIDE_WIDTH = 1240;
const SLIDE_HEIGHT = 1754;
const CAPTURE_SCALE = 2;

const outputPath = join(process.cwd(), "public/BW-Group-Motheo-Proposal.pdf");
const port = Number(process.env.DECK_PORT ?? 3010);
const baseUrl = process.env.DECK_URL ?? `http://localhost:${port}`;
const printUrl = `${baseUrl.replace(/\/$/, "")}/print`;

async function waitForServer(url, timeoutMs = 120_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not become ready at ${url}`);
}

let serverProcess;
if (!process.env.DECK_URL) {
  serverProcess = spawn("npm", ["start"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: "inherit",
  });
  await waitForServer(baseUrl);
}

const browser = await chromium.launch();
const context = await browser.newContext({
  deviceScaleFactor: CAPTURE_SCALE,
  viewport: { width: SLIDE_WIDTH, height: SLIDE_HEIGHT },
});
const page = await context.newPage();

try {
  console.log(`Rendering slides from ${printUrl} at ${CAPTURE_SCALE}x...`);
  await page.goto(printUrl, { waitUntil: "networkidle", timeout: 180_000 });
  await page.waitForFunction(() => document.documentElement.dataset.deckExport === "true");
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForSelector(".deck-print-slide", { timeout: 60_000 });
  await page.waitForTimeout(2000);

  const slideLocator = page.locator(".deck-print-slide");
  const slideCount = await slideLocator.count();
  console.log(`Capturing ${slideCount} slides...`);

  const pdfDoc = await PDFDocument.create();

  for (let index = 0; index < slideCount; index++) {
    const slide = slideLocator.nth(index);
    await slide.scrollIntoViewIfNeeded();
    const pngBytes = await slide.screenshot({
      type: "png",
      animations: "disabled",
      caret: "hide",
    });
    const image = await pdfDoc.embedPng(pngBytes);
    const pdfPage = pdfDoc.addPage([SLIDE_WIDTH, SLIDE_HEIGHT]);
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
    });
    console.log(`  slide ${index + 1}/${slideCount}`);
  }

  console.log("Merging submission pack PDFs...");
  const appendicesDir = join(process.cwd(), "public/appendices");

  for (const file of submissionPdfMergeOrder) {
    const filePath = join(appendicesDir, file);
    try {
      const appendixBytes = readFileSync(filePath);
      const appendixPdf = await PDFDocument.load(appendixBytes);
      const pages = await pdfDoc.copyPages(appendixPdf, appendixPdf.getPageIndices());
      pages.forEach((p) => pdfDoc.addPage(p));
      console.log(`  + ${file}`);
    } catch (error) {
      console.warn(`  SKIP ${file}: ${error.message}`);
    }
  }

  writeFileSync(outputPath, await pdfDoc.save());
  console.log(`Saved ${outputPath}`);
} finally {
  await context.close();
  await browser.close();
  if (serverProcess) {
    serverProcess.kill("SIGTERM");
  }
}

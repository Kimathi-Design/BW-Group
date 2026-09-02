import { toJpeg } from "html-to-image";
import { PDFDocument } from "pdf-lib";
import { APPENDIX_START_SLIDE } from "@/lib/deck-content";
import { submissionPdfMergeOrder } from "@/lib/submission-pack";

export type ExportDeckPdfOptions = {
  slideCount?: number;
  width: number;
  height: number;
  filename?: string;
  renderSlide: (index: number) => Promise<HTMLElement | null>;
  onProgress?: (current: number, total: number) => void;
  settleMs?: (index: number) => number;
};

const PNG_SLIDE_COUNT = APPENDIX_START_SLIDE;
const PDF_APPENDIX_COUNT = submissionPdfMergeOrder.length;

export async function waitForSlideReady(root: HTMLElement | null) {
  await document.fonts.ready;
  if (!root) return;

  const imgs = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    imgs.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    ),
  );
}

async function loadAppendixBytes() {
  return Promise.all(
    submissionPdfMergeOrder.map(async (filename) => {
      const response = await fetch(`/appendices/${filename}`);
      if (!response.ok) {
        throw new Error(`Failed to load /appendices/${filename}`);
      }
      return response.arrayBuffer();
    }),
  );
}

async function appendAppendixPagesFromBytes(
  pdfDoc: PDFDocument,
  appendixBytes: ArrayBuffer,
) {
  const appendixPdf = await PDFDocument.load(appendixBytes);
  const copied = await pdfDoc.copyPages(
    appendixPdf,
    appendixPdf.getPageIndices(),
  );
  copied.forEach((page) => pdfDoc.addPage(page));
}

export function downloadPdf(bytes: Uint8Array, filename: string) {
  const blob = new Blob([Uint8Array.from(bytes)], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  window.setTimeout(() => {
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }, 30_000);
}

export async function exportDeckToPdf({
  width,
  height,
  renderSlide,
  onProgress,
  settleMs = () => 0,
}: ExportDeckPdfOptions): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const appendixBytesPromise = loadAppendixBytes();

  for (let i = 0; i < PNG_SLIDE_COUNT; i++) {
    onProgress?.(i + 1, PNG_SLIDE_COUNT + PDF_APPENDIX_COUNT);

    const el = await renderSlide(i);
    if (!el) {
      throw new Error(`Slide ${i + 1} failed to render`);
    }

    await waitForSlideReady(el);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );

    const delay = settleMs(i);
    if (delay > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    const dataUrl = await toJpeg(el, {
      width,
      height,
      quality: 0.98,
      pixelRatio: 2,
      cacheBust: true,
      style: {
        boxShadow: "none",
        filter: "none",
      },
    });

    if (!dataUrl) {
      throw new Error(`Failed to capture slide ${i + 1}`);
    }

    const imgBytes = await fetch(dataUrl).then((response) => response.arrayBuffer());
    const image = await pdfDoc.embedJpg(imgBytes);
    const page = pdfDoc.addPage([width, height]);
    page.drawImage(image, { x: 0, y: 0, width, height });
  }

  const appendixBuffers = await appendixBytesPromise;
  for (let i = 0; i < appendixBuffers.length; i++) {
    onProgress?.(PNG_SLIDE_COUNT + i + 1, PNG_SLIDE_COUNT + PDF_APPENDIX_COUNT);
    await appendAppendixPagesFromBytes(pdfDoc, appendixBuffers[i]!);
  }

  return pdfDoc.save();
}

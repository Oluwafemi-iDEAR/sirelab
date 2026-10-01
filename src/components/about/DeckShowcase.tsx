import { Download, ExternalLink } from "lucide-react";

type DeckShowcaseProps = {
  heading: string;
  intro?: string;
  pdfUrl?: string;
  downloadLabel?: string;
};

/**
 * Embedded PDF viewer for the About page, styled as a dark "presentation stage".
 * The deck renders in-page via the browser's native PDF viewer (iframe), with
 * open-in-new-tab and download links as a robust fallback for browsers/mobile
 * that won't display PDFs inline.
 */
export default function DeckShowcase({
  heading,
  intro,
  pdfUrl,
  downloadLabel = "Download full deck (PDF)",
}: DeckShowcaseProps) {
  // Nothing to show until a deck is set (Sanity file uploaded or static
  // fallback present). Render nothing rather than an empty section.
  if (!pdfUrl) return null;

  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
            Highlights
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {heading}
          </h2>
          {intro && (
            <p className="mt-3 leading-7 text-slate-300">{intro}</p>
          )}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl">
          <div className="aspect-video w-full">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title={heading}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Open fullscreen
          </a>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {downloadLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

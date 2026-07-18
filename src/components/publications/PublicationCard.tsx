import type { Publication } from "../../data/publications";

const TYPE_LABELS: Record<Publication["type"], string> = {
  journal: "Journal",
  conference: "Conference",
  book: "Book / Chapter",
  report: "Report",
};

const LINK_LABELS: Record<string, string> = {
  pdf: "PDF",
  doi: "DOI",
  slides: "Slides",
  video: "Video",
};

export default function PublicationCard({ pub }: { pub: Publication }) {
  const links = Object.entries(pub.links ?? {}).filter(([, url]) => url);

  return (
    <article className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-900">
          {TYPE_LABELS[pub.type]}
        </span>
        {pub.openAccess && (
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            Open Access
          </span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-bold text-slate-900">{pub.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{pub.authors}</p>
      {pub.venue && (
        <p className="mt-1 text-sm italic text-slate-500">{pub.venue}</p>
      )}

      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-orange-600 hover:text-orange-700"
            >
              {LINK_LABELS[key] ?? key} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

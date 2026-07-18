import type { SireEvent } from "../../data/events";

export default function PastEventCard({ event }: { event: SireEvent }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:shadow-lg">
      {event.image && (
        <img
          src={event.image}
          alt=""
          loading="lazy"
          className="h-44 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-orange-600">
          {event.dateLabel}
        </p>
        <h3 className="mt-2 text-lg font-bold text-slate-900">{event.title}</h3>
        {event.description && (
          <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
            {event.description}
          </p>
        )}

        {event.resourceLinks && event.resourceLinks.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {event.resourceLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

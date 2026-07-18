import SectionHeading from "../common/SectionHeading";
import EventTags from "../events/EventTags";
import { useEvents } from "../../hooks/content";

export default function UpcomingEventsSpotlight() {
  const { data: events } = useEvents();
  const upcoming = events.filter((event) => event.status === "upcoming").slice(0, 3);

  if (upcoming.length === 0) return null;

  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Upcoming Events"
          action={{ label: "All events", href: "/conferences-workshops" }}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => (
            <article
              key={event.id}
              className="flex flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-orange-600">
                {event.dateLabel}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                {event.title}
              </h3>
              {event.description && (
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {event.description}
                </p>
              )}
              <EventTags tags={event.tags} className="mt-4" />
              {event.cta && (
                <a
                  href={event.cta.href}
                  className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  {event.cta.label} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

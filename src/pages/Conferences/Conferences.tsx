import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import CtaBanner from "../../components/common/CtaBanner";
import EventTags from "../../components/events/EventTags";
import PastEventCard from "../../components/events/PastEventCard";
import MailingListForm from "../../components/events/MailingListForm";
import { useEvents } from "../../hooks/content";

export default function Conferences() {
  const { data: events } = useEvents();

  const upcoming = events
    .filter((event) => event.status === "upcoming")
    .sort((a, b) => (a.date ?? "").localeCompare(b.date ?? ""));
  const past = events
    .filter((event) => event.status === "past")
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  return (
    <>
      <Seo
        title="Conferences & Workshops"
        description="Hands-on pedagogy, research methods, and practitioner training from SIRE — on campus and online."
      />

      <PageHero
        eyebrow="Events"
        title="Conferences & Workshops"
        intro="Hands-on pedagogy (ECP), research methods, and practitioner training — on campus and online."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#upcoming"
            className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
          >
            Upcoming
          </a>
          <a
            href="#past"
            className="rounded-xl border border-orange-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-orange-50"
          >
            Past Events
          </a>
        </div>
      </PageHero>

      {/* Upcoming */}
      <section id="upcoming" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Upcoming
          </h2>

          {upcoming.length > 0 ? (
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
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-orange-200 bg-orange-50 p-8">
              <p className="text-slate-600">
                No events are scheduled right now. Join the mailing list to get
                notified.
              </p>
              <MailingListForm />
            </div>
          )}
        </div>
      </section>

      {/* Past */}
      <section id="past" className="bg-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Past Events
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {past.map((event) => (
              <PastEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Host a workshop with us"
        text="Faculty and community partners: reach out to co-design custom training or mini-symposia."
        buttons={[
          { label: "Contact", href: "/contact" },
          { label: "Propose an event", href: "#upcoming" },
        ]}
      />
    </>
  );
}

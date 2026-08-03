import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import CtaBanner from "../../components/common/CtaBanner";
import HallOfFameCard from "../../components/hallOfFame/HallOfFameCard";
import { useHallOfFame } from "../../hooks/content";

export default function HallOfFame() {
  const { data: students } = useHallOfFame();

  // Feature the first flagged entry (or the first entry) as the lead story.
  const featured = students.find((s) => s.featured) ?? students[0];
  const rest = students.filter((s) => s.id !== featured?.id);

  return (
    <>
      <Seo
        title="Hall of Fame"
        description="Celebrating outstanding SIRE students — their research, leadership, and innovation across sustainable infrastructure and STEM."
      />

      <PageHero
        eyebrow="Student Excellence"
        title="Hall of Fame"
        intro="Meet the outstanding students whose research, leadership, and innovation are shaping the future of sustainable infrastructure and STEM. Here we celebrate their milestones and lasting impact."
      />

      {featured && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Featured honoree
            </p>

            <div className="grid gap-8 overflow-hidden rounded-3xl border border-orange-100 bg-orange-50/50 shadow-sm md:grid-cols-2">
              <div className="relative min-h-72 md:min-h-full">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="p-8 sm:p-10">
                {featured.award && (
                  <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    {featured.award}
                  </span>
                )}
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
                  {featured.name}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-orange-600">
                  {[featured.program, featured.year]
                    .filter(Boolean)
                    .join(" • ")}
                </p>
                <p className="mt-5 leading-7 text-slate-600">
                  {featured.achievement}
                </p>
                {featured.quote && (
                  <blockquote className="mt-6 border-l-4 border-orange-400 pl-4 text-lg italic text-slate-700">
                    “{featured.quote}”
                  </blockquote>
                )}
                {featured.linkedin && (
                  <a
                    href={featured.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-xl bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                  >
                    View profile →
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Past honorees
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            A growing archive of SIRE students who turned bold ideas into
            real-world impact.
          </p>

          {rest.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((student) => (
                <HallOfFameCard key={student.id} student={student} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-slate-600">
              More honorees will be added soon.
            </p>
          )}
        </div>
      </section>

      <CtaBanner
        heading="Know a student who deserves recognition?"
        text="Nominate an outstanding SIRE student for a future Hall of Fame feature."
        buttons={[{ label: "Nominate a student", href: "/contact" }]}
      />
    </>
  );
}

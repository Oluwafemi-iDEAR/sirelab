import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import CtaBanner from "../../components/common/CtaBanner";
import PeopleGrid from "../../components/about/PeopleGrid";
import Timeline from "../../components/about/Timeline";
import FaqAccordion from "../../components/about/FaqAccordion";
import { useAboutContent } from "../../hooks/content";

export default function About() {
  const { data: content } = useAboutContent();

  return (
    <>
      <Seo
        title="About"
        description="SIRE adapts experiment-centric pedagogy to increase STEM achievement, developing affordable hands-on learning technology at Morgan State University."
      />

      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.heading}
        intro={content.hero.intro}
      />

      {/* About SIRE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {content.about.heading}
          </h2>
          <div className="mt-4 max-w-3xl space-y-4">
            {content.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {content.about.disciplinesHeading}
              </h3>
              <ul className="mt-3 grid gap-2 text-slate-600 sm:grid-cols-2">
                {content.about.disciplines.map((discipline) => (
                  <li key={discipline} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {discipline}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {content.about.studentPathwayHeading}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {content.about.studentPathway}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-orange-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {content.mission.heading}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              {content.mission.text}
            </p>
            <ul className="mt-6 space-y-3">
              {content.mission.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {content.vision.heading}
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              {content.vision.text}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {content.vision.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-orange-200 p-5 text-center"
                >
                  <p className="text-3xl font-extrabold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {content.whatWeDo.heading}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.whatWeDo.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PeopleGrid />
      <Timeline />
      <FaqAccordion />

      <CtaBanner
        heading="Work with us"
        text="Prospective students, collaborators, and community partners are welcome."
        buttons={[
          { label: "Contact us", href: "/contact" },
          { label: "Attend an event", href: "/conferences-workshops" },
        ]}
      />
    </>
  );
}

import { Link } from "react-router-dom";

import SectionHeading from "../common/SectionHeading";
import { useResearchHighlights } from "../../hooks/content";

export default function ResearchHighlights() {
  const { data: highlights } = useResearchHighlights();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research Highlights"
          action={{ label: "View publications", href: "/publications" }}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:shadow-lg"
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
                {item.link && (
                  <Link
                    to={item.link.href}
                    className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    {item.link.label} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

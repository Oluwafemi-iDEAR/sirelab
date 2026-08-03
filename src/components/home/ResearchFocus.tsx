import { Link } from "react-router-dom";

import SireMark from "./SireMark";
import { useResearchFocus } from "../../hooks/content";

export default function ResearchFocus() {
  const { data: areas } = useResearchFocus();

  return (
    <section id="research-focus" className="bg-orange-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Research Focus
          </h2>
        </div>

        <ul className="stem-labs">
          {areas.map((area) => {
            const inner = (
              <>
                <SireMark />
                <span className="title" style={{ color: "#fff" }}>
                  {area.title}
                </span>
              </>
            );

            return (
              <li
                key={area.id}
                style={{ backgroundImage: `url(${area.image})` }}
              >
                {area.link.startsWith("/") ? (
                  <Link to={area.link}>{inner}</Link>
                ) : (
                  <a href={area.link}>{inner}</a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

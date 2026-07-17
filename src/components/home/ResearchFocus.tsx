import { Link } from "react-router-dom";

import SectionHeading from "../common/SectionHeading";
import { useResearchFocus } from "../../hooks/content";

// Alternating brand backgrounds for the default (non-hover) tile state.
const TILE_COLORS = ["var(--sire-blue)", "var(--sire-orange)"];

export default function ResearchFocus() {
  const { data: areas } = useResearchFocus();

  return (
    <section id="research-focus" className="bg-orange-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research Focus"
          intro="Interdisciplinary teams working across sustainable infrastructure, resilient systems, and STEM education."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <Link
              key={area.id}
              to={area.link}
              className="group relative isolate flex min-h-60 flex-col justify-between overflow-hidden rounded-2xl shadow-sm transition hover:shadow-xl"
              style={{ backgroundColor: TILE_COLORS[index % TILE_COLORS.length] }}
            >
              {/* Default state: Morgan State crest watermark */}
              <img
                src="/images/morgan-mark.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 bottom-0 h-[115%] w-auto opacity-30 transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Hover state: research photo */}
              <img
                src={area.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-slate-950/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Title (always visible) */}
              <div className="relative z-10 p-6">
                <h3 className="max-w-[14rem] text-lg font-extrabold uppercase leading-6 tracking-wide text-white">
                  {area.title}
                </h3>
              </div>

              <span className="relative z-10 p-6 pt-0 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

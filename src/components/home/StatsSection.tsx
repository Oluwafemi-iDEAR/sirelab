import { useState } from "react";

import StatModal from "./StatModal";
import { useHomeStats } from "../../hooks/content";
import type { SiteStat } from "../../data/homeStats";

export default function StatsSection() {
  const { data: stats } = useHomeStats();
  const [activeStat, setActiveStat] = useState<SiteStat | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const content = (
              <>
                <dt className="text-sm text-slate-600">{stat.label}</dt>
                <dd className="mt-2 text-3xl font-extrabold text-slate-900">
                  {stat.value}
                </dd>
              </>
            );

            const cardClass =
              "rounded-2xl border border-orange-200 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg";

            return stat.hasModal ? (
              <button
                key={stat.key}
                type="button"
                onClick={() => setActiveStat(stat)}
                className={cardClass}
              >
                {content}
              </button>
            ) : (
              <div key={stat.key} className={cardClass}>
                {content}
              </div>
            );
          })}
        </dl>
      </div>

      <StatModal stat={activeStat} onClose={() => setActiveStat(null)} />
    </section>
  );
}

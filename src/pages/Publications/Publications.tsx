import { useMemo, useState } from "react";

import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import CtaBanner from "../../components/common/CtaBanner";
import PublicationCard from "../../components/publications/PublicationCard";
import { usePublications } from "../../hooks/content";
import type { PublicationType } from "../../data/publications";

const TYPE_OPTIONS: { value: PublicationType; label: string }[] = [
  { value: "journal", label: "Journal" },
  { value: "conference", label: "Conference" },
  { value: "book", label: "Book / Chapter" },
  { value: "report", label: "Report" },
];

export default function Publications() {
  const { data: publications } = usePublications();
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  const years = useMemo(
    () =>
      [...new Set(publications.map((pub) => pub.year))].sort((a, b) => b - a),
    [publications],
  );

  const grouped = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = publications.filter((pub) => {
      const yearOk = !year || String(pub.year) === year;
      const typeOk = !type || pub.type === type;
      const haystack = [
        pub.title,
        pub.authors,
        pub.venue ?? "",
        (pub.tags ?? []).join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const searchOk = !query || haystack.includes(query);
      return yearOk && typeOk && searchOk;
    });

    const sorted = [...filtered].sort(
      (a, b) => b.year - a.year || a.title.localeCompare(b.title),
    );

    const byYear = new Map<number, typeof sorted>();
    for (const pub of sorted) {
      const list = byYear.get(pub.year) ?? [];
      list.push(pub);
      byYear.set(pub.year, list);
    }
    return [...byYear.entries()].sort((a, b) => b[0] - a[0]);
  }, [publications, year, type, search]);

  const hasResults = grouped.length > 0;

  const clearFilters = () => {
    setYear("");
    setType("");
    setSearch("");
  };

  return (
    <>
      <Seo
        title="Publications"
        description="Peer-reviewed journal articles, conference papers, books, and reports from the SIRE research community."
      />

      <PageHero
        eyebrow="Research Output"
        title="Publications"
        intro="Peer-reviewed articles, conference papers, and reports across sustainability, transportation, data science, and STEM education."
      />

      <section className="bg-orange-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="grid gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
              Year
              <select
                value={year}
                onChange={(event) => setYear(event.target.value)}
                className="rounded-xl border border-orange-200 px-3 py-2 font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">All years</option>
                {years.map((y) => (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
              Type
              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="rounded-xl border border-orange-200 px-3 py-2 font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">All types</option>
                {TYPE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
              Search
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Title, author, venue, tag…"
                className="rounded-xl border border-orange-200 px-3 py-2 font-normal text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </label>

            <div className="flex items-end">
              <button
                type="button"
                onClick={clearFilters}
                className="w-full rounded-xl border border-orange-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-orange-50"
              >
                Clear filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="mt-10 space-y-12">
            {hasResults ? (
              grouped.map(([groupYear, pubs]) => (
                <div key={groupYear}>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    {groupYear}
                  </h2>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    {pubs.map((pub) => (
                      <PublicationCard key={pub.id} pub={pub} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-600">
                No results. Try clearing the filters.
              </p>
            )}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Add a new publication"
        text="Faculty and students can submit new work to be listed here."
        buttons={[{ label: "Email us", href: "mailto:info@morgan.edu" }]}
      />
    </>
  );
}

import { useMemo } from "react";

import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import CtaBanner from "../../components/common/CtaBanner";
import { useCourses } from "../../hooks/content";
import type { Course } from "../../data/courses";

export default function Courses() {
  const { data: courses } = useCourses();

  const grouped = useMemo(() => {
    const byDiscipline = new Map<string, Course[]>();
    for (const course of courses) {
      const key = course.discipline ?? "Other";
      const list = byDiscipline.get(key) ?? [];
      list.push(course);
      byDiscipline.set(key, list);
    }
    return [...byDiscipline.entries()];
  }, [courses]);

  return (
    <>
      <Seo
        title="Courses"
        description="Courses and studio modules from the SIRE program applying experiment-centric pedagogy across STEM disciplines."
      />

      <PageHero
        eyebrow="Teaching"
        title="Courses"
        intro="Studio courses and modules applying experiment-centric pedagogy across STEM disciplines."
      />

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {courses.length === 0 ? (
            <p className="text-slate-600">
              Course listings are coming soon. Check back shortly.
            </p>
          ) : (
            <div className="space-y-12">
              {grouped.map(([discipline, list]) => (
                <div key={discipline}>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    {discipline}
                  </h2>
                  <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((course) => (
                      <article
                        key={course.id}
                        className="flex flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm"
                      >
                        {course.code && (
                          <p className="text-sm font-semibold text-orange-600">
                            {course.code}
                          </p>
                        )}
                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          {course.title}
                        </h3>
                        {course.description && (
                          <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                            {course.description}
                          </p>
                        )}
                        {course.term && (
                          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                            {course.term}
                          </p>
                        )}
                        {course.link && course.link !== "#" && (
                          <a
                            href={course.link}
                            className="mt-3 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
                          >
                            Learn more →
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        heading="Interested in our studio courses?"
        text="Ask about enrollment, prerequisites, and hands-on lab kits."
        buttons={[{ label: "Contact us", href: "/contact" }]}
      />
    </>
  );
}

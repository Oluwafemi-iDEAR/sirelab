import type { OutstandingStudent } from "../../data/hallOfFame";

export default function HallOfFameCard({
  student,
}: {
  student: OutstandingStudent;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={student.image}
          alt={student.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {student.award && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow">
            {student.award}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
          {student.program && <span>{student.program}</span>}
          {student.program && student.year && (
            <span className="text-slate-300">•</span>
          )}
          {student.year && <span className="text-slate-500">{student.year}</span>}
        </div>

        <h3 className="mt-2 text-xl font-bold text-slate-900">{student.name}</h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {student.achievement}
        </p>

        {student.quote && (
          <blockquote className="mt-4 border-l-4 border-orange-300 pl-3 text-sm italic text-slate-500">
            “{student.quote}”
          </blockquote>
        )}

        {student.linkedin && (
          <a
            href={student.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            View profile →
          </a>
        )}
      </div>
    </article>
  );
}

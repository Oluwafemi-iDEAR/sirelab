import { useMilestones } from "../../hooks/content";

export default function Timeline() {
  const { data: milestones } = useMilestones();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Milestones
        </h2>

        <ol className="mt-10 space-y-8 border-l-2 border-orange-200 pl-6">
          {milestones.map((milestone) => (
            <li key={milestone.id} className="relative">
              <span className="absolute -left-[1.9rem] top-1 h-4 w-4 rounded-full border-2 border-white bg-orange-500" />
              <p className="text-lg font-bold text-slate-900">
                {milestone.year}
              </p>
              <p className="mt-1 leading-7 text-slate-600">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

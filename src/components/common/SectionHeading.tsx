import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  intro?: ReactNode;
  action?: { label: string; href: string };
};

export default function SectionHeading({
  title,
  intro,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {intro && <p className="mt-3 leading-7 text-slate-600">{intro}</p>}
      </div>

      {action && (
        <Link
          to={action.href}
          className="text-sm font-bold text-orange-600 hover:text-orange-700"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
}

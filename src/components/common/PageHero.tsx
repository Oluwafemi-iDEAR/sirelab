import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-orange-100 via-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {intro}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

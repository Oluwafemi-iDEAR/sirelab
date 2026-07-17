import { Link } from "react-router-dom";

import type { CtaLink } from "../../data/common";

type CtaBannerProps = {
  heading: string;
  text?: string;
  buttons?: CtaLink[];
};

function isInternal(href: string) {
  return href.startsWith("/");
}

export default function CtaBanner({ heading, text, buttons = [] }: CtaBannerProps) {
  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-orange-900 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {heading}
          </h2>

          {text && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-orange-50">
              {text}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {buttons.map((button, index) => {
                const primary = index === 0;
                const className = primary
                  ? "rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  : "rounded-xl border border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/40";

                return isInternal(button.href) ? (
                  <Link key={button.label} to={button.href} className={className}>
                    {button.label}
                  </Link>
                ) : (
                  <a key={button.label} href={button.href} className={className}>
                    {button.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

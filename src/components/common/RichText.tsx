import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { Link } from "react-router-dom";

import type { RichText as RichTextValue } from "../../data/common";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 leading-7 text-slate-600 last:mb-0">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-6 text-2xl font-bold text-slate-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-5 text-xl font-bold text-slate-900">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-orange-300 pl-4 italic text-slate-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-5 list-disc space-y-2 text-slate-600">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-5 list-decimal space-y-2 text-slate-600">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-800">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      if (href.startsWith("/")) {
        return (
          <Link to={href} className="font-semibold text-orange-600 hover:underline">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-orange-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

type RichTextProps = {
  value: RichTextValue | undefined | null;
  className?: string;
};

/**
 * Renders Sanity Portable Text. Also accepts a plain string (static fallback
 * content), which is shown as a single paragraph.
 */
export default function RichText({ value, className }: RichTextProps) {
  if (!value) return null;

  if (typeof value === "string") {
    return <p className={className ?? "leading-7 text-slate-600"}>{value}</p>;
  }

  return (
    <div className={className}>
      <PortableText value={value as never} components={components} />
    </div>
  );
}

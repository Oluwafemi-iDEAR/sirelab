import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-orange-50 text-slate-800">
      <a
        href="#main-content"
        className="sr-only fixed left-3 top-3 z-[100] rounded-lg bg-blue-900 px-4 py-3 font-semibold text-white focus:not-sr-only"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
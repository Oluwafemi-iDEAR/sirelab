import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { useSiteSettings } from "../../hooks/content";

const navigation = [
  { label: "About", to: "/about" },
  { label: "Conferences & Workshops", to: "/conferences-workshops" },
  { label: "Publications", to: "/publications" },
  { label: "Courses", to: "/courses" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: settings } = useSiteSettings();

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-orange-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label="SIRELAB homepage"
          >
            <img
              src={settings.logos.sireLogo}
              alt="SIRELAB"
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-5 text-sm font-semibold text-slate-700 lg:gap-7">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "relative py-2 transition-colors hover:text-orange-600",
                        isActive
                          ? "text-orange-600 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-orange-500"
                          : "",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <img
              src={settings.logos.msuLogo}
              alt="Morgan State University"
              className="hidden h-12 w-auto object-contain md:block"
            />

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300 text-slate-800 transition hover:bg-orange-50 md:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-orange-200 bg-white md:hidden"
        >
          <nav
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block rounded-xl px-4 py-3 text-sm font-semibold transition",
                        isActive
                          ? "bg-orange-100 text-orange-800"
                          : "text-slate-700 hover:bg-orange-50 hover:text-orange-700",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-slate-200 pt-4">
              <img
                src="/images/MSU_Logo.png"
                alt="Morgan State University"
                className="h-12 w-auto"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
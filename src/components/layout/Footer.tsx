import { Link } from "react-router-dom";

import { useSiteSettings } from "../../hooks/content";

function isInternal(href: string) {
  return href.startsWith("/");
}

export default function Footer() {
  const { data: settings } = useSiteSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-orange-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="SIRE home">
              <img
                src={settings.logos.sireLogo}
                alt="SIRE"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              {settings.footerTagline}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {settings.footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-orange-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Resources
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {settings.footerResourceLinks.map((link) =>
                isInternal(link.url) ? (
                  <li key={link.label}>
                    <Link to={link.url} className="hover:text-orange-600">
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a href={link.url} className="hover:text-orange-600">
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Contact
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-slate-600">
              <p>{settings.address}</p>
              <p>
                <a
                  href={`mailto:${settings.primaryEmail}`}
                  className="hover:text-orange-600"
                >
                  {settings.primaryEmail}
                </a>
              </p>
              <p>{settings.phone}</p>
            </address>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500">
              {settings.socials.twitter && (
                <a href={settings.socials.twitter} className="hover:text-orange-600">
                  X / Twitter
                </a>
              )}
              {settings.socials.linkedin && (
                <a href={settings.socials.linkedin} className="hover:text-orange-600">
                  LinkedIn
                </a>
              )}
              {settings.socials.youtube && (
                <a href={settings.socials.youtube} className="hover:text-orange-600">
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {year} SIRE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

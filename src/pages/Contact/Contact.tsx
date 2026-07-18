import Seo from "../../components/common/Seo";
import PageHero from "../../components/common/PageHero";
import CtaBanner from "../../components/common/CtaBanner";
import ContactForm from "../../components/contact/ContactForm";
import { useProgramContacts, useSiteSettings } from "../../hooks/content";

export default function Contact() {
  const { data: settings } = useSiteSettings();
  const { data: programContacts } = useProgramContacts();

  return (
    <>
      <Seo
        title="Contact"
        description="Reach the SIRE team — prospective students, collaborators, and community partners are welcome."
      />

      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        intro="Prospective students, collaborators, and community partners are welcome. Send a message or reach a program lead directly."
      />

      {/* Form + details */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
            <p className="mt-1 text-sm text-slate-500">
              We'll reply within 2–3 business days.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Visit us</h2>
            <dl className="mt-4 space-y-3 text-slate-600">
              <div>
                <dt className="text-sm font-semibold text-slate-900">Address</dt>
                <dd>{settings.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-900">Email</dt>
                <dd>
                  <a
                    href={`mailto:${settings.primaryEmail}`}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    {settings.primaryEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-900">Phone</dt>
                <dd>{settings.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-900">
                  Office hours
                </dt>
                <dd>{settings.officeHours}</dd>
              </div>
            </dl>

            {settings.googleMapsEmbedUrl && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-orange-100">
                <iframe
                  title="SIRE location"
                  src={settings.googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Program contacts */}
      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Program contacts
          </h2>
          <p className="mt-3 text-slate-600">
            Reach the lead for your discipline.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programContacts.map((contact) => (
              <article
                key={contact.id}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {contact.discipline}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Lead: {contact.lead}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  {contact.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Visit a lab or schedule a call"
        text="We love demos and student walk-throughs."
        buttons={[
          { label: "Email us", href: `mailto:${settings.primaryEmail}` },
          { label: "Book a slot", href: "#" },
        ]}
      />
    </>
  );
}

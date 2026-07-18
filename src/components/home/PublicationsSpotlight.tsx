import SectionHeading from "../common/SectionHeading";
import PublicationCard from "../publications/PublicationCard";
import { useFeaturedPublications } from "../../hooks/content";

export default function PublicationsSpotlight() {
  const { data: publications } = useFeaturedPublications();

  if (publications.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Publications Spotlight"
          action={{ label: "Browse all", href: "/publications" }}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "../common/SectionHeading";
import { useTeam } from "../../hooks/content";
import type { TeamMember } from "../../data/team";

const LINK_LABELS: Record<string, string> = {
  profile: "Profile",
  email: "Email",
  scholar: "Google Scholar",
  officeHours: "Office Hours",
};

function memberInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberLinks({ links }: { links: TeamMember["links"] }) {
  if (!links) return null;
  const entries = Object.entries(links).filter(([, value]) => value);
  if (entries.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {entries.map(([key, value]) => (
        <a
          key={key}
          href={value}
          className="text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          {LINK_LABELS[key] ?? key} →
        </a>
      ))}
    </div>
  );
}

export default function PeopleGrid() {
  const { data: team } = useTeam();

  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="People"
          action={{ label: "All contacts", href: "/contact" }}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-xl font-bold text-orange-700">
                  {memberInitials(member.name)}
                </div>
              )}

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-orange-700">
                {member.role}
              </p>
              {member.office && (
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {member.office}
                </p>
              )}
              {member.researchInterests && (
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {member.researchInterests}
                </p>
              )}

              <MemberLinks links={member.links} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

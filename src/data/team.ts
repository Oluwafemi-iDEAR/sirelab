export type TeamMemberLinks = {
  profile?: string;
  email?: string;
  scholar?: string;
  officeHours?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  office?: string;
  researchInterests?: string;
  photo?: string;
  links?: TeamMemberLinks;
};

export const team: TeamMember[] = [
  {
    id: "oludare-owolabi",
    name: "Prof. Oludare Owolabi",
    role: "Director, SIRE; Associate Professor, Department of Civil Engineering",
    office:
      "Center for the Built Environment and Infrastructure Studies (CBEIS), Room 311",
    photo: "/images/prof.jpg",
    links: { profile: "#" },
  },
  {
    id: "team-member-2",
    name: "Dr. First Last",
    role: "Co-Director, SIRE",
    researchInterests: "Resilience, environmental sensing, decision systems",
    links: { email: "mailto:first.last@morgan.edu" },
  },
  {
    id: "team-member-3",
    name: "Dr. First Last",
    role: "Assistant Professor",
    researchInterests: "Health impacts, exposure modeling",
    links: { scholar: "#" },
  },
  {
    id: "team-member-4",
    name: "Your Name",
    role: "Program Coordinator",
    researchInterests: "Admin, events, partnerships",
    links: { officeHours: "#" },
  },
];

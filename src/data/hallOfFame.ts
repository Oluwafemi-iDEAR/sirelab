export type OutstandingStudent = {
  id: string;
  name: string;
  image: string;
  award?: string;
  year?: string;
  program?: string;
  achievement: string;
  quote?: string;
  linkedin?: string;
  featured?: boolean;
};

// Placeholder entries for design/preview. Photos are from Unsplash (free to use,
// no attribution required). Replace with real students in the Studio.
export const hallOfFame: OutstandingStudent[] = [
  {
    id: "hof-amara-2025",
    name: "Amara Johnson",
    award: "Outstanding Undergraduate Researcher",
    year: "Class of 2025",
    program: "Civil Engineering",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&h=1200&fit=crop&crop=faces",
    achievement:
      "Led a field study on low-carbon pavement materials that cut projected lifecycle emissions by 22%. Her work was presented at the 2025 TRB Annual Meeting and earned a national student paper award.",
    quote:
      "SIRE gave me a lab, a mentor, and the confidence to ask bigger questions.",
    linkedin: "https://www.linkedin.com/",
    featured: true,
  },
  {
    id: "hof-daniel-2024",
    name: "Daniel Osei",
    award: "Innovation in Smart Infrastructure",
    year: "Class of 2024",
    program: "Computer Science",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&h=1200&fit=crop&crop=faces",
    achievement:
      "Built an edge-AI sensing platform for real-time urban water-quality monitoring, now piloted across three Baltimore sites. Co-authored two peer-reviewed conference papers before graduating.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "hof-priya-2024",
    name: "Priya Raman",
    award: "Excellence in STEM Education Outreach",
    year: "Class of 2024",
    program: "Engineering Education",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&h=1200&fit=crop&crop=faces",
    achievement:
      "Designed and delivered an experiment-centric pedagogy workshop that reached over 300 K–12 students, expanding the SIRE mobile lab-kit program to four partner schools.",
    quote: "Teaching a concept is the best way to truly understand it.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "hof-marcus-2023",
    name: "Marcus Bello",
    award: "Best Graduate Thesis",
    year: "Class of 2023",
    program: "Transportation Systems",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&h=1200&fit=crop&crop=faces",
    achievement:
      "Developed a machine-learning model predicting accident severity from weather and traffic data, adopted as a decision-support prototype by a regional transportation agency.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "hof-lena-2023",
    name: "Lena Ferreira",
    award: "Community Impact Award",
    year: "Class of 2023",
    program: "Environmental Science",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&h=1200&fit=crop&crop=faces",
    achievement:
      "Led a microplastics exposure study in partnership with local community groups, informing a city-council briefing on urban water safety.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "hof-samuel-2022",
    name: "Samuel Adeyemi",
    award: "Rising Innovator",
    year: "Class of 2022",
    program: "Industrial Engineering",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&h=1200&fit=crop&crop=faces",
    achievement:
      "Optimized a campus energy-management system through systems modeling, delivering an estimated 15% reduction in peak load and launching a student-led sustainability startup.",
    linkedin: "https://www.linkedin.com/",
  },
];

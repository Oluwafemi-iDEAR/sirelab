export type Course = {
  id: string;
  title: string;
  code?: string;
  description?: string;
  term?: string;
  discipline?: string;
  link?: string;
};

// No courses existed in the original static site; these are representative
// starter entries. Manage the real catalog in the CMS.
export const courses: Course[] = [
  {
    id: "cive-301-pavement",
    title: "Pavement Materials & Design",
    code: "CIVE 301",
    description:
      "Fundamentals of pavement materials, structural design, and performance evaluation for sustainable infrastructure.",
    term: "Fall",
    discipline: "Civil Engineering",
    link: "#",
  },
  {
    id: "data-410-ml-transport",
    title: "Machine Learning for Transportation",
    code: "DATA 410",
    description:
      "Applied machine learning for mobility, safety analytics, and data-driven decision-making.",
    term: "Spring",
    discipline: "Computer Science",
    link: "#",
  },
  {
    id: "stem-100-ecp",
    title: "Experiment-Centric Pedagogy Studio",
    code: "STEM 100",
    description:
      "Hands-on, portable-lab studio course applying experiment-centric instruction across STEM disciplines.",
    term: "Fall / Spring",
    discipline: "Engineering Education",
    link: "#",
  },
];

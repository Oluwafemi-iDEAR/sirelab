// Static prose for the About page. Mirrored by the `aboutPage` singleton in Sanity.

export type AboutStat = { label: string; value: string };
export type WhatWeDoCard = { title: string; description: string };

export type AboutContent = {
  hero: { eyebrow: string; heading: string; intro: string };
  about: {
    heading: string;
    paragraphs: string[];
    disciplinesHeading: string;
    disciplines: string[];
    studentPathwayHeading: string;
    studentPathway: string;
  };
  mission: { heading: string; text: string; bullets: string[] };
  vision: { heading: string; text: string; stats: AboutStat[] };
  whatWeDo: { heading: string; cards: WhatWeDoCard[] };
};

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "About Us",
    heading: "We translate STEM research into community impact.",
    intro:
      "Our faculty, students, and partners collaborate across disciplines to deliver solutions in sustainability, health, infrastructure, and data-driven decision-making.",
  },
  about: {
    heading: "About SIRE",
    paragraphs: [
      "SIRE (Adapting an Experiment-centric Teaching Approach to Increase Student Achievement in Multiple STEM Disciplines) is an evidence-based, high-impact initiative that adapts Experimental Centric-based Instructional Pedagogy (ECP) — formerly Mobile Hands-On Studio Technology & Pedagogy — to improve STEM achievement and motivation, particularly among African American students at Morgan State University.",
      'Under the Development & Implementation Tier for Engaged Student Learning (Level II), we develop, implement, and assess active ECP curricula and portable, hands-on learning devices. The approach enables "tinkering" and anytime/anywhere exploration of STEM principles, devices, and systems.',
    ],
    disciplinesHeading: "Disciplines involved",
    disciplines: [
      "Civil Engineering",
      "Industrial Engineering",
      "Transportation Systems",
      "Biology",
      "Computer Science",
      "Chemistry",
      "Physics",
    ],
    studentPathwayHeading: "Student pathway",
    studentPathway:
      "New curricula and mobile lab kits support selected cohorts from freshman through senior year, expanding studio pedagogy beyond traditional equipment and cost barriers.",
  },
  mission: {
    heading: "Mission",
    text: "Our mission is to adopt and scale evidence-based, high-impact pedagogies — centered on Experimental Centric-based Instruction (ECP) — to elevate STEM learning outcomes and motivation. We develop and deploy affordable technology and learning materials that remove equipment and cost barriers so students can explore and build anyplace, anytime.",
    bullets: [
      "Educate the next generation of problem-solvers",
      "Build equitable technology for communities",
      "Share open data, tools, and best practices",
    ],
  },
  vision: {
    heading: "Vision",
    text: "Be a regional leader for applied STEM — connecting labs, classrooms, and industry to accelerate sustainability and resilience.",
    stats: [
      { label: "Active Labs", value: "6" },
      { label: "Publications", value: "120+" },
    ],
  },
  whatWeDo: {
    heading: "What We Do",
    cards: [
      {
        title: "AI & IoT for Sustainability",
        description:
          "Field-deployed sensing for waste, air, and water systems; edge ML; dashboards for decision-makers.",
      },
      {
        title: "Materials & Built Environment",
        description:
          "Low-carbon materials, acoustics, and resilient infrastructure performance.",
      },
      {
        title: "Health & Environment",
        description:
          "Microplastics, exposure science, and the effects of noise on mental health.",
      },
      {
        title: "Data Science & Risk",
        description:
          "Forecasting, uncertainty quantification, and decision support for policy and planning.",
      },
      {
        title: "Education & Outreach",
        description:
          "K–12 pipeline, community partnerships, and inclusive excellence initiatives.",
      },
      {
        title: "Facilities",
        description:
          "Prototyping shop, sensing lab, field kits, and a compute cluster for data-intensive work.",
      },
    ],
  },
};

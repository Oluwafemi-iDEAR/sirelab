export type PublicationType = "journal" | "conference" | "book" | "report";

export type PublicationLinks = {
  pdf?: string;
  doi?: string;
  slides?: string;
  video?: string;
};

export type Publication = {
  id: string;
  year: number;
  type: PublicationType;
  title: string;
  authors: string; // semicolon-separated
  venue?: string;
  doi?: string;
  openAccess?: boolean;
  links?: PublicationLinks;
  tags?: string[];
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    id: "pub-random-forest-severity-2025",
    year: 2025,
    type: "journal",
    title: "Predicting Accident Severity using Random Forest",
    authors: "Adekunle, A.; Doe, J.; Lee, K.",
    venue: "International Journal of Computing & Informatics",
    doi: "10.1234/ijci.2025.001",
    openAccess: true,
    links: { pdf: "#", doi: "https://doi.org/10.1234/ijci.2025.001" },
    tags: ["machine learning", "transportation"],
    featured: true,
  },
  {
    id: "pub-iot-water-quality-2024",
    year: 2024,
    type: "conference",
    title: "IoT Edge Sensing for Urban Water Quality",
    authors: "Smith, J.; Mensah, A.; Rivera, L.",
    venue: "IEEE IoT World Forum",
    links: { slides: "#", video: "#" },
    tags: ["iot", "water"],
  },
  {
    id: "pub-catastrophe-bond-2023",
    year: 2023,
    type: "journal",
    title: "A random forest approach for catastrophe bond spreads",
    authors: "Makariou, D.; Barrieu, P.; Chen, Y.",
    venue: "Insurance: Mathematics and Economics",
    doi: "10.1016/j.insmatheco.2021.07.005",
    links: { doi: "https://doi.org/10.1016/j.insmatheco.2021.07.005" },
    tags: ["risk", "finance"],
    featured: true,
  },
  {
    id: "pub-driver-adaptation-2013",
    year: 2013,
    type: "journal",
    title: "Driver adaptation to inclement weather in Canada",
    authors: "Andrey, J.; Mills, B.; Leahy, M.; Suggett, J.",
    venue: "Journal of Transport Geography",
    doi: "10.1016/j.jtrangeo.2013.07.005",
    links: { doi: "https://doi.org/10.1016/j.jtrangeo.2013.07.005" },
    tags: ["transportation", "weather"],
    featured: true,
  },
];

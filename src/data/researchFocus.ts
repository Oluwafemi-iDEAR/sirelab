export type ResearchArea = {
  id: string;
  title: string;
  image: string;
  link: string;
  shortDescription?: string;
};

// Homepage "Research Focus" grid + About "What We Do" tiles.
export const researchFocus: ResearchArea[] = [
  {
    id: "geotechnical-pavement",
    title: "Geotechnical Engineering & Pavement Design",
    image: "/images/Geotechnical_Engineering_&_Pavement_Design.png",
    link: "/publications",
  },
  {
    id: "airport-resilience",
    title: "Airport Resilience & Digital Twins",
    image: "/images/airport_resilience_&_digital_twins.png",
    link: "/publications",
  },
  {
    id: "sustainable-materials",
    title: "Sustainable Infrastructure Materials",
    image: "/images/sustainable_infrastructure_materials.png",
    link: "/publications",
  },
  {
    id: "digital-engineering",
    title: "Digital Engineering & Emerging Technology",
    image: "/images/digital_engineering&_emerging_technology.png",
    link: "/publications",
  },
  {
    id: "engineering-education",
    title: "Engineering Education in STEM Fields",
    image: "/images/engineering_education_in_STEM_fields.png",
    link: "/publications",
  },
  {
    id: "transportation-innovation",
    title: "Transportation Engineering & Smart Innovation",
    image: "/images/transportation_engineering_&_smart_innovation.png",
    link: "/publications",
  },
];

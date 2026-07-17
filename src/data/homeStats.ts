import type { RichText } from "./common";

export type Student = {
  name: string;
  linkedin?: string;
};

export type SiteStat = {
  key: "labs" | "publications" | "students" | "partners";
  label: string;
  value: string;
  hasModal: boolean;
  modalTitle?: string;
  modalContent?: RichText;
  hasSearch?: boolean;
  students?: Student[];
};

export const students: Student[] = [
  { name: "Pelumi Abiodun", linkedin: "https://www.linkedin.com/" },
  { name: "Grace Balogun", linkedin: "https://www.linkedin.com/" },
  { name: "Adeolu Banjo", linkedin: "https://www.linkedin.com/" },
  { name: "Sarah Adeyemi", linkedin: "https://www.linkedin.com/" },
  { name: "Michael Okegbola", linkedin: "https://www.linkedin.com/" },
  {
    name: "Oluwafemi Ifesanmi",
    linkedin: "https://portfolio-website-pink-three-85.vercel.app/index.html",
  },
  { name: "Blessing Sasanya", linkedin: "https://www.linkedin.com/" },
  { name: "Akriti Dhakal", linkedin: "https://www.linkedin.com/" },
  { name: "Jeremiah Akinlade", linkedin: "https://www.linkedin.com/" },
  { name: "Abiola Ajala", linkedin: "https://www.linkedin.com/" },
  { name: "Blessing Adeika", linkedin: "https://www.linkedin.com/" },
  { name: "Joseph Aina", linkedin: "https://www.linkedin.com/" },
  { name: "Michael Ige", linkedin: "https://www.linkedin.com/" },
  { name: "Samuel Akosile", linkedin: "https://www.linkedin.com/" },
  { name: "Jeremiah Ibiyemi", linkedin: "https://www.linkedin.com/" },
  { name: "Samuel Fakolade", linkedin: "https://www.linkedin.com/" },
  { name: "Glory Adeogun", linkedin: "https://www.linkedin.com/" },
  { name: "Julius Etuke", linkedin: "https://www.linkedin.com/" },
  { name: "Ayobami Dunmoye", linkedin: "https://www.linkedin.com/" },
  { name: "Tolu Abiri", linkedin: "https://www.linkedin.com/" },
  { name: "Johnson Odumosu", linkedin: "https://www.linkedin.com/" },
  { name: "Obiageli Nwachukwu", linkedin: "https://www.linkedin.com/" },
  { name: "Tijesunimi Adeyemi", linkedin: "https://www.linkedin.com/" },
  { name: "Victory Momoh", linkedin: "https://www.linkedin.com/" },
  { name: "Alice Adeluola", linkedin: "https://www.linkedin.com/" },
  { name: "Cornelius Darko", linkedin: "https://www.linkedin.com/" },
  { name: "Oluwafisayo Adeolu", linkedin: "https://www.linkedin.com/" },
  { name: "Kehinde Omosor", linkedin: "https://www.linkedin.com/" },
  { name: "Hannah Abedoh", linkedin: "https://www.linkedin.com/" },
  { name: "Toluwani Oyedepo", linkedin: "https://www.linkedin.com/" },
  { name: "Olayinka Olaniyan", linkedin: "https://www.linkedin.com/" },
  { name: "Israel Jimson", linkedin: "https://www.linkedin.com/" },
  { name: "John Onafowokan", linkedin: "https://www.linkedin.com/" },
  { name: "Justus Nyangoka", linkedin: "https://www.linkedin.com/" },
  { name: "Aakriti Shakya", linkedin: "https://www.linkedin.com/" },
  { name: "Olorunfunmi Shobowale", linkedin: "https://www.linkedin.com/" },
  { name: "Seyi Kolawole", linkedin: "https://www.linkedin.com/" },
  { name: "Kingsley Mathew", linkedin: "https://www.linkedin.com/" },
  { name: "Theophilus Akwemoh", linkedin: "https://www.linkedin.com/" },
  { name: "John Ujah", linkedin: "https://www.linkedin.com/" },
  { name: "Oyinkansola Aladeokin", linkedin: "https://www.linkedin.com/" },
  { name: "Benjamin Yesufu", linkedin: "https://www.linkedin.com/" },
  { name: "Ebunoluwa Otunubi", linkedin: "https://www.linkedin.com/" },
  { name: "Benjamin Famewo", linkedin: "https://www.linkedin.com/" },
  { name: "Raymond Olamijulo", linkedin: "https://www.linkedin.com/" },
  { name: "Donald Owolabi", linkedin: "https://www.linkedin.com/" },
  { name: "Raymond Mba", linkedin: "https://www.linkedin.com/" },
  { name: "Blessing Omolola", linkedin: "https://www.linkedin.com/" },
  { name: "Lekan Adewale", linkedin: "https://www.linkedin.com/" },
  { name: "Micheal Olatunji", linkedin: "https://www.linkedin.com/" },
  { name: "Nkechi Okafor", linkedin: "https://www.linkedin.com/" },
  { name: "Oluwatobi Adebayo", linkedin: "https://www.linkedin.com/" },
  { name: "Precious Eze", linkedin: "https://www.linkedin.com/" },
  { name: "Ruth Akinlade", linkedin: "https://www.linkedin.com/" },
  { name: "Samuel Oladipo", linkedin: "https://www.linkedin.com/" },
  { name: "Tosin Adeyemi", linkedin: "https://www.linkedin.com/" },
  { name: "Uchechukwu Nwosu", linkedin: "https://www.linkedin.com/" },
  { name: "Victor Adebayo", linkedin: "https://www.linkedin.com/" },
];

export const homeStats: SiteStat[] = [
  {
    key: "labs",
    label: "Active Labs",
    value: "6",
    hasModal: true,
    modalTitle: "Active Research Labs",
    modalContent:
      "SIRE currently operates six active interdisciplinary laboratories: Transportation Analytics Lab, Smart Infrastructure Lab, AI & Data Science Lab, Environmental Sustainability Lab, STEM Education Innovation Lab, and Systems Optimization Lab.",
  },
  {
    key: "publications",
    label: "Publications",
    value: "120+",
    hasModal: true,
    modalTitle: "Research Publications",
    modalContent:
      "Our faculty and students have contributed more than 120 peer-reviewed publications spanning engineering, computer science, biology, transportation, sustainability, and STEM education.",
  },
  {
    key: "students",
    label: "Students Mentored",
    value: "250+",
    hasModal: true,
    hasSearch: true,
    modalTitle: "Students Mentored",
    modalContent:
      "More than 250 students have participated in SIRE programs through research assistantships, capstone projects, internships, workshops, and mentoring initiatives.",
    students,
  },
  {
    key: "partners",
    label: "Industry Partners",
    value: "15",
    hasModal: true,
    modalTitle: "Industry Partners",
    modalContent:
      "SIRE collaborates with over 15 industry and government partners to provide students with real-world experiences, internships, and collaborative research opportunities.",
  },
];

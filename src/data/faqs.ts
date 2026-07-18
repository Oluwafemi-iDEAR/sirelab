import type { RichText } from "./common";

export type Faq = {
  id: string;
  question: string;
  answer: RichText;
  defaultOpen?: boolean;
};

export const faqs: Faq[] = [
  {
    id: "faq-get-involved",
    question: "How can students get involved?",
    answer:
      "Join a lab, propose a capstone, apply for paid research assistantships, or volunteer at outreach events.",
    defaultOpen: true,
  },
  {
    id: "faq-industry-partners",
    question: "Do you partner with industry or agencies?",
    answer:
      "Yes — our teams collaborate on pilots, internships, and sponsored research. Contact us to start a conversation.",
  },
  {
    id: "faq-publications-datasets",
    question: "Where can I find publications and datasets?",
    answer:
      "Browse our Publications page; selected datasets and code are linked from paper pages.",
  },
];

// GROQ queries. Each projection maps Sanity fields onto the static type
// contracts declared in `src/data/*` so components consume one shape regardless
// of the source.

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  footerTagline,
  address,
  phone,
  officeHours,
  primaryEmail,
  socials,
  googleMapsEmbedUrl,
  "logos": {
    "sireLogo": logos.sireLogo.asset->url,
    "sireIcon": logos.sireIcon.asset->url,
    "msuLogo": logos.msuLogo.asset->url,
    "favicon": logos.favicon.asset->url
  },
  footerExploreLinks[]{label, href},
  footerResourceLinks[]{label, url},
  web3formsAccessKey
}`;

export const HERO_SLIDES_QUERY = `*[_type == "heroSlide"] | order(orderRank asc){
  "id": _id,
  eyebrow,
  title,
  description,
  "image": image.asset->url,
  imagePosition,
  ctaPrimary{label, href},
  ctaSecondary{label, href}
}`;

export const HOME_STATS_QUERY = `*[_type == "siteStat"] | order(orderRank asc){
  key,
  label,
  value,
  hasModal,
  modalTitle,
  modalContent,
  hasSearch,
  "students": students[]->{name, linkedin}
}`;

export const RESEARCH_FOCUS_QUERY = `*[_type == "researchArea" && isFocusTile == true] | order(orderRank asc){
  "id": _id,
  title,
  "image": image.asset->url,
  "link": coalesce(link.href, "/publications"),
  shortDescription
}`;

export const RESEARCH_HIGHLIGHTS_QUERY = `*[_type == "researchArea" && isHighlight == true] | order(orderRank asc){
  "id": _id,
  title,
  "description": shortDescription,
  "image": image.asset->url,
  "link": link{label, href}
}`;

export const PUBLICATIONS_QUERY = `*[_type == "publication"] | order(year desc, title asc){
  "id": _id,
  year,
  type,
  title,
  authors,
  venue,
  doi,
  openAccess,
  links,
  tags,
  featured
}`;

export const FEATURED_PUBLICATIONS_QUERY = `*[_type == "publication" && featured == true] | order(year desc)[0...3]{
  "id": _id,
  year,
  type,
  title,
  authors,
  venue,
  doi,
  openAccess,
  links,
  tags,
  featured
}`;

export const EVENTS_QUERY = `*[_type == "event"]{
  "id": _id,
  status,
  title,
  "image": image.asset->url,
  date,
  dateLabel,
  description,
  tags,
  resourceLinks[]{label, url},
  cta{label, "href": url}
}`;

export const TEAM_QUERY = `*[_type == "teamMember"] | order(orderRank asc){
  "id": _id,
  name,
  role,
  office,
  researchInterests,
  "photo": photo.asset->url,
  links
}`;

export const MILESTONES_QUERY = `*[_type == "milestone"] | order(orderRank asc){
  "id": _id,
  year,
  description
}`;

export const FAQS_QUERY = `*[_type == "faq"] | order(orderRank asc){
  "id": _id,
  question,
  answer,
  defaultOpen
}`;

export const PROGRAM_CONTACTS_QUERY = `*[_type == "programContact"] | order(orderRank asc){
  "id": _id,
  "discipline": coalesce(discipline->name, disciplineName),
  lead,
  email
}`;

export const COURSES_QUERY = `*[_type == "course"] | order(orderRank asc){
  "id": _id,
  title,
  code,
  description,
  term,
  "discipline": coalesce(discipline->name, disciplineName),
  link
}`;

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  hero,
  about,
  mission,
  vision,
  whatWeDo
}`;

import { aboutContent } from "../data/aboutContent";
import type { AboutContent } from "../data/aboutContent";
import { courses } from "../data/courses";
import type { Course } from "../data/courses";
import { events } from "../data/events";
import type { SireEvent } from "../data/events";
import { faqs } from "../data/faqs";
import type { Faq } from "../data/faqs";
import { heroSlides } from "../data/heroSlides";
import type { HeroSlide } from "../data/heroSlides";
import { homeStats } from "../data/homeStats";
import type { SiteStat } from "../data/homeStats";
import { milestones } from "../data/milestones";
import type { Milestone } from "../data/milestones";
import { programContacts } from "../data/programContacts";
import type { ProgramContact } from "../data/programContacts";
import { publications } from "../data/publications";
import type { Publication } from "../data/publications";
import { researchFocus } from "../data/researchFocus";
import type { ResearchArea } from "../data/researchFocus";
import { researchHighlights } from "../data/researchHighlights";
import type { ResearchHighlight } from "../data/researchHighlights";
import { siteSettings } from "../data/siteSettings";
import type { SiteSettings } from "../data/siteSettings";
import { team } from "../data/team";
import type { TeamMember } from "../data/team";
import {
  ABOUT_PAGE_QUERY,
  COURSES_QUERY,
  EVENTS_QUERY,
  FAQS_QUERY,
  FEATURED_PUBLICATIONS_QUERY,
  HERO_SLIDES_QUERY,
  HOME_STATS_QUERY,
  MILESTONES_QUERY,
  PROGRAM_CONTACTS_QUERY,
  PUBLICATIONS_QUERY,
  RESEARCH_FOCUS_QUERY,
  RESEARCH_HIGHLIGHTS_QUERY,
  SITE_SETTINGS_QUERY,
  TEAM_QUERY,
} from "../lib/queries";
import { useSanityData } from "./useSanityData";

export const useSiteSettings = () =>
  useSanityData<SiteSettings>("siteSettings", SITE_SETTINGS_QUERY, siteSettings);

export const useHeroSlides = () =>
  useSanityData<HeroSlide[]>("heroSlides", HERO_SLIDES_QUERY, heroSlides);

export const useHomeStats = () =>
  useSanityData<SiteStat[]>("homeStats", HOME_STATS_QUERY, homeStats);

export const useResearchFocus = () =>
  useSanityData<ResearchArea[]>(
    "researchFocus",
    RESEARCH_FOCUS_QUERY,
    researchFocus,
  );

export const useResearchHighlights = () =>
  useSanityData<ResearchHighlight[]>(
    "researchHighlights",
    RESEARCH_HIGHLIGHTS_QUERY,
    researchHighlights,
  );

export const usePublications = () =>
  useSanityData<Publication[]>("publications", PUBLICATIONS_QUERY, publications);

export const useFeaturedPublications = () =>
  useSanityData<Publication[]>(
    "featuredPublications",
    FEATURED_PUBLICATIONS_QUERY,
    publications.filter((p) => p.featured).slice(0, 3),
  );

export const useEvents = () =>
  useSanityData<SireEvent[]>("events", EVENTS_QUERY, events);

export const useTeam = () =>
  useSanityData<TeamMember[]>("team", TEAM_QUERY, team);

export const useMilestones = () =>
  useSanityData<Milestone[]>("milestones", MILESTONES_QUERY, milestones);

export const useFaqs = () => useSanityData<Faq[]>("faqs", FAQS_QUERY, faqs);

export const useProgramContacts = () =>
  useSanityData<ProgramContact[]>(
    "programContacts",
    PROGRAM_CONTACTS_QUERY,
    programContacts,
  );

export const useCourses = () =>
  useSanityData<Course[]>("courses", COURSES_QUERY, courses);

export const useAboutContent = () =>
  useSanityData<AboutContent>("aboutPage", ABOUT_PAGE_QUERY, aboutContent);

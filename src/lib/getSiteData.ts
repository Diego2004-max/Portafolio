import es from "../data/es.json";
import en from "../data/en.json";
import { SiteData } from "../types/siteData";

export type Lang = "es" | "en";

const fallback: SiteData = {
  nav: {
    home: "",
    about: "",
    academic: "",
    projects: "",
    testimonials: "",
    skills: "",
    contact: "",
  },

  cards: {
    about: "",
    academic: "",
    projects: "",
    testimonials: "",
    skills: "",
    contact: "",
  },

  hero: {
    nameLine1: "",
    nameLine2: "",
    subtitle: "",
    cvLabel: "",
  },

  about: {
    intro: "",
    activities: [],
  },

  academic: {
    studies: [],
  },

  projects: {
    list: [],
  },

  testimonials: {
    list: [],
  },

  skills: {
    title: "",
    languagesTitle: "",
    frameworksTitle: "",
    toolsTitle: "",
    softSkillsTitle: "",
    languages: {},
    frameworks: {},
    tools: {},
    softSkillsImage: "",
  }
};

export function getSiteData(lang: Lang): SiteData {
  const data = lang === "en" ? (en as SiteData) : (es as SiteData);

  return {
    nav: data.nav ?? fallback.nav,
    cards: data.cards ?? fallback.cards,
    hero: data.hero ?? fallback.hero,
    about: data.about ?? fallback.about,
    academic: data.academic ?? fallback.academic,
    projects: data.projects ?? fallback.projects,
    testimonials: data.testimonials ?? fallback.testimonials,
    skills: data.skills ?? fallback.skills,
  };
}

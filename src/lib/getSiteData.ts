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
    contact: "",
  },

  cards: {
    about: "",
    academic: "",
    projects: "",
    testimonials: "",
    contact: "",
  },

  hero: {
    nameLine1: "",
    nameLine2: "",
    subtitle: "",
    cvLabel: "",
  },

  socials: [],

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
};

export function getSiteData(lang: Lang): SiteData {
  const data = lang === "en" ? (en as SiteData) : (es as SiteData);

  return {
    nav: data.nav ?? fallback.nav,
    cards: data.cards ?? fallback.cards,
    hero: data.hero ?? fallback.hero,
    socials: data.socials ?? fallback.socials,
    about: data.about ?? fallback.about,
    academic: data.academic ?? fallback.academic,
    projects: data.projects ?? fallback.projects,
    testimonials: data.testimonials ?? fallback.testimonials,
  };
}

export type Lang = "es" | "en" | "fr";

export interface NavItem {
  slug: string;
  label: string;
}

export interface HeroData {
  nameLine1: string;
  nameLine2: string;
  subtitle: string;
  cvLabel: string;
}

export type CardKey = "about" | "academic" | "projects" | "testimonials" | "contact";

export interface CardData {
  key: CardKey;
  icon: string;
  href: string;
  title: string;
  preview: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteData {
  nav: NavItem[];
  hero: HeroData;
  cards: CardData[];
  socials: SocialLink[];
  footerCarousel: string[];
}

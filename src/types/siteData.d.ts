export interface SiteData {
  nav: {
    home: string;
    about: string;
    academic: string;
    projects: string;
    testimonials: string;
    skills: string;
    contact: string;
  };

  cards: {
    about: string;
    academic: string;
    projects: string;
    testimonials: string;
    skills: string;
    contact: string;
  };

  hero: {
    nameLine1: string;
    nameLine2: string;
    subtitle: string;
    cvLabel: string;
  };

  about: {
    intro: string;
    activities: { titulo: string; descripcion: string; imagen: string }[];
  };

  academic: {
    studies: string[];
  };

  projects: {
    list: { title: string; desc: string; img: string }[];
  };

  testimonials: {
    list: { nombre: string; texto: string; img: string }[];
  };

  skills: {
    title: string;
    languagesTitle: string;
    frameworksTitle: string;
    toolsTitle: string;
    softSkillsTitle: string;
    languages: Record<string, string>;
    frameworks: Record<string, string>;
    tools: Record<string, string>;
    softSkillsImage: string;
  };
}

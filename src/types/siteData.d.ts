export interface SiteData {
  hero: {
    nameLine1: string;
    nameLine2: string;
    subtitle: string;
    cvLabel: string;
  };

  cards: {
    about: string;
    academic: string;
    projects: string;
    testimonials: string;
    contact: string;
  };

  nav: {
    home: string;
    about: string;
    academic: string;
    projects: string;
    testimonials: string;
    contact: string;
  };

  about: {
    intro: string;
    activities: {
      titulo: string;
      descripcion: string;
      imagen: string;
    }[];
  };

  academic: {
    studies: string[];
  };

  projects: {
    list: {
      title: string;
      desc: string;
      img: string;
    }[];
  };

  testimonials: {
    list: {
      nombre: string;
      texto: string;
      img: string;
    }[];
  };
}

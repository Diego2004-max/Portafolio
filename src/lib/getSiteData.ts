import es from "../data/es.json";
import en from "../data/en.json";
import { SiteData } from "../types/siteData";

export type Lang = "es" | "en";

export function getSiteData(lang: Lang): SiteData {
  switch (lang) {
    case "en":
      return en as SiteData;
    case "es":
    default:
      return es as SiteData;
  }
}

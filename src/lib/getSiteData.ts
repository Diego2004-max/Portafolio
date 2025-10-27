import es from "../data/es.json";
import en from "../data/en.json";

export function getSiteData(lang: string) {
  const data = lang === "en" ? en : es;
  return data; 
}

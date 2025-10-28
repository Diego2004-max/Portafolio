import es from "../data/es.json";
import en from "../data/en.json";

export type Lang = "es" | "en";

/**
 * Retorna los datos del idioma seleccionado.
 * Si el idioma no existe, se usa español por defecto.
 */
export function getSiteData(lang: Lang) {
  switch (lang) {
    case "en":
      return en;
    case "es":
    default:
      return es;
  }
}

// src/lib/getSiteData.ts
import type { Lang, SiteData } from '@/types/content';
import es from '@/data/es.json';
import en from '@/data/en.json';

const dict: Record<Lang, SiteData> = {
  es: es as SiteData,
  en: en as SiteData,
};

export function getSiteData(lang: Lang): SiteData {
  return dict[lang] ?? (es as SiteData);
}

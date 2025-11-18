import CardBase from './CardBase';
import { useLanguage } from '../../../context/LanguageContext';
import { getSiteData } from '../../../lib/getSiteData';

export default function AboutCard() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <CardBase
      icon="👤"
      title={t.nav.about}
      href="/about"
      preview={t.cards.about}
    />
  );
}

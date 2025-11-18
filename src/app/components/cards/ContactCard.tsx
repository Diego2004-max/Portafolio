import CardBase from './CardBase';
import { useLanguage } from '../../../context/LanguageContext';
import { getSiteData } from '../../../lib/getSiteData';

export default function ContactCard() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <CardBase
      icon="📞"
      title={t.nav.contact}
      href="/contact"
      preview={t.cards.contact}
    />
  );
}

import CardBase from './CardBase';
import { useLanguage } from '../../../context/LanguageContext';
import { getSiteData } from '../../../lib/getSiteData';

export default function AcademicCard() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <CardBase
      icon="🎓"
      title={t.nav.academic}
      href="/academic"
      preview={t.cards.academic}
    />
  );
}

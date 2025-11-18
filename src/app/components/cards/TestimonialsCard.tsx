import CardBase from './CardBase';
import { useLanguage } from '../../../context/LanguageContext';
import { getSiteData } from '../../../lib/getSiteData';

export default function TestimonialsCard() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <CardBase
      icon="💬"
      title={t.nav.testimonials}
      href="/testimonials"
      preview={t.cards.testimonials}
    />
  );
}

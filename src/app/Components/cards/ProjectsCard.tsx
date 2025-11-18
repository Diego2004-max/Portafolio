import CardBase from './CardBase';
import { useLanguage } from '../../../context/LanguageContext';
import { getSiteData } from '../../../lib/getSiteData';

export default function ProjectsCard() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <CardBase
      icon="💡"
      title={t.nav.projects}
      href="/projects"
      preview={t.cards.projects}
    />
  );
}

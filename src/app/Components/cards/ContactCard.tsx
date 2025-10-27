'use client'
import { useTheme } from '@/context/ThemeContext';
import { getSiteData } from '@/lib/getSiteData';
import CardBase from './CardBase';

export default function ContactCard() {
  const { language } = useTheme();
  const data = getSiteData(language).cards.find(c => c.key === 'contact')!;
  return <CardBase icon={data.icon} title={data.title} href={data.href} preview={data.preview} accent="orange" />;
}

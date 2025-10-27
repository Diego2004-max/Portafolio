'use client'
import { useTheme } from '@/context/ThemeContext';
import { getSiteData } from '@/lib/getSiteData';
import CardBase from './CardBase';

export default function TestimonialsCard() {
  const { language } = useTheme();
  const data = getSiteData(language).cards.find(c => c.key === 'testimonials')!;
  return <CardBase icon={data.icon} title={data.title} href={data.href} preview={data.preview} accent="green" />;
}

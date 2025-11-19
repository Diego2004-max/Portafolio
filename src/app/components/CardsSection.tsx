'use client';
import { motion, Variants } from 'framer-motion';
import CardBase from './cards/CardBase';

export default function CardsSection({ t }: any) {

  const cards = [
    { icon: '👤', title: t.nav.about, preview: t.cards?.about, href: '/about' },
    { icon: '🎓', title: t.nav.academic, preview: t.cards?.academic, href: '/academic' },
    { icon: '💡', title: t.nav.projects, preview: t.cards?.projects, href: '/projects' },
    { icon: '💬', title: t.nav.testimonials, preview: t.cards?.testimonials, href: '/testimonials' },
    { icon: '📞', title: t.nav.contact, preview: t.cards?.contact, href: '/contact' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
      className="flex flex-wrap justify-center gap-5 mt-10"
    >
      {cards.map((c, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
          }}
        >
          <CardBase {...c} />
        </motion.div>
      ))}
    </motion.div>
  );
}

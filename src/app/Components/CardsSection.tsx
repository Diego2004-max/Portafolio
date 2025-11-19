"use client";

import { motion, Variants } from "framer-motion";
import CardBase from "./cards/CardBase";

interface CardsSectionProps {
  t: any;
}

export default function CardsSection({ t }: CardsSectionProps) {
  const cards = [
    { icon: "👤", title: t.nav.about, preview: t.cards?.about, href: "/about" },
    { icon: "🎓", title: t.nav.academic, preview: t.cards?.academic, href: "/academic" },
    { icon: "💡", title: t.nav.projects, preview: t.cards?.projects, href: "/projects" },
    { icon: "💬", title: t.nav.testimonials, preview: t.cards?.testimonials, href: "/testimonials" },
    { icon: "🛠", title: t.nav.skills, preview: t.cards?.skills, href: "/skills" },
    { icon: "📞", title: t.nav.contact, preview: t.cards?.contact, href: "/contact" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardAnim: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-6 mt-10"
    >
      {cards.map((c, i) => (
        <motion.div key={i} variants={cardAnim}>
          <CardBase icon={c.icon} title={c.title} href={c.href} preview={c.preview} />
        </motion.div>
      ))}
    </motion.div>
  );
}

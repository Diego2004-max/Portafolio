'use client';
import { motion, Variants } from 'framer-motion';
import AboutCard from './cards/AboutCard';
import AcademicCard from './cards/AcademicCard';
import ProjectsCard from './cards/ProjectsCard';
import TestimonialsCard from './cards/TestimonialsCard';
import ContactCard from './cards/ContactCard';

export default function CardsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-4 mt-8"
    >
      <motion.div variants={card}><AboutCard /></motion.div>
      <motion.div variants={card}><AcademicCard /></motion.div>
      <motion.div variants={card}><ProjectsCard /></motion.div>
      <motion.div variants={card}><TestimonialsCard /></motion.div>
      <motion.div variants={card}><ContactCard /></motion.div>
    </motion.div>
  );
}

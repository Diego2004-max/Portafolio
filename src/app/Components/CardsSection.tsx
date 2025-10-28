'use client';
import { motion } from 'framer-motion';
import AboutCard from './cards/AboutCard';
import AcademicCard from './cards/AcademicCard';
import ProjectsCard from './cards/ProjectsCard';
import TestimonialsCard from './cards/TestimonialsCard';
import ContactCard from './cards/ContactCard';

export default function CardsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center"
    >
      <AboutCard />
      <AcademicCard />
      <ProjectsCard />
      <TestimonialsCard />
      <ContactCard />
    </motion.section>
  );
}

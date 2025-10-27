'use client';
import AboutCard from "./cards/AboutCard";
import AcademicCard from "./cards/AcademicCard";
import ProjectsCard from "./cards/ProjectsCard";
import TestimonialsCard from "./cards/TestimonialsCard";
import ContactCard from "./cards/ContactCard";
import { motion } from "framer-motion";

export default function CardsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-6xl mx-auto pb-16 px-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
        <AboutCard />
        <AcademicCard />
        <ProjectsCard />
        <TestimonialsCard />
        <ContactCard />
      </div>
    </motion.section>
  );
}

'use client';
import { motion } from "framer-motion";
import AboutCard from "./cards/AboutCard";
import AcademicCard from "./cards/AcademicCard";
import ProjectsCard from "./cards/ProjectsCard";
import TestimonialsCard from "./cards/TestimonialsCard";
import ContactCard from "./cards/ContactCard";

export default function CardsSection() {
  return (
    <motion.section
      id="cards"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto mt-14 px-4 sm:px-8"
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 
                   place-items-center"
      >
        <AboutCard />
        <AcademicCard />
        <ProjectsCard />
        <TestimonialsCard />
        <ContactCard />
      </div>
    </motion.section>
  );
}

'use client';
import AboutCard from "./cards/AboutCard";
import AcademicCard from "./cards/AcademicCard";
import ProjectsCard from "./cards/ProjectsCard";
import TestimonialCard from "./cards/TestimonialCard";
import ContactCard from "./cards/ContactCard";

export default function CardsSection() {
  return (
    <section className="relative max-w-6xl mx-auto pb-16 px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6">
        <AboutCard />
        <AcademicCard />
        <ProjectsCard />
        <TestimonialCard />
        <ContactCard />
      </div>
    </section>
  );
}

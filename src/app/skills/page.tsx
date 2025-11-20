"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteData } from "@/lib/getSiteData";
import SideSectionMenu from "@/app/components/SideSectionMenu";

export default function SkillsPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]
                 pt-32 pb-20 px-6 transition-all flex justify-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-6xl w-full bg-[var(--bg-card)] rounded-3xl shadow-xl
                   border border-[var(--border-color)] p-10 md:p-14"
      >
        {/* Título principal */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold mb-12 text-center"
        >
          {t.skills.title}
        </motion.h1>

        {/*LENGUAJES*/}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t.skills.languagesTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {Object.entries(t.skills.languages).map(([name, img]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-5"
              >
                <Image src={`/${img}`} alt={name} width={70} height={70} />
                <p className="mt-3 font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*FRAMEWORKS */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t.skills.frameworksTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {Object.entries(t.skills.frameworks).map(([name, img]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-5"
              >
                <Image src={`/${img}`} alt={name} width={70} height={70} />
                <p className="mt-3 font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*HERRAMIENTAS */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t.skills.toolsTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {Object.entries(t.skills.tools).map(([name, img]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-5"
              >
                <Image src={`/${img}`} alt={name} width={70} height={70} />
                <p className="mt-3 font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*SOFT SKILLS */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-semibold mb-6">{t.skills.softSkillsTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              "Trabajo en equipo",
              "Comunicación",
              "Liderazgo",
              "Resolución de problemas",
              "Adaptabilidad",
              "Pensamiento crítico",
              "Organización"
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-5"
              >
                <Image src={`/${t.skills.softSkillsImage}`} alt="skill" width={70} height={70} />
                <p className="mt-3 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      <SideSectionMenu current="skills" />
    </section>
  );
}

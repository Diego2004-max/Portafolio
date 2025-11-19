"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SideSectionMenu from "../app/components/SideSectionMenu"
import { useLanguage } from "../context/LanguageContext";
import { getSiteData } from "../lib/getSiteData";

export default function SkillsPage() {

  const { language } = useLanguage();
  const t = getSiteData(language);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]
                       pt-32 pb-20 px-6 md:px-10">

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-6xl mx-auto bg-[var(--bg-card)] rounded-3xl shadow-xl
                   border border-[var(--border-color)] p-10 md:p-14"
      >
        {/* TITLE */}
        <motion.h1 variants={fadeUp} className="text-4xl font-bold mb-10 text-center">
          {t.skills.title}
        </motion.h1>

        {/* LANGUAGES */}
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.skills.languagesTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
            {Object.entries(t.skills.languages).map(([name, img]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-4"
              >
                <Image src={`/${img}`} alt={name} width={60} height={60} />
                <p className="mt-2 font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FRAMEWORKS */}
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.skills.frameworksTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
            {Object.entries(t.skills.frameworks).map(([name, img]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-4"
              >
                <Image src={`/${img}`} alt={name} width={60} height={60} />
                <p className="mt-2 font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TOOLS */}
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.skills.toolsTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
            {Object.entries(t.skills.tools).map(([name, img]) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-4"
              >
                <Image src={`/${img}`} alt={name} width={60} height={60} />
                <p className="mt-2 font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-semibold mb-4">{t.skills.softSkillsTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
            {["Teamwork", "Communication", "Leadership", "Problem solving", "Adaptability", "Critical thinking", "Organization"].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="flex flex-col items-center bg-[var(--bg-card)]
                           shadow-md border border-[var(--border-color)]
                           rounded-xl p-4"
              >
                <Image src={`/${t.skills.softSkillsImage}`} alt="soft skill" width={70} height={70} />
                <p className="mt-2 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      <SideSectionMenu current="skills" />
    </section>
  );
}

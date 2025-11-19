"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteData } from "../../lib/getSiteData";
import SideSectionMenu from "../components/SideSectionMenu";

type ContactItemProps = {
  icon: string;
  label: string;
  value: string;
  link?: string;
};

function ContactItem({ icon, label, value, link }: ContactItemProps) {
  return (
    <div
      className="
        flex justify-between items-center
        border-b border-[var(--border-color)]
        pb-3
        hover:bg-[var(--border-color)]/40
        transition
        rounded-md
        px-3
      "
    >
      <p className="text-[var(--text-secondary)]">
        <strong className="text-[var(--text-primary)]">{label}</strong>{" "}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </p>

      <Image src={icon} alt={label} width={32} height={32} />
    </div>
  );
}

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getSiteData(language);

  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex items-center justify-center
        bg-[var(--bg-page)]
        p-8 md:p-10
        text-[var(--text-primary)]
      "
    >
      <div
        className="
          bg-[var(--bg-card)]
          rounded-3xl
          shadow-xl
          border border-[var(--border-color)]
          w-full max-w-3xl
          p-10 md:p-12
          flex flex-col items-center
          text-center
        "
      >
        <h1 className="text-4xl font-bold mb-10 text-[var(--text-primary)]">
          {t.nav.contact}
        </h1>

        <div
          className="
            w-full
            bg-[var(--bg-card)]
            p-6
            rounded-2xl
            shadow-md
            border border-[var(--border-color)]
            space-y-5
          "
        >
          <ContactItem
            icon="/email.png"
            label="Email:"
            value="diegoalejandromallama@gmail.com"
          />
          <ContactItem
            icon="/telefono.png"
            label="Phone:"
            value="3225436249"
          />
          <ContactItem
            icon="/linkedin.png"
            label="LinkedIn:"
            value="Diego Alejandro Mallama Yandun"
            link="https://linkedin.com/in/diego-alejandro-mallama-yandun"
          />
          <ContactItem
            icon="/git.png"
            label="GitHub:"
            value="Diego2004-max"
            link="https://github.com/Diego2004-max"
          />
        </div>
      </div>

      <SideSectionMenu />
    </section>
  );
}

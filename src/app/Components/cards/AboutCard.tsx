'use client';
import CardBase from "./CardBase";

export default function AboutCard() {
  return (
    <CardBase
      icon="👤"
      title="Acerca de mí"
      href="/about"
      preview="Conoce más sobre mi trayectoria y valores."
      accent="purple"
    />
  );
}

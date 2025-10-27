'use client';
import CardBase from "./CardBase";

export default function AboutCard() {
  return (
    <CardBase
      icon="👤"
      title="Acerca de mí"
      href="/acerca_de_mi"
      preview="Conoce más sobre mi trayectoria, intereses y metas como desarrollador."
      accent="blue"
    />
  );
}

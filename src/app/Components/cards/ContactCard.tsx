'use client';
import CardBase from "./CardBase";

export default function ContactCard() {
  return (
    <CardBase
      icon="📞"
      title="Contactos"
      href="/contactos"
      preview="Ponte en contacto conmigo a través de correo o redes sociales."
      accent="orange"
    />
  );
}

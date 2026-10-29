// Fuente única de verdad de marca, contacto y navegación.
// Jerarquía de marca (no crear identidades que compitan):
//   brand:      FLORMIRO            (marca / wordmark)
//   signature:  Florencia Miro      (firma pública)
//   legalName:  María Florencia Miro (sólo donde hace falta)
//   descriptor: Chef Pâtissier & Chocolatier
export const site = {
  brand: "FLORMIRO",
  signature: "Florencia Miro",
  legalName: "María Florencia Miro",
  role: "Chef Pâtissier & Chocolatier",
  tagline:
    "Pastelería francesa, chocolatería de autor y clásicos argentinos, hechos a mano en Buenos Aires. Técnica, producto y más de veinte años de oficio.",
  location: "Buenos Aires, Argentina",
  email: "florenciamiro@gmail.com",
  whatsapp: {
    number: "541167533575",
    display: "+54 11 6753-3575",
  },
  instagram: {
    user: "maria_florencia_ok",
    url: "https://www.instagram.com/maria_florencia_ok/",
  },
  facebook: {
    user: "Flormi1980",
    url: "https://www.facebook.com/Flormi1980",
  },
  // Modelo de negocio del contacto. Mientras no esté confirmado que Flor
  // toma encargos, se usa el estado neutro (sin prometer ventas).
  //   "commissions" → acepta encargos a medida
  //   "neutral"     → colaboraciones, propuestas, prensa, redes
  contactState: "neutral",
};

// WhatsApp con mensaje prellenado, opcionalmente con contexto de página.
export function waLink(context) {
  const base = "Hola Flor, vi tu web y quería consultarte";
  const msg = context ? `${base} por ${context}.` : `${base}.`;
  return `https://api.whatsapp.com/send/?phone=${site.whatsapp.number}&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`;
}

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/creaciones/", label: "Creaciones" },
  { href: "/el-oficio/", label: "El oficio" },
  { href: "/sobre-flor/", label: "Sobre Flor" },
  { href: "/recetas/", label: "Recetas" },
  { href: "/contacto/", label: "Contacto" },
];

// Bloque de temporada del inicio. Cambiá `active` para rotar la edición
// (pascuas · dia-madre · navidad · verano · evento). El copy vive acá;
// las fotos se asocian por id en la página de inicio.
export const season = {
  active: "pascuas",
  editions: {
    pascuas: {
      kicker: "Edición de Pascuas",
      title: "Huevos pintados a mano",
      text: "Cada huevo se pinta a mano con manteca de cacao coloreada, uno distinto del otro. Chocolate con leche, semiamargo y blanco, y rellenos a pedido.",
    },
    navidad: {
      kicker: "Edición de Navidad",
      title: "Pan dulce artesanal",
      text: "Amasado a mano y levado lento, con almendras, nueces, castañas de cajú, avellanas, pasas maceradas y cáscaras de cítricos confitadas en casa.",
    },
    "dia-madre": {
      kicker: "Día de la Madre",
      title: "Mesas dulces y tortas",
      text: "Ediciones especiales para la fecha: tortas, macarons y cajas para compartir.",
    },
  },
};

export const categories = [
  { id: "tortas", label: "Tortas", blurb: "Bizcochos húmedos, rellenos y terminaciones de pastelería." },
  { id: "tartas", label: "Tartas & postres", blurb: "Masas sablée, ganaches y frutas de estación." },
  { id: "chocolateria", label: "Chocolatería", blurb: "Bombones, trufas, tabletas belgas y huevos pintados a mano." },
  { id: "macarons", label: "Macarons", blurb: "Tapas de almendra crocantes rellenas de ganache." },
];

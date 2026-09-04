import tela from "@/assets/tela.jpg";
import placa from "@/assets/placa.jpg";
import tv from "@/assets/tv.jpg";
import bateria from "@/assets/bateria.jpg";

export const BUSINESS = {
  name: "Hi-Tech Eletrônicos",
  tagline: "Assistência técnica & loja.",
  city: "Rio das Ostras, RJ",
  bio: "Celulares, notebooks e TVs prontos para rodar de novo. Orçamento rápido e garantia de bancada.",
  phone: "5522998706841",
  phoneDisplay: "(22) 99870-6841",
  hours: "Seg a Sex, 9h às 18h · Sáb, 9h às 13h",
  address: "Rio das Ostras, RJ",
};

export type BioLink = {
  id: string;
  label: string;
  sub: string;
  glyph: string;
  href: string;
  tone: "green" | "violet" | "cyan";
};

export const LINKS: BioLink[] = [
  {
    id: "whatsapp",
    label: "Chamar no WhatsApp",
    sub: "Fale agora com a bancada",
    glyph: "W",
    href: `https://wa.me/${BUSINESS.phone}`,
    tone: "green",
  },
  {
    id: "instagram",
    label: "Seguir no Instagram",
    sub: "Bastidores e reparos",
    glyph: "i",
    href: "https://www.instagram.com/hitecheletronicos/",
    tone: "violet",
  },
  {
    id: "google",
    label: "Avalie no Google",
    sub: "Sua opinião ajuda a gente",
    glyph: "G",
    href: "https://search.google.com/local/writereview?placeid=ChIJpQHbaLq0lwARw4-9Eg-uzbY",
    tone: "cyan",
  },
];

export type GalleryItem = {
  id: string;
  image: string;
  title: string;
  caption: string;
  tone: "blue" | "violet" | "green" | "cyan";
};

export const GALLERY: GalleryItem[] = [
  { id: "tela", image: tela, title: "Troca de tela", caption: "Celular & notebook", tone: "blue" },
  { id: "placa", image: placa, title: "Reparo de placa", caption: "Componente a componente", tone: "violet" },
  { id: "tv", image: tv, title: "TV & multimídia", caption: "Imagem e som", tone: "green" },
  { id: "bateria", image: bateria, title: "Troca de bateria", caption: "Mais carga, menos espera", tone: "cyan" },
];

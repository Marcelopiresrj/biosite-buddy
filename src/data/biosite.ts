import tela from "@/assets/tela.jpg";
import placa from "@/assets/placa.jpg";
import tv from "@/assets/tv.jpg";
import bateria from "@/assets/bateria.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";

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

export type InstagramPost = {
  id: string;
  image: string;
  caption: string;
};

export const INSTAGRAM_URL = "https://www.instagram.com/hitecheletronicos/";

export const INSTAGRAM: InstagramPost[] = [
  { id: "ig1", image: ig1, caption: "Microreparo em placa" },
  { id: "ig2", image: ig2, caption: "Loja e acessórios" },
  { id: "ig3", image: ig3, caption: "Notebook na bancada" },
  { id: "ig4", image: ig4, caption: "Cliente feliz" },
  { id: "ig5", image: ig5, caption: "TV com backlight nova" },
  { id: "ig6", image: ig6, caption: "Solda no microscópio" },
];

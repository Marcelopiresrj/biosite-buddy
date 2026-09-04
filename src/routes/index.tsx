import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import { BUSINESS, LINKS, GALLERY, type BioLink, type GalleryItem } from "@/data/biosite";

const SITE_DESC =
  "Assistência técnica em Rio das Ostras: conserto de celulares, notebooks e TVs. Orçamento rápido pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hi-Tech Eletrônicos — Assistência técnica em Rio das Ostras" },
      { name: "description", content: SITE_DESC },
      { property: "og:title", content: "Hi-Tech Eletrônicos — Assistência técnica em Rio das Ostras" },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Biosite,
});

const linkTone: Record<BioLink["tone"], { card: string; badge: string; title: string; sub: string; chev: string }> = {
  green: {
    card: "bg-neon-green-surface ring-1 ring-neon-green/40",
    badge: "bg-gradient-to-br from-neon-green to-neon-green-deep text-neon-green-ink",
    title: "text-neon-green-fg",
    sub: "text-neon-green-muted",
    chev: "text-neon-green",
  },
  violet: {
    card: "bg-neon-violet-surface ring-1 ring-neon-violet/40",
    badge: "bg-gradient-to-br from-neon-pink via-neon-violet to-neon-blue text-neon-violet-ink",
    title: "text-neon-violet-ink",
    sub: "text-neon-violet-muted",
    chev: "text-neon-violet",
  },
  cyan: {
    card: "bg-neon-cyan-surface ring-1 ring-neon-cyan/40",
    badge: "bg-gradient-to-br from-neon-cyan to-neon-cyan-deep text-neon-cyan-ink",
    title: "text-neon-cyan-ink",
    sub: "text-neon-cyan-muted",
    chev: "text-neon-cyan",
  },
};

const galleryTone: Record<GalleryItem["tone"], { card: string; title: string; caption: string }> = {
  blue: { card: "bg-surface-2 ring-1 ring-hairline", title: "text-foreground", caption: "text-muted-foreground" },
  violet: {
    card: "bg-neon-violet-surface ring-1 ring-neon-violet/30",
    title: "text-neon-violet-ink",
    caption: "text-neon-violet-muted",
  },
  green: {
    card: "bg-neon-green-surface ring-1 ring-neon-green/30",
    title: "text-neon-green-fg",
    caption: "text-neon-green-muted",
  },
  cyan: {
    card: "bg-neon-cyan-surface ring-1 ring-neon-cyan/30",
    title: "text-neon-cyan-ink",
    caption: "text-neon-cyan-muted",
  },
};

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(80, "Nome muito longo"),
  telefone: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido com DDD")
    .max(20, "Número muito longo")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números e ( ) + -"),
  mensagem: z.string().trim().min(10, "Descreva o aparelho e o defeito").max(800, "Mensagem muito longa"),
});

const inputClass =
  "w-full rounded-xl bg-surface-3 ring-1 ring-hairline px-4 py-3 text-sm text-foreground placeholder:text-faint outline-none focus:ring-primary";

function Biosite() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Confira os campos destacados.");
      return;
    }

    setErrors({});
    const { nome, telefone, mensagem } = parsed.data;
    const texto = `Olá, Hi-Tech! Meu nome é ${nome} (WhatsApp ${telefone}). ${mensagem}`;
    window.open(`https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
    toast.success("Abrindo o WhatsApp com sua mensagem.");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ElectronicsStore",
            name: BUSINESS.name,
            description: SITE_DESC,
            telephone: `+${BUSINESS.phone}`,
            address: { "@type": "PostalAddress", addressLocality: "Rio das Ostras", addressRegion: "RJ", addressCountry: "BR" },
            openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
            sameAs: ["https://www.instagram.com/hitecheletronicos/"],
          }),
        }}
      />

      <div className="mx-auto max-w-[440px] px-5 py-8">
        <header className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="size-24 rounded-full bg-gradient-to-tr from-neon-blue-deep via-neon-blue to-neon-ice p-[3px] shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--neon-blue)_60%,transparent)]">
              <div className="size-full rounded-full bg-background grid place-items-center">
                <img
                  src={logo}
                  alt="Logo Hi-Tech Eletrônicos"
                  width={512}
                  height={512}
                  className="size-[78px] rounded-full bg-surface-2 object-contain p-2"
                />
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 size-5 rounded-full bg-amber ring-[3px] ring-background" />
          </div>
          <h1 className="mt-4 font-display font-black text-3xl leading-none tracking-tight text-balance bg-gradient-to-b from-foreground via-neon-ice to-primary bg-clip-text text-transparent">
            {BUSINESS.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{BUSINESS.tagline}</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-surface-2 ring-1 ring-hairline px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-neon-green" />
            {BUSINESS.city}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty max-w-[42ch]">{BUSINESS.bio}</p>
        </header>

        <section className="mt-7 space-y-3">
          {LINKS.map((link) => {
            const tone = linkTone[link.tone];
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-0.5 ${tone.card}`}
              >
                <span
                  className={`size-11 shrink-0 rounded-xl grid place-items-center font-display font-black text-lg ${tone.badge}`}
                >
                  {link.glyph}
                </span>
                <span className="flex-1">
                  <span className={`block font-semibold ${tone.title}`}>{link.label}</span>
                  <span className={`block text-xs ${tone.sub}`}>{link.sub}</span>
                </span>
                <span className={`font-display text-lg ${tone.chev}`}>›</span>
              </a>
            );
          })}
        </section>

        <section className="mt-9">
          <h2 className="font-display font-bold text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Serviços &amp; trabalhos
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {GALLERY.map((item) => {
              const tone = galleryTone[item.tone];
              return (
                <div key={item.id} className={`rounded-2xl p-3 ${tone.card}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <p className={`mt-2.5 text-sm font-semibold ${tone.title}`}>{item.title}</p>
                  <p className={`text-xs ${tone.caption}`}>{item.caption}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-9 rounded-3xl bg-surface ring-1 ring-hairline p-5">
          <h2 className="font-display font-bold text-sm text-foreground">Peça um orçamento</h2>
          <p className="mt-1 text-xs text-muted-foreground">Manda o aparelho e o problema que a gente responde.</p>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit} noValidate>
            <div>
              <input name="nome" type="text" placeholder="Seu nome" maxLength={80} className={inputClass} />
              {errors['nome'] && <p className="mt-1 text-xs text-destructive">{errors['nome']}</p>}
            </div>
            <div>
              <input name="telefone" type="tel" placeholder="Seu WhatsApp" maxLength={20} className={inputClass} />
              {errors['telefone'] && <p className="mt-1 text-xs text-destructive">{errors['telefone']}</p>}
            </div>
            <div>
              <textarea
                name="mensagem"
                rows={3}
                maxLength={800}
                placeholder="Descreva o aparelho e o defeito"
                className={`${inputClass} resize-none`}
              />
              {errors['mensagem'] && <p className="mt-1 text-xs text-destructive">{errors['mensagem']}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-primary to-neon-green py-3 font-display font-bold text-sm text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
            >
              Enviar mensagem
            </button>
          </form>
        </section>

        <footer className="mt-8 border-t border-hairline pt-5 text-center">
          <p className="text-xs text-muted-foreground">{BUSINESS.hours}</p>
          <p className="mt-1 text-xs text-faint">{BUSINESS.address}</p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-faint">© {BUSINESS.name}</p>
        </footer>
      </div>
    </div>
  );
}

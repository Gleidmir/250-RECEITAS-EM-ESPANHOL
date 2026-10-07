import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReaderCarousel } from "@/components/reader-carousel";
import { UrgencyTimer } from "@/components/urgency-timer";
import { SocialProofToast } from "@/components/social-proof-toast";
import { BeforeAfterSection } from "@/components/before-after-section";
import { RecipePreviewSection } from "@/components/recipe-preview-section";
import {
  Lock,
  Download,
  Check,
  HeartPulse,
  Frown,
  Users,
  ChevronDown,
  BadgeCheck,
  Gift,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import mainCoverAsset from "@/assets/capa-250-recetas.png.asset.json";
import bonusCoverAsset from "@/assets/capa-superando-diabetes.png.asset.json";

// Portadas restauradas de los e-books (principal y bonus)
const MAIN_EBOOK_COVER = "https://i.postimg.cc/dtpcWGvL/CAPA-ESPANHOL.png";
const BONUS_EBOOK_COVER = "https://i.postimg.cc/jjT99X1S/Gemini-Generated-Image-h6eafvh6eafvh6ea.png";

const CHECKOUT_URL = "https://pay.hotmart.com/R107911179I?checkoutMode=10";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "250 Recetas para Diabéticos | Solo $5.90 USD Hoy" },
      {
        name: "description",
        content:
          "250 recetas económicas y de bajo índice glucémico + bonus Superando la Diabetes. Acceso inmediato en PDF por solo $5.90 USD.",
      },
      { property: "og:title", content: "250 Recetas para Diabéticos | Solo $5.90 USD Hoy" },
      {
        property: "og:description",
        content:
          "Recetario completo de bajo índice glucémico con bonus gratis. Pago único, descarga inmediata y garantía de 7 días.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "es_ES" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "250 Recetas para Diabéticos + Bonus Superando la Diabetes",
          description:
            "Recetario digital con 250 recetas económicas de bajo índice glucémico, más el e-book bonus Superando la Diabetes. Descarga inmediata en PDF.",
          brand: { "@type": "Brand", name: "250 Recetas para Diabéticos" },
          category: "Libros digitales de salud y nutrición",
          offers: {
            "@type": "Offer",
            price: "5.90",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "/",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function CtaButton({
  children,
  subtitle = "ACCESO INMEDIATO EN PDF",
  className = "",
  href = CHECKOUT_URL,
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  href?: string;
}) {
  return (
    <Button
      asChild
      variant="sales"
      className={`sales-pulse group h-auto min-h-16 w-full flex-col rounded-2xl px-6 py-4 text-center ${className}`}
    >
      <a href={href} className="flex flex-col items-center justify-center gap-0.5">
        <span className="flex items-center justify-center gap-2 text-base font-black uppercase tracking-wide sm:text-xl">
          <span>{children}</span>
          <ArrowRight className="shrink-0 stroke-[3] transition-transform duration-300 group-hover:translate-x-1.5 animate-arrow-nudge" size={22} />
        </span>
        {subtitle && (
          <span className="text-xs font-extrabold uppercase tracking-wider text-sales-foreground/80 sm:text-xs">
            ({subtitle})
          </span>
        )}
      </a>
    </Button>
  );
}

const categories = [
  {
    emoji: "🍳",
    title: "Desayunos con Energía",
    count: "30 recetas",
    text: "Panqueques de avena y canela, crepiocas proteicas, batidos verdes y tortillas ligeras.",
  },
  {
    emoji: "🍲",
    title: "Platos Principales Irresistibles",
    count: "70 recetas",
    text: "Salmón al horno, pollo al curry ligero, lasaña de berenjena, estofados y salteados saludables.",
  },
  {
    emoji: "🥗",
    title: "Ensaladas y Aderezos Vivos",
    count: "30 recetas",
    text: "Combinaciones saciantes ricas en fibra, frutos secos y grasas buenas.",
  },
  {
    emoji: "🥣",
    title: "Sopas y Cremas Reconfortantes",
    count: "25 recetas",
    text: "Caldos depurativos, cremas de calabacín y brócoli que abrazan el cuerpo sin elevar el azúcar.",
  },
  {
    emoji: "🥪",
    title: "Snacks y Meriendas Rápidas",
    count: "35 recetas",
    text: "Bastones crujientes, chips de kale, hummus casero y bocados saciantes entre comidas.",
  },
  {
    emoji: "🍰",
    title: "Postres y Dulces Seguros",
    count: "40 recetas",
    text: "Mousses de cacao y aguacate, pudines de chía, pasteles de zanahoria integrales y gelatinas light.",
  },
  {
    emoji: "🥤",
    title: "Bebidas y Jugos Funcionales",
    count: "20 recetas",
    text: "Aguas infusionadas, jugos con fibra vegetal y tés estabilizadores de glucemia.",
  },
];

const faqs = [
  {
    q: "¿Cómo recibo el material tras la compra?",
    a: "Acceso inmediato por correo electrónico en formato PDF, para leer en celular, tablet, computadora o imprimir.",
  },
  {
    q: "¿Los ingredientes son difíciles de conseguir?",
    a: "No. Todas las recetas están adaptadas al mercado hispanohablante con ingredientes de supermercado y verdulería común.",
  },
  {
    q: "¿Sirve si estoy cocinando para un familiar?",
    a: "Totalmente. Son comidas completas y nutritivas que toda la familia puede compartir sin hacer platos separados.",
  },
  {
    q: "¿El pago es seguro?",
    a: "Sí. Procesado por Hotmart, la plataforma de productos digitales más grande y segura de Latinoamérica.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-md">
      {faqs.map((f, i) => (
        <div key={f.q} className={`transition-colors ${open === i ? "bg-mint/35" : "bg-white"}`}>
          <Button
            variant="ghost"
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex h-auto w-full items-center justify-between gap-4 whitespace-normal rounded-none px-6 py-5 text-left hover:bg-transparent"
            aria-expanded={open === i}
          >
            <span className="font-display text-base font-extrabold text-foreground sm:text-lg">{f.q}</span>
            <ChevronDown
              size={22}
              className={`shrink-0 text-brand transition-transform duration-200 ${open === i ? "rotate-180 text-brand-dark" : ""}`}
            />
          </Button>
          {open === i && (
            <div className="border-t border-brand/10 px-6 pb-5 pt-2">
              <p className="text-sm font-semibold leading-relaxed text-brand-dark sm:text-base">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans text-foreground">
      {/* Contador de Escasez y Urgencia */}
      <UrgencyTimer />

      {/* Letrero electrónico */}
      <div className="sticky top-0 z-50 overflow-hidden bg-brand-dark py-2 text-[11px] font-semibold text-white sm:text-sm shadow-md">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {[
                "✅ Estás en la página oficial de las 250 Recetas para Diabéticos",
                "🚨 Oferta especial para América Latina: 78% de descuento solo por hoy",
                "⚡ Acceso inmediato y de por vida en PDF",
              ].map((t) => (
                <span key={t} className="px-6 font-bold">
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <header className="bg-white px-4 pb-14 pt-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-4 py-1.5 text-xs font-bold text-brand-dark sm:text-sm">
              <Zap size={16} className="fill-brand text-brand" /> Aprobado para Diabéticos y Prediabéticos | Ingredientes Accesibles
            </span>
            <h1 className="mt-5 font-display text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl text-center">
              Vuelve a Disfrutar de la Comida Sabrosa Sin Miedo a los Picos de Glucosa ni a las Restricciones Extremas
            </h1>
            <h2 className="mt-4 text-base font-bold leading-relaxed text-brand-dark sm:text-lg text-center max-w-2xl mx-auto">
              El recetario definitivo con 250 preparaciones económicas, deliciosas y de bajo índice
              glucémico para transformar tus comidas de todos los días — para ti o para quien más
              amas.
            </h2>

            <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left">
              {[
                "250 opciones prácticas: desde desayunos con energía hasta postres cremosos sin azúcar refinada.",
                "Ingredientes comunes del supermercado local (nada de ingredientes costosos o raros).",
                "Diseñado para mantener tu glucosa estable y proteger tus arterias, nervios y riñones.",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-sm font-semibold text-muted-foreground sm:text-base">
                  <Check className="mt-0.5 shrink-0 text-brand" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-8 max-w-md">
              <CtaButton subtitle="ACCESO INMEDIATO EN PDF">¡Sí, quiero las 250 recetas por solo $5.90!</CtaButton>
              <p className="mt-3.5 text-center text-xs font-semibold text-muted-foreground">
                🔒 Pago seguro vía Hotmart • Descarga inmediata en PDF • Garantía de 7 días
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="book-stage relative mx-auto aspect-[7/6] w-full max-w-[580px] sm:aspect-none sm:min-h-[460px]" aria-label="Pack digital con los dos e-books incluidos">
              <div className="book-glow absolute inset-x-[6%] bottom-[2%] h-[25%] rounded-full" aria-hidden="true" />
              <div className="bonus-book absolute left-[46%] top-[3%] z-10 w-[51%] cover-shine-wrapper rounded-lg cover-glow-bonus sm:left-[49%] sm:top-[2%] sm:w-[48%]">
                <img
                  src={BONUS_EBOOK_COVER}
                  onError={(e) => { e.currentTarget.src = bonusCoverAsset.url; }}
                  alt="Portada del e-book bonus Superando la Diabetes"
                  width={768}
                  height={1089}
                  className="w-full h-auto rounded-lg"
                />
                <div className="bonus-seal absolute -bottom-3 -right-2 z-40 grid h-16 w-16 place-items-center rounded-full border-2 border-white bg-emerald-500 p-0.5 text-center font-display uppercase leading-tight text-white shadow-xl shadow-emerald-500/40 min-[380px]:h-20 min-[380px]:w-20 sm:-bottom-5 sm:-right-4 sm:h-24 sm:w-24 sm:border-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-100 min-[380px]:text-[10px] sm:text-xs">BONUS</span>
                    <span className="text-[11px] font-black uppercase tracking-wide text-white min-[380px]:text-xs sm:text-sm">GRATIS</span>
                  </div>
                </div>
              </div>
              <div className="main-book absolute left-[0%] top-[2%] z-30 w-[52%] cover-shine-wrapper rounded-lg cover-glow-main sm:left-[0%] sm:w-[50%]">
                <img
                  src={MAIN_EBOOK_COVER}
                  onError={(e) => { e.currentTarget.src = mainCoverAsset.url; }}
                  alt="Portada oficial del e-book 250 Recetas para Diabéticos"
                  width={768}
                  height={1088}
                  fetchPriority="high"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-sm font-bold text-brand-dark sm:mt-1">
              Pack digital completo: recetario principal + guía bonus
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4">
              {["Desayunos", "Platos Fuertes", "Postres Sin Azúcar"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-mint px-3 py-1 text-xs font-extrabold text-brand-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Dolor */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-black text-foreground sm:text-3xl">
            ¿Sientes que Vivir con Diabetes Convirtió la Hora de Comer en un Castigo?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Frown,
                title: "La Comida Sin Sabor y Aislada",
                text: "Comer pechuga insípida y lechuga mientras el resto de la familia disfruta sus platos favoritos.",
              },
              {
                icon: HeartPulse,
                title: "El Miedo Constante al Glucómetro",
                text: "Sentir culpa y ansiedad tras cada bocado temiendo ver la cifra por encima de 180 o 200 mg/dL.",
              },
              {
                icon: Users,
                title: "La Preocupación de la Familia",
                text: "El cansancio de los hijos o cónyuges buscando recetas en internet que prometen salud pero terminan siendo caras o difíciles de preparar.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <c.icon className="text-brand" size={34} />
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-dark">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-empathy p-6 text-center font-display text-base font-bold text-empathy-foreground shadow-sm sm:text-lg">
            Tener diabetes no significa renunciar al placer de sentarse a la mesa. Solo necesitas el
            mapa de combinaciones e ingredientes de bajo impacto glucémico.
          </p>
        </div>
      </section>

      {/* Transformación Antes vs Después */}
      <BeforeAfterSection />

      {/* Muestra Exclusiva de Recetas */}
      <RecipePreviewSection />

      {/* Categorías */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-black sm:text-3xl">
            250 Opciones Nutritivas y Sabrosas para Cada Momento del Día
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Primera tarjeta especial: Hábitos para Cuidar tu Diabetes */}
            <div className="rounded-2xl border-2 border-brand/40 bg-gradient-to-br from-mint/90 via-emerald-50 to-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md shadow-brand/20">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-brand-dark">
                    ⭐ Cuidado Diario
                  </span>
                  <h3 className="font-display text-lg font-black text-foreground">Hábitos para Cuidar tu Diabetes</h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-brand-dark">
                Planifica tus comidas y registra tus dudas para revisarlas con tu médico o nutricionista.
              </p>
            </div>

            {/* Categorías de recetas */}
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-brand/30"
              >
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{c.title}</h3>
                <span className="mt-2 inline-block rounded-full bg-mint px-3 py-1 text-xs font-bold text-brand-dark">
                  {c.count}
                </span>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-brand-dark">{c.text}</p>
              </div>
            ))}

            {/* Última tarjeta especial: Bienestar para Toda la Familia */}
            <div className="rounded-2xl border-2 border-brand/40 bg-gradient-to-br from-mint/90 via-emerald-50 to-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md shadow-brand/20">
                  <Users size={24} />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-brand-dark">
                    ⭐ Estilo de Vida
                  </span>
                  <h3 className="font-display text-lg font-black text-foreground">Bienestar para Toda la Familia</h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-brand-dark">
                Combina una alimentación variada con movimiento, descanso y el seguimiento de tu profesional de salud.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-md">
            <CtaButton subtitle="DESCARGA INMEDIATA EN PDF">Quiero mi recetario por $5.90</CtaButton>
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="bg-brand-dark px-4 py-16 text-white relative overflow-hidden">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="relative text-center">
            <div className="cover-shine-wrapper cover-glow-bonus bonus-section-book mx-auto w-56 rounded-lg sm:w-72">
              <img
                src={BONUS_EBOOK_COVER}
                onError={(e) => { e.currentTarget.src = bonusCoverAsset.url; }}
                alt="Portada oficial del e-book bonus Superando la Diabetes"
                loading="lazy"
                width={768}
                height={1089}
                className="w-full h-auto rounded-lg border-2 border-emerald-400/30"
              />
            </div>
            <span className="mt-5 inline-block rounded-full bg-mint px-4 py-1.5 text-xs font-black uppercase text-brand-dark shadow-md">
              Bonus Exclusivo Incluido
            </span>
          </div>
          <div className="text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-md sm:text-sm">
              <Gift size={18} /> Regalo Exclusivo Hoy (Valor: $19.00 USD — GRATIS HOY)
            </span>
            <h2 className="mt-5 text-center font-display text-2xl font-black text-white sm:text-3xl leading-tight">
              E-book Superando la Diabetes: Guía de Acción Rápida
            </h2>
            <p className="mt-3 text-center text-sm font-medium text-mint sm:text-base">
              El complemento perfecto para maximizar tu salud y complementar el recetario principal.
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Los 10 signos tempranos para evitar complicaciones irreversibles (neuropatía, daño renal y vascular).",
                "El protocolo del sueño y control del estrés: cómo el cortisol sabotea tu insulina sin que te des cuenta.",
                "Suplementos y minerales esenciales (Magnesio, Cromo, Omega-3 y Ácido Alfa-Lipoico).",
                "Guía de apps gratuitas para registrar glucemia y carbohidratos en tu celular.",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-sm font-medium text-white/95 sm:text-base">
                  <Check className="mt-0.5 shrink-0 text-mint" size={22} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ReaderCarousel />

      {/* Precio */}
      <section id="comprar" className="scroll-mt-16 bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-brand/40 bg-white p-6 shadow-2xl sm:p-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-brand px-5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-sm">
              🔥 Oferta Especial de Lanzamiento
            </span>
          </div>
          <ul className="mt-8 space-y-3.5">
            {[
              ["E-book 250 Recetas para Diabéticos", "$37.00"],
              ["E-book Superando la Diabetes (Bonus)", "$19.00"],
              ["Actualizaciones digitales de por vida", "Invaluable"],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 border-b border-border pb-3.5 text-sm sm:text-base"
              >
                <span className="flex min-w-0 items-center gap-2 font-semibold">
                  <Check className="shrink-0 text-brand stroke-[2.5]" size={20} />
                  <span className="text-foreground">{label}</span>
                </span>
                <span className="shrink-0 font-extrabold text-brand-dark">{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-muted-foreground line-through">Precio Regular: $56.00 USD</p>
            <p className="mt-1 font-display text-4xl font-black text-brand sm:text-5xl">
              HOY SOLO: $5.90 USD
            </p>
            <p className="mt-2 text-xs font-semibold text-muted-foreground sm:text-sm">
              Pago único sin suscripciones ni cobros recurrentes. Acceso digital inmediato.
            </p>
          </div>

          <div className="mt-8">
            <CtaButton href={CHECKOUT_URL} subtitle="ACCESO INMEDIATO - GARANTÍA 7 DÍAS">
              Descargar todo el pack por solo $5.90 USD
            </CtaButton>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Lock size={15} className="text-brand" /> Encriptación SSL 256-bit
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={15} className="text-brand" /> Hotmart Verified
            </span>
            <span className="flex items-center gap-1.5">
              <Download size={15} className="text-brand" /> Descarga inmediata en PDF
            </span>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border-2 border-brand/20 bg-white p-8 text-center shadow-lg sm:flex-row sm:text-left">
          <div className="guarantee-seal relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-mint text-center text-brand-dark shadow-md" aria-label="Garantía de 7 días">
            <div className="guarantee-ring absolute -inset-1.5 rounded-full border-2 border-dashed border-brand pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center justify-center leading-none">
              <span className="text-[10px] font-black uppercase tracking-wider text-brand-dark">Garantía</span>
              <span className="font-display text-5xl font-black leading-none text-brand-dark my-0.5">7</span>
              <span className="text-xs font-black uppercase tracking-wider text-brand-dark">Días</span>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1 text-xs font-extrabold text-brand-dark mb-2">
              <ShieldCheck size={16} /> Compra 100% Libre de Riesgo
            </div>
            <h2 className="font-display text-xl font-black sm:text-2xl text-foreground">
              Garantía Incondicional de 7 Días
            </h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-dark sm:text-base">
              Prueba las recetas durante 7 días completos. Si sientes que no son fáciles, sabrosas y
              amigables con tu glucemia, pides el 100% de tu dinero de vuelta directamente en
              Hotmart. Sin preguntas ni trámites.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 pb-32 md:pb-16">
        <h2 className="mb-10 text-center font-display text-2xl font-black sm:text-3xl">
          Preguntas Frecuentes
        </h2>
        <Faq />
        <div className="mx-auto mt-10 max-w-md">
          <CtaButton subtitle="DESCARGA INMEDIATA EN PDF">Obtener el pack por $5.90</CtaButton>
        </div>
      </section>

      <footer className="bg-surface px-4 py-8 pb-14 text-center text-xs text-muted-foreground">
        <p>
          Este material es informativo y no sustituye la orientación de tu médico o nutricionista.
        </p>
        <p className="mt-2 font-bold">© {new Date().getFullYear()} 250 Recetas para Diabéticos.</p>
      </footer>

      {/* Letrero electrónico inferior fijo en español */}
      <div className="fixed inset-x-0 bottom-0 z-50 overflow-hidden bg-brand-dark py-2.5 text-[11px] font-bold text-white shadow-[0_-4px_20px_rgba(0,0,0,0.25)] sm:text-xs">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {[
                "✅ Página Oficial de las 250 Recetas para Diabéticos",
                "🚨 Oferta especial para América Latina: 78% de descuento solo por hoy",
                "⚡ Acceso inmediato y de por vida en PDF",
                "🔒 Garantía incondicional de 7 días",
              ].map((t) => (
                <span key={t} className="px-6 font-bold">
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Social Proof Toast de Compras en Vivo */}
      <SocialProofToast />
    </div>
  );
}


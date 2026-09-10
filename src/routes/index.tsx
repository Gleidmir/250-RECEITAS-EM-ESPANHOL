import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Download,
  Star,
  Check,
  HeartPulse,
  Frown,
  Users,
  ChevronDown,
  BadgeCheck,
  Gift,
} from "lucide-react";
import bundleMockup from "@/assets/bundle-mockup.png";
import bonusCover from "@/assets/bonus-cover.png";

const CHECKOUT_URL = "https://pay.hotmart.com/[HOTMART_CODE]?checkoutMode=10";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "250 Recetas para Diabéticos | Solo $7.90 USD Hoy" },
      {
        name: "description",
        content:
          "250 recetas económicas y de bajo índice glucémico + bonus Superando la Diabetes. Acceso inmediato en PDF por solo $7.90 USD.",
      },
      { property: "og:title", content: "250 Recetas para Diabéticos | Solo $7.90 USD Hoy" },
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
            price: "7.90",
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
  className = "",
  href = "#comprar",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`cta-pulse inline-flex w-full items-center justify-center rounded-xl bg-cta px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-cta-hover sm:text-lg ${className}`}
    >
      {children}
    </a>
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

const testimonials = [
  {
    text: "Por fin puedo desayunar y cenar rico sin que la glucosa se me dispare. El mousse de chocolate con aguacate es increíble.",
    name: "Carlos M., 58 años (México)",
  },
  {
    text: "Compré el recetario para cocinarle a mi madre diagnosticada con diabetes tipo 2. Ahora comemos todos lo mismo en la mesa y sus exámenes mejoraron muchísimo.",
    name: "Elena R., 34 años (Colombia)",
  },
  {
    text: "Lo mejor es que los ingredientes se compran en cualquier verdulería de la esquina. Fácil, rápido y directo al grano.",
    name: "Jorge L., 46 años (Chile)",
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

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-500">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-base font-semibold text-foreground">{f.q}</span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-brand transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans text-foreground">
      {/* Letrero electrónico */}
      <div className="sticky top-0 z-50 overflow-hidden bg-brand-dark py-2 text-[11px] font-semibold text-white sm:text-sm">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {[
                "✅ Estás en la página oficial de las 250 Recetas para Diabéticos",
                "🚨 Oferta especial para América Latina: 78% de descuento solo por hoy",
                "⚡ Acceso inmediato y de por vida",
              ].map((t) => (
                <span key={t} className="px-6">
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
            <span className="inline-block rounded-full bg-mint px-4 py-1.5 text-xs font-semibold text-brand-dark sm:text-sm">
              ⭐ Aprobado para Diabéticos y Prediabéticos | Ingredientes 100% Accesibles
            </span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Vuelve a Disfrutar de la Comida Sabrosa Sin Miedo a los Picos de Glucosa ni a las
              Restricciones Extremas
            </h1>
            <h2 className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              El recetario definitivo con 250 preparaciones económicas, deliciosas y de bajo índice
              glucémico para transformar tus comidas de todos los días — para ti o para quien más
              amas.
            </h2>

            <ul className="mx-auto mt-6 max-w-xl space-y-3">
              {[
                "250 opciones prácticas: desde desayunos con energía hasta postres cremosos sin azúcar refinada.",
                "Ingredientes comunes del supermercado local (nada de ingredientes costosos o raros).",
                "Diseñado para mantener tu glucosa estable y proteger tus arterias, nervios y riñones.",
              ].map((b) => (
                <li key={b} className="flex justify-center gap-3 text-sm text-muted-foreground sm:text-base">
                  <Check className="mt-0.5 shrink-0 text-brand" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-8 max-w-md">
              <CtaButton>¡Sí, quiero las 250 recetas por solo $7.90!</CtaButton>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                🔒 Pago seguro vía Hotmart • Descarga inmediata en PDF a tu celular o tablet •
                Garantía de 7 días
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={bundleMockup}
              alt="Mockup de los e-books 250 Recetas para Diabéticos y Superando la Diabetes"
              width={1200}
              height={912}
              className="mx-auto w-full max-w-xl"
            />
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Desayunos", "Platos Fuertes", "Postres Sin Azúcar"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-brand-dark"
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
          <h2 className="text-center font-display text-2xl font-extrabold text-foreground sm:text-3xl">
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
              <div key={c.title} className="rounded-2xl border border-border bg-white p-6">
                <c.icon className="text-brand" size={32} />
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-mint p-6 text-center font-display text-base font-semibold text-brand-dark sm:text-lg">
            Tener diabetes no significa renunciar al placer de sentarse a la mesa. Solo necesitas el
            mapa de combinaciones e ingredientes de bajo impacto glucémico.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
            250 Opciones Nutritivas y Sabrosas para Cada Momento del Día
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{c.title}</h3>
                <span className="mt-2 inline-block rounded-full bg-mint px-3 py-1 text-xs font-bold text-brand-dark">
                  {c.count}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-md">
            <CtaButton>Quiero mi recetario por $7.90</CtaButton>
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="bg-brand-dark px-4 py-16 text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <img
            src={bonusCover}
            alt="E-book bonus Superando la Diabetes"
            loading="lazy"
            width={928}
            height={1152}
            className="mx-auto w-56 drop-shadow-2xl sm:w-72"
          />
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-1.5 text-xs font-bold uppercase sm:text-sm">
              <Gift size={16} /> Regalo exclusivo hoy (valor: $19.00 USD — gratis con tu compra)
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
              E-book Superando la Diabetes: Guía de Acción Rápida
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Los 10 signos tempranos para evitar complicaciones irreversibles (neuropatía, daño renal y vascular).",
                "El protocolo del sueño y control del estrés: cómo el cortisol sabotea tu insulina sin que te des cuenta.",
                "Suplementos y minerales esenciales (Magnesio, Cromo, Omega-3 y Ácido Alfa-Lipoico).",
                "Guía de apps gratuitas para registrar glucemia y carbohidratos en tu celular.",
              ].map((b) => (
                <li key={b} className="flex gap-3 text-sm text-white/90 sm:text-base">
                  <Check className="mt-0.5 shrink-0 text-mint" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
            Lo que Dicen Quienes Ya Cocinan con el Recetario
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-white p-6">
                <Stars />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-brand-dark">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Precio */}
      <section id="comprar" className="scroll-mt-16 bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-brand bg-white p-6 shadow-xl sm:p-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase text-white">
              Más popular
            </span>
          </div>
          <ul className="mt-8 space-y-3">
            {[
              ["E-book 250 Recetas para Diabéticos", "$37.00"],
              ["E-book Superando la Diabetes", "$19.00"],
              ["Actualizaciones digitales de por vida", "Invaluable"],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm sm:text-base"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Check className="shrink-0 text-brand" size={18} />
                  <span className="text-muted-foreground">{label}</span>
                </span>
                <span className="shrink-0 font-semibold">{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground line-through">Precio Regular: $56.00 USD</p>
            <p className="mt-1 font-display text-4xl font-black text-brand sm:text-5xl">
              HOY SOLO: $7.90 USD
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Pago único sin cargos sorpresa. Acceso digital inmediato.
            </p>
          </div>

          <div className="mt-8">
            <CtaButton href={CHECKOUT_URL}>Descargar todo el pack por solo $7.90 USD</CtaButton>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Lock size={14} className="text-brand" /> Encriptación SSL 256-bit
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={14} className="text-brand" /> Hotmart Verified
            </span>
            <span className="flex items-center gap-1.5">
              <Download size={14} className="text-brand" /> Descarga inmediata en PDF
            </span>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border bg-white p-8 text-center sm:flex-row sm:text-left">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-mint text-brand-dark">
            <ShieldCheck size={44} />
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold sm:text-2xl">
              Garantía Incondicional de 7 Días
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Prueba las recetas durante 7 días completos. Si sientes que no son fáciles, sabrosas y
              amigables con tu glucemia, pides el 100% de tu dinero de vuelta directamente en
              Hotmart. Sin preguntas ni trámites.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 pb-32 md:pb-16">
        <h2 className="mb-10 text-center font-display text-2xl font-extrabold sm:text-3xl">
          Preguntas Frecuentes
        </h2>
        <Faq />
        <div className="mx-auto mt-10 max-w-md">
          <CtaButton>Obtener el pack por $7.90</CtaButton>
        </div>
      </section>

      <footer className="bg-surface px-4 py-8 text-center text-xs text-muted-foreground">
        <p>
          Este material es informativo y no sustituye la orientación de tu médico o nutricionista.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} 250 Recetas para Diabéticos.</p>
      </footer>

      {/* Barra móvil */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-border bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-foreground">250 Recetas + Bonus</p>
          <p className="text-sm font-black text-brand">$7.90 USD</p>
        </div>
        <a
          href="#comprar"
          className="shrink-0 rounded-xl bg-cta px-5 py-3 text-sm font-extrabold uppercase text-white transition-colors hover:bg-cta-hover"
        >
          Obtener Ahora
        </a>
      </div>
    </div>
  );
}

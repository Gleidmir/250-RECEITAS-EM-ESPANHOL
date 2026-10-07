import { Clock, ShieldCheck, Flame, Heart, Sparkles } from "lucide-react";

const SAMPLE_RECIPES = [
  {
    category: "Desayuno Energético",
    title: "Panqueques Proteicos de Avena y Canela",
    prepTime: "10 minutos",
    gi: "Bajo Índice Glucémico",
    icon: "🥞",
    color: "from-amber-500/10 to-orange-500/5 border-amber-200",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
    description: "Esponjosos y saciantes, preparados con copos de avena entera y canela estabilizadora de glucosa. Sin harina de trigo refinada.",
    tags: ["Rico en Fibra", "Sin Azúcar Agregada", "Listo en 10 min"],
  },
  {
    category: "Plato Fuerte Principal",
    title: "Salmón al Horno con Vegetales y Hierbas",
    prepTime: "20 minutos",
    gi: "Cero Azúcares / Proteína Limpia",
    icon: "🐟",
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-200",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    description: "Nutritivo y rico en ácidos grasos Omega-3 para proteger el corazón y mantener tus arterias limpias y flexibles.",
    tags: ["Protección Cardiovascular", "Omega-3 Natural", "Sabor Gourmet"],
  },
  {
    category: "Postre Seguro Sin Azúcar",
    title: "Mousse Cremoso de Cacao Puro y Aguacate",
    prepTime: "5 minutos",
    gi: "Bajísimo Impacto Glucémico",
    icon: "🍰",
    color: "from-purple-500/10 to-pink-500/5 border-purple-200",
    badgeBg: "bg-purple-100 text-purple-900 border-purple-300",
    description: "Textura ultrasuave y chocolateada sin usar azúcar ni leche entera. El antídoto perfecto contra los antojos dulces.",
    tags: ["100% Sin Azúcar Refinada", "Antioxidantes", "Cremoso e Irresistible"],
  },
];

export function RecipePreviewSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-4 py-1.5 text-xs font-black uppercase text-brand-dark">
            <Sparkles size={16} className="text-brand" /> Vistazo Exclusivo por Dentro
          </span>
          <h2 className="mt-4 font-display text-2xl font-black text-foreground sm:text-4xl">
            Ejemplos de Recetas Deliciosas que Encontrarás en el E-book
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-brand-dark sm:text-base">
            Cada plato está pensado para deleitar tu paladar mientras cuida tus niveles de azúcar paso a paso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SAMPLE_RECIPES.map((recipe) => (
            <div
              key={recipe.title}
              className={`rounded-3xl border-2 bg-gradient-to-b ${recipe.color} p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-4xl">{recipe.icon}</span>
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wide ${recipe.badgeBg}`}>
                    {recipe.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-black text-foreground leading-snug">
                  {recipe.title}
                </h3>

                <p className="mt-3 text-xs font-semibold leading-relaxed text-brand-dark">
                  {recipe.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
                  <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg border border-border">
                    <Clock size={14} className="text-brand" /> {recipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg border border-border">
                    <ShieldCheck size={14} className="text-emerald-600" /> {recipe.gi}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white px-2.5 py-1 text-[10px] font-extrabold text-brand-dark shadow-2xs border border-border/50">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-mint/40 border border-brand/20 p-4 text-center text-xs font-bold text-brand-dark sm:text-sm max-w-2xl mx-auto">
          ✨ ¡Esto es solo una pequeña muestra! El recetario completo incluye <span className="font-extrabold text-brand-dark underline">250 opciones explicadas paso a paso</span> en PDF.
        </div>
      </div>
    </section>
  );
}

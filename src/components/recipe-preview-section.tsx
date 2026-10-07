import { useState } from "react";
import { Clock, ShieldCheck, Sparkles, ChefHat, Check } from "lucide-react";

const OFFICIAL_RECIPES = [
  {
    chapter: "Capítulo 1 — Desayuno",
    title: "Panqueque de Avena con Canela",
    prepTime: "8 minutos",
    gi: "Bajo Índice Glucémico",
    icon: "🥞",
    color: "from-amber-500/10 to-orange-500/5 border-amber-200",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
    ingredients: [
      "2 cucharadas de avena en copos finos",
      "1 huevo",
      "1/2 plátano (banana) machacado",
      "Canela al gusto",
      "1 chorrito de aceite de coco",
    ],
    steps: [
      "Mezcle todos los ingredientes hasta formar una masa homogénea.",
      "Caliente el sartén con el aceite de coco.",
      "Vierta la masa y dore por ambos lados.",
      "Sirva con canela por encima.",
    ],
    tip: "La canela ayuda a dar sabor dulce sin necesidad de azúcar y estabiliza la glucemia.",
  },
  {
    chapter: "Capítulo 2 — Platos Principales",
    title: "Salmón al Horno con Espárragos",
    prepTime: "18 minutos",
    gi: "Cero Azúcares / Proteína Limpia",
    icon: "🐟",
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-200",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    ingredients: [
      "1 filete de salmón fresco",
      "6 espárragos tiernos",
      "Limón fresco al gusto",
      "Sal marina, pimienta y romero al gusto",
      "1 chorrito de aceite de oliva virgen extra",
    ],
    steps: [
      "Sazone el salmón con limón, sal y romero.",
      "Coloque en una bandeja junto con los espárragos.",
      "Hornee a 200°C por 15-18 minutos hasta dorar.",
      "Sirva de inmediato con el jugo del horneado.",
    ],
    tip: "Rico en omega-3, que favorece la salud cardiovascular, frecuentemente afectada en personas con diabetes.",
  },
  {
    chapter: "Capítulo 1 — Desayuno",
    title: "Tortilla de Claras con Espinaca y Tomate",
    prepTime: "6 minutos",
    gi: "Proteína Máxima / Sin Carbohidratos",
    icon: "🍳",
    color: "from-rose-500/10 to-red-500/5 border-rose-200",
    badgeBg: "bg-rose-100 text-rose-900 border-rose-300",
    ingredients: [
      "4 claras de huevo",
      "1 puñado de espinaca fresca",
      "1 tomate picado en cubos",
      "Sal, pimienta y orégano al gusto",
      "1 chorrito de aceite de oliva",
    ],
    steps: [
      "Bata las claras con sal y pimienta.",
      "Sofría la espinaca y el tomate en el aceite por 2 minutos.",
      "Agregue las claras batidas y cocine a fuego bajo hasta que cuajen.",
      "Termine con orégano y sirva caliente.",
    ],
    tip: "Rica en proteína y prácticamente sin carbohidratos, ideal para mantener la glucemia estable por la mañana.",
  },
  {
    chapter: "Capítulo 2 — Platos Principales",
    title: "Lasaña de Berenjena con Carne Molida",
    prepTime: "25 minutos",
    gi: "Bajo Impacto Glucémico",
    icon: "🍆",
    color: "from-purple-500/10 to-indigo-500/5 border-purple-200",
    badgeBg: "bg-purple-100 text-purple-900 border-purple-300",
    ingredients: [
      "2 berenjenas en láminas finas",
      "300 g de carne molida magra",
      "Salsa de tomate casera sin azúcar",
      "Queso light rallado",
      "Hierbas aromáticas al gusto",
    ],
    steps: [
      "Ase ligeramente las láminas de berenjena en un sartén.",
      "Arme capas alternando berenjena, carne molida salteada y salsa de tomate casera.",
      "Cubra con queso light rallado.",
      "Hornee 25 minutos a 200°C hasta gratinar.",
    ],
    tip: "Sustituye la pasta tradicional de trigo, reduciendo más del 80% de los carbohidratos del plato.",
  },
];

export function RecipePreviewSection() {
  const [activeTab, setActiveTab] = useState(0);
  const recipe = OFFICIAL_RECIPES[activeTab];

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-4 py-1.5 text-xs font-black uppercase tracking-wide text-brand-dark">
            <Sparkles size={16} className="text-brand" /> Recetas Reales Incluidas en el Libro
          </span>
          <h2 className="mt-4 font-display text-2xl font-black text-foreground sm:text-4xl">
            Vistazo Exclusivo a las Recetas del E-book
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-brand-dark sm:text-base">
            Cada una de las 250 recetas viene organizada con ingredientes sencillos, preparación rápida y consejos nutricionales.
          </p>
        </div>

        {/* Selector de Recetas */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {OFFICIAL_RECIPES.map((r, i) => (
            <button
              key={r.title}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition-all ${
                activeTab === i
                  ? "bg-brand text-white shadow-md scale-105"
                  : "bg-surface text-foreground border border-border hover:bg-mint/40"
              }`}
            >
              <span className="text-base">{r.icon}</span>
              <span>{r.title}</span>
            </button>
          ))}
        </div>

        {/* Card Detallada de Receta */}
        <div className={`mt-8 rounded-3xl border-2 bg-gradient-to-b ${recipe.color} p-6 sm:p-8 shadow-xl transition-all duration-300`}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">{recipe.icon}</span>
              <div>
                <span className={`inline-block rounded-full border px-3 py-0.5 text-[11px] font-black uppercase tracking-wide ${recipe.badgeBg}`}>
                  {recipe.chapter}
                </span>
                <h3 className="mt-1 font-display text-xl font-black text-foreground sm:text-2xl">
                  {recipe.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
              <span className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 shadow-2xs">
                <Clock size={15} className="text-brand" /> {recipe.prepTime}
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 shadow-2xs">
                <ShieldCheck size={15} className="text-emerald-600" /> {recipe.gi}
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Ingredientes */}
            <div className="rounded-2xl border border-border/70 bg-white/90 p-5 shadow-xs">
              <h4 className="flex items-center gap-2 font-display text-base font-black text-foreground">
                <ChefHat size={18} className="text-brand" /> Ingredientes Fácilmente Accesibles:
              </h4>
              <ul className="mt-3.5 space-y-2">
                {recipe.ingredients.map((ing) => (
                  <li key={ing} className="flex items-start gap-2 text-xs font-bold text-brand-dark sm:text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand stroke-[3]" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pasos y Consejo */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-border/70 bg-white/90 p-5 shadow-xs">
                <h4 className="font-display text-base font-black text-foreground mb-3">
                  Paso a Paso Rápido:
                </h4>
                <ol className="space-y-2 text-xs font-semibold text-brand-dark sm:text-sm">
                  {recipe.steps.map((step, idx) => (
                    <li key={step} className="flex gap-2">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint font-black text-[11px] text-brand-dark">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Consejo Nutricional */}
              <div className="rounded-2xl border border-brand/30 bg-mint/50 p-4 text-xs font-bold text-brand-dark">
                💡 <span className="font-black text-foreground">Consejo de Salud:</span> {recipe.tip}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-mint/40 border border-brand/20 p-4 text-center text-xs font-bold text-brand-dark sm:text-sm max-w-2xl mx-auto shadow-sm">
          ✨ ¡Esto es solo una muestra! El e-book incluye <span className="font-extrabold text-brand-dark underline">250 recetas completas divididas en 7 capítulos</span> por solo <span className="font-black text-brand">$5.90 USD</span>.
        </div>
      </div>
    </section>
  );
}

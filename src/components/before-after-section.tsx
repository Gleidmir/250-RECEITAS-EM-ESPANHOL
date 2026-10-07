import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKOUT_URL = "https://pay.hotmart.com/R107911179I?checkoutMode=10";

export function BeforeAfterSection() {
  return (
    <section className="bg-gradient-to-b from-surface via-white to-surface px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-brand-dark">
            ⚖️ La Elección para Tu Salud y Tranquilidad
          </span>
          <h2 className="mt-4 font-display text-2xl font-black text-foreground sm:text-4xl">
            Mira la Diferencia en Tu Día a Día
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-brand-dark sm:text-base">
            Compara cómo cambia tu rutina cuando tienes la guía correcta en tu cocina.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Card ANTES */}
          <div className="rounded-3xl border-2 border-rose-200 bg-rose-50/70 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-rose-500 px-4 py-1 text-xs font-black uppercase tracking-wider text-white">
              Sin las 250 Recetas
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose-100 text-rose-600">
                <XCircle size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-rose-950">La Rutina de Privación y Miedo</h3>
                <p className="text-xs font-bold text-rose-700">El camino difícil y frustrante</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                "Miedo y ansiedad constante al medir la glucosa después de comer.",
                "Comida sin sabor, seca e insípida (pechuga a la plancha y lechuga sin más).",
                "Sensación de aislamiento mientras el resto de la familia come rico.",
                "Gasto de dinero en productos 'light' de supermercado cargados de químicos.",
                "Frustración de no saber qué preparar para el desayuno, almuerzo o cena.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-rose-900">
                  <XCircle className="mt-0.5 shrink-0 text-rose-500" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card DESPUÉS */}
          <div className="rounded-3xl border-2 border-brand/50 bg-gradient-to-br from-mint/90 via-emerald-50 to-white p-6 sm:p-8 shadow-xl relative overflow-hidden transform transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-brand px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
              ⭐ Con las 250 Recetas
            </div>

            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-md shadow-brand/30">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-foreground">Tu Nueva Vida en la Mesa</h3>
                <p className="text-xs font-extrabold text-brand-dark">Tranquilidad, sabor y variedad diaria</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                "Glucemia bajo control con recetas de bajo impacto glucémico calculadas.",
                "250 opciones deliciosas: postres cremosos, desayunos saciantes y cenas familiares.",
                "Toda la familia come el mismo plato delicioso sin cocinar comidas separadas.",
                "Ingredientes económicos y comunes de tu supermercado habitual.",
                "Acceso inmediato en PDF desde tu celular para consultar en cualquier momento.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-bold text-brand-dark">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                variant="sales"
                className="sales-pulse group h-auto min-h-14 w-full rounded-2xl px-6 py-3.5 text-center shadow-lg"
              >
                <a href={CHECKOUT_URL} className="flex items-center justify-center gap-2 text-base font-black uppercase tracking-wide">
                  <span>Transformar mis comidas por $5.90</span>
                  <ArrowRight className="shrink-0 stroke-[3] transition-transform duration-300 group-hover:translate-x-1.5 animate-arrow-nudge" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

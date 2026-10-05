import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraits from "@/assets/reader-portraits.jpg";

const examples = [
  ["Carlos", "58 años", "Busco ideas variadas para organizar mis desayunos y cenas con ingredientes cotidianos."],
  ["Elena", "34 años", "Quiero cocinar para mi madre y compartir con ella comidas que toda la familia pueda disfrutar."],
  ["Jorge", "46 años", "Prefiero recetas prácticas con ingredientes que encuentre en el supermercado de mi barrio."],
  ["Isabel", "62 años", "Me interesa descubrir nuevas ensaladas, sopas y preparaciones para variar mi menú semanal."],
  ["Antonio", "67 años", "Quiero tener las recetas a mano y leerlas a mi ritmo, también cuando estoy en la cocina."],
  ["Lucía", "43 años", "Busco opciones para preparar las comidas de mi familia sin repetir siempre los mismos platos."],
  ["Miguel", "51 años", "Me gustaría planificar mis compras y encontrar nuevas ideas para las meriendas."],
  ["Carmen", "56 años", "Quiero explorar preparaciones sin azúcar refinada y conversar sobre ellas con mi nutricionista."],
];

export function ReaderCarousel() {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    api.on("select", update);
    update();
    return () => { api.off("select", update); };
  }, [api]);
  useEffect(() => {
    if (!api || paused || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => api.scrollNext(), 5500);
    return () => window.clearInterval(timer);
  }, [api, paused, hovered]);

  return (
    <section className="bg-surface px-4 py-16" aria-label="Historias ilustrativas">
      <div className="mx-auto max-w-6xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setHovered(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false); }}>
        <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">Cada Familia Tiene una Historia en la Cocina</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-semibold text-brand-dark">Ejemplos ilustrativos: nombres, edades, relatos y retratos creados con IA. No son testimonios de clientes reales.</p>
        <div ref={ref} className="mt-8 overflow-hidden">
          <div className="flex touch-pan-y">
            {examples.map(([name, age, text], index) => (
              <div key={name} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <figure className="flex h-full min-h-80 flex-col items-center rounded-lg border border-border bg-card p-6 text-center">
                  <div className={`reader-portrait reader-portrait-${index}`} role="img" aria-label={`Retrato ilustrativo de ${name}, generado con IA`}>
                    <img src={portraits} alt="" loading="lazy" width={1536} height={1024} />
                  </div>
                  <blockquote className="mt-5 flex-1 text-base font-bold leading-relaxed text-brand-dark">“{text}”</blockquote>
                  <figcaption className="mt-5 text-sm font-bold text-foreground">{name} · {age}<span className="mt-1 block text-xs font-medium text-muted-foreground">Perfil ilustrativo</span></figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" aria-label="Historia anterior" title="Anterior" onClick={() => api?.scrollPrev()}><ChevronLeft /></Button>
          <span className="w-12 text-center text-sm font-bold text-brand-dark">{selected + 1} / 8</span>
          <Button variant="outline" size="icon" aria-label={paused ? "Reproducir historias" : "Pausar historias"} title={paused ? "Reproducir" : "Pausar"} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button>
          <Button variant="outline" size="icon" aria-label="Historia siguiente" title="Siguiente" onClick={() => api?.scrollNext()}><ChevronRight /></Button>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { ArrowDownRight, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofPoints = [
  { value: "Back-end", label: "API design, automacao e dados" },
  { value: "Clean", label: "Arquitetura, organizacao e manutencao" },
  { value: "Scale", label: "Solucoes pensadas para crescer" },
];

const recruiterSignals = [
  "Foco em sistemas robustos e legiveis para times reais.",
  "Projetos com Python, FastAPI, Java, PostgreSQL e automacao.",
  "Perfil orientado a resolver problema de negocio, nao so interface.",
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-grid">
        <div className="relative z-10 flex flex-col justify-end">
          <div className="data-chip mb-8 w-fit">
            <Sparkles className="size-3.5" />
            Portfolio orientado a backend engineering
          </div>

          <p className="section-kicker mb-6">Matheus Augusto Ribeiro</p>
          <h1 className="hero-heading max-w-5xl text-foreground">
            Backend engineer com foco em arquitetura, dados e entrega confiavel.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Construo a camada que sustenta produtos: APIs, automacoes, integrações e sistemas preparados para manter performance,
            observabilidade e crescimento com codigo limpo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[220px] font-mono">
              <Link href="#projects">
                Ver projetos <ArrowDownRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[220px] font-mono">
              <a href="/Matheus_Ribeiro_Curriculo.pdf" target="_blank" rel="noopener noreferrer">
                Abrir curriculo
              </a>
            </Button>
          </div>

          <div className="mt-14 recruiter-grid">
            {proofPoints.map((item) => (
              <div key={item.value} className="metric-card glass-card">
                <div className="relative z-10">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Signal</p>
                  <p className="mt-3 text-3xl font-semibold uppercase tracking-[-0.06em]">{item.value}</p>
                  <p className="mt-4 max-w-[18ch] text-sm leading-6 text-muted-foreground">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="relative z-10 flex flex-col gap-5 self-end">
          <div className="panel sharp-shadow glass-card p-6">
            <div className="eyebrow-line" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Why recruiters stop here</p>
            <ul className="mt-5 space-y-4">
              {recruiterSignals.map((signal) => (
                <li key={signal} className="timeline-item leading-6">
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
            <a
              href="https://github.com/zuckalez0-oss?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:bg-secondary"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-ribeiro-bbb894237?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:bg-secondary"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </aside>

        <div className="pointer-events-none absolute inset-x-0 top-28 -z-10 h-[540px] bg-[radial-gradient(circle_at_20%_30%,rgba(255,214,90,0.22),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(64,122,255,0.18),transparent_24%)]" />
      </div>
    </section>
  );
}

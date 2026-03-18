import Image from "next/image";
import { Button } from "@/components/ui/button";

const highlights = [
  "Arquitetura focada em API, integracao e organizacao de dominio.",
  "Atenção a performance, modelagem de dados e manutenibilidade.",
  "Experiencia com automacoes tecnicas para reduzir trabalho manual.",
];

const stats = [
  { label: "Perfil", value: "Backend-first" },
  { label: "Interesse", value: "Sistemas escalaveis" },
  { label: "Diferencial", value: "Negocio + execucao" },
];

export function AboutMeSection() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="section-grid">
        <div className="hidden lg:block">
          <p className="section-kicker sticky top-28">01 / Sobre</p>
        </div>

        <div className="space-y-12">
          <div className="space-y-5">
            <p className="section-kicker">Visao de engenharia</p>
            <h2 className="section-title max-w-4xl">
              Construindo confianca tecnica por tras da interface.
            </h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="panel sharp-shadow glass-card p-8 sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    Sou estudante de Engenharia de Software com direcionamento claro para backend. Gosto de modelar a estrutura que faz
                    um produto funcionar de forma previsivel: regras de negocio, organizacao de camadas, persistencia de dados,
                    automacao de processos e integracao entre servicos.
                  </p>
                  <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    Meu objetivo com cada projeto e transmitir maturidade tecnica mesmo em fases iniciais da carreira: codigo legivel,
                    decisao consciente de stack e entrega que conversa com problemas reais de operacao.
                  </p>

                  <ul className="mt-8 space-y-4">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-3 border-l border-primary pl-4 text-sm leading-7 text-muted-foreground">
                        <span className="mt-2 block size-1.5 bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="metric-card glass-card min-h-[122px]">
                      <div className="relative z-10">
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{stat.label}</p>
                        <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="outline" className="font-mono uppercase tracking-[0.18em]">
                  <a href="/Matheus_Ribeiro_Curriculo.pdf" download="Matheus_Ribeiro_Curriculo.pdf">
                    Baixar curriculo
                  </a>
                </Button>
              </div>
            </div>

            <div className="panel sharp-shadow glass-card relative min-h-[360px] overflow-hidden sm:min-h-[420px]">
              <Image
                src="/images/foto-de-perfil2.jpeg"
                alt="Foto de Matheus Ribeiro"
                fill
                className="object-cover grayscale contrast-125"
                sizes="(max-width: 1280px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/28 to-transparent" />
              <div className="absolute left-4 top-4 right-4 border border-border bg-background/80 px-4 py-3 backdrop-blur-sm sm:left-6 sm:top-6 sm:right-auto">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">System note</p>
                <p className="mt-2 max-w-[22ch] text-sm leading-6">Pronto para contribuir em APIs, automacoes e plataformas internas.</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 border border-border bg-card/85 p-4 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Current focus</p>
                <p className="mt-3 text-base font-medium leading-7 sm:text-lg">
                  Back-end moderno com Python, Java e integrações que resolvem fluxo operacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

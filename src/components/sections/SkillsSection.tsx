import { Blocks, Database, ServerCog } from "lucide-react";

const skillCategories = [
  {
    title: "Core backend",
    icon: ServerCog,
    summary: "Base para APIs, regras de negocio e servicos confiaveis.",
    skills: ["Python", "FastAPI", "Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Dados e persistencia",
    icon: Database,
    summary: "Modelagem, consulta e cuidado com performance de leitura e escrita.",
    skills: ["PostgreSQL", "SQL", "Supabase", "ETL", "Queries otimizadas"],
  },
  {
    title: "Entrega e operacao",
    icon: Blocks,
    summary: "Ferramentas para tornar deploy, automacao e manutencao mais previsiveis.",
    skills: ["Docker", "GitHub", "Linux", "Postman", "Automacoes"],
  },
];

const recruiterLens = [
  "Stack organizada por responsabilidade, nao por moda.",
  "Narrativa de carreira alinhada com backend engineering.",
  "Componentes visuais ajudam a escanear competencias rapido.",
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="section-grid">
        <div className="hidden lg:block">
          <p className="section-kicker sticky top-28">02 / Stack</p>
        </div>

        <div className="space-y-12">
          <div className="space-y-5">
            <p className="section-kicker">Stack principal</p>
            <h2 className="section-title">Tecnologias escolhidas para construir estrutura, nao so interface.</h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
            <div className="grid gap-6 md:grid-cols-3">
              {skillCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <article key={category.title} className="panel sharp-shadow glass-card flex flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Cluster</p>
                        <h3 className="mt-2 text-2xl tracking-[-0.05em]">{category.title}</h3>
                      </div>
                      <span className="flex size-12 items-center justify-center border border-border bg-background/80">
                        <Icon className="size-5 text-primary" />
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">{category.summary}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="data-chip bg-background/60 text-[10px]">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <aside className="panel sharp-shadow glass-card p-6 sm:p-7">
              <p className="section-kicker">Recruiter lens</p>
              <div className="mt-6 space-y-5">
                {recruiterLens.map((item, index) => (
                  <div key={item} className="border-l border-border pl-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">0{index + 1}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

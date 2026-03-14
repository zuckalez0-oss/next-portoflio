import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectType = {
  title: string;
  summary: string;
  impact: string;
  techStack: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
};

const projectsData: ProjectType[] = [
  {
    title: "DBX V2",
    summary: "Sistema para gestao de desenhos tecnicos com foco em organizacao operacional e escalabilidade.",
    impact: "Mostra capacidade de estruturar dominio, persistencia e fluxo de trabalho em um produto mais proximo do mundo real.",
    techStack: ["Python", "TypeScript", "FastAPI", "PostgreSQL"],
    imageUrl: "/images/projects/dbx-v2.png",
    repoUrl: "https://github.com/zuckalez0-oss/DBX-V2",
    demoUrl: "#",
  },
  {
    title: "PromptMaster",
    summary: "Ferramenta CLI em Python para acelerar interacoes com IA por meio de um fluxo produtivo no terminal.",
    impact: "Reforca interesse por automacao, experiencia de desenvolvedor e produtos utilitarios orientados a eficiencia.",
    techStack: ["Python", "CLI", "IA", "Automacao"],
    imageUrl: "/images/projects/promptmaster.png",
    repoUrl: "https://github.com/zuckalez0-oss/promptMaster",
  },
  {
    title: "Automacao para desenho tecnico",
    summary: "Pipeline para separar arquivos e preparar materiais para corte a laser com menos operacao manual.",
    impact: "Bom exemplo de software resolvendo gargalo operacional com automacao pragmatica e foco em produtividade.",
    techStack: ["Python", "ezdxf", "openpyxl", "Tkinter"],
    imageUrl: "/images/projects/laser.png",
    repoUrl: "https://github.com/zuckalez0-oss/Layer_desenhos_Laser",
  },
  {
    title: "Landing Page da Lypsyos",
    summary: "Uma landing page para divulgar meus trabalhos comerciais, SaaS e soluções para a industria.",
    impact: "Uma rota direta para contato com a empresa proporcionando a possibilidade do possivel cliente testar e validar a aplicacao DBX antes de fazer a assinatura.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "/images/projects/landing-page-lypsyos.png",
    repoUrl: "https://github.com/zuckalez0-oss/Layer_desenhos_Laser",
  },
];

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  return (
    <article className="panel sharp-shadow glass-card group overflow-hidden">
      <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[260px] border-b border-border xl:min-h-full xl:border-r xl:border-b-0">
          <Image
            src={project.imageUrl}
            alt={`Preview do projeto ${project.title}`}
            fill
            className="object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <div className="absolute left-4 top-4 border border-border bg-background/88 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-sm">
            Case 0{index + 1}
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="data-chip text-[10px]">Projeto selecionado</span>
            <span className="data-chip text-[10px]">Portfolio backend</span>
          </div>

          <h3 className="mt-5 text-3xl tracking-[-0.05em]">{project.title}</h3>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{project.summary}</p>

          <div className="mt-6 border-l border-primary pl-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Por que importa</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.impact}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="data-chip bg-background/60 text-[10px]">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-6">
            {project.demoUrl && (
              <Button variant="default" size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Demo <ExternalLink className="size-3" />
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  Repositorio <Github className="size-3" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsGrid() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="section-grid">
        <div className="hidden lg:block">
          <p className="section-kicker sticky top-28">03 / Projetos</p>
        </div>

        <div className="space-y-12">
          <div className="space-y-5">
            <p className="section-kicker">Provas de execucao</p>
            <h2 className="section-title">Projetos com narrativa mais clara para quem avalia potencial tecnico.</h2>
          </div>

          <div className="grid gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

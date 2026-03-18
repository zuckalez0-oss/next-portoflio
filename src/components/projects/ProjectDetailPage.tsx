import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectImageGallery } from "@/components/projects/ProjectImageGallery";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { Project } from "@/types/project";

type ProjectDetailPageProps = {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
  relatedProjects: Project[];
};

export function ProjectDetailPage({
  project,
  previousProject,
  nextProject,
  relatedProjects,
}: ProjectDetailPageProps) {
  return (
    <main className="flex-grow">
      <ProjectHero project={project} previousProject={previousProject} nextProject={nextProject} />
      <ProjectImageGallery title={project.title} gallery={project.gallery} />

      <ProjectSection kicker="01 / Contexto" title="Descricao, desafio e solucao com mais profundidade.">
        <div className="grid gap-6 xl:grid-cols-3">
          <article className="panel sharp-shadow glass-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Visao geral</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.summary}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.impact}</p>
          </article>

          <article className="panel sharp-shadow glass-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Desafios</p>
            <div className="mt-4 space-y-4">
              {project.challenge.map((item) => (
                <p key={item} className="border-l border-border pl-4 text-sm leading-7 text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="panel sharp-shadow glass-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Solucoes</p>
            <div className="mt-4 space-y-4">
              {project.solution.map((item) => (
                <p key={item} className="border-l border-border pl-4 text-sm leading-7 text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </ProjectSection>

      <ProjectSection kicker="02 / Resultado" title="Aprendizados, impacto e narrativa tecnica do case.">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="panel sharp-shadow glass-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Resultados observados</p>
            <div className="mt-4 space-y-4">
              {project.outcomes.map((item) => (
                <p key={item} className="border-l border-border pl-4 text-sm leading-7 text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {project.sections.map((section) => (
              <article key={section.title} className="panel sharp-shadow glass-card p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{section.title}</p>
                <div className="mt-4 space-y-4">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </ProjectSection>

      <ProjectSection kicker="03 / Teste" title="Como avaliar o projeto de forma objetiva.">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <article className="panel sharp-shadow glass-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Passos de validacao</p>
            <ol className="mt-4 space-y-4">
              {project.testSteps.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm leading-7 text-muted-foreground">
                  <span className="font-mono text-primary">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="panel sharp-shadow glass-card p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Leitura para recrutadores</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Esta secao ajuda a transformar o projeto em evidencia concreta de execucao: stack usada, contexto resolvido, forma de validacao e links para aprofundamento tecnico.
            </p>
            {project.verificationNote && (
              <div className="mt-6 border border-primary/35 bg-primary/10 px-4 py-4 text-sm leading-7 text-primary">
                {project.verificationNote}
              </div>
            )}
          </article>
        </div>
      </ProjectSection>

      <ProjectSection kicker="04 / Navegacao" title="Continue explorando outros projetos do portfolio.">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/#projects"
            className="panel inline-flex items-center gap-3 px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Voltar para a listagem <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-8">
          {relatedProjects.map((relatedProject, index) => (
            <ProjectCard key={relatedProject.slug} project={relatedProject} index={index} />
          ))}
        </div>
      </ProjectSection>
    </main>
  );
}

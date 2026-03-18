import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechnologyTags } from "@/components/projects/TechnologyTags";
import { Project } from "@/types/project";

type ProjectHeroProps = {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
};

export function ProjectHero({ project, previousProject, nextProject }: ProjectHeroProps) {
  const repoLink = project.links.find((link) => link.label.toLowerCase().includes("repositorio"));
  const liveLink = project.links.find((link) => link.label.toLowerCase().includes("online"));

  return (
    <section className="border-b border-border">
      <div className="layout-shell py-24 sm:py-28">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_360px] xl:items-start">
          <div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Voltar para projetos
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="data-chip">{project.period}</span>
              <span className="data-chip">{project.role}</span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl leading-none tracking-[-0.06em] text-foreground sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {project.tagline}
            </p>

            <div className="mt-8">
              <TechnologyTags items={project.techStack} />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {repoLink && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={repoLink.href} target="_blank" rel="noopener noreferrer">
                    Repositorio <Github className="size-4" />
                  </a>
                </Button>
              )}
              {liveLink && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={liveLink.href} target="_blank" rel="noopener noreferrer">
                    Projeto online <ExternalLink className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <aside className="panel sharp-shadow glass-card p-6 sm:p-8">
            <p className="section-kicker">Resumo rapido</p>
            <div className="mt-6 grid gap-4">
              {project.highlights.map((highlight) => (
                <div key={highlight.label} className="border-l border-border pl-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{highlight.label}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{highlight.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Navegacao contextual</p>
              <div className="mt-4 grid gap-3">
                {previousProject && (
                  <Link
                    href={`/projects/${previousProject.slug}`}
                    className="panel flex items-center justify-between gap-3 px-4 py-4 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <span>Projeto anterior</span>
                    <span className="inline-flex items-center gap-2">
                      {previousProject.title}
                      <ArrowLeft className="size-4" />
                    </span>
                  </Link>
                )}
                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="panel flex items-center justify-between gap-3 px-4 py-4 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <span>Proximo projeto</span>
                    <span className="inline-flex items-center gap-2">
                      {nextProject.title}
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

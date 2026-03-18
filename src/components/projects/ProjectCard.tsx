import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechnologyTags } from "@/components/projects/TechnologyTags";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const repoLink = project.links.find((link) => link.label.toLowerCase().includes("repositorio"));
  const liveLink = project.links.find((link) => link.label.toLowerCase().includes("online"));

  return (
    <article className="panel sharp-shadow glass-card group overflow-hidden">
      <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[220px] border-b border-border sm:min-h-[260px] xl:min-h-full xl:border-r xl:border-b-0">
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

        <div className="flex flex-col p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="data-chip text-[10px]">Projeto selecionado</span>
            <span className="data-chip text-[10px]">{project.status}</span>
          </div>

          <h3 className="mt-5 text-2xl tracking-[-0.05em] sm:text-3xl">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{project.summary}</p>

          <div className="mt-6 border-l border-primary pl-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Por que importa</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.impact}</p>
          </div>

          <div className="mt-6">
            <TechnologyTags items={project.techStack} />
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button variant="default" size="sm" asChild className="w-full sm:w-auto">
              <Link href={`/projects/${project.slug}`}>
                Ver detalhes <ArrowRight className="size-3" />
              </Link>
            </Button>
            {liveLink && (
              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                <a href={liveLink.href} target="_blank" rel="noopener noreferrer">
                  Projeto online <ExternalLink className="size-3" />
                </a>
              </Button>
            )}
            {repoLink && (
              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                <a href={repoLink.href} target="_blank" rel="noopener noreferrer">
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

import { ProjectCard } from "@/components/projects/ProjectCard";
import { getProjects } from "@/data/projects";

export function ProjectsGridSection() {
  const projects = getProjects();

  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="section-grid">
        <div className="hidden lg:block">
          <p className="section-kicker sticky top-28">03 / Projetos</p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          <div className="space-y-5">
            <p className="section-kicker">Provas de execucao</p>
            <h2 className="section-title">Projetos com narrativa mais clara para quem avalia potencial tecnico.</h2>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

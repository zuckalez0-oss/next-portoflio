import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ProjectDetailPage } from "@/components/projects/ProjectDetailPage";
import { getProjectBySlug, getProjects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto nao encontrado | Matheus Ribeiro",
    };
  }

  return {
    title: `${project.title} | Matheus Ribeiro`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = getProjects();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;
  const relatedProjects = projects.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ProjectDetailPage
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
        relatedProjects={relatedProjects}
      />
      <Footer />
    </div>
  );
}

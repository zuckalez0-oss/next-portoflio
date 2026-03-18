import Image from "next/image";
import { Project } from "@/types/project";

type ProjectImageGalleryProps = {
  title: string;
  gallery: Project["gallery"];
};

export function ProjectImageGallery({ title, gallery }: ProjectImageGalleryProps) {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="layout-shell space-y-6">
        <div className="space-y-3">
          <p className="section-kicker">Galeria</p>
          <h2 className="section-title max-w-3xl">Visao visual do projeto {title}.</h2>
        </div>

        <div className="grid gap-6">
          {gallery.map((image) => (
            <article key={image.src} className="panel sharp-shadow glass-card overflow-hidden">
              <div className="relative aspect-[16/10] min-h-[240px] w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" priority />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

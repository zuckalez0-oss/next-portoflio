import { ReactNode } from "react";

type ProjectSectionProps = {
  kicker: string;
  title: string;
  children: ReactNode;
};

export function ProjectSection({ kicker, title, children }: ProjectSectionProps) {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="layout-shell grid gap-8 lg:grid-cols-[160px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <p className="section-kicker sticky top-28">{kicker}</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="section-kicker lg:hidden">{kicker}</p>
            <h2 className="section-title max-w-3xl">{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

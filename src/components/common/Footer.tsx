import { Github, Linkedin, MessageSquare, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="layout-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-5">
          <div className="flex items-center gap-3 font-mono uppercase tracking-[0.22em]">
            <span className="flex size-10 items-center justify-center border border-border bg-card">
              <Terminal className="size-4" />
            </span>
            <span>
              <span className="block text-sm text-foreground">Matheus Ribeiro</span>
              <span className="block text-[10px] text-muted-foreground">Backend engineer portfolio</span>
            </span>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            Portfolio desenhado para comunicar clareza tecnica, foco em backend e prontidao para contribuir em produtos, plataformas e automacoes.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <a
            href="#contact"
            className="panel flex items-center gap-3 px-4 py-4 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <MessageSquare className="size-4 text-primary" /> Contato
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-ribeiro-bbb894237?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="panel flex items-center gap-3 px-4 py-4 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Linkedin className="size-4 text-primary" /> LinkedIn
          </a>
          <a
            href="https://github.com/zuckalez0-oss?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="panel flex items-center gap-3 px-4 py-4 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Github className="size-4 text-primary" /> GitHub
          </a>
        </div>
      </div>

      <div className="layout-shell mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Matheus Ribeiro</p>
        <p className="flex items-center gap-3">
          <span className="status-dot" />
          Interface pronta para recrutadores
        </p>
      </div>
    </footer>
  );
}


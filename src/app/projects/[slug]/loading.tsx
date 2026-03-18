export default function ProjectLoading() {
  return (
    <div className="layout-shell flex min-h-screen items-center justify-center py-24">
      <div className="panel sharp-shadow glass-card flex items-center gap-4 px-6 py-5">
        <span className="loading-dot" />
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Carregando detalhes do projeto
        </p>
      </div>
    </div>
  );
}

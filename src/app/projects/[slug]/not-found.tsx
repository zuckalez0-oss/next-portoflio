import Link from "next/link";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="layout-shell flex flex-grow items-center py-24">
        <section className="panel sharp-shadow glass-card max-w-3xl p-8 sm:p-10">
          <p className="section-kicker">404 / Projeto</p>
          <h1 className="mt-4 text-4xl tracking-[-0.05em] sm:text-5xl">Projeto nao encontrado.</h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            O case que voce tentou abrir nao existe ou ainda nao foi publicado. Volte para a listagem principal para continuar explorando o portfolio.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/#projects">Voltar para projetos</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

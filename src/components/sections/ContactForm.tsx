"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="section-grid">
        <div className="hidden lg:block">
          <p className="section-kicker sticky top-28">04 / Contato</p>
        </div>

        <div className="space-y-12">
          <div className="space-y-5">
            <p className="section-kicker">Contato profissional</p>
            <h2 className="section-title">Facilite o proximo passo para recrutadores e equipes tecnicas.</h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
            <aside className="panel sharp-shadow glass-card p-8 sm:p-10">
              <p className="text-lg leading-8 text-muted-foreground">
                Se voce procura alguem com interesse real em backend, arquitetura e automacao aplicada a problemas concretos, esta
                pagina ja resume bem minha direcao. O proximo passo pode ser uma conversa rapida.
              </p>

              <div className="mt-8 space-y-4 font-mono text-sm uppercase tracking-[0.18em]">
                <div className="flex items-center gap-3 border-b border-border pb-4 text-muted-foreground">
                  <Mail className="size-4 text-primary" />
                  <span>Disponivel para primeiro contato</span>
                </div>
                <div className="flex items-center gap-3 border-b border-border pb-4 text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  <span>Brasil / remoto</span>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
            </aside>

            <form onSubmit={handleSubmit} className="panel sharp-shadow glass-card flex flex-col gap-6 p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nome" id="name" placeholder="Seu nome" />
                <Field label="Email" id="email" type="email" placeholder="voce@empresa.com" />
              </div>

              <Field label="Assunto" id="subject" placeholder="Oportunidade, projeto ou networking" />

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Contexto da vaga, projeto ou stack desejada"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg" className="font-mono">
                  {status === "loading" ? "Enviando..." : "Iniciar conversa"}
                </Button>
                <p className="text-sm text-muted-foreground">Resposta visual simulada enquanto o backend do formulario nao esta conectado.</p>
              </div>

              {status === "success" && (
                <div className="border border-primary/45 bg-primary/10 px-4 py-3 text-sm text-primary">
                  Mensagem validada no front-end com sucesso. O proximo passo ideal e conectar este formulario a uma API ou servico de e-mail.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="w-full border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        placeholder={placeholder}
      />
    </div>
  );
}

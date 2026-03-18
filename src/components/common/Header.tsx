"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Terminal, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="layout-shell flex h-[72px] items-center justify-between gap-6 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-sm font-mono uppercase tracking-[0.22em]">
          <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-card">
            <Terminal className="size-4" />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-foreground text-[12px] sm:text-sm">Matheus Ribeiro</span>
            <span className="truncate text-[9px] text-muted-foreground sm:text-[10px]">Backend Engineer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <NavLink key={item.href} href={item.href} index={index + 1} onClick={() => undefined}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="data-chip">
            <span className="status-dot" />
            Disponivel para oportunidades
          </span>
        </div>

        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center border border-border bg-card lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="layout-shell border-t border-border py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <NavLink key={item.href} href={item.href} index={index + 1} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <span className="data-chip">
                <span className="status-dot" />
                Disponivel para entrevistas
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
  index,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  index: number;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="text-[10px] text-primary">0{index}</span>
      <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 group-hover:after:w-full">
        {children}
      </span>
    </Link>
  );
}


"use client";

import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface"
      >
        <span className="sr-only">
          {isOpen ? "Fechar menu" : "Abrir menu"}
        </span>

        <div className="flex w-5 flex-col gap-1.5">
          <span
            className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />

          <span
            className={`h-0.5 w-full bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""
              }`}
          />

          <span
            className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </div>
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação mobile"
          className="absolute left-0 top-full w-full border-b border-border bg-surface px-5 py-6 shadow-lg sm:px-6"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <Link
              href="#servicos"
              onClick={closeMenu}
              className="border-b border-border py-4 font-semibold text-foreground transition-colors hover:text-brand"
            >
              Serviços
            </Link>

            <Link
              href="#pecas"
              onClick={closeMenu}
              className="border-b border-border py-4 font-semibold text-foreground transition-colors hover:text-brand"
            >
              Peças
            </Link>

            <Link
              href="#sobre"
              onClick={closeMenu}
              className="border-b border-border py-4 font-semibold text-foreground transition-colors hover:text-brand"
            >
              Sobre
            </Link>

            <a
              href="#faq"
              onClick={closeMenu}
              className="border-b border-border py-4 font-semibold text-foreground transition-colors hover:text-brand"
            >
              FAQ
            </a>

            <Link
              href="#contato"
              onClick={closeMenu}
              className="py-4 font-semibold text-foreground transition-colors hover:text-brand"
            >
              Contato
            </Link>

            <a
              href="https://wa.me/551633677184"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex justify-center rounded-lg bg-brand px-5 py-3.5 font-bold text-white transition-colors hover:bg-brand-hover"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
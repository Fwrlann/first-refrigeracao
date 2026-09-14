"use client";

import { useState } from "react";

const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Peças", href: "#pecas" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((current) => !current);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggleMenu}
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
            className={`h-0.5 w-full bg-foreground transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-foreground transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`h-0.5 w-full bg-foreground transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`absolute left-0 right-0 top-full grid bg-surface shadow-lg transition-all duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] translate-y-0 border-b border-border opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-2 border-b border-transparent opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Navegação mobile"
            className="mx-auto flex w-full max-w-7xl flex-col px-5 py-3 sm:px-6"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className="border-b border-border py-4 font-semibold text-foreground transition-colors last:border-b-0 hover:text-brand"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/551633677184"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-brand px-5 py-3.5 font-bold text-white transition-colors hover:bg-brand-hover"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
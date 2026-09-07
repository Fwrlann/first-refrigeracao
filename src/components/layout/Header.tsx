import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="First Refrigeração - Página inicial"
        >
          <Image
            src="/brand/logo-first-light.png"
            alt=""
            width={180}
            height={135}
            className="theme-logo-light h-auto w-[155px] xl:w-[165px]"
            priority
          />

          <Image
            src="/brand/logo-first-dark.png"
            alt=""
            width={180}
            height={135}
            className="theme-logo-dark h-auto w-[155px] xl:w-[165px]"
            priority
          />
        </Link>

        {/* Navegação desktop */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          <a
            href="#servicos"
            className="relative text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            Serviços
          </a>

          <a
            href="#pecas"
            className="relative text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            Peças
          </a>

          <a
            href="#sobre"
            className="relative text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            Sobre
          </a>

          <a
            href="#faq"
            className="relative text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            FAQ
          </a>

          <a
            href="#contato"
            className="relative text-sm font-semibold text-foreground transition-colors hover:text-brand"
          >
            Contato
          </a>
        </nav>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="https://wa.me/551633677184"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover lg:inline-flex"
          >
            Falar no WhatsApp
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
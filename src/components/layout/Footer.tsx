import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Peças", href: "#pecas" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 md:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr] lg:gap-16">
          {/* Marca */}
          <div>
            <Link
              href="/"
              aria-label="First Refrigeração - Página inicial"
              className="inline-block"
            >
              <Image
                src="/brand/logo-first-light.png"
                alt=""
                width={180}
                height={135}
                className="theme-logo-light h-auto w-[155px]"
              />

              <Image
                src="/brand/logo-first-dark.png"
                alt=""
                width={180}
                height={135}
                className="theme-logo-dark h-auto w-[155px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Peças para refrigeração e linha branca, além de assistência
              técnica e atendimento local em São Carlos.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-foreground">
              Navegação
            </h2>

            <nav
              className="mt-5 flex flex-col items-start gap-3"
              aria-label="Navegação do rodapé"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-foreground">
              Fale com a First
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
              <p>
                Av. Dr. Teixeira de Barros, 772
                <br />
                Vila Prado — São Carlos/SP
              </p>

              <p>
                <a
                  href="tel:+551633677184"
                  className="transition-colors hover:text-brand-accent"
                >
                  (16) 3367-7184
                </a>
              </p>

              <p>
                <a
                  href="mailto:firstdistribuidor@gmail.com"
                  className="break-all transition-colors hover:text-brand-accent"
                >
                  firstdistribuidor@gmail.com
                </a>
              </p>

              <a
                href="https://wa.me/551633677184?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20First%20Refrigera%C3%A7%C3%A3o."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center font-bold text-brand-accent transition-opacity hover:opacity-75"
              >
                Chamar no WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} First Refrigeração. Todos os direitos reservados.
          </p>

          <p>São Carlos — SP</p>
        </div>
      </div>
    </footer>
  );
}
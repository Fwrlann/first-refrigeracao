const storeServices = [
  "Purificadores",
  "Bebedouros",
  "Micro-ondas",
  "Fornos",
];

const homeServices = [
  "Lavadoras",
  "Lava e seca",
  "Secadoras",
  "Geladeiras",
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 bg-surface py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:text-sm">
            <span
              aria-hidden="true"
              className="h-4 w-1 -skew-x-12 bg-brand-accent sm:h-5"
            />

            Assistência técnica
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Manutenção para diferentes equipamentos de linha branca
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Conte com atendimento técnico para diferentes equipamentos, seja
            trazendo o produto até a First ou solicitando atendimento no local.
          </p>
        </div>

        {/* Tipos de atendimento */}
        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Atendimento na loja */}
          <div className="relative overflow-hidden border border-border bg-background p-5 sm:p-8 lg:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
              Atendimento na loja
            </span>

            <h3 className="mt-3 text-[26px] font-extrabold leading-tight text-foreground sm:text-3xl">
              Leve até a First
            </h3>

            <p className="mt-3 max-w-md leading-7 text-muted-foreground">
              Para alguns equipamentos, o atendimento é realizado diretamente
              em nossa loja em São Carlos.
            </p>

            <ul className="mt-6 divide-y divide-border sm:mt-8">
              {storeServices.map((service, index) => (
                <li
                  key={service}
                  className="flex items-center gap-4 py-3.5 first:pt-0 sm:py-4"
                >
                  <span className="text-xs font-bold text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-semibold text-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/551633677184?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20assist%C3%AAncia%20t%C3%A9cnica%20na%20loja."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-border bg-surface px-6 py-3.5 text-center font-bold text-foreground transition-colors hover:border-brand hover:text-brand sm:w-auto"
            >
              Consultar atendimento
            </a>
          </div>

          {/* Atendimento em domicílio */}
          <div className="relative overflow-hidden bg-brand-dark p-5 text-white sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-36 w-36 -skew-x-12 bg-white/5 sm:-right-16 sm:-top-16 sm:h-48 sm:w-48"
            />

            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Atendimento em domicílio
              </span>

              <h3 className="mt-3 text-[26px] font-extrabold leading-tight sm:text-3xl">
                A First vai até você
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-white/70">
                Para determinados equipamentos, você pode solicitar atendimento
                técnico no local em São Carlos.
              </p>

              <ul className="mt-6 grid gap-x-8 sm:mt-8 sm:grid-cols-2">
                {homeServices.map((service, index) => (
                  <li
                    key={service}
                    className="flex items-center gap-4 border-b border-white/15 py-3.5 first:pt-0 sm:py-4 sm:[&:nth-child(2)]:pt-0"
                  >
                    <span className="text-xs font-bold text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-semibold">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/551633677184?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20assist%C3%AAncia%20t%C3%A9cnica%20em%20domic%C3%ADlio."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-6 py-3.5 text-center font-bold text-brand-dark transition-transform duration-200 hover:scale-[1.02] sm:w-auto"
              >
                Solicitar atendimento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
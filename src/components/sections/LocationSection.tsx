export function LocationSection() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Av.%20Dr.%20Teixeira%20de%20Barros%2C%20772%2C%20Vila%20Prado%2C%20S%C3%A3o%20Carlos%20SP";

  return (
    <section
      id="localizacao"
      className="scroll-mt-20 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
          {/* Informações */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:text-sm">
              <span
                aria-hidden="true"
                className="h-4 w-1 -skew-x-12 bg-brand-accent sm:h-5"
              />

              Onde nos encontrar
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Visite a First Refrigeração em São Carlos
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Venha conhecer nossa loja física, consultar peças e falar
              diretamente com nossa equipe.
            </p>

            {/* Endereço */}
            <div className="mt-8 border-t border-border">
              <div className="border-b border-border py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  Endereço
                </span>

                <address className="mt-2 not-italic leading-7 text-foreground">
                  Av. Dr. Teixeira de Barros, 772
                  <br />
                  Vila Prado — São Carlos/SP
                </address>
              </div>

              {/* Horário */}
              <div className="border-b border-border py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  Horário de atendimento
                </span>

                <div className="mt-2 leading-7 text-foreground">
                  <p>Segunda a sexta: 08:00 às 18:00</p>
                  <p>Sábado: 08:00 às 13:00</p>
                </div>
              </div>

              {/* Telefone */}
              <div className="border-b border-border py-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  Telefone e WhatsApp
                </span>

                <div className="mt-2">
                  <a
                    href="tel:+551633677184"
                    className="font-semibold text-foreground transition-colors hover:text-brand-accent"
                  >
                    (16) 3367-7184
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-hover sm:w-auto"
              >
                Como chegar
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative">
            <div className="relative min-h-[380px] overflow-hidden border border-border bg-surface sm:min-h-[450px] lg:min-h-[520px]">
              <iframe
                src="https://www.google.com/maps?q=Av.%20Dr.%20Teixeira%20de%20Barros%2C%20772%2C%20Vila%20Prado%2C%20S%C3%A3o%20Carlos%20SP&output=embed"
                title="Localização da First Refrigeração em São Carlos"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Identidade visual First */}
            <span
              aria-hidden="true"
              className="absolute -bottom-3 right-6 h-6 w-24 -skew-x-[28deg] bg-brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
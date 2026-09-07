const audiences = [
  {
    title: "Consumidor final",
    description:
      "Para quem precisa encontrar uma peça ou solicitar manutenção para um equipamento.",
  },
  {
    title: "Técnicos",
    description:
      "Peças para profissionais que trabalham com manutenção e reparo de linha branca.",
  },
  {
    title: "Oficinas",
    description:
      "Reposição de peças para oficinas que atendem diferentes equipamentos.",
  },
  {
    title: "Empresas",
    description:
      "Atendimento para necessidades de peças e manutenção de equipamentos.",
  },
];

export function AudienceSection() {
  return (
    <section
      id="publicos"
      className="bg-surface py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        {/* Introdução */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:text-sm">
            <span
              aria-hidden="true"
              className="h-4 w-1 -skew-x-12 bg-brand-accent sm:h-5"
            />

            Para quem atendemos
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Atendimento para diferentes necessidades
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A First atende desde quem precisa resolver um problema em casa até
            profissionais e empresas que trabalham diariamente com equipamentos
            de linha branca.
          </p>
        </div>

        {/* Públicos */}
        <div className="grid border-l border-t border-border sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="group relative border-b border-r border-border p-6 sm:p-8"
            >
              <span className="text-xs font-bold text-brand-accent">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-extrabold text-foreground transition-colors duration-200 group-hover:text-brand-accent sm:text-2xl">
                {audience.title}
              </h3>

              <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                {audience.description}
              </p>

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-6 h-1 w-10 -skew-x-12 bg-brand-accent transition-[width] duration-200 group-hover:w-16 sm:left-8"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
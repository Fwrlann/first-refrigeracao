const differentials = [
  {
    title: "Especialização em linha branca",
    description:
      "Peças e assistência técnica voltadas para diferentes equipamentos de refrigeração e linha branca.",
  },
  {
    title: "Loja física em São Carlos",
    description:
      "Atendimento presencial, estoque físico e suporte local para quem precisa de peças ou manutenção.",
  },
  {
    title: "Atendimento para diferentes públicos",
    description:
      "Suporte para consumidores, técnicos, oficinas e empresas com necessidades distintas.",
  },
];

export function DifferentialsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:text-sm">
            <span
              aria-hidden="true"
              className="h-4 w-1 -skew-x-12 bg-brand-accent sm:h-5"
            />

            Por que escolher a First
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Estrutura, experiência e atendimento local
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Uma operação pensada para atender quem precisa encontrar peças,
            resolver problemas e contar com suporte especializado em São Carlos.
          </p>
        </div>

        {/* Diferenciais */}
        <div className="mt-10 border-y border-border lg:mt-12">
          <div className="grid lg:grid-cols-3">
            {differentials.map((item, index) => (
              <article
                key={item.title}
                className="group relative border-b border-border py-8 last:border-b-0 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="text-5xl font-extrabold tracking-tight text-brand-soft transition-colors duration-200 group-hover:text-brand-accent sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 max-w-sm text-xl font-extrabold leading-tight text-foreground sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-10 bg-brand-accent transition-[width] duration-200 group-hover:w-20 lg:hidden"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
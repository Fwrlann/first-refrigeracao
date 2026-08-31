const trustItems = [
  {
    title: "Loja física",
    description: "São Carlos/SP",
  },
  {
    title: "Peças",
    description: "Para linha branca",
  },
  {
    title: "Assistência técnica",
    description: "Na loja e em domicílio",
  },
  {
    title: "Atendimento",
    description: "Técnicos e consumidores",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <h2 className="sr-only">Destaques da First Refrigeração</h2>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4 lg:gap-0 lg:bg-transparent">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex min-h-20 items-center bg-surface px-4 py-3.5 sm:px-5 lg:px-8"
            >
              <div className="flex items-center gap-3 transition-transform duration-200 ease-out group-hover:scale-[1.025]">
                <span
                  aria-hidden="true"
                  className="h-7 w-1 shrink-0 -skew-x-12 bg-brand-accent"
                />

                <div>
                  <p className="text-sm font-extrabold text-foreground transition-colors duration-200 group-hover:text-brand-accent sm:text-base">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {index < trustItems.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 z-10 hidden w-[2px] origin-center -skew-x-[28deg] bg-divider-strong lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
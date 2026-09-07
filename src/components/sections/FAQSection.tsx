const faqs = [
  {
    question: "A First realiza atendimento em domicílio?",
    answer:
      "Sim. Em São Carlos, o atendimento em domicílio está disponível para determinados equipamentos, como lavadoras, lava e seca, secadoras e geladeiras.",
  },
  {
    question: "Quais equipamentos posso levar até a loja?",
    answer:
      "A First realiza atendimento na loja para equipamentos como purificadores, bebedouros, micro-ondas e fornos.",
  },
  {
    question: "A First vende peças para técnicos e oficinas?",
    answer:
      "Sim. A First atende consumidores finais, técnicos, oficinas e empresas que precisam de peças para manutenção e reposição de equipamentos de linha branca.",
  },
  {
    question: "Que tipos de peças posso encontrar na First?",
    answer:
      "A First trabalha com peças e componentes para diferentes categorias, incluindo refrigeração, lavanderia, cozinha, purificadores, bebedouros e climatização.",
  },
  {
    question: "Onde fica a First Refrigeração?",
    answer:
      "A loja está localizada na Av. Dr. Teixeira de Barros, 772 – Vila Prado – São Carlos/SP.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-surface py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-8">
        {/* Introdução */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:text-sm">
            <span
              aria-hidden="true"
              className="h-4 w-1 -skew-x-12 bg-brand-accent sm:h-5"
            />

            Perguntas frequentes
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ficou com alguma dúvida?
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Confira algumas das principais dúvidas sobre peças, assistência
            técnica e atendimento da First.
          </p>

          <div className="mt-8">
            <p className="font-semibold text-foreground">
              Não encontrou o que precisava?
            </p>

            <a
              href="https://wa.me/551633677184?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20com%20a%20First%20Refrigera%C3%A7%C3%A3o."
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-hover"
            >
              Falar com a First
            </a>
          </div>
        </div>

        {/* Perguntas */}
        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-border"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5 py-6">
                <span className="shrink-0 text-xs font-bold text-brand-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-base font-bold text-foreground sm:text-lg">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="relative h-5 w-5 shrink-0"
                >
                  <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 bg-foreground" />

                  <span className="absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 bg-foreground transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>

              <div className="pb-6 pl-9 pr-10 sm:pl-10">
                <p className="max-w-2xl leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
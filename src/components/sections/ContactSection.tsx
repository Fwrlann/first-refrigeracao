const contactItems = [
  {
    label: "Endereço",
    content: (
      <>
        Av. Dr. Teixeira de Barros, 772
        <br />
        Vila Prado — São Carlos/SP
      </>
    ),
  },
  {
    label: "Telefone e WhatsApp",
    content: (
      <a
        href="tel:+551633677184"
        className="transition-colors hover:text-white"
      >
        (16) 3367-7184
      </a>
    ),
  },
  {
    label: "E-mail",
    content: (
      <a
        href="mailto:firstdistribuidor@gmail.com"
        className="break-all transition-colors hover:text-white"
      >
        firstdistribuidor@gmail.com
      </a>
    ),
  },
  {
    label: "Horário de atendimento",
    content: (
      <>
        Segunda a sexta: 08:00 às 18:00
        <br />
        Sábado: 08:00 às 13:00
      </>
    ),
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-brand-dark">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CTA */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16 xl:px-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 sm:text-sm">
                <span
                  aria-hidden="true"
                  className="h-4 w-1 -skew-x-12 bg-white sm:h-5"
                />

                Fale com a First
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Precisa de uma peça ou assistência técnica?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Entre em contato com a First e fale diretamente com a equipe
                para consultar peças, atendimento e assistência técnica em São
                Carlos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/551633677184?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20First%20Refrigera%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 font-bold text-brand-dark transition-colors hover:bg-white/90"
                >
                  Falar no WhatsApp
                </a>

                <a
                  href="tel:+551633677184"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 font-bold text-white transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  Ligar para a First
                </a>
              </div>
            </div>

            {/* Informações */}
            <div className="border-t border-white/10 lg:border-l lg:border-t-0">
              {contactItems.map((item, index) => (
                <div
                  key={item.label}
                  className="grid gap-2 border-b border-white/10 px-6 py-6 last:border-b-0 sm:grid-cols-[145px_1fr] sm:px-10 lg:block lg:px-10 lg:py-7 xl:grid xl:grid-cols-[155px_1fr] xl:px-12"
                >
                  <div className="flex items-start gap-3">
                    <span className="pt-1 text-xs font-bold text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-bold text-white">
                      {item.label}
                    </p>
                  </div>

                  <div className="pl-7 text-sm leading-6 text-white/65 sm:pl-0 lg:mt-2 lg:pl-7 xl:mt-0 xl:pl-0">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
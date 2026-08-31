import Image from "next/image";

const productGroups = [
  {
    title: "Refrigeração",
    items: "Geladeiras · Freezers · Adegas",
  },
  {
    title: "Lavanderia",
    items: "Lavadoras · Lava e seca · Secadoras · Tanquinhos",
  },
  {
    title: "Água e climatização",
    items: "Purificadores · Bebedouros · Climatizadores",
  },
  {
    title: "Cozinha",
    items: "Micro-ondas · Fornos · Air fryer",
  },
];

export function ProductsSection() {
  return (
    <section
      id="pecas"
      className="scroll-mt-20 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:text-sm">
            <span
              aria-hidden="true"
              className="h-4 w-1 -skew-x-12 bg-brand-accent sm:h-5"
            />

            Peças para linha branca
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Peças para diferentes equipamentos, com estoque físico em São Carlos
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Encontre peças e componentes para manutenção e reposição em
            diferentes categorias de linha branca.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="mt-10 grid items-stretch gap-8 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Galeria */}
          <div className="grid grid-cols-2 gap-3 lg:min-h-[560px] lg:grid-rows-2">
            {/* Refrigeração */}
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden lg:col-span-1 lg:row-span-2 lg:aspect-auto">
              <Image
                src="/images/first-refrigeracao.png"
                alt="Setor de peças para refrigeração da First Refrigeração"
                fill
                sizes="(max-width: 1023px) 100vw, 34vw"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-16">
                <p className="text-lg font-bold text-white">
                  Refrigeração
                </p>
              </div>
            </div>

            {/* Lavanderia */}
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
              <Image
                src="/images/first-lavadoras.png"
                alt="Estoque de peças para lavadoras da First Refrigeração"
                fill
                sizes="(max-width: 1023px) 50vw, 17vw"
                className="object-cover object-[15%_center]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12">
                <p className="font-bold text-white">
                  Lavanderia
                </p>
              </div>
            </div>

            {/* Purificadores */}
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
              <Image
                src="/images/first-purificadores.png"
                alt="Estoque de peças para purificadores da First Refrigeração"
                fill
                sizes="(max-width: 1023px) 50vw, 17vw"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12">
                <p className="font-bold text-white">
                  Purificadores
                </p>
              </div>
            </div>
          </div>

          {/* Categorias */}
          <div className="flex flex-col justify-center">
            <div>
              {productGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="border-b border-border py-5 first:pt-0"
                >
                  <div className="flex gap-4">
                    <span className="pt-1 text-xs font-bold text-brand-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {group.title}
                      </h3>

                      <p className="mt-1.5 leading-7 text-muted-foreground">
                        {group.items}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <p className="font-semibold text-foreground">
                Não sabe qual peça precisa?
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Fale com a First e consulte a disponibilidade da peça para o seu
                equipamento.
              </p>

              <a
                href="https://wa.me/551633677184?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20uma%20pe%C3%A7a%20para%20meu%20equipamento."
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-hover sm:w-auto"
              >
                Consultar peça no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
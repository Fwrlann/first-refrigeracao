import Image from "next/image";

const aboutPoints = [
  "Fundada em 2022",
  "Mais de 16 anos de experiência no segmento",
  "Loja física e estoque em São Carlos",
  "Atendimento a consumidores, técnicos, oficinas e empresas",
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-8">
        {/* Conteúdo institucional */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:text-sm">
            <span
              aria-hidden="true"
              className="h-4 w-1 -skew-x-12 bg-brand-accent sm:h-5"
            />

            Conheça a First
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Experiência técnica que virou uma empresa completa
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A First Distribuidora nasceu em 2022, fundada por Luan Rodrigues
            Duarte, profissional com formação em Administração e técnico em
            Eletrotécnica, com mais de 16 anos de experiência no segmento de
            refrigeração e linha branca.
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            A empresa iniciou sua trajetória no ambiente digital, com foco em
            vendas online, e expandiu sua operação para reunir loja física,
            estoque de peças, atendimento presencial e serviços especializados
            em São Carlos.
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            Hoje, a First atende consumidores, técnicos, oficinas e empresas
            com peças para refrigeração e linha branca, além de assistência
            técnica para diferentes equipamentos.
          </p>

          {/* Destaques */}
          <div className="mt-8 border-t border-border">
            {aboutPoints.map((point, index) => (
              <div
                key={point}
                className="flex gap-4 border-b border-border py-4"
              >
                <span className="pt-0.5 text-xs font-bold text-brand-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-semibold leading-6 text-foreground">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-2 gap-3">
          {/* Visão geral da loja */}
          <div className="relative col-span-2 aspect-[16/8] overflow-hidden">
            <Image
              src="/images/first-frente.png"
              alt="Interior da loja First Refrigeração em São Carlos"
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-16">
              <p className="font-bold text-white">
                Estrutura física em São Carlos
              </p>
            </div>
          </div>

          {/* Balcão */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/first-balcao.png"
              alt="Balcão de atendimento da First Refrigeração"
              fill
              sizes="(max-width: 1023px) 50vw, 27vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-12">
              <p className="font-bold text-white">
                Atendimento presencial
              </p>
            </div>
          </div>

          {/* Revendedor credenciado */}
          <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark">
            <Image
              src="/images/revendedor-credenciado.png"
              alt="Placa de revendedor credenciado da First Refrigeração"
              fill
              sizes="(max-width: 1023px) 50vw, 27vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-4 pt-12">
              <p className="font-bold text-white">
                Revendedor credenciado
              </p>

              <p className="mt-1 text-xs text-white/75">
                Electrolux · Continental · Brastemp · Consul
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
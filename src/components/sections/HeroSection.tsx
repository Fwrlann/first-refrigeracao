import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="overflow-hidden py-16 md:py-20 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
                <div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-accent">
                        <span className="h-5 w-1 -skew-x-12 bg-brand" />
                        Peças e assistência técnica
                    </span>

                    <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[52px] xl:text-6xl">
                        Peças e assistência técnica para linha branca em São Carlos
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                        Encontre peças para linha branca e conte com assistência técnica
                        especializada, com atendimento local em São Carlos.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="https://wa.me/551633677184?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20pe%C3%A7as%20e%20servi%C3%A7os%20da%20First%20Refrigera%C3%A7%C3%A3o."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3.5 font-bold text-white transition-colors hover:bg-brand-hover"
                        >
                            Falar no WhatsApp
                        </a>

                        <Link
                            href="#servicos"
                            className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3.5 font-bold text-foreground transition-colors hover:border-brand hover:text-brand"
                        >
                            Ver serviços
                        </Link>
                    </div>

                </div>

<div className="relative aspect-[4/3] overflow-hidden [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]">
  <Image
    src="/images/first-fachada.png"
    alt="Fachada da First Refrigeração em São Carlos"
    fill
    className="object-cover"
    priority
  />
</div>
            </div>
        </section>
    );
}
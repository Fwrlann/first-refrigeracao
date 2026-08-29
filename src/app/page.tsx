import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
    <Header />

    <main className="min-h-screen py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-wider text-brand">
          First Refrigeração
        </span>

        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground md:text-5xl md:leading-[1.1]">
          Peças e assistência técnica para linha branca em São Carlos
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Base visual da nova landing page da First Refrigeração.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-hover">
            Botão principal
          </button>

          <button className="rounded-lg border border-border bg-surface px-6 py-3 font-semibold text-foreground transition-colors hover:border-brand hover:text-brand">
            Botão secundário
          </button>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="h-32 rounded-xl bg-brand p-4 text-white">
            Brand
          </div>

          <div className="h-32 rounded-xl bg-brand-dark p-4 text-white">
            Brand Dark
          </div>

          <div className="h-32 rounded-xl border border-border bg-surface p-4 transition-colors">
            Surface
          </div>

          <div className="h-32 rounded-xl bg-brand-soft p-4 text-brand">
            Brand Soft
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductsSection } from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrustBar />
        <ProductsSection />
      </main>
    </>
  );
}
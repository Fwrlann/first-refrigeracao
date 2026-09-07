import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import {AboutSection} from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrustBar />
        <ProductsSection />
        <ServicesSection />
        <AboutSection />
      </main>
    </>
  );
}
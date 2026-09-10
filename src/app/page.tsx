import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import {AboutSection} from "@/components/sections/AboutSection";
import {AudienceSection} from "@/components/sections/AudienceSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import {LocationSection} from "@/components/sections/LocationSection";

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
        <AudienceSection />
        <DifferentialsSection/> 
        <FAQSection />
        <LocationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrustBar />
      </main>
    </>
  );
}
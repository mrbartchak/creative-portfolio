import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import P5Background from "@/components/P5Background";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen pb-16">
      <div className="absolute inset-0">
        <P5Background />
      </div>
      <HeroSection />
    </main>
  );
}

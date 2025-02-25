import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen pb-16 bg-zinc-100 text-black">
      <HeroSection />
    </main>
  );
}

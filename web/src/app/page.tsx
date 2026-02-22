import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Team from "@/components/sections/Team";
import Impact from "@/components/sections/Impact";
import Future from "@/components/sections/Future";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-blue selection:text-black">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Team />
      <Impact />
      <Future />
      <Footer />
    </main>
  );
}

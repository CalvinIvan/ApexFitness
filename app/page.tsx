import About from "@/components/about";
import Choose from "@/components/choose";
import Classes from "@/components/classes";
import Contact from "@/components/contact";
import Convince from "@/components/convince";
import Hero from "@/components/hero";
import Membership from "@/components/membership";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <About />
      <Choose />
      <Convince />
      <Membership />
      <Classes />
      <Contact />
    </main>
  );
}

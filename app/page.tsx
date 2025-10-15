import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Artists } from "@/components/artists";
import { Schedule } from "@/components/schedule";
import { Sponsors } from "@/components/sponsors";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Artists />
      <Schedule />
      {/* <Sponsors /> */}
      <Footer />
    </main>
  );
}

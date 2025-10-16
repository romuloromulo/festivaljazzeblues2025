import { Card } from "@/components/ui/card";
import Image from "next/image";
import Arismar from "../public/images/arismar.jpeg";
import Tiago from "../public/images/tiago.jpg";
import Rui from "../public/images/ruimario.jpg";
import Mark from "../public/images/mark.jpeg";
import Wendell from "../public/images/wendellvirna.jpeg";
import Jair from "../public/images/jair.jpeg";
import Alice from "../public/images/alice.jpeg";
import Beto from "../public/images/beto.jpeg";
import Vanessa from "../public/images/vanessamoreno.jpg";
import Luciana from "../public/images/lucianapinheiro.jpeg";
import Jp from "../public/images/jotape.jpeg";
import JJames from "../public/images/jj james.jpeg";

const artists = [
  {
    name: "Tiago Fernandes Trio",
    image: Tiago,
    day: "terça - 21/10",
  },
  {
    name: "Rui Mário Quarteto",
    image: Rui,
    day: "terça - 21/10",
  },
  {
    name: "Mark Lambert Trio",
    image: Mark,
    day: "terça - 21/10",
  },
  {
    name: "Wendell de La Salles Regional convida Virna Lisi",
    image: Wendell,
    day: "sexta - 24/10",
  },
  {
    name: "Jayr Torres Quarteto",
    image: Jair,
    day: "sexta - 24/10",
  },
  {
    name: "Beto Guedes e Banda",
    image: Beto,
    day: "sexta - 24/10",
  },
  {
    name: "Luciana Pinheiro",
    image: Luciana,
    day: "sexta - 31/10",
  },
  {
    name: "Arismar do Espírito Santo e Morgana Moreno",
    image: Arismar,
    day: "sexta - 31/10",
  },
  {
    name: "Vanessa Moreno Canta Djavan",
    image: Vanessa,
    day: "sexta - 31/10",
  },
  {
    name: "Jota P Quarteto",
    image: Jp,
    day: "sábado - 01/11",
  },
  {
    name: "Alice Caymmi — “Para minha tia Nana”",
    image: Alice,
    day: "sábado - 01/11",
  },
  {
    name: "JJ Thames & Prado Brothers Band (USA)",
    image: JJames,
    day: "sábado - 01/11",
  },
];

export function Artists() {
  return (
    <section
      id="artistas"
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-1/4 w-56 h-56 opacity-10 pointer-events-none">
        <Image
          src="/images/bass-silhouette.jpg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Lineup 2025
          </h2>
          <p className="text-xl text-muted-foreground mb-16 text-pretty">
            Conheça alguns dos artistas que vão fazer história nesta edição
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <Card
                key={index + artist.name}
                className="group overflow-hidden bg-secondary/10 border-border hover:border-primary transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {artist.day}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

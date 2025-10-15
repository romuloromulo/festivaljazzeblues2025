import { Card } from "@/components/ui/card"

const artists = [
  {
    name: "The Midnight Riders",
    genre: "Rock Alternativo",
    image: "/rock-band-performing-on-stage-with-dramatic-lighti.jpg",
    day: "Sexta",
  },
  {
    name: "Luna Silva",
    genre: "Pop/Eletrônica",
    image: "/female-pop-singer-with-colorful-stage-lights.jpg",
    day: "Sexta",
  },
  {
    name: "Cosmic Beats",
    genre: "EDM",
    image: "/dj-performing-at-electronic-music-festival.jpg",
    day: "Sábado",
  },
  {
    name: "Os Trovadores",
    genre: "MPB/Indie",
    image: "/indie-band-with-acoustic-instruments-on-stage.jpg",
    day: "Sábado",
  },
  {
    name: "Neon Dreams",
    genre: "Synthwave",
    image: "/synthwave-concert-with-neon-lights-and-fog.jpg",
    day: "Domingo",
  },
  {
    name: "Raízes do Som",
    genre: "Reggae/Dub",
    image: "/reggae-band-performing-at-outdoor-festival.jpg",
    day: "Domingo",
  },
]

export function Artists() {
  return (
    <section id="artistas" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-56 h-56 opacity-10 pointer-events-none">
        <img src="/images/bass-silhouette.jpg" alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Lineup 2025</h2>
          <p className="text-xl text-muted-foreground mb-16 text-pretty">
            Conheça alguns dos artistas que vão fazer história nesta edição
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-secondary/10 border-border hover:border-primary transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{artist.genre}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

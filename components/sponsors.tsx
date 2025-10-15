const sponsors = [
  { name: "Sponsor 1", logo: "/modern-tech-logo.png" },
  { name: "Sponsor 2", logo: "/beverage-brand-logo.jpg" },
  { name: "Sponsor 3", logo: "/music-streaming-service-logo.jpg" },
  { name: "Sponsor 4", logo: "/abstract-fashion-logo.png" },
  { name: "Sponsor 5", logo: "/energy-drink-logo.jpg" },
  { name: "Sponsor 6", logo: "/telecommunications-company-logo.jpg" },
]

export function Sponsors() {
  return (
    <section id="patrocinadores" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center text-balance">Patrocinadores</h2>
          <p className="text-xl text-muted-foreground mb-16 text-center text-pretty">
            Empresas que tornam este festival possível
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-secondary rounded-lg border border-border hover:border-accent transition-colors"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Interessado em patrocinar?</p>
            <a href="mailto:patrocinio@festival.com" className="text-accent hover:underline font-semibold">
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

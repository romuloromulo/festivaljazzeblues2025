export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-48 h-48 opacity-10 pointer-events-none">
        <img
          src="/images/saxophone-silhouette.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Lençóis Jazz e Blues Festival homenageia Hermeto Pascoal e celebra
            50 anos de carreira de Beto Guedes
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              Aqui está um resumo conciso para uma seção "Sobre" de site: Sobre
              o Lençóis Jazz e Blues Festival 2025 Realizado pelo Lençóis
              Instrumental, o Lençóis Jazz e Blues Festival é um dos encontros
              musicais mais importantes do Maranhão. Em outubro, em São Luís, o
              evento oferece shows gratuitos de alta qualidade com artistas
              locais, nacionais e internacionais, promovendo o intercâmbio
              artístico e valorizando a música maranhense.
            </p>
            <p className="text-pretty">
              A edição de 2025 presta uma homenagem especial ao inigualável
              Hermeto Pascoal (1936-2025), um dos maiores nomes da música
              brasileira, conhecido mundialmente por sua genialidade na
              improvisação e orquestração. A programação diversificada transita
              entre o jazz, o blues, a música instrumental e a canção popular
              brasileira. Entre os destaques, estão o show comemorativo dos 50
              anos de carreira de Beto Guedes e a apresentação do
              norte-americano Mark Lambert & Power Trio, além de consagrados
              nomes maranhenses. Os shows acontecerão em dois palcos: no Teatro
              do Sesc Salomão Ewerton (21 de outubro) e na Concha da Lagoa (24
              de outubro).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">4</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Dias de Festival
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-secondary">10+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Artistas
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-accent">2</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Palcos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

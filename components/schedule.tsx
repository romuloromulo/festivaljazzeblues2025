const scheduleData = [
  {
    day: "Terça-feira",
    date: "21 de Outubro de 2025",
    location: "Teatro do Sesc Napoleão Ewerton (São Luís)",
    events: [
      {
        time: "18:30",
        title: "Tiago Fernandes Trio",
        stage: "Palco Principal",
      },
      { time: "19:30", title: "Rui Mário Quarteto", stage: "Palco Principal" },
      { time: "20:15", title: "Mark Lambert Trio", stage: "Palco Principal" },
    ],
  },
  {
    day: "Sexta-feira",
    date: "24 de Outubro de 2025",
    location: "Concha da Lagoa (São Luís)",
    events: [
      {
        time: "20:00",
        title: "Wendell de La Salles Regional convida Virna Lisi",
        stage: "Palco Principal",
      },
      {
        time: "21:00",
        title: "Jayr Torres Quarteto",
        stage: "Palco Principal",
      },
      { time: "22:15", title: "Beto Guedes e Banda", stage: "Palco Principal" },
    ],
  },
  {
    day: "Sexta-feira",
    date: "31 de Outubro de 2025",
    location: "Beira Rio (Barreirinhas)",
    events: [
      { time: "20:00", title: "Luciana Pinheiro", stage: "Palco Principal" },
      {
        time: "21:00",
        title: "Arismar do Espírito Santo e Morgana Moreno",
        stage: "Palco Principal",
      },
      {
        time: "22:15",
        title: "Vanessa Moreno Canta Djavan",
        stage: "Palco Principal",
      },
    ],
  },
  {
    day: "Sábado",
    date: "1 de Novembro de 2025",
    location: "Beira Rio (Barreirinhas)",
    events: [
      { time: "20:00", title: "Jota P Quarteto", stage: "Palco Principal" },
      {
        time: "21:00",
        title: "Alice Caymmi — “Para minha tia Nana”",
        stage: "Palco Principal",
      },
      {
        time: "22:15",
        title: "JJ Thames & Prado Brothers Band (USA)",
        stage: "Palco Principal",
      },
    ],
  },
];

export function Schedule() {
  return (
    <section id="programacao" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Programação
          </h2>
          <p className="text-xl text-muted-foreground mb-16 text-pretty">
            Confira os horários e não perca nenhum momento do 16º Lençóis Jazz e
            Blues Festival 2025
          </p>

          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-3xl font-bold">{day.day}</h3>
                  <p className="text-muted-foreground">{day.date}</p>
                  <p className="text-sm text-muted-foreground italic">
                    {day.location}
                  </p>
                </div>

                <div className="space-y-2">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_1fr_200px] gap-4 p-4 bg-card hover:bg-secondary transition-colors rounded-lg border border-border"
                    >
                      <div className="text-sm md:text-base font-mono text-accent font-bold">
                        {event.time}
                      </div>
                      <div className="font-semibold">{event.title}</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider hidden md:block">
                        {event.stage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

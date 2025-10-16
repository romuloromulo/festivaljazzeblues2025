import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-4">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/psychedelic-background.jpg"
          alt="Background"
          className="w-full h-full "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/GUITARRA-OK.png"
          alt=""
          className="absolute top-80 left-10 w-32 h-64 opacity-20 animate-float"
        />
        <img
          src="/images/SAX-OK.png"
          alt=""
          className="absolute top-60 right-20 w-32 h-64  opacity-15 animate-float-delayed"
        />
        <img
          src="/images/BASS-OK.png"
          alt=""
          className="absolute bottom-32 left-1/4 w-42 h-42 opacity-20 animate-float"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl flex flex-col justify-center items-center mx-auto space-y-8">
          <div className="flex justify-center mb-8 mt-24">
            <img
              src="/images/logo.png"
              alt="Jazz & Blues Festival"
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="rounded-md bg-amber-50/10 px-4 py-2 gap-y-2 flex flex-col ">
            <p className="text-2xl md:text-3xl font-bold text-primary text-balance">
              21/10 • Teatro Sesc Napoleão Ewerton, São Luís
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary text-balance -translate-y-2">
              24/10 • Concha Acústica, São Luís
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary text-balance -translate-y-4">
              31/10 e 01/11 • Beira Rio, Barreirinhas
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold"
            >
              Atrações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

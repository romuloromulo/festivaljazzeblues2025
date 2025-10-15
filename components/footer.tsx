import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="w-42 h-42">
              <div className="text-2xl font-bold mb-8">
                <img
                  src="/images/logo.png"
                  alt="Jazz & Blues Festival"
                  className=""
                />
              </div>
            </div>

            {/* <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Informações
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Sobre o Festival
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Mapa do Local
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Acessibilidade
                  </a>
                </li>
              </ul>
            </div> */}
            {/* 
            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Contato
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Imprensa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Parcerias
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Trabalhe Conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Suporte
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-sm">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/lencoisfestival/"
                  className="hover:text-accent transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/LencoisJazzBluesFestival"
                  className="hover:text-accent transition-colors"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Festival. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

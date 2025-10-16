"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-2">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* <div className="text-2xl font-bold tracking-tight">
            FESTIVAL<span className="text-accent">.</span>
          </div> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer "
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("artistas")}
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
            >
              Artistas
            </button>
            <button
              onClick={() => scrollToSection("programacao")}
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
            >
              Programação
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("artistas")}
              className="text-left text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
            >
              Artistas
            </button>
            <button
              onClick={() => scrollToSection("programacao")}
              className="text-left text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
            >
              Programação
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

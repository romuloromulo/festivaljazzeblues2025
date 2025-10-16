"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../public/images/logo.png";

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
        <div className="flex items-center justify-between">
          <div className="">
            <Image src={Logo} width={40} height={40} alt="Logo" />
          </div>

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
          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden flex flex-col gap-4 pb-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <motion.button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 8 }}
              >
                Sobre
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("artistas")}
                className="text-left text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                whileHover={{ x: 8 }}
              >
                Artistas
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("programacao")}
                className="text-left text-sm uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 8 }}
              >
                Programação
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

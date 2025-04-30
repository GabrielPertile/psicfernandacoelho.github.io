import { useState } from 'react';
import { Link } from 'wouter';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-[hsl(var(--primary))] font-display text-2xl font-bold">Ana Silva</span>
          <span className="ml-2 text-[hsl(var(--secondary))] text-sm font-light">Psicóloga</span>
        </Link>
        
        {/* Menu Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-[hsl(var(--neutral-dark))] focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#inicio" className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors">Início</a>
          <a href="#sobre" className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors">Sobre</a>
          <a href="#servicos" className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors">Serviços</a>
          <a href="#depoimentos" className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors">Depoimentos</a>
          <a href="#contato" className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors">Contato</a>
        </nav>
      </div>
      
      {/* Menu Mobile Dropdown */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md`}>
        <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a 
            href="#inicio" 
            className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors"
            onClick={closeMenu}
          >
            Início
          </a>
          <a 
            href="#sobre" 
            className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors"
            onClick={closeMenu}
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors"
            onClick={closeMenu}
          >
            Serviços
          </a>
          <a 
            href="#depoimentos" 
            className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors"
            onClick={closeMenu}
          >
            Depoimentos
          </a>
          <a 
            href="#contato" 
            className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors"
            onClick={closeMenu}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

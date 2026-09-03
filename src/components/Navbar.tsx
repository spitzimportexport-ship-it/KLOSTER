import React, { useState, useEffect } from 'react';
import { GothicCross } from './MonkIsotype';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenB2B: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenB2B }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<'ES' | 'EN'>('ES');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nuestra Herencia', href: '#herencia' },
    { name: 'El Ritual del Cáliz', href: '#caliz' },
    { name: 'Catálogo de Guarda', href: '#catalogo' },
    { name: 'Distribución B2B', href: '#b2b' }
  ];

  return (
    <aside
      aria-label="Barra de navegación secundaria"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
        scrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto bg-[#0C0C0C]/95 backdrop-blur-md border-b border-[#D1A85A]/25 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'opacity-0 -translate-y-full pointer-events-none py-3 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Left */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Kloster Inicio">
          <div className="w-8 h-8 rounded border border-[#D1A85A]/40 bg-[#17130F] flex items-center justify-center text-[#D1A85A] transition-all duration-300 group-hover:border-[#D1A85A] group-hover:shadow-[0_0_12px_rgba(209,168,90,0.3)]">
            <GothicCross className="w-4 h-4 text-[#D1A85A]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="logo-text text-2xl leading-none tracking-normal">
              kloster
            </span>
            <span className="font-cinzel text-[8px] uppercase tracking-[0.28em] text-[#D1A85A] font-semibold">
              Cerveza Artesanal
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación Principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-cinzel text-xs uppercase tracking-[0.16em] text-[#F7F4EA]/80 hover:text-[#D1A85A] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D1A85A] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Lang Selector */}
          <div className="flex items-center border border-[#D1A85A]/30 rounded px-2 py-0.5 text-[10px] font-cinzel text-[#F7F4EA]/70">
            <button
              onClick={() => setActiveLang('ES')}
              className={`px-1.5 py-0.5 rounded transition-colors ${activeLang === 'ES' ? 'text-[#D1A85A] font-bold' : 'hover:text-[#F7F4EA]'}`}
            >
              ES
            </button>
            <span className="text-[#D1A85A]/40">|</span>
            <button
              onClick={() => setActiveLang('EN')}
              className={`px-1.5 py-0.5 rounded transition-colors ${activeLang === 'EN' ? 'text-[#D1A85A] font-bold' : 'hover:text-[#F7F4EA]'}`}
            >
              EN
            </button>
          </div>

          {/* B2B Action Button */}
          <button
            onClick={onOpenB2B}
            className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#344A2B] hover:bg-[#3d5932] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-[0.14em] font-semibold border border-[#D1A85A] rounded transition-all duration-300 shadow-[0_0_15px_rgba(209,168,90,0.2)] hover:shadow-[0_0_25px_rgba(209,168,90,0.45)] hover:-translate-y-[1px]"
          >
            <span>Catálogo B2B</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D1A85A] transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#D1A85A] hover:text-[#F7F4EA] focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0C0C]/98 border-b border-[#D1A85A]/30 px-6 py-8 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-cinzel text-sm uppercase tracking-[0.2em] text-[#F7F4EA] hover:text-[#D1A85A] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#D1A85A]/60" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenB2B();
                }}
                className="w-full py-3 bg-[#344A2B] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-[0.16em] font-bold border border-[#D1A85A] rounded text-center shadow-[0_0_15px_rgba(209,168,90,0.3)]"
              >
                Solicitar Asignación B2B
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

import React, { useState, useEffect } from 'react';
import { GothicCross } from './MonkIsotype';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show floating navbar only when user has scrolled past the hero top header
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.collection'), href: '#catalogo' },
    { name: t('nav.about'), href: '#quienes-somos' },
    { name: t('nav.ritual'), href: '#caliz' },
    { name: t('nav.contact'), href: '#contacto' }
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
      <div className="site-container flex items-center justify-between">
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
              {t('nav.brandSubtitle')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
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
          {/* Functional Flag Language Selector */}
          <LanguageSelector />

          {/* Contact Action Button */}
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#344A2B] hover:bg-[#3d5932] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-[0.14em] font-semibold border border-[#D1A85A] rounded transition-all duration-300 shadow-[0_0_15px_rgba(209,168,90,0.2)] hover:shadow-[0_0_25px_rgba(209,168,90,0.45)] hover:-translate-y-[1px] cursor-pointer whitespace-nowrap"
          >
            <span>{t('nav.contact')}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D1A85A] transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button & Language Selector */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSelector />
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
                key={link.href}
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
                  onOpenContact();
                }}
                className="w-full py-3 bg-[#344A2B] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-[0.16em] font-bold border border-[#D1A85A] rounded text-center shadow-[0_0_15px_rgba(209,168,90,0.3)] cursor-pointer"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

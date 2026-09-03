import React, { useState } from 'react';
import { GothicCross } from './MonkIsotype';
import { ArrowDown, Menu, X, ChevronRight, ShieldCheck, Wine, Award, Sparkles } from 'lucide-react';
import { OFFICIAL_BOTTLE_IMAGE_URL } from '../data/beerData';
import officialLogoImg from '../assets/images/logo_kloster_oficial.png';
import monkLogoImg from '../assets/images/logo_kloster_monje_1788400677155.jpg';

interface HeroSectionProps {
  onDiscover: () => void;
  onOpenB2B: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDiscover, onOpenB2B }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-abbey" id="inicio">
      {/* CAPA DE NAVEGACIÓN SUPERIOR INTEGRADA (HTML Semántico Oficial Kloster) */}
      <nav className="hero-nav" aria-label="Navegación principal">
        {/* Enlace de marca y Logotipo del Monje de Abadía */}
        <a
          href="/"
          className="brand-logo-link flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1 transition-all"
          aria-label="Kloster Inicio"
        >
          <div className="relative overflow-hidden rounded-md border border-[#D1A85A]/50 bg-[#17130F] p-1 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center">
            <img
              src={officialLogoImg}
              onError={(e) => {
                // Fallback a imagen estática en public
                (e.currentTarget as HTMLImageElement).src = '/assets/img/logo-kloster.png';
              }}
              alt="Logotipo Kloster Monje"
              className="brand-logo h-14 w-auto max-w-[56px] sm:h-16 sm:max-w-[64px] object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="logo-text text-2xl sm:text-3xl text-[#F7F4EA] leading-none tracking-normal font-normal">
              kloster
            </span>
            <span className="font-cinzel text-[8px] sm:text-[9px] uppercase tracking-[0.26em] text-[#D4AF37] font-semibold">
              Cerveza Artesanal
            </span>
          </div>
        </a>

        {/* Enlaces de Navegación de Escritorio */}
        <div className="nav-links hidden md:flex items-center gap-8">
          <a
            href="#herencia"
            onClick={(e) => handleScrollTo('herencia', e)}
            className="hover:text-[#D4AF37] transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded px-1"
          >
            Nuestra Herencia
          </a>
          <a
            href="#caliz"
            onClick={(e) => handleScrollTo('caliz', e)}
            className="hover:text-[#D4AF37] transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded px-1"
          >
            El Ritual del Cáliz
          </a>
          <a
            href="#catalogo"
            onClick={(e) => {
              e.preventDefault();
              onOpenB2B();
            }}
            className="btn-b2b focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            Catálogo B2B
          </a>
        </div>

        {/* Botón de Menú Móvil */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#D4AF37] hover:text-[#F7F4EA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-50 mt-4 rounded-lg bg-[#17130F]/95 border border-[#D1A85A]/30 p-6 backdrop-blur-xl animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-4">
            <a
              href="#herencia"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo('herencia', e);
              }}
              className="font-cinzel text-sm uppercase tracking-[0.18em] text-[#F7F4EA] hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>Nuestra Herencia</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]/70" />
            </a>
            <a
              href="#caliz"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo('caliz', e);
              }}
              className="font-cinzel text-sm uppercase tracking-[0.18em] text-[#F7F4EA] hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>El Ritual del Cáliz</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]/70" />
            </a>
            <a
              href="#catalogo"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenB2B();
              }}
              className="btn-b2b text-center py-2.5 mt-2 justify-center"
            >
              Catálogo B2B
            </a>
          </div>
        </div>
      )}

      {/* CONTENIDO CENTRAL DEL HERO (Patrón Z y Lectura Persuasiva) */}
      <div className="hero-content w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8 sm:py-12">
        
        {/* Columna Izquierda: Titular y Copy Estratégico */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
          
          {/* Subtítulo de Tradición Monástica */}
          <span className="hero-subtitle inline-flex items-center gap-2">
            <GothicCross className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Desde la Tradición Monástica • Santa Cruz, Bolivia</span>
          </span>

          {/* Gran Titular Tipográfico (Cinzel / Serif de Abadía) */}
          <h1 className="hero-title tracking-tight">
            El Espíritu de la Abadía,<br />
            <span className="text-gold-gradient italic font-serif">En tu Copa.</span>
          </h1>

          {/* Cuerpo Persuasivo de Storytelling */}
          <p className="hero-description font-light">
            KLOSTER no busca gritar en el anaquel; busca ser recordada. Elaborada en lotes de guarda lenta con ingredientes 100% nobles.
          </p>

          {/* Acciones Principales (CTAs) */}
          <div className="hero-actions pt-2 w-full sm:w-auto">
            <a
              href="#reliquia"
              onClick={(e) => {
                e.preventDefault();
                onDiscover();
              }}
              className="btn-primary"
            >
              Descubrir la Reliquia
            </a>

            <a
              href="#b2b"
              onClick={(e) => {
                e.preventDefault();
                onOpenB2B();
              }}
              className="btn-secondary"
            >
              Solicitar Asignación B2B
            </a>
          </div>

          {/* Ficha Técnica Rápida de la Reliquia (Garantía de Autenticidad) */}
          <div className="pt-6 border-t border-[#D1A85A]/20 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <span className="block font-gothic text-2xl text-[#D4AF37] leading-none">5.0%</span>
              <span className="font-cinzel text-[9px] uppercase tracking-[0.16em] text-[#F7F4EA]/70">
                Vol. Alcohol Fuerte
              </span>
            </div>

            <div>
              <span className="block font-gothic text-2xl text-[#D4AF37] leading-none">100%</span>
              <span className="font-cinzel text-[9px] uppercase tracking-[0.16em] text-[#F7F4EA]/70">
                Ingredientes Nobles
              </span>
            </div>

            <div>
              <span className="block font-cinzel text-xs text-[#F7F4EA] font-semibold">SENASAG</span>
              <span className="font-sans text-[9px] text-[#F7F4EA]/50 block">
                08 09 03 14 0033
              </span>
            </div>

            <div>
              <span className="block font-cinzel text-xs text-[#F7F4EA] font-semibold">Servir a 4°-6°C</span>
              <span className="font-sans text-[9px] text-[#D4AF37] block font-medium">
                En Cáliz de Abadía
              </span>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Altar Visual de la Reliquia (Portón y Botella de Guarda) */}
        <div className="hidden lg:flex lg:col-span-5 justify-end">
          <div className="relative w-full max-w-sm">
            
            {/* Marco de Arco Romano de Claustro */}
            <div className="relative p-2 rounded-t-[140px] rounded-b-lg border-2 border-[#D1A85A]/40 shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.2)] bg-gradient-to-b from-[#1E1914]/90 to-[#0C0C0C]/95 backdrop-blur-sm">
              
              <div className="relative overflow-hidden rounded-t-[132px] rounded-b-md border border-[#D1A85A]/30 bg-[#120E0A]/90 aspect-[3/4] flex flex-col items-center justify-between p-6">
                
                {/* Aureola Dorada de Luz Litúrgica */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

                {/* Corona Superior del Arco */}
                <div className="relative z-10 pt-3 pb-1 flex flex-col items-center">
                  <GothicCross className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-cinzel text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] mt-1.5 font-semibold">
                    Reliquia de Abadía
                  </span>
                </div>

                {/* Botella de Kloster en Exhibición */}
                <div
                  className="relative z-10 my-auto group cursor-pointer flex items-center justify-center py-2"
                  onClick={onDiscover}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') onDiscover();
                  }}
                  aria-label="Explorar la reliquia de cerveza Kloster"
                >
                  <img
                    src={OFFICIAL_BOTTLE_IMAGE_URL}
                    alt="Botella oficial de cerveza de abadía Kloster Lager 300 ml"
                    loading="eager"
                    decoding="async"
                    className="h-[clamp(240px,28vw,330px)] w-auto max-w-full object-contain rounded-md drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2 rounded">
                    <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                      Explorar Guarda
                    </span>
                  </div>
                </div>

                {/* Base del Arco con Inscripción Oficial */}
                <div className="relative z-10 w-full pt-3 border-t border-[#D1A85A]/25 flex items-center justify-between text-left">
                  <div>
                    <span className="font-gothic text-2xl text-[#F7F4EA] leading-none block">kloster</span>
                    <span className="font-cinzel text-[8px] uppercase tracking-[0.18em] text-[#D4AF37]">
                      Lager 300 ml · Edición Noble
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-cinzel text-[8px] uppercase tracking-[0.14em] text-[#F7F4EA]/60 block">
                      Cáliz Oficial
                    </span>
                    <span className="font-sans text-[10px] text-[#D4AF37] font-semibold">
                      Pie Alto Kloster
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Acentos de Piedra en Esquinas */}
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/60" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/60" />

          </div>
        </div>

      </div>

      {/* INDICADOR INFERIOR DE DESCENSO AL CLAUSTRO */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-4 pb-2">
        <button
          onClick={onDiscover}
          className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1"
          aria-label="Descender hacia nuestra herencia y ritual"
        >
          <span className="font-cinzel text-[9px] uppercase tracking-[0.28em] text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors mb-2">
            Adentrarse en el Silencio
          </span>
          <div className="w-7 h-7 rounded-full border border-[#D1A85A]/30 group-hover:border-[#D4AF37] flex items-center justify-center transition-all group-hover:translate-y-0.5">
            <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
        </button>
      </div>
    </header>
  );
};

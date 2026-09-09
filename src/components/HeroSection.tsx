import React, { useState } from 'react';
import { GothicCross } from './MonkIsotype';
import { ArrowDown, Menu, X, ChevronRight } from 'lucide-react';
import officialLogoImg from '../assets/images/regenerated_image_1788997141062.jpg';
import bottleRelicImg from '../assets/images/regenerated_image_1788995261339.png';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeroSectionProps {
  onDiscover: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDiscover, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-abbey" id="inicio">
      {/* CAPA DE NAVEGACIÓN SUPERIOR INTEGRADA (HTML Semántico) */}
      <nav className="hero-nav site-container" aria-label="Navegación principal">
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
                (e.currentTarget as HTMLImageElement).src = '/assets/img/logo-kloster.png';
              }}
              alt="Logotipo Kloster"
              className="brand-logo h-12 w-auto max-w-[50px] sm:h-14 sm:max-w-[60px] object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="logo-text text-2xl sm:text-3xl text-[#F7F4EA] leading-none tracking-normal font-normal">
              kloster
            </span>
            <span className="font-cinzel text-[8px] sm:text-[9px] uppercase tracking-[0.26em] text-[#D4AF37] font-semibold">
              {t('nav.brandSubtitle')}
            </span>
          </div>
        </a>

        {/* Enlaces de Navegación de Escritorio y Selector de Idioma */}
        <div className="nav-links hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#catalogo"
            onClick={(e) => handleScrollTo('catalogo', e)}
            className="hover:text-[#D4AF37] transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded px-1 font-cinzel text-xs uppercase tracking-[0.14em]"
          >
            {t('nav.collection')}
          </a>
          <a
            href="#quienes-somos"
            onClick={(e) => handleScrollTo('quienes-somos', e)}
            className="hover:text-[#D4AF37] transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded px-1 font-cinzel text-xs uppercase tracking-[0.14em]"
          >
            {t('nav.about')}
          </a>
          <a
            href="#caliz"
            onClick={(e) => handleScrollTo('caliz', e)}
            className="hover:text-[#D4AF37] transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded px-1 font-cinzel text-xs uppercase tracking-[0.14em]"
          >
            {t('nav.ritual')}
          </a>

          {/* Selector de Idioma Funcional con Banderas de España y EE. UU. */}
          <LanguageSelector />

          {/* Botón de Contacto */}
          <button
            type="button"
            onClick={onOpenContact}
            className="btn-b2b focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer whitespace-nowrap text-xs font-cinzel uppercase tracking-[0.16em]"
          >
            {t('nav.contact')}
          </button>
        </div>

        {/* Botón de Menú Móvil */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
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
        <div className="md:hidden relative z-50 mt-4 rounded-lg bg-[#17130F]/98 border border-[#D1A85A]/30 p-6 backdrop-blur-xl animate-fadeIn shadow-2xl site-container">
          <div className="flex flex-col space-y-4">
            <a
              href="#catalogo"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo('catalogo', e);
              }}
              className="font-cinzel text-sm uppercase tracking-[0.18em] text-[#F7F4EA] hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{t('nav.collection')}</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]/70" />
            </a>
            <a
              href="#quienes-somos"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo('quienes-somos', e);
              }}
              className="font-cinzel text-sm uppercase tracking-[0.18em] text-[#F7F4EA] hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{t('nav.about')}</span>
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
              <span>{t('nav.ritual')}</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]/70" />
            </a>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-primary text-center py-2.5 justify-center w-full cursor-pointer uppercase font-cinzel text-xs tracking-wider"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTENIDO CENTRAL DEL HERO: CSS GRID 2 COLUMNAS (Desktop) / 1 COLUMNA (Mobile) */}
      <div className="site-container my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Titular, Subtítulo y Botones */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            
            {/* Subtítulo de Tradición Monástica */}
            <span className="hero-subtitle inline-flex items-center gap-2">
              <GothicCross className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t('hero.subtitle')}</span>
            </span>

            {/* Gran Titular Tipográfico */}
            <h1 className="hero-title tracking-tight m-0">
              {t('hero.title1')}<br />
              <span className="text-gold-gradient italic font-serif">{t('hero.title2')}</span>
            </h1>

            {/* Cuerpo de Copy Funcional y Claro */}
            <p className="hero-description font-light text-base sm:text-lg text-[#F7F4EA]/80 leading-relaxed max-w-xl">
              {t('hero.desc')}
            </p>

            {/* Botones de Acción: UNO AL LADO DEL OTRO */}
            <div
              className="hero-actions pt-2 w-full"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <a
                href="#catalogo"
                onClick={(e) => handleScrollTo('catalogo', e)}
                className="btn-primary whitespace-nowrap cursor-pointer font-cinzel uppercase text-xs tracking-[0.14em]"
              >
                {t('hero.ctaCollection')}
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="btn-secondary whitespace-nowrap cursor-pointer font-cinzel uppercase text-xs tracking-[0.14em]"
              >
                {t('hero.ctaContact')}
              </button>
            </div>

            {/* Ficha Técnica Rápida */}
            <div className="pt-6 border-t border-[#D1A85A]/20 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <span className="block font-gothic text-2xl text-[#D4AF37] leading-none">5.0%</span>
                <span className="font-cinzel text-[9px] uppercase tracking-[0.16em] text-[#F7F4EA]/70">
                  {t('hero.statAbv')}
                </span>
              </div>

              <div>
                <span className="block font-gothic text-2xl text-[#D4AF37] leading-none">100%</span>
                <span className="font-cinzel text-[9px] uppercase tracking-[0.16em] text-[#F7F4EA]/70">
                  {t('hero.statMalts')}
                </span>
              </div>

              <div>
                <span className="block font-cinzel text-xs text-[#F7F4EA] font-semibold">SENASAG</span>
                <span className="font-sans text-[9px] text-[#F7F4EA]/50 block">
                  08 09 03 14 0033
                </span>
              </div>

              <div>
                <span className="block font-cinzel text-xs text-[#F7F4EA] font-semibold">{t('hero.statTemp')}</span>
                <span className="font-sans text-[9px] text-[#D4AF37] block font-medium">
                  {t('hero.statGlass')}
                </span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: MARCO TIPO ARCO / VENTANA DE ABADÍA (Fiel a la imagen solicitada) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Resplandor áureo místico en el fondo */}
              <div className="absolute -inset-4 bg-[#D1A85A]/15 rounded-t-full blur-2xl pointer-events-none" />

              {/* CONTENEDOR MARCO TIPO ARCO ROMANO DE ABADÍA (Double Golden Arch) */}
              <div className="relative rounded-t-[180px] sm:rounded-t-[200px] border border-[#D1A85A]/50 bg-gradient-to-b from-[#140F0B] via-[#0E0B08] to-[#070504] p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                
                {/* 1. Cruz Superior de Abadía */}
                <div className="flex justify-center pt-2 pb-1.5">
                  <GothicCross className="w-8 h-8 sm:w-9 sm:h-9 text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
                </div>

                {/* 2. Título de la reliquia */}
                <h3 className="text-center font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#D1A85A] font-semibold mb-4 sm:mb-5">
                  {t('hero.relicHeader')}
                </h3>

                {/* 3. Ventana Interior con la Fotografía de la Botella en la Cripta */}
                <div className="relative overflow-hidden rounded-md border border-[#D1A85A]/35 shadow-inner group">
                  <a
                    href="#catalogo"
                    onClick={(e) => handleScrollTo('catalogo', e)}
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    aria-label="Ver Kloster en la colección"
                  >
                    <img
                      src={bottleRelicImg}
                      alt="Botella de Cerveza Kloster en la cripta y barricas de abadía"
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto aspect-[3/4] object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Vignette interior suave para realzar profundidad */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-[#0C0C0C]/30 pointer-events-none" />
                  </a>
                </div>

                {/* 4. Acentos de Esquina Dorados (L-brackets inferiores característicos de la imagen) */}
                <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#D1A85A] pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#D1A85A] pointer-events-none" />
              </div>

              {/* Pie de foto descriptivo */}
              <div className="mt-4 text-center">
                <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-semibold block">
                  {t('hero.archCaptionTitle')}
                </span>
                <span className="font-sans text-xs text-[#F7F4EA]/60 font-light">
                  {t('hero.archCaptionSub')}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* INDICADOR INFERIOR DE DESCENSO */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-2 pb-4">
        <a
          href="#catalogo"
          onClick={(e) => handleScrollTo('catalogo', e)}
          className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1"
          aria-label={t('hero.scrollDown')}
        >
          <span className="font-cinzel text-[9px] uppercase tracking-[0.28em] text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors mb-2">
            {t('hero.scrollDown')}
          </span>
          <div className="w-7 h-7 rounded-full border border-[#D1A85A]/30 group-hover:border-[#D4AF37] flex items-center justify-center transition-all group-hover:translate-y-0.5">
            <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
        </a>
      </div>
    </header>
  );
};

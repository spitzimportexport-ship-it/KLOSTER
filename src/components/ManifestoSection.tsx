import React from 'react';
import { GothicCross } from './MonkIsotype';
import { Clock, ShieldCheck } from 'lucide-react';
import cellarImg from '../assets/images/kloster_cellar_barrels_1788393240376.jpg';
import portonImg from '../assets/images/porton_monastico_abadia_1788400639452.jpg';
import { useLanguage } from '../context/LanguageContext';

export const ManifestoSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="quienes-somos"
      className="relative py-24 sm:py-32 bg-[#0C0C0C] border-t border-[#D1A85A]/15 scroll-mt-12"
    >
      <div id="herencia" className="absolute -top-12" />

      <div className="site-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-24">
          <div className="inline-flex items-center justify-center gap-2">
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
              {t('manifesto.badge')}
            </span>
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
          </div>

          <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#F7F4EA] font-normal tracking-tight">
            {t('manifesto.title')}
          </h2>

          <p className="font-cinzel text-base sm:text-lg text-[#D1A85A] tracking-wider uppercase font-medium">
            {t('manifesto.sub')}
          </p>

          <p className="font-sans text-sm sm:text-base text-[#F7F4EA]/75 font-light leading-relaxed pt-1">
            {t('manifesto.lead')}
          </p>
        </div>

        {/* LAYOUT ALTERNADO */}
        <div className="space-y-20 sm:space-y-28">
          
          {/* FILA 1: IMAGEN A LA IZQUIERDA, TEXTO A LA DERECHA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Visual Izquierda */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-[#D1A85A]/20 group">
              <img
                src={cellarImg}
                alt="Bodega de maduración y barricas de guarda Kloster"
                loading="lazy"
                decoding="async"
                className="w-full h-[clamp(280px,36vw,440px)] object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-cinzel text-[#F7F4EA]/80">
                <span className="uppercase tracking-widest text-[#D1A85A]">
                  {language === 'es' ? 'Guarda Natural en Frío' : 'Natural Cold Aging'}
                </span>
                <span>Santa Cruz · Bolivia</span>
              </div>
            </div>

            {/* Texto Derecha */}
            <div className="space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-[#D1A85A] font-cinzel text-xs uppercase tracking-[0.2em]">
                <Clock className="w-4 h-4" />
                <span>{t('manifesto.r1badge')}</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7F4EA] leading-snug">
                {t('manifesto.r1title')}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#F7F4EA]/80 font-light leading-relaxed">
                {t('manifesto.r1p1')}
              </p>

              <p className="font-sans text-sm sm:text-base text-[#F7F4EA]/70 font-light leading-relaxed">
                {t('manifesto.r1p2')}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-cinzel text-[#D1A85A]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]" />
                  {t('manifesto.tagFerment')}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]" />
                  {t('manifesto.tagNoChem')}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]" />
                  {t('manifesto.tagNobleMalts')}
                </span>
              </div>
            </div>
          </div>

          {/* FILA 2: TEXTO A LA IZQUIERDA, IMAGEN A LA DERECHA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Texto Izquierda */}
            <div className="order-2 lg:order-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-[#D1A85A] font-cinzel text-xs uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4" />
                <span>{t('manifesto.r2badge')}</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7F4EA] leading-snug">
                {t('manifesto.r2title')}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#F7F4EA]/80 font-light leading-relaxed">
                {t('manifesto.r2p1')}
              </p>

              <p className="font-sans text-sm sm:text-base text-[#F7F4EA]/70 font-light leading-relaxed">
                {t('manifesto.r2p2')}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-cinzel text-[#D1A85A]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]" />
                  SENASAG: 08 09 03 14 0033
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]" />
                  {language === 'es' ? 'Botellas de 300 ml' : '300 ml Bottles'}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]" />
                  {language === 'es' ? 'Distribución nacional' : 'Nationwide dispatch'}
                </span>
              </div>
            </div>

            {/* Visual Derecha */}
            <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-[#D1A85A]/20 group">
              <img
                src={portonImg}
                alt="Portón de la abadía e identidad Kloster"
                loading="lazy"
                decoding="async"
                className="w-full h-[clamp(280px,36vw,440px)] object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-cinzel text-[#F7F4EA]/80">
                <span className="uppercase tracking-widest text-[#D1A85A]">Bolivian Brew Company</span>
                <span>{language === 'es' ? 'Calidad Artesanal Certificada' : 'Certified Craft Quality'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* CITA SOBRIA */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-[#D1A85A]/15 text-center max-w-xl mx-auto">
          <p className="font-cinzel italic text-lg sm:text-xl text-[#F2E5CE] tracking-wide font-normal">
            {t('manifesto.quote')}
          </p>
          <span className="font-cinzel text-[11px] uppercase tracking-[0.24em] text-[#D1A85A] font-semibold mt-2 block">
            {t('manifesto.quoteAuthor')}
          </span>
        </div>

      </div>
    </section>
  );
};

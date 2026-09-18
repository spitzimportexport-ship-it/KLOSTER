import React, { useState, useEffect } from 'react';
import { GothicCross } from './MonkIsotype';
import { BeerVariant } from '../types';
import { MessageSquare, Award, Wine, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface B2BAllocationSectionProps {
  selectedBeer?: BeerVariant | null;
}

type ReasonType = 'distribuir' | 'evento' | 'duda';

export const B2BAllocationSection: React.FC<B2BAllocationSectionProps> = ({ selectedBeer }) => {
  const { t, language } = useLanguage();
  const [reason, setReason] = useState<ReasonType>('distribuir');
  const [name, setName] = useState('');
  const [city, setCity] = useState('Santa Cruz de la Sierra');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (selectedBeer) {
      setNotes(
        language === 'es'
          ? `Interés prioritario en ${selectedBeer.name} (${selectedBeer.abv}).`
          : `Priority interest in ${selectedBeer.name} (${selectedBeer.abv}).`
      );
    }
  }, [selectedBeer, language]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reasonLabel =
      reason === 'distribuir'
        ? language === 'es' ? 'Quiero Distribuir / Restaurante / Bar' : 'Distribution / Venue'
        : reason === 'evento'
        ? language === 'es' ? 'Evento Especial o Institucional' : 'Special Event'
        : language === 'es' ? 'Duda o Consulta General' : 'General Inquiry';

    const text = encodeURIComponent(
      `*Contacto Directo Kloster Cervecería*\n` +
      `• *Motivo:* ${reasonLabel}\n` +
      (name ? `• *Nombre / Negocio:* ${name}\n` : '') +
      (city ? `• *Ciudad:* ${city}\n` : '') +
      (selectedBeer ? `• *Variedad:* ${selectedBeer.name}\n` : '') +
      (notes ? `• *Detalle:* ${notes}\n` : '') +
      (language === 'es'
        ? `Solicito información de precios, lotes y distribución.`
        : `Requesting info on pricing, batch availability and distribution.`)
    );
    window.open(`https://wa.me/59176502714?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#0C0C0C] border-t border-[#D1A85A]/20 scroll-mt-12">
      <div id="b2b" className="absolute -top-12" />
      
      <div className="site-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2">
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
              {t('contact.badge')}
            </span>
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
          </div>

          <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#F7F4EA] font-normal tracking-tight">
            {t('contact.title')}
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#F7F4EA]/75 font-light leading-relaxed">
            {t('contact.desc')}
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: PILLARS LEFT, FORM RIGHT - CLEAN EDITORIAL DESIGN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: 3 DIRECT PILLARS */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="pb-3 border-b border-[#D1A85A]/25">
              <span className="font-cinzel text-[11px] uppercase tracking-[0.22em] text-[#D1A85A] font-bold block">
                {language === 'es' ? 'Garantías de Cervecería' : 'Brewery Commitments'}
              </span>
            </div>

            <div className="space-y-6">
              {/* 01. Precios directos */}
              <div className="pb-5 border-b border-[#D1A85A]/15 flex items-start gap-3.5">
                <Award className="w-5 h-5 text-[#D1A85A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-[#F7F4EA] tracking-wider mb-1">
                    {t('contact.pillar1title')}
                  </h3>
                  <p className="font-sans text-xs text-[#F7F4EA]/75 leading-relaxed font-light">
                    {t('contact.pillar1desc')}
                  </p>
                </div>
              </div>

              {/* 02. Cristalería */}
              <div className="pb-5 border-b border-[#D1A85A]/15 flex items-start gap-3.5">
                <Wine className="w-5 h-5 text-[#D1A85A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-[#F7F4EA] tracking-wider mb-1">
                    {t('contact.pillar2title')}
                  </h3>
                  <p className="font-sans text-xs text-[#F7F4EA]/75 leading-relaxed font-light">
                    {t('contact.pillar2desc')}
                  </p>
                </div>
              </div>

              {/* 03. Cobertura */}
              <div className="pb-5 border-b border-[#D1A85A]/15 flex items-start gap-3.5">
                <Truck className="w-5 h-5 text-[#D1A85A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-[#F7F4EA] tracking-wider mb-1">
                    {t('contact.pillar3title')}
                  </h3>
                  <p className="font-sans text-xs text-[#F7F4EA]/75 leading-relaxed font-light">
                    {t('contact.pillar3desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout - Clean strip */}
            <div className="py-4 px-2 border-t border-b border-[#D1A85A]/25 flex items-center justify-between gap-4">
              <div>
                <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#D1A85A] block">
                  {t('contact.phoneLabel')}
                </span>
                <span className="font-sans font-bold text-[#F7F4EA] text-base mt-0.5 block">
                  +591 76502714
                </span>
                <span className="font-sans text-[11px] text-[#F7F4EA]/50 block">
                  {t('contact.phoneHours')}
                </span>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2.5 bg-[#344A2B] hover:bg-[#3d5932] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-wider rounded border border-[#D1A85A] flex items-center gap-1.5 transition-colors shadow-md whitespace-nowrap cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t('contact.chatBtn')}</span>
              </button>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7 lg:border-l lg:border-[#D1A85A]/20 lg:pl-12 text-left">
            <div className="pb-3 border-b border-[#D1A85A]/25 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
                <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#D1A85A] font-semibold">
                  {t('contact.formBadge')}
                </span>
              </div>
              <h3 className="font-gothic text-2xl sm:text-3xl text-[#F7F4EA]">
                {t('contact.formTitle')}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Reason selector */}
              <div>
                <label className="block font-cinzel text-[11px] uppercase tracking-[0.16em] text-[#D1A85A] font-semibold mb-2">
                  {t('contact.reasonLabel')}
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setReason('distribuir')}
                    className={`py-2.5 px-2 rounded font-cinzel text-[11px] sm:text-xs uppercase tracking-wider text-center transition-all border cursor-pointer ${
                      reason === 'distribuir'
                        ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.3)] font-bold'
                        : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                    }`}
                  >
                    {t('contact.reasonDistribute')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setReason('evento')}
                    className={`py-2.5 px-2 rounded font-cinzel text-[11px] sm:text-xs uppercase tracking-wider text-center transition-all border cursor-pointer ${
                      reason === 'evento'
                        ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.3)] font-bold'
                        : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                    }`}
                  >
                    {t('contact.reasonEvent')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setReason('duda')}
                    className={`py-2.5 px-2 rounded font-cinzel text-[11px] sm:text-xs uppercase tracking-wider text-center transition-all border cursor-pointer ${
                      reason === 'duda'
                        ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.3)] font-bold'
                        : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                    }`}
                  >
                    {t('contact.reasonInquiry')}
                  </button>
                </div>
              </div>

              {/* 2 Inputs: Name & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="b2b-name"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#F7F4EA]/70 mb-1"
                  >
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    id="b2b-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg bg-[#14100C] border border-[#D1A85A]/25 focus:border-[#D1A85A] focus:outline-none text-sm text-[#F7F4EA] placeholder:text-[#F7F4EA]/30 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="b2b-city"
                    className="block font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#F7F4EA]/70 mb-1"
                  >
                    {t('contact.cityLabel')}
                  </label>
                  <input
                    id="b2b-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t('contact.cityPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg bg-[#14100C] border border-[#D1A85A]/25 focus:border-[#D1A85A] focus:outline-none text-sm text-[#F7F4EA] placeholder:text-[#F7F4EA]/30 transition-colors"
                  />
                </div>
              </div>

              {/* Optional note */}
              <div>
                <label
                  htmlFor="b2b-notes"
                  className="block font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#F7F4EA]/70 mb-1"
                >
                  {t('contact.notesLabel')}
                </label>
                <textarea
                  id="b2b-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('contact.notesPlaceholder')}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#14100C] border border-[#D1A85A]/25 focus:border-[#D1A85A] focus:outline-none text-xs text-[#F7F4EA] placeholder:text-[#F7F4EA]/30 transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-[#D1A85A] hover:bg-[#e5c158] text-[#0A0A0A] font-cinzel text-xs sm:text-sm uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_25px_rgba(209,168,90,0.35)] hover:shadow-[0_0_35px_rgba(209,168,90,0.55)] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 flex-shrink-0" />
                <span>{t('contact.submitBtn')}</span>
              </button>

              <p className="text-center font-sans text-xs text-[#F7F4EA]/50 font-light">
                {t('contact.footerNote')}
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

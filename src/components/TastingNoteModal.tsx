import React from 'react';
import { BeerVariant } from '../types';
import { GothicCross } from './MonkIsotype';
import { X, Utensils, Wine, MessageSquare } from 'lucide-react';
import { OFFICIAL_BOTTLE_IMAGE_URL } from '../data/beerData';
import { useLanguage } from '../context/LanguageContext';

interface TastingNoteModalProps {
  beer: BeerVariant | null;
  onClose: () => void;
  onSelectForB2B: (beer: BeerVariant) => void;
}

export const TastingNoteModal: React.FC<TastingNoteModalProps> = ({
  beer,
  onClose,
  onSelectForB2B,
}) => {
  const { t, language } = useLanguage();

  if (!beer) return null;

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      language === 'es'
        ? `Hola Kloster, deseo solicitar un lote de cerveza artesanal:\n• Variante: ${beer.name} (${beer.abv})\n• Formato: Botella 300 ml\nPor favor bríndeme información de precio y despacho.`
        : `Hello Kloster, I would like to order a batch of craft beer:\n• Style: ${beer.name} (${beer.abv})\n• Format: 300 ml Bottle\nPlease provide pricing and dispatch information.`
    );
    window.open(`https://wa.me/59176502714?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tasting-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-gradient-to-b from-[#18130E] via-[#120E0A] to-[#0A0A0A] border border-[#D1A85A]/40 rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden"
        style={{ width: 'clamp(320px, 94%, 820px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#F7F4EA]/60 hover:text-[#D1A85A] rounded-full border border-white/10 hover:border-[#D1A85A]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          aria-label={t('modal.close')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable content area */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-[11px] uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
              {t('modal.factSheet')}
            </span>
          </div>

          {/* 2-COLUMN DESKTOP LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            
            {/* Columna Izquierda: Gran Botella y Métricas Principales */}
            <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-[#0C0C0C]/80 border border-[#D1A85A]/20">
              <div className="relative w-full aspect-[3/4] max-h-72 flex items-center justify-center overflow-hidden mb-3">
                <div
                  className="absolute w-44 h-44 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: beer.colorCode }}
                />
                <img
                  src={beer.image || OFFICIAL_BOTTLE_IMAGE_URL}
                  alt={`Botella oficial ${beer.name}`}
                  loading="eager"
                  decoding="async"
                  className="h-full w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] filter contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <span className="font-gothic text-3xl sm:text-4xl text-[#F7F4EA] block leading-tight">
                {beer.name.includes('Kloster') ? (
                  <>
                    Kloster
                    <span className="text-[0.32em] font-sans font-bold text-[#F7F4EA] align-super ml-0.5 select-none inline-block">
                      ®
                    </span>
                    {beer.name.replace(/^Kloster\s*/, ' ')}
                  </>
                ) : (
                  beer.name
                )}
              </span>
              <span className="font-cinzel text-[11px] uppercase tracking-wider text-[#D1A85A] font-semibold">
                {beer.subname} · {beer.volume}
              </span>

              <div className="w-full mt-3 pt-3 border-t border-[#D1A85A]/15 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <span className="text-[9px] text-[#F7F4EA]/50 uppercase block font-cinzel">{t('modal.alcohol')}</span>
                  <span className="font-bold text-[#D1A85A]">{beer.abv}</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#F7F4EA]/50 uppercase block font-cinzel">{t('modal.bitterness')}</span>
                  <span className="font-bold text-[#D1A85A]">{beer.ibu} IBU</span>
                </div>
                <div>
                  <span className="text-[9px] text-[#F7F4EA]/50 uppercase block font-cinzel">{t('modal.service')}</span>
                  <span className="font-bold text-[#F7F4EA]">{beer.temp}</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Información Sensorial Resumida */}
            <div className="space-y-4 text-left">
              <div>
                <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#D1A85A] block mb-1">
                  {beer.tagline}
                </span>
                <h3 id="tasting-modal-title" className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7F4EA]">
                  {t('modal.profileTitle')}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#F7F4EA]/80 font-light leading-relaxed mt-2">
                  {beer.description}
                </p>
              </div>

              {/* Sensorial resumido */}
              <div className="space-y-2.5 pt-1 text-xs">
                <div className="p-3 rounded bg-[#17130F] border border-white/5">
                  <div className="flex items-center gap-1.5 mb-1 text-[#D1A85A] font-cinzel uppercase tracking-wider text-[10px] font-bold">
                    <GothicCross className="w-3.5 h-3.5" />
                    <span>{t('modal.aromaTitle')}</span>
                  </div>
                  <p className="text-[#F7F4EA]/75 font-light leading-relaxed">
                    {beer.aroma}
                  </p>
                </div>

                <div className="p-3 rounded bg-[#17130F] border border-white/5">
                  <div className="flex items-center gap-1.5 mb-1 text-[#D1A85A] font-cinzel uppercase tracking-wider text-[10px] font-bold">
                    <Wine className="w-3.5 h-3.5" />
                    <span>{t('modal.palateTitle')}</span>
                  </div>
                  <p className="text-[#F7F4EA]/75 font-light leading-relaxed">
                    {beer.boca}
                  </p>
                </div>
              </div>

              {/* Maridaje */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5 text-[#F7F4EA]/80 font-cinzel text-[10px] uppercase tracking-wider font-semibold">
                  <Utensils className="w-3 h-3 text-[#D1A85A]" />
                  <span>{t('modal.pairingTitle')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {beer.maridaje.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#17130F] border border-[#D1A85A]/20 text-[11px] text-[#F7F4EA]/75 font-sans"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTONES FIJOS EN UNA SOLA LÍNEA */}
        <div className="p-4 sm:p-5 bg-[#0D0A08] border-t border-[#D1A85A]/25 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 text-xs font-cinzel uppercase tracking-wider text-[#F7F4EA]/70 hover:text-[#F7F4EA] transition-colors whitespace-nowrap cursor-pointer"
          >
            {t('modal.close')}
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => {
                onSelectForB2B(beer);
                onClose();
              }}
              className="py-3 px-4 sm:px-5 bg-[#1C1611] hover:bg-[#281F17] text-[#F7F4EA] font-cinzel text-xs uppercase tracking-[0.14em] font-semibold border border-[#D1A85A]/40 rounded transition-colors whitespace-nowrap cursor-pointer"
            >
              {t('modal.assignVenue')}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="py-3 px-5 sm:px-6 bg-[#D1A85A] hover:bg-[#e5c158] text-[#0A0A0A] font-cinzel text-xs sm:text-sm uppercase tracking-[0.16em] font-bold rounded transition-all shadow-[0_0_20px_rgba(209,168,90,0.35)] hover:shadow-[0_0_30px_rgba(209,168,90,0.55)] flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span>{t('modal.orderBeer')} {beer.name}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

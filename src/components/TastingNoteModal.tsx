import React from 'react';
import { BeerVariant } from '../types';
import { GothicCross } from './MonkIsotype';
import { X, Sparkles, Utensils, Wine, Clock, Thermometer, ShieldCheck } from 'lucide-react';
import { OFFICIAL_BOTTLE_IMAGE_URL } from '../data/beerData';

interface TastingNoteModalProps {
  beer: BeerVariant | null;
  onClose: () => void;
  onSelectForB2B: (beer: BeerVariant) => void;
}

export const TastingNoteModal: React.FC<TastingNoteModalProps> = ({
  beer,
  onClose,
  onSelectForB2B
}) => {
  if (!beer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#14100C] border border-[#D1A85A]/40 rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.95)] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#F7F4EA]/60 hover:text-[#D1A85A] rounded-full border border-white/10 hover:border-[#D1A85A]/40 transition-colors"
          aria-label="Cerrar ficha de cata"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
          <span className="font-cinzel text-[11px] uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
            Ficha Técnica de Sommelier · Colección de Guarda
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bottle & Color Presentation */}
          <div className="md:col-span-4 flex flex-col items-center text-center p-4 rounded bg-[#0C0C0C] border border-[#D1A85A]/20">
            <div className="relative w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded mb-4 bg-gradient-to-b from-[#18120D] to-[#0A0A0A] p-2">
              <img
                src={beer.image || OFFICIAL_BOTTLE_IMAGE_URL}
                alt={`Botella oficial de cerveza ${beer.name}`}
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain rounded drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)] filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <span className="font-gothic text-3xl text-[#F7F4EA] block">{beer.name}</span>
            <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#D1A85A] font-semibold">
              {beer.subname}
            </span>

            {/* Quick Metrics Badge */}
            <div className="w-full mt-4 pt-3 border-t border-[#D1A85A]/15 grid grid-cols-2 gap-2 text-center text-xs">
              <div className="p-2 rounded bg-[#17130F] border border-white/5">
                <span className="text-[10px] text-[#F7F4EA]/50 uppercase block font-cinzel">Alcohol</span>
                <span className="font-bold text-[#D1A85A]">{beer.abv}</span>
              </div>
              <div className="p-2 rounded bg-[#17130F] border border-white/5">
                <span className="text-[10px] text-[#F7F4EA]/50 uppercase block font-cinzel">Amargor</span>
                <span className="font-bold text-[#D1A85A]">{beer.ibu} IBU</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Sommelier Sensory Profile */}
          <div className="md:col-span-8 space-y-6">
            
            <div>
              <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#D1A85A] block mb-1">
                {beer.tagline}
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-[#F7F4EA]">
                Carácter Equilibrado & Espuma Densa
              </h3>
              <p className="font-sans text-sm text-[#F7F4EA]/80 font-light leading-relaxed mt-2">
                {beer.description}
              </p>
            </div>

            {/* Sensory Breakdown: Aroma & En Boca */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded bg-[#17130F] border border-[#D1A85A]/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#D1A85A]" />
                  <h4 className="font-cinzel text-xs uppercase tracking-[0.16em] text-[#D1A85A] font-bold">
                    Aroma & Bouquet
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#F7F4EA]/75 font-light leading-relaxed">
                  {beer.aroma}
                </p>
              </div>

              <div className="p-4 rounded bg-[#17130F] border border-[#D1A85A]/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <Wine className="w-4 h-4 text-[#D1A85A]" />
                  <h4 className="font-cinzel text-xs uppercase tracking-[0.16em] text-[#D1A85A] font-bold">
                    Sensación en Boca & Final
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#F7F4EA]/75 font-light leading-relaxed">
                  {beer.boca}
                </p>
              </div>
            </div>

            {/* Maridaje Recomendado */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <Utensils className="w-4 h-4 text-[#D1A85A]" />
                <h4 className="font-cinzel text-xs uppercase tracking-[0.16em] text-[#F7F4EA] font-semibold">
                  Maridaje Recomendado en Sala
                </h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {beer.maridaje.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs font-sans text-[#F7F4EA]/70 font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sommelier Service Specifications */}
            <div className="p-4 rounded bg-[#120E0A] border-l-2 border-[#D1A85A] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-sans">
              <div>
                <span className="block font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50">
                  Temperatura
                </span>
                <span className="text-[#D1A85A] font-semibold">{beer.temp}</span>
              </div>
              <div>
                <span className="block font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50">
                  Cristalería
                </span>
                <span className="text-[#F7F4EA] font-semibold">{beer.servingGlass}</span>
              </div>
              <div>
                <span className="block font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50">
                  Maduración
                </span>
                <span className="text-[#D1A85A] font-semibold">{beer.oakTime || 'Guarda natural'}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center justify-end gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-cinzel uppercase tracking-wider text-[#F7F4EA]/60 hover:text-[#F7F4EA] transition-colors"
              >
                Volver al Catálogo
              </button>
              <button
                onClick={() => {
                  onSelectForB2B(beer);
                  onClose();
                }}
                className="px-6 py-3 bg-[#344A2B] hover:bg-[#3f5c34] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-[0.16em] font-bold border border-[#D1A85A] rounded transition-all duration-300 shadow-[0_0_20px_rgba(209,168,90,0.3)] hover:shadow-[0_0_30px_rgba(209,168,90,0.5)]"
              >
                Solicitar Lote {beer.name}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BEER_VARIANTS, OFFICIAL_BOTTLE_IMAGE_URL } from '../data/beerData';
import { BeerVariant } from '../types';
import { GothicCross } from './MonkIsotype';
import { TastingNoteModal } from './TastingNoteModal';
import { Shield, Sparkles, ChevronRight, Eye, Wine, Clock, Thermometer } from 'lucide-react';

interface ProductCatalogProps {
  onSelectForB2B: (beer: BeerVariant) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectForB2B }) => {
  const [selectedBeer, setSelectedBeer] = useState<BeerVariant | null>(null);
  const [filter, setFilter] = useState<'all' | 'con-alcohol' | 'sin-alcohol'>('all');

  const filteredBeers = BEER_VARIANTS.filter((b) => {
    if (filter === 'con-alcohol') return b.abv === '5.0%';
    if (filter === 'sin-alcohol') return b.abv === '0.0%';
    return true;
  });

  return (
    <section id="catalogo" className="relative py-28 bg-[#0C0C0C] border-t border-[#D1A85A]/15 scroll-mt-12">
      <div id="reliquia" className="absolute -top-12" />
      <div id="coleccion" className="absolute -top-12" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2">
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
              La Colección Kloster
            </span>
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
          </div>

          <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#F7F4EA] font-normal tracking-tight">
            Colección de Guarda
          </h2>

          <p className="font-sans text-base text-[#F7F4EA]/75 font-light max-w-2xl mx-auto leading-relaxed">
            Cuatro interpretaciones nobles de nuestra cervecería artesanal: tres variedades con 5.0% de graduación y nuestra exclusiva opción sin alcohol <span className="text-[#D1A85A] font-medium">Kloster Hydrate</span>.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded font-cinzel text-xs uppercase tracking-[0.16em] border transition-all ${
                filter === 'all'
                  ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.25)] font-bold'
                  : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
              }`}
            >
              Las 4 Variantes ({BEER_VARIANTS.length})
            </button>
            <button
              onClick={() => setFilter('con-alcohol')}
              className={`px-4 py-2 rounded font-cinzel text-xs uppercase tracking-[0.16em] border transition-all ${
                filter === 'con-alcohol'
                  ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.25)] font-bold'
                  : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
              }`}
            >
              Cervezas 5.0% Vol. (3)
            </button>
            <button
              onClick={() => setFilter('sin-alcohol')}
              className={`px-4 py-2 rounded font-cinzel text-xs uppercase tracking-[0.16em] border transition-all ${
                filter === 'sin-alcohol'
                  ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.25)] font-bold'
                  : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
              }`}
            >
              0.0% Sin Alcohol (1)
            </button>
          </div>
        </div>

        {/* PRODUCT CARDS GRID (4 COLUMNS ON DESKTOP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBeers.map((beer) => (
            <div
              key={beer.id}
              className="group relative rounded-lg bg-gradient-to-b from-[#18130E] via-[#14100C] to-[#0E0B08] border border-[#D1A85A]/25 hover:border-[#D1A85A]/70 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(209,168,90,0.18)] hover:-translate-y-1.5"
            >
              {/* Top Accent Line according to SKU color code */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: beer.colorCode }}
              />

              {/* CARD INTERIOR */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                
                {/* Variant Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#D1A85A] font-semibold block mb-1">
                      {beer.tagline}
                    </span>
                    <h3 className="font-gothic text-3xl sm:text-4xl text-[#F7F4EA] leading-none group-hover:text-[#D1A85A] transition-colors">
                      {beer.name}
                    </h3>
                  </div>

                  {/* Volume & Alcohol Badges */}
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="px-2.5 py-1 rounded bg-[#0C0C0C] border border-[#D1A85A]/30 text-right">
                      <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#F7F4EA]/70 block">
                        {beer.volume}
                      </span>
                    </div>
                    {beer.abv === '0.0%' ? (
                      <span className="px-2 py-0.5 rounded text-[8px] font-cinzel uppercase tracking-wider bg-[#2E6F56]/30 text-[#8CE3BA] border border-[#2E6F56] font-bold">
                        Sin Alcohol
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[8px] font-cinzel uppercase tracking-wider bg-[#17130F] text-[#D1A85A] border border-[#D1A85A]/40 font-bold">
                        5.0% Vol.
                      </span>
                    )}
                  </div>
                </div>

                {/* Subtitle / Style */}
                <p className="font-cinzel text-xs text-[#F7F4EA]/60 tracking-wider mb-6">
                  {beer.subname}
                </p>

                {/* Roman Arch Bottle Stage Container */}
                <div
                  onClick={() => setSelectedBeer(beer)}
                  className="relative cursor-pointer aspect-[4/3] rounded-t-[70px] rounded-b-md bg-[#0C0C0C] border border-[#D1A85A]/20 p-4 mb-6 flex items-center justify-center overflow-hidden group-hover:border-[#D1A85A]/50 transition-colors"
                >
                  {/* Amber Backlight Bokeh */}
                  <div
                    className="absolute w-36 h-36 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: beer.colorCode }}
                  />

                  {/* Bottle Shot */}
                  <img
                    src={beer.image || OFFICIAL_BOTTLE_IMAGE_URL}
                    alt={`Botella oficial ${beer.name} - ${beer.subname}`}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 h-full max-h-56 w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Quick Inspect Button Overlay */}
                  <div className="absolute inset-0 z-20 bg-[#0C0C0C]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4 text-[#D1A85A]" />
                    <span className="font-cinzel text-[11px] uppercase tracking-[0.2em] text-[#F7F4EA] font-semibold">
                      Ficha de Sommelier
                    </span>
                  </div>
                </div>

                {/* Sensory Highlights Preview */}
                <p className="font-sans text-xs text-[#F7F4EA]/70 leading-relaxed font-light mb-6 flex-1 line-clamp-3">
                  {beer.description}
                </p>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#D1A85A]/15 mb-6 text-center text-xs">
                  <div>
                    <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50 block">
                      Graduación
                    </span>
                    <span className="font-sans font-bold text-[#D1A85A] text-sm">{beer.abv}</span>
                  </div>
                  <div>
                    <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50 block">
                      Amargor
                    </span>
                    <span className="font-sans font-bold text-[#D1A85A] text-sm">{beer.ibu} IBU</span>
                  </div>
                  <div>
                    <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50 block">
                      Servicio
                    </span>
                    <span className="font-sans font-semibold text-[#F7F4EA] text-xs mt-0.5 block">{beer.temp}</span>
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedBeer(beer)}
                    className="flex-1 py-2.5 px-3 bg-[#17130F] hover:bg-[#221B14] text-[#F7F4EA] font-cinzel text-[11px] uppercase tracking-[0.14em] font-semibold border border-[#D1A85A]/30 rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Wine className="w-3.5 h-3.5 text-[#D1A85A]" />
                    <span>Notas de Cata</span>
                  </button>

                  <button
                    onClick={() => onSelectForB2B(beer)}
                    className="py-2.5 px-4 bg-[#344A2B] hover:bg-[#3f5c34] text-[#F2E5CE] font-cinzel text-[11px] uppercase tracking-[0.14em] font-bold border border-[#D1A85A] rounded transition-all shadow-[0_0_15px_rgba(209,168,90,0.2)] hover:shadow-[0_0_20px_rgba(209,168,90,0.4)]"
                  >
                    Asignar
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* SOMMELIER MODAL */}
      <TastingNoteModal
        beer={selectedBeer}
        onClose={() => setSelectedBeer(null)}
        onSelectForB2B={onSelectForB2B}
      />
    </section>
  );
};

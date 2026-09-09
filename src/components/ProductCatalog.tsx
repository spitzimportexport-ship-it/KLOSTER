import React, { useState } from 'react';
import { BEER_VARIANTS, OFFICIAL_BOTTLE_IMAGE_URL } from '../data/beerData';
import { BeerVariant } from '../types';
import { GothicCross } from './MonkIsotype';
import { TastingNoteModal } from './TastingNoteModal';
import { Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import cellarBarrelsImg from '../assets/images/kloster_cellar_barrels_1788393240376.jpg';

interface ProductCatalogProps {
  onSelectForB2B: (beer: BeerVariant) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectForB2B }) => {
  const [selectedBeer, setSelectedBeer] = useState<BeerVariant | null>(null);
  const [filter, setFilter] = useState<'all' | 'con-alcohol' | 'sin-alcohol'>('all');
  const { t, language } = useLanguage();

  const filteredBeers = BEER_VARIANTS.filter((b) => {
    if (filter === 'con-alcohol') return b.abv === '5.0%';
    if (filter === 'sin-alcohol') return b.abv === '0.0%';
    return true;
  });

  const getTranslatedBeer = (beer: BeerVariant) => {
    return {
      ...beer,
      name: t(`beer.${beer.id}.name`) !== `beer.${beer.id}.name` ? t(`beer.${beer.id}.name`) : beer.name,
      subname: t(`beer.${beer.id}.sub`) !== `beer.${beer.id}.sub` ? t(`beer.${beer.id}.sub`) : beer.subname,
      tagline: t(`beer.${beer.id}.tag`) !== `beer.${beer.id}.tag` ? t(`beer.${beer.id}.tag`) : beer.tagline,
      description: t(`beer.${beer.id}.desc`) !== `beer.${beer.id}.desc` ? t(`beer.${beer.id}.desc`) : beer.description,
      aroma: t(`beer.${beer.id}.aroma`) !== `beer.${beer.id}.aroma` ? t(`beer.${beer.id}.aroma`) : beer.aroma,
      boca: t(`beer.${beer.id}.boca`) !== `beer.${beer.id}.boca` ? t(`beer.${beer.id}.boca`) : beer.boca,
    };
  };

  return (
    <section id="catalogo" className="relative py-28 bg-[#0C0C0C] border-t border-[#D1A85A]/15 scroll-mt-12 overflow-hidden">
      <div id="reliquia" className="absolute -top-12" />
      <div id="coleccion" className="absolute -top-12" />

      {/* ATMOSPHERIC MONASTIC CELLAR BACKGROUND (Cava & Barricas de Guarda) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src={cellarBarrelsImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center filter contrast-105 brightness-[0.58] md:brightness-[0.62] scale-105"
        />
        {/* Desvanecimiento suave en los bordes para transición fluida con Hero y Cáliz */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/70 to-transparent" />
        {/* Viñeta radial equilibrada: mantiene la imagen distinguible en laterales sin saturar el centro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(12,12,12,0.38)_0%,_rgba(12,12,12,0.62)_65%,_rgba(12,12,12,0.92)_100%)]" />
      </div>

      <div className="relative z-10 site-container">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
              {t('catalog.badge')}
            </span>
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
          </div>

          <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#F7F4EA] font-normal tracking-tight">
            {t('catalog.title')}
          </h2>

          <p className="font-sans text-base text-[#F7F4EA]/75 font-light max-w-2xl mx-auto leading-relaxed">
            {t('catalog.subtitle')}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded font-cinzel text-xs uppercase tracking-[0.16em] border transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.25)] font-bold'
                  : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
              }`}
            >
              {t('catalog.filterAll')}
            </button>
            <button
              onClick={() => setFilter('con-alcohol')}
              className={`px-4 py-2 rounded font-cinzel text-xs uppercase tracking-[0.16em] border transition-all cursor-pointer ${
                filter === 'con-alcohol'
                  ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.25)] font-bold'
                  : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
              }`}
            >
              {t('catalog.filterAlcohol')}
            </button>
            <button
              onClick={() => setFilter('sin-alcohol')}
              className={`px-4 py-2 rounded font-cinzel text-xs uppercase tracking-[0.16em] border transition-all cursor-pointer ${
                filter === 'sin-alcohol'
                  ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.25)] font-bold'
                  : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
              }`}
            >
              {t('catalog.filterZero')}
            </button>
          </div>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredBeers.map((beer) => {
            const isFeatured = beer.id === 'lager';
            const translatedBeer = getTranslatedBeer(beer);

            return (
              <article
                key={beer.id}
                className={`relative rounded-xl backdrop-blur-md bg-gradient-to-b from-[#18130E]/95 via-[#140F0B]/95 to-[#0E0B08]/95 p-6 sm:p-7 flex flex-col justify-between transition-all duration-400 hover:-translate-y-1 ${
                  isFeatured
                    ? 'border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.25)]'
                    : 'border border-[#D1A85A]/25 hover:border-[#D1A85A]/60 shadow-[0_15px_30px_rgba(0,0,0,0.6)]'
                }`}
              >
                {/* Badge Von Restorff */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-cinzel text-[10px] uppercase tracking-[0.18em] font-bold shadow-md whitespace-nowrap">
                    ★ {t('catalog.flagship')}
                  </div>
                )}

                {/* Top Info */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#D1A85A] font-semibold">
                      {translatedBeer.tagline}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-cinzel uppercase tracking-wider font-bold whitespace-nowrap ${
                        beer.abv === '0.0%'
                          ? 'bg-[#2E6F56]/30 text-[#8CE3BA] border border-[#2E6F56]'
                          : 'bg-[#17130F] text-[#D1A85A] border border-[#D1A85A]/40'
                      }`}
                    >
                      {beer.abv}
                    </span>
                  </div>

                  <h3 className="font-gothic text-3xl sm:text-4xl text-[#F7F4EA] leading-none mb-1">
                    {translatedBeer.name}
                  </h3>

                  <p className="font-cinzel text-xs text-[#F7F4EA]/60 tracking-wider mb-4">
                    {translatedBeer.subname} · {beer.volume}
                  </p>
                </div>

                {/* Single-layer Bottle Presentation Stage */}
                <div
                  onClick={() => setSelectedBeer(translatedBeer)}
                  className="relative group cursor-pointer my-4 flex items-center justify-center py-4 rounded-lg overflow-hidden transition-colors"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedBeer(translatedBeer);
                  }}
                  aria-label={`${t('catalog.tastingBtn')} - ${translatedBeer.name}`}
                >
                  {/* Subtle backlight */}
                  <div
                    className="absolute w-40 h-40 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none"
                    style={{ backgroundColor: beer.colorCode }}
                  />

                  <img
                    src={beer.image || OFFICIAL_BOTTLE_IMAGE_URL}
                    alt={`Cerveza artesanal ${beer.name}`}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 h-56 sm:h-60 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.95)] transform group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Description & Sensory Notes */}
                <p className="font-sans text-xs text-[#F7F4EA]/75 leading-relaxed font-light mb-4 line-clamp-3">
                  {translatedBeer.description}
                </p>

                {/* Specs row */}
                <div className="flex items-center justify-between pt-3 pb-4 border-t border-[#D1A85A]/15 text-xs text-[#F7F4EA]/70">
                  <div>
                    <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50 block">
                      {language === 'es' ? 'Amargor' : 'Bitterness'}
                    </span>
                    <span className="font-sans font-bold text-[#D1A85A] text-sm">
                      {beer.ibu} IBU
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#F7F4EA]/50 block">
                      {language === 'es' ? 'Servicio' : 'Serving'}
                    </span>
                    <span className="font-sans font-semibold text-[#F7F4EA] text-xs">
                      {beer.temp}
                    </span>
                  </div>
                </div>

                {/* Clean Actions */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedBeer(translatedBeer)}
                    className="py-2.5 px-3 bg-[#17130F] hover:bg-[#221B14] text-[#F7F4EA] font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-semibold border border-[#D1A85A]/30 rounded transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#D1A85A]" />
                    <span>{t('catalog.tastingBtn')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectForB2B(translatedBeer)}
                    className="py-2.5 px-3 bg-[#344A2B] hover:bg-[#3f5c34] text-[#F2E5CE] font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-bold border border-[#D1A85A] rounded transition-all shadow-[0_0_12px_rgba(209,168,90,0.2)] hover:shadow-[0_0_20px_rgba(209,168,90,0.4)] whitespace-nowrap cursor-pointer"
                  >
                    {language === 'es' ? 'Pedir Lote' : 'Order Batch'}
                  </button>
                </div>
              </article>
            );
          })}
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

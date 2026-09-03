import React from 'react';
import { MONASTIC_PILLARS } from '../data/beerData';
import { GothicCross } from './MonkIsotype';
import { Droplets, Sparkles, Wheat, Hourglass, Shield, CheckCircle2 } from 'lucide-react';
import cellarImg from '../assets/images/kloster_cellar_barrels_1788393240376.jpg';

export const ManifestoSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#D1A85A]" />;
      case 'Wheat':
        return <Wheat className="w-5 h-5 text-[#D1A85A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D1A85A]" />;
      case 'Hourglass':
        return <Hourglass className="w-5 h-5 text-[#D1A85A]" />;
      default:
        return <Shield className="w-5 h-5 text-[#D1A85A]" />;
    }
  };

  return (
    <section id="herencia" className="relative py-28 bg-[#0C0C0C] border-t border-[#D1A85A]/15 overflow-hidden">
      
      {/* Background Subtle Cellar Illumination */}
      <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-luminosity">
        <img
          src={cellarImg}
          alt="Bodega de Barricas Kloster"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: PACIENCIA, SILENCIO Y TIEMPO */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2">
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
              Nuestra Herencia Monástica
            </span>
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
          </div>

          <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#F7F4EA] font-normal tracking-tight">
            Paciencia, Silencio y Tiempo
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#F7F4EA]/80 font-light leading-relaxed">
            <strong className="text-[#D1A85A] font-semibold">KLOSTER</strong> representa paciencia, conocimiento, oficio y el ritual de disfrutar una buena cerveza. Inspirada en la tradición cervecera de abadía, nuestra marca combina símbolos atemporales con un diseño sobrio y poderoso que comunica carácter, autenticidad y calidad premium.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D1A85A] to-transparent mx-auto pt-2" />
        </div>

        {/* 5 MONASTIC SYMBOLS FROM MOODBOARD */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {[
            { name: 'TRADICIÓN', symbol: '✝', desc: 'Raíces centenarias europeas y custodia del saber cervecero.' },
            { name: 'PACIENCIA', symbol: '⌛', desc: 'Maduración lenta en frío sin atajos industriales ni aceleradores.' },
            { name: 'OFICIO', symbol: '🌾', desc: 'Dominio de las maltas nobles, lúpulos continentales y agua prístina.' },
            { name: 'CARÁCTER', symbol: '🛡', desc: 'Cuerpo redondo, perfil noble y graduación alcohólica de guarda.' },
            { name: 'RITUAL', symbol: '🍷', desc: 'El servicio sagrado en cáliz de cristal para coronar dos dedos de espuma.' }
          ].map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-lg bg-[#17130F]/90 border border-[#D1A85A]/25 hover:border-[#D1A85A] transition-all duration-300 text-center flex flex-col items-center group shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              <span className="text-2xl mb-2 text-[#D1A85A] group-hover:scale-110 transition-transform">
                {item.symbol}
              </span>
              <h3 className="font-cinzel text-xs uppercase tracking-[0.22em] text-[#F7F4EA] font-bold mb-1.5 group-hover:text-[#D1A85A] transition-colors">
                {item.name}
              </h3>
              <p className="font-sans text-[11px] text-[#F7F4EA]/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4 SACRED PILLARS BENTO GRID (Symmetric Monastic Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {MONASTIC_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="relative group p-8 rounded-lg bg-[#17130F]/90 border border-[#D1A85A]/20 hover:border-[#D1A85A]/60 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(209,168,90,0.15)]"
            >
              {/* Inner subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#344A2B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded bg-[#0C0C0C] border border-[#D1A85A]/30 flex items-center justify-center group-hover:border-[#D1A85A] transition-colors">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#D1A85A]/70 uppercase font-semibold">
                    Pilar 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg font-bold text-[#F7F4EA] tracking-wider mb-3 group-hover:text-[#D1A85A] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm text-[#F7F4EA]/70 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D1A85A]/10 flex items-center justify-between">
                <span className="font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#D1A85A] font-medium">
                  {pillar.tag}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D1A85A]/50 group-hover:bg-[#D1A85A] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* FAMOUS MONASTIC QUOTE BANNER */}
        <div className="relative p-8 md:p-12 rounded-lg bg-gradient-to-r from-[#17130F] via-[#231A12] to-[#17130F] border border-[#D1A85A]/35 shadow-[0_0_40px_rgba(0,0,0,0.8)] mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full border border-[#D1A85A] flex-shrink-0 flex items-center justify-center bg-[#0C0C0C] shadow-[0_0_20px_rgba(209,168,90,0.3)]">
                <GothicCross className="w-7 h-7 text-[#D1A85A]" />
              </div>
              <div>
                <p className="font-cinzel italic text-xl sm:text-2xl text-[#F2E5CE] tracking-wide font-normal">
                  "No hay prisa en el rezo, ni en la buena cerveza."
                </p>
                <p className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D1A85A] font-semibold mt-1">
                  Elaborada y envasada por Bolivian Brew Company S.R.L. · Santa Cruz, Bolivia
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-cinzel text-[#F7F4EA]/70">
              <span className="px-3 py-1.5 bg-[#0C0C0C] border border-[#D1A85A]/20 rounded">
                NIT: 481223025
              </span>
              <span className="px-3 py-1.5 bg-[#0C0C0C] border border-[#D1A85A]/20 rounded text-[#D1A85A]">
                REG. SENASAG VIGENTE
              </span>
            </div>
          </div>
        </div>

        {/* MOODBOARD MATERIALITY & FINISHES MANIFEST */}
        <div className="p-6 rounded-lg bg-[#120E0A]/90 border border-[#D1A85A]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#D1A85A] font-bold block mb-1">
              Materiales & Texturas Nobles
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-sans text-[#F7F4EA]/80">
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-white/10">Piedra Noble</span>
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-white/10">Madera de Roble</span>
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-white/10">Papel Artesanal</span>
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-white/10">Cobre & Bronce</span>
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-white/10">Vidrio Ámbar</span>
            </div>
          </div>

          <div>
            <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#D1A85A] font-bold block mb-1">
              Acabados Monásticos
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-sans text-[#F7F4EA]/80">
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-[#D1A85A]/30 text-[#D1A85A]">Foil Dorado 24k</span>
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-[#D1A85A]/30">Relieve Litúrgico</span>
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-[#D1A85A]/30">Barniz Selectivo</span>
              <span className="px-2.5 py-1 rounded bg-[#17130F] border border-[#D1A85A]/30">Sello de Lacre</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { GothicCross } from './MonkIsotype';
import { KlosterLogo } from './KlosterLogo';
import { ShieldCheck, MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-[#080808] border-t border-[#D1A85A]/20 pt-20 pb-12 overflow-hidden text-[#F7F4EA]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#D1A85A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP INSTITUTIONAL BRAND UNIT */}
        <div className="flex flex-col items-center justify-center text-center mb-16 pb-12 border-b border-[#D1A85A]/15">
          <KlosterLogo size="md" showDescriptor={true} />
          
          <p className="font-cinzel text-xs text-[#F7F4EA]/60 tracking-[0.24em] uppercase max-w-md mt-6">
            Custodia del Oficio y la Guarda en Roble
          </p>

          <div className="flex items-center gap-2 mt-4 text-[#D1A85A]">
            <GothicCross className="w-3 h-3" />
            <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase">
              Santa Cruz de la Sierra · Bolivia
            </span>
            <GothicCross className="w-3 h-3" />
          </div>
        </div>

        {/* 4-COLUMN MONASTIC SITE MAP & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-left">
          
          {/* Col 1: Origen */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-[#D1A85A] uppercase tracking-[0.2em] mb-4">
              Origen Monástico
            </h4>
            <p className="font-sans text-xs text-[#F7F4EA]/70 leading-relaxed font-light">
              Inspirada en el silencio y la devoción de los claustros medievales europeos, perfeccionada bajo las aguas y materias primas nobles de los valles y tierras de Bolivia.
            </p>
          </div>

          {/* Col 2: Colección */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-[#D1A85A] uppercase tracking-[0.2em] mb-4">
              Colección de Guarda
            </h4>
            <ul className="space-y-2 text-xs font-cinzel text-[#F7F4EA]/70">
              <li><a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">Kloster Lager (5.0% Vol.)</a></li>
              <li><a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">Kloster Vainilla (5.0% Vol.)</a></li>
              <li><a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">Kloster Roble (5.0% Vol.)</a></li>
              <li><a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">Kloster Hydrate (0.0% Sin Alcohol)</a></li>
            </ul>
          </div>

          {/* Col 3: Gastronomía & Sala */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-[#D1A85A] uppercase tracking-[0.2em] mb-4">
              Gastronomía & B2B
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#F7F4EA]/70 font-light">
              <li><a href="#b2b" className="hover:text-[#D1A85A] transition-colors">Red de Hoteles & Bistros</a></li>
              <li><a href="#ritual" className="hover:text-[#D1A85A] transition-colors">Protocolo de Servicio en Cáliz</a></li>
              <li><a href="#b2b" className="hover:text-[#D1A85A] transition-colors">Capacitación de Sommeliers</a></li>
              <li><a href="#b2b" className="hover:text-[#D1A85A] transition-colors">Solicitud de Distribución</a></li>
            </ul>
          </div>

          {/* Col 4: Cervecería & Registro */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-[#D1A85A] uppercase tracking-[0.2em] mb-4">
              Cervecería Oficial
            </h4>
            <div className="space-y-2 text-xs font-sans text-[#F7F4EA]/70 font-light">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D1A85A]" />
                <span>Santa Cruz de la Sierra, Bolivia</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D1A85A]" />
                <span>contacto@cervezakloster.bo</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D1A85A]" />
                <span>+591 76502714 (Atención B2B)</span>
              </p>
            </div>
          </div>

        </div>

        {/* MANDATORY LEGAL HEALTH DISCLAIMER (LEY BOLIVIANA 259) */}
        <div className="py-5 px-6 rounded bg-[#120E0A] border border-[#D1A85A]/25 mb-10 text-center">
          <p className="font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] text-[#D1A85A] uppercase">
            EL CONSUMO EXCESIVO DE ALCOHOL ES DAÑINO PARA LA SALUD. VENTA PROHIBIDA A MENORES DE 18 AÑOS. LEY 259.
          </p>
        </div>

        {/* BOTTOM LEGAL ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-left text-[11px] font-sans text-[#F7F4EA]/50 border-t border-white/5 pt-6">
          <div className="space-y-1">
            <p className="font-cinzel text-[10px] uppercase tracking-wider text-[#F7F4EA]/70">
              ELABORADA Y ENVASADA POR BOLIVIAN BREW COMPANY S.R.L. · SANTA CRUZ, BOLIVIA
            </p>
            <p>
              NIT: 481223025 · REGISTRO SENASAG: 08 09 03 14 0033 · INDUSTRIA BOLIVIANA
            </p>
          </div>

          <div className="text-right">
            <p className="font-cinzel text-[10px] uppercase tracking-wider">
              © {new Date().getFullYear()} KLOSTER CERVEZA ARTESANAL. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

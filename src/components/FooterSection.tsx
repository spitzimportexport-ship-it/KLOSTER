import React from 'react';
import { GothicCross } from './MonkIsotype';
import { KlosterLogo } from './KlosterLogo';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FooterSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="relative bg-[#080808] border-t border-[#D1A85A]/20 pt-20 pb-12 overflow-hidden text-[#F7F4EA]">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#D1A85A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 site-container">
        
        {/* TOP INSTITUTIONAL BRAND UNIT */}
        <div className="flex flex-col items-center justify-center text-center mb-16 pb-12 border-b border-[#D1A85A]/15">
          <KlosterLogo size="md" showDescriptor={true} />
          
          <p className="font-cinzel text-xs text-[#F7F4EA]/60 tracking-[0.24em] uppercase max-w-md mt-6">
            {t('footer.brandTagline')}
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
              {t('footer.col1Title')}
            </h4>
            <p className="font-sans text-xs text-[#F7F4EA]/70 leading-relaxed font-light">
              {t('footer.col1Desc')}
            </p>
          </div>

          {/* Col 2: Colección */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-[#D1A85A] uppercase tracking-[0.2em] mb-4">
              {t('footer.col2Title')}
            </h4>
            <ul className="space-y-2 text-xs font-cinzel text-[#F7F4EA]/70">
              <li><a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">Kloster Lager (5.0% Vol.)</a></li>
              <li><a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">Kloster Vainilla (5.0% Vol.)</a></li>
              <li><a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">Kloster Roble (5.0% Vol.)</a></li>
              <li>
                <a href="#catalogo" className="hover:text-[#D1A85A] transition-colors">
                  {language === 'es' ? 'Kloster Hydrate (0.0% Sin Alcohol)' : 'Kloster Hydrate (0.0% Non-Alcoholic)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Gastronomía & Contacto */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-[#D1A85A] uppercase tracking-[0.2em] mb-4">
              {t('footer.col3Title')}
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#F7F4EA]/70 font-light">
              <li><a href="#contacto" className="hover:text-[#D1A85A] transition-colors">{t('footer.linkDirectContact')}</a></li>
              <li><a href="#caliz" className="hover:text-[#D1A85A] transition-colors">{t('footer.linkChalice')}</a></li>
              <li><a href="#contacto" className="hover:text-[#D1A85A] transition-colors">{t('footer.linkDist')}</a></li>
              <li><a href="#quienes-somos" className="hover:text-[#D1A85A] transition-colors">{t('footer.linkHeritage')}</a></li>
            </ul>
          </div>

          {/* Col 4: Cervecería & Registro */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-[#D1A85A] uppercase tracking-[0.2em] mb-4">
              {t('footer.col4Title')}
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
                <span>+591 76502714 ({language === 'es' ? 'Atención y Pedidos' : 'Orders & Support'})</span>
              </p>
            </div>
          </div>

        </div>

        {/* MANDATORY LEGAL HEALTH DISCLAIMER (LEY BOLIVIANA 259) */}
        <div className="py-5 px-6 rounded bg-[#120E0A] border border-[#D1A85A]/25 mb-10 text-center">
          <p className="font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] text-[#D1A85A] uppercase">
            {t('footer.legalNotice')}
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
              © {new Date().getFullYear()} KLOSTER CERVEZA ARTESANAL. {language === 'es' ? 'TODOS LOS DERECHOS RESERVADOS.' : 'ALL RIGHTS RESERVED.'}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

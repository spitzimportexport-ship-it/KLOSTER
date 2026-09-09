import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Selector de Idioma / Language Selector"
      className={`inline-flex items-center p-1 rounded-full border border-[#D1A85A]/35 bg-[#17130F]/90 backdrop-blur-md shadow-inner ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 rounded-full text-xs font-cinzel font-semibold transition-all duration-200 cursor-pointer ${
          language === 'es'
            ? 'bg-[#D1A85A] text-[#0C0C0C] font-bold shadow-[0_0_12px_rgba(209,168,90,0.45)]'
            : 'text-[#F7F4EA]/70 hover:text-[#F7F4EA] hover:bg-white/5'
        }`}
        title="Español"
        aria-pressed={language === 'es'}
      >
        <span className="tracking-widest text-[11px] font-bold">ES</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-cinzel font-semibold transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-[#D1A85A] text-[#0C0C0C] font-bold shadow-[0_0_12px_rgba(209,168,90,0.45)]'
            : 'text-[#F7F4EA]/70 hover:text-[#F7F4EA] hover:bg-white/5'
        }`}
        title="English"
        aria-pressed={language === 'en'}
      >
        <span className="tracking-widest text-[11px] font-bold">EN</span>
      </button>
    </div>
  );
};

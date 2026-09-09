/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ManifestoSection } from './components/ManifestoSection';
import { PourRitualSection } from './components/PourRitualSection';
import { B2BAllocationSection } from './components/B2BAllocationSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { BeerVariant } from './types';
import { GothicCross } from './components/MonkIsotype';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainContent() {
  const { t } = useLanguage();
  const [selectedBeerForContact, setSelectedBeerForContact] = useState<BeerVariant | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [ageVerified, setAgeVerified] = useState<boolean>(() => {
    return localStorage.getItem('kloster_age_verified') === 'true';
  });

  const handleOpenContactModal = (beer?: BeerVariant) => {
    if (beer) {
      setSelectedBeerForContact(beer);
    }
    setIsContactModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const confirmAge = () => {
    localStorage.setItem('kloster_age_verified', 'true');
    setAgeVerified(true);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F7F4EA] selection:bg-[#D1A85A] selection:text-[#0C0C0C]">
      
      {/* AGE VERIFICATION GATE (LEGAL ADHERENCE) */}
      {!ageVerified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C0C0C]/95 backdrop-blur-lg">
          <div className="max-w-md w-full p-8 rounded-lg bg-[#17130F] border border-[#D1A85A]/40 text-center shadow-[0_0_60px_rgba(0,0,0,0.95)]">
            <div className="flex justify-center mb-4">
              <GothicCross className="w-8 h-8 text-[#D1A85A]" />
            </div>

            <span className="logo-text text-4xl text-[#F7F4EA] block mb-2">kloster</span>
            <span className="font-cinzel text-[10px] uppercase tracking-[0.26em] text-[#D1A85A] font-bold block mb-4">
              {t('age.title')}
            </span>

            <p className="font-sans text-xs text-[#F7F4EA]/80 font-light leading-relaxed mb-6">
              {t('age.text')}
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={confirmAge}
                className="w-full py-3 bg-[#D1A85A] hover:bg-[#c39a4d] text-[#0C0C0C] font-cinzel text-xs uppercase tracking-[0.18em] font-bold rounded transition-colors shadow-[0_0_20px_rgba(209,168,90,0.3)] cursor-pointer"
              >
                {t('age.enter')}
              </button>
              <a
                href="https://google.com"
                className="font-cinzel text-[10px] uppercase tracking-wider text-[#F7F4EA]/40 hover:text-[#F7F4EA]/70 transition-colors"
              >
                {t('age.exit')}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[9px] font-cinzel text-[#F7F4EA]/40">
              {t('age.law')}
            </div>
          </div>
        </div>
      )}

      {/* NAVIGATION BAR */}
      <Navbar onOpenContact={() => handleOpenContactModal()} />

      {/* 1. HERO SECTION (INICIO) */}
      <HeroSection
        onDiscover={() => handleScrollToSection('catalogo')}
        onOpenContact={() => handleOpenContactModal()}
      />

      {/* 2. CATÁLOGO DE CERVEZAS (NUESTRA COLECCIÓN - PRIORIZADO AL INICIO) */}
      <ProductCatalog
        onSelectForB2B={(beer) => handleOpenContactModal(beer)}
      />

      {/* 3. SECCIÓN QUIÉNES SOMOS (PACIENCIA, SILENCIO Y TIEMPO - LAYOUT ALTERNADO) */}
      <ManifestoSection />

      {/* 4. EL RITUAL DEL CÁLIZ */}
      <PourRitualSection />

      {/* 5. CONTACTO (ATENCIÓN DIRECTA AL CLIENTE Y HOSTELERÍA) */}
      <B2BAllocationSection selectedBeer={selectedBeerForContact} />

      {/* 6. PIE DE PÁGINA */}
      <FooterSection />

      {/* MODAL DE CONTACTO MINIMALISTA (EAS / WHATSAPP) */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        selectedBeer={selectedBeerForContact}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

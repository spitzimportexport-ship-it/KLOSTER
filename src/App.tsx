/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { PourRitualSection } from './components/PourRitualSection';
import { ProductCatalog } from './components/ProductCatalog';
import { B2BAllocationSection } from './components/B2BAllocationSection';
import { FooterSection } from './components/FooterSection';
import { BeerVariant } from './types';
import { GothicCross } from './components/MonkIsotype';

export default function App() {
  const [selectedBeerForB2B, setSelectedBeerForB2B] = useState<BeerVariant | null>(null);
  const [ageVerified, setAgeVerified] = useState<boolean>(() => {
    return localStorage.getItem('kloster_age_verified') === 'true';
  });

  const handleOpenB2B = (beer?: BeerVariant) => {
    if (beer) {
      setSelectedBeerForB2B(beer);
    }
    const b2bElem = document.getElementById('b2b');
    if (b2bElem) {
      b2bElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscover = () => {
    const herenciaElem = document.getElementById('herencia');
    if (herenciaElem) {
      herenciaElem.scrollIntoView({ behavior: 'smooth' });
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

            <span className="font-gothic text-4xl text-[#F7F4EA] block mb-2">kloster</span>
            <span className="font-cinzel text-[10px] uppercase tracking-[0.26em] text-[#D1A85A] font-bold block mb-4">
              Cerveza de Abadía · Santa Cruz, Bolivia
            </span>

            <p className="font-sans text-xs text-[#F7F4EA]/80 font-light leading-relaxed mb-6">
              Para ingresar al claustro digital y acceder al catálogo de guarda, debes confirmar que eres mayor de edad para consumir bebidas alcohólicas según la ley de tu territorio (18+ años).
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={confirmAge}
                className="w-full py-3 bg-[#D1A85A] hover:bg-[#c39a4d] text-[#0C0C0C] font-cinzel text-xs uppercase tracking-[0.18em] font-bold rounded transition-colors shadow-[0_0_20px_rgba(209,168,90,0.3)]"
              >
                Soy Mayor de 18 Años · Ingresar
              </button>
              <a
                href="https://google.com"
                className="font-cinzel text-[10px] uppercase tracking-wider text-[#F7F4EA]/40 hover:text-[#F7F4EA]/70 transition-colors"
              >
                Soy menor de edad
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[9px] font-cinzel text-[#F7F4EA]/40">
              Ley 259 de Control y Regulación de Bebidas Alcohólicas.
            </div>
          </div>
        </div>
      )}

      {/* NAVIGATION */}
      <Navbar onOpenB2B={() => handleOpenB2B()} />

      {/* HERO SECTION */}
      <HeroSection onDiscover={handleDiscover} onOpenB2B={() => handleOpenB2B()} />

      {/* MANIFESTO & 4 MONASTIC PILLARS */}
      <ManifestoSection />

      {/* CINEMATIC CHALICE POURING RITUAL (MONOTONIC FORWARD POUR) */}
      <PourRitualSection />

      {/* PRODUCT CATALOG & SOMMELIER CARDS */}
      <ProductCatalog onSelectForB2B={(beer) => handleOpenB2B(beer)} />

      {/* B2B HOSPITALITY ALLIANCE & INQUIRY FORM */}
      <B2BAllocationSection selectedBeer={selectedBeerForB2B} />

      {/* SOLEMN FOOTER */}
      <FooterSection />

    </div>
  );
}


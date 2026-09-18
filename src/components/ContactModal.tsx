import React, { useState, useEffect } from 'react';
import { GothicCross } from './MonkIsotype';
import { X, MessageSquare } from 'lucide-react';
import { BeerVariant } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBeer?: BeerVariant | null;
}

type InquireReason = 'distribuir' | 'evento' | 'duda';

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedBeer,
}) => {
  const { t, language } = useLanguage();
  const [reason, setReason] = useState<InquireReason>('distribuir');
  const [name, setName] = useState('');
  const [businessOrCity, setBusinessOrCity] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (selectedBeer) {
      setNotes(
        language === 'es'
          ? `Interés en lote de ${selectedBeer.name} (${selectedBeer.abv}).`
          : `Interested in batch of ${selectedBeer.name} (${selectedBeer.abv}).`
      );
    }
  }, [selectedBeer, language]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reasonLabel =
      reason === 'distribuir'
        ? language === 'es' ? 'Quiero distribuir / Venta directa B2B' : 'Distribution / Wholesale B2B'
        : reason === 'evento'
        ? language === 'es' ? 'Evento especial o consumo institucional' : 'Special Event / Institutional'
        : language === 'es' ? 'Consulta o duda general' : 'General Inquiry';

    const messageLines = [
      `*Solicitud de Contacto — Kloster Cerveza Artesanal*`,
      `• *Motivo:* ${reasonLabel}`,
      name.trim() ? `• *Nombre / Contacto:* ${name.trim()}` : null,
      businessOrCity.trim() ? `• *Establecimiento / Ciudad:* ${businessOrCity.trim()}` : null,
      selectedBeer ? `• *Variante seleccionada:* ${selectedBeer.name} (${selectedBeer.abv})` : null,
      notes.trim() ? `• *Mensaje:* ${notes.trim()}` : null,
      `_Enviado desde el portal oficial kloster.bo_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/59176502714?text=${encodeURIComponent(messageLines)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-[560px] bg-gradient-to-b from-[#18130E] via-[#120E0A] to-[#0A0A0A] border border-[#D1A85A]/40 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 text-left"
        style={{ width: 'clamp(300px, 92%, 560px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-[#F7F4EA]/60 hover:text-[#D1A85A] rounded-full border border-white/10 hover:border-[#D1A85A]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
          aria-label={t('modal.close')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with monastic mark */}
        <div className="flex items-center gap-2 mb-2">
          <GothicCross className="w-4 h-4 text-[#D1A85A]" />
          <span className="font-cinzel text-[11px] uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
            {t('contact.badge')}
          </span>
        </div>

        <h2
          id="contact-modal-title"
          className="font-gothic text-3xl sm:text-4xl text-[#F7F4EA] font-normal tracking-tight mb-2"
        >
          {t('contact.formTitle')}
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[#F7F4EA]/70 font-light mb-6 leading-relaxed">
          {language === 'es'
            ? 'Selecciona tu motivo de consulta y te atenderemos directamente vía WhatsApp con el Maestro Cervecero y equipo comercial.'
            : 'Select your inquiry reason and we will assist you directly via WhatsApp with our Brewmaster and sales team.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Quick Reason Selection */}
          <div>
            <label className="block font-cinzel text-[10px] uppercase tracking-[0.18em] text-[#D1A85A] font-semibold mb-2">
              {t('contact.reasonLabel')}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setReason('distribuir')}
                className={`py-2.5 px-2 rounded font-cinzel text-[11px] uppercase tracking-wider text-center transition-all border cursor-pointer ${
                  reason === 'distribuir'
                    ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.3)] font-bold'
                    : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                }`}
              >
                {t('contact.reasonDistribute')}
              </button>
              <button
                type="button"
                onClick={() => setReason('evento')}
                className={`py-2.5 px-2 rounded font-cinzel text-[11px] uppercase tracking-wider text-center transition-all border cursor-pointer ${
                  reason === 'evento'
                    ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.3)] font-bold'
                    : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                }`}
              >
                {t('contact.reasonEvent')}
              </button>
              <button
                type="button"
                onClick={() => setReason('duda')}
                className={`py-2.5 px-2 rounded font-cinzel text-[11px] uppercase tracking-wider text-center transition-all border cursor-pointer ${
                  reason === 'duda'
                    ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] shadow-[0_0_15px_rgba(209,168,90,0.3)] font-bold'
                    : 'bg-[#17130F] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                }`}
              >
                {t('contact.reasonInquiry')}
              </button>
            </div>
          </div>

          {/* Simple 2-field inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="contact-name"
                className="block font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#F7F4EA]/70 mb-1"
              >
                {t('contact.nameLabel')}
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('contact.namePlaceholder')}
                className="w-full px-3.5 py-2.5 rounded bg-[#0C0C0C] border border-white/15 focus:border-[#D1A85A] focus:outline-none text-sm text-[#F7F4EA] placeholder:text-[#F7F4EA]/30 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-location"
                className="block font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#F7F4EA]/70 mb-1"
              >
                {t('contact.cityLabel')}
              </label>
              <input
                id="contact-location"
                type="text"
                value={businessOrCity}
                onChange={(e) => setBusinessOrCity(e.target.value)}
                placeholder={t('contact.cityPlaceholder')}
                className="w-full px-3.5 py-2.5 rounded bg-[#0C0C0C] border border-white/15 focus:border-[#D1A85A] focus:outline-none text-sm text-[#F7F4EA] placeholder:text-[#F7F4EA]/30 transition-colors"
              />
            </div>
          </div>

          {/* Short note or preselected beer */}
          <div>
            <label
              htmlFor="contact-notes"
              className="block font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#F7F4EA]/70 mb-1"
            >
              {t('contact.notesLabel')}
            </label>
            <textarea
              id="contact-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('contact.notesPlaceholder')}
              className="w-full px-3.5 py-2 rounded bg-[#0C0C0C] border border-white/15 focus:border-[#D1A85A] focus:outline-none text-xs text-[#F7F4EA] placeholder:text-[#F7F4EA]/30 transition-colors resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded bg-[#D1A85A] hover:bg-[#e5c158] text-[#0A0A0A] font-cinzel text-xs sm:text-sm uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-2.5 transition-all shadow-[0_0_25px_rgba(209,168,90,0.35)] hover:shadow-[0_0_35px_rgba(209,168,90,0.55)] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            <span>{t('contact.submitBtn')}</span>
          </button>

          <p className="text-center font-sans text-[11px] text-[#F7F4EA]/40">
            {t('contact.footerNote')}
          </p>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { GothicCross } from './MonkIsotype';
import { BeerVariant } from '../types';
import { CheckCircle2, Shield, Truck, Wine, Award, Send, MessageSquare } from 'lucide-react';

interface B2BAllocationSectionProps {
  selectedBeer?: BeerVariant | null;
}

export const B2BAllocationSection: React.FC<B2BAllocationSectionProps> = ({ selectedBeer }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    taxId: '',
    city: 'Santa Cruz de la Sierra',
    phone: '',
    businessType: 'Restaurante',
    volume: '5 a 15 Cajas (Apertura de Carta)',
    notes: selectedBeer ? `Interés prioritario en lote de ${selectedBeer.name}.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [allocationCode, setAllocationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `KLS-${Math.floor(100000 + Math.random() * 900000)}-SCZ`;
    setAllocationCode(code);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Paz y Bien. Quisiera solicitar asignación de lote Kloster para mi establecimiento:
- Negocio: ${formData.businessName || 'Hostelería Selecta'}
- Ciudad: ${formData.city}
- Volumen: ${formData.volume}
- Código Asignación: ${allocationCode || 'Directo Web'}
Aguardo la visita del Sommelier de Cervecería.`
    );
    window.open(`https://wa.me/59176502714?text=${text}`, '_blank');
  };

  return (
    <section id="b2b" className="relative py-28 bg-[#0C0C0C] border-t border-[#D1A85A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
            <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#D1A85A] font-semibold">
              Red Exclusiva de Hospitalidad
            </span>
            <GothicCross className="w-3.5 h-3.5 text-[#D1A85A]" />
          </div>

          <h2 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-[#F7F4EA] font-normal tracking-tight">
            Alianza Directa con Cervecería
          </h2>

          <p className="font-sans text-base text-[#F7F4EA]/75 font-light leading-relaxed">
            <span className="font-gothic text-xl text-[#D1A85A]">kloster</span> se destina exclusivamente a establecimientos con devoción por la experiencia gastronómica. No operamos con distribuidores masivos. Proveemos directamente desde nuestra planta en Santa Cruz con trazabilidad de guarda en frío.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: PILLARS LEFT, FORM RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: THE 3 ALLIANCE PILLARS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-lg bg-[#14100C] border border-[#D1A85A]/20 space-y-6">
              <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#D1A85A] font-semibold block">
                Privilegios para Carta Sommelier
              </span>

              {/* 01. Lotes Asignados */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#0C0C0C] border border-[#D1A85A]/40 flex-shrink-0 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#D1A85A]" />
                </div>
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-[#F7F4EA] uppercase tracking-wider mb-1">
                    Lotes Asignados & Tarifa Escalonada
                  </h3>
                  <p className="font-sans text-xs text-[#F7F4EA]/70 leading-relaxed font-light">
                    Acceso a precios de distribución directa de cervecería según volumen y recurrencia mensual sin intermediarios.
                  </p>
                </div>
              </div>

              {/* 02. Cristalería & Protocolo */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#0C0C0C] border border-[#D1A85A]/40 flex-shrink-0 flex items-center justify-center">
                  <Wine className="w-5 h-5 text-[#D1A85A]" />
                </div>
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-[#F7F4EA] uppercase tracking-wider mb-1">
                    Dotación de Cristalería & Carta Sommelier
                  </h3>
                  <p className="font-sans text-xs text-[#F7F4EA]/70 leading-relaxed font-light">
                    Provisión oficial de cálices de pie alto Kloster y capacitación en sala sobre el ritual de servicio a 45 grados.
                  </p>
                </div>
              </div>

              {/* 03. Cadena de Frío */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#0C0C0C] border border-[#D1A85A]/40 flex-shrink-0 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#D1A85A]" />
                </div>
                <div>
                  <h3 className="font-cinzel text-sm font-bold text-[#F7F4EA] uppercase tracking-wider mb-1">
                    Despacho Refrigerado a Nivel Nacional
                  </h3>
                  <p className="font-sans text-xs text-[#F7F4EA]/70 leading-relaxed font-light">
                    Envíos refrigerados directos a Santa Cruz, La Paz, Cochabamba, Sucre, Tarija y principales capitales de Bolivia.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Sommelier Hotline Card */}
            <div className="p-6 rounded-lg bg-gradient-to-r from-[#17130F] to-[#201811] border border-[#D1A85A]/30 flex items-center justify-between">
              <div>
                <span className="font-cinzel text-[10px] uppercase tracking-wider text-[#D1A85A] block">
                  Canal Sommelier B2B Directo
                </span>
                <span className="font-sans font-bold text-[#F7F4EA] text-sm mt-0.5 block">
                  +591 76502714
                </span>
                <span className="font-sans text-[10px] text-[#F7F4EA]/50 block">
                  Atención Lunes a Sábado · 08:00 a 19:00
                </span>
              </div>
              <button
                onClick={handleWhatsAppRedirect}
                className="px-4 py-2 bg-[#344A2B] hover:bg-[#3d5932] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-wider rounded border border-[#D1A85A] flex items-center gap-1.5 transition-colors shadow-[0_0_15px_rgba(209,168,90,0.25)]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D1A85A]" />
                <span>WhatsApp</span>
              </button>
            </div>

          </div>

          {/* RIGHT: B2B FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-lg bg-[#14100C] border border-[#D1A85A]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="font-cinzel text-[10px] uppercase tracking-[0.24em] text-[#D1A85A] font-semibold block mb-1">
                      Atención Directa B2B
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7F4EA]">
                      Solicitud de Distribuidor Autorizado
                    </h3>
                    <p className="font-sans text-xs text-[#F7F4EA]/60 font-light mt-1">
                      Completa los datos de tu establecimiento para recibir la lista de precios mayorista y el kit de cata para sommelier.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Business Name */}
                    <div>
                      <label className="block font-cinzel text-[11px] uppercase tracking-wider text-[#F7F4EA]/80 mb-2">
                        Razón Social / Local *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Ej. Hotel Boutique & Bistro"
                        className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#D1A85A]/30 rounded text-sm text-[#F7F4EA] placeholder-[#F7F4EA]/30 focus:border-[#D1A85A] focus:outline-none focus:ring-1 focus:ring-[#D1A85A]"
                      />
                    </div>

                    {/* Tax ID / NIT */}
                    <div>
                      <label className="block font-cinzel text-[11px] uppercase tracking-wider text-[#F7F4EA]/80 mb-2">
                        NIT o ID Fiscal *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.taxId}
                        onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                        placeholder="Ej. 1028374029"
                        className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#D1A85A]/30 rounded text-sm text-[#F7F4EA] placeholder-[#F7F4EA]/30 focus:border-[#D1A85A] focus:outline-none focus:ring-1 focus:ring-[#D1A85A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* City */}
                    <div>
                      <label className="block font-cinzel text-[11px] uppercase tracking-wider text-[#F7F4EA]/80 mb-2">
                        Ciudad / Departamento *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#D1A85A]/30 rounded text-sm text-[#F7F4EA] focus:border-[#D1A85A] focus:outline-none"
                      >
                        <option value="Santa Cruz de la Sierra">Santa Cruz de la Sierra</option>
                        <option value="La Paz">La Paz</option>
                        <option value="Cochabamba">Cochabamba</option>
                        <option value="Sucre">Sucre</option>
                        <option value="Tarija">Tarija</option>
                        <option value="Otra Ciudad de Bolivia">Otra Ciudad de Bolivia</option>
                      </select>
                    </div>

                    {/* Phone WhatsApp */}
                    <div>
                      <label className="block font-cinzel text-[11px] uppercase tracking-wider text-[#F7F4EA]/80 mb-2">
                        Teléfono WhatsApp de Gerencia *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+591 7XXXXXXX"
                        className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#D1A85A]/30 rounded text-sm text-[#F7F4EA] placeholder-[#F7F4EA]/30 focus:border-[#D1A85A] focus:outline-none focus:ring-1 focus:ring-[#D1A85A]"
                      />
                    </div>
                  </div>

                  {/* Establishment Type Radio Pills */}
                  <div>
                    <label className="block font-cinzel text-[11px] uppercase tracking-wider text-[#F7F4EA]/80 mb-2">
                      Tipo de Establecimiento
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Restaurante', 'Hotel', 'Bar Selecto', 'Tienda Gourmet'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, businessType: type })}
                          className={`py-2 px-3 text-xs font-cinzel uppercase tracking-wider rounded border transition-all ${
                            formData.businessType === type
                              ? 'bg-[#344A2B] border-[#D1A85A] text-[#F7F4EA] font-bold shadow-[0_0_10px_rgba(209,168,90,0.3)]'
                              : 'bg-[#0C0C0C] border-white/10 text-[#F7F4EA]/60 hover:text-[#F7F4EA]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Volume Selector */}
                  <div>
                    <label className="block font-cinzel text-[11px] uppercase tracking-wider text-[#F7F4EA]/80 mb-2">
                      Volumen Estimado Mensual (Cajas x 24 un.)
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#D1A85A]/30 rounded text-sm text-[#F7F4EA] focus:border-[#D1A85A] focus:outline-none"
                    >
                      <option value="5 a 15 Cajas (Apertura de Carta)">5 a 15 Cajas (Apertura de Carta)</option>
                      <option value="16 a 40 Cajas (Consumo Regular)">16 a 40 Cajas (Consumo Regular)</option>
                      <option value="40+ Cajas (Asignación Preferente)">40+ Cajas (Asignación Preferente)</option>
                      <option value="Eventos Especiales y Chopera">Eventos Especiales y Servicio en Chopera</option>
                    </select>
                  </div>

                  {/* Notes / Special requirements */}
                  <div>
                    <label className="block font-cinzel text-[11px] uppercase tracking-wider text-[#F7F4EA]/80 mb-2">
                      Notas o Requerimientos de Cata
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Indícanos si deseas una cata previa con nuestro maestro cervecero..."
                      className="w-full px-4 py-3 bg-[#0C0C0C] border border-[#D1A85A]/30 rounded text-sm text-[#F7F4EA] placeholder-[#F7F4EA]/30 focus:border-[#D1A85A] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D1A85A] hover:bg-[#c39a4d] text-[#0C0C0C] font-cinzel text-xs uppercase tracking-[0.2em] font-bold rounded transition-all duration-300 shadow-[0_0_25px_rgba(209,168,90,0.35)] hover:shadow-[0_0_35px_rgba(209,168,90,0.55)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Distribución B2B</span>
                  </button>
                </form>
              ) : (
                /* SUBMITTED CONFIRMATION STATE */
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#344A2B] border border-[#D1A85A] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(209,168,90,0.4)]">
                    <CheckCircle2 className="w-8 h-8 text-[#D1A85A]" />
                  </div>

                  <div>
                    <span className="font-cinzel text-[11px] uppercase tracking-[0.24em] text-[#D1A85A] font-bold block mb-1">
                      Solicitud Registrada con Éxito
                    </span>
                    <h3 className="font-gothic text-3xl sm:text-4xl text-[#F7F4EA]">
                      Bienvenido a la Abadía
                    </h3>
                    <p className="font-sans text-sm text-[#F7F4EA]/80 font-light max-w-md mx-auto mt-2 leading-relaxed">
                      Hemos recibido la solicitud para <span className="text-[#D1A85A] font-semibold">{formData.businessName}</span>. Nuestro sommelier oficial se pondrá en contacto dentro de las próximas 24 horas hábiles.
                    </p>
                  </div>

                  {/* Allocation Ticket Box */}
                  <div className="p-4 rounded bg-[#0C0C0C] border border-[#D1A85A]/30 max-w-sm mx-auto text-left space-y-2 text-xs font-sans">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#F7F4EA]/50 font-cinzel uppercase">Código de Lote:</span>
                      <span className="font-mono text-[#D1A85A] font-bold">{allocationCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F7F4EA]/50 font-cinzel uppercase">Ciudad:</span>
                      <span className="text-[#F7F4EA]">{formData.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F7F4EA]/50 font-cinzel uppercase">Volumen:</span>
                      <span className="text-[#F7F4EA]">{formData.volume}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full sm:w-auto px-6 py-3 bg-[#344A2B] hover:bg-[#3d5932] text-[#F2E5CE] font-cinzel text-xs uppercase tracking-wider font-bold border border-[#D1A85A] rounded flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-[#D1A85A]" />
                      <span>Contactar por WhatsApp Ahora</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 text-xs font-cinzel uppercase tracking-wider text-[#F7F4EA]/60 hover:text-[#F7F4EA]"
                    >
                      Nueva Consulta
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building2, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: 'Consultoría y Gestión Ambiental',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 pointer-events-auto flex flex-col justify-center">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82DF26]/15 border border-[#82DF26]/30 text-[#82DF26] text-xs font-mono tracking-widest">
          <span>05 / CIERRE & CONTACTO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Hablemos de su Próximo <span className="text-[#82DF26]">Desafío Técnico</span>.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Estamos listos para desplegar nuestro equipo de ingeniería y brindar asesoría in-situ con los más altos estándares de calidad y seguridad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Offices */}
        <div className="lg:col-span-5 space-y-5">
          {/* Main Contact Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#82DF26]/20 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#82DF26]" />
              Canales Directos
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#82DF26]/10 text-[#82DF26]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Correo Electrónico</div>
                  <div className="text-sm font-semibold text-white">{COMPANY_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-[#82DF26]/10 text-[#82DF26]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Teléfono / WhatsApp</div>
                  <div className="text-sm font-semibold text-white">{COMPANY_INFO.phone}</div>
                </div>
              </a>
            </div>

            <hr className="border-white/10" />

            {/* Offices */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Nuestras Sedes
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#82DF26]">
                  <span>{COMPANY_INFO.headquarters.role}</span>
                  <span className="font-mono text-slate-400">Biobío</span>
                </div>
                <div className="text-xs text-slate-300">{COMPANY_INFO.headquarters.address}</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#F57C00]">
                  <span>{COMPANY_INFO.branch.role}</span>
                  <span className="font-mono text-slate-400">Antofagasta</span>
                </div>
                <div className="text-xs text-slate-300">{COMPANY_INFO.branch.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quote Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#82DF26]/20 border border-[#82DF26] flex items-center justify-center mx-auto text-[#82DF26]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Hemos recibido su solicitud técnica. Un ingeniero especialista de Quinsac se pondrá en contacto dentro de las próximas 24 horas hábiles.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-lg font-bold text-white mb-2">
                  Formulario de Cotización y Consulta
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej. Ing. Carlos Soto"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#82DF26] focus:outline-none focus:ring-1 focus:ring-[#82DF26]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Empresa / Faena *</label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ej. Minera Centinela / ENAP"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#82DF26] focus:outline-none focus:ring-1 focus:ring-[#82DF26]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Correo Corporativo *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@empresa.cl"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#82DF26] focus:outline-none focus:ring-1 focus:ring-[#82DF26]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="+56 9 1234 5678"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#82DF26] focus:outline-none focus:ring-1 focus:ring-[#82DF26]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Área Requerida</label>
                  <select
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#82DF26] focus:outline-none focus:ring-1 focus:ring-[#82DF26]"
                  >
                    <option value="Consultoría y Gestión Ambiental">Consultoría y Gestión Ambiental (DIA/EIA/PAS)</option>
                    <option value="Ingeniería y Gerenciamiento">Ingeniería y Gerenciamiento (Conceptual, Básica, ITO)</option>
                    <option value="Soluciones Aéreas con Drones">Soluciones Aéreas con Drones (LiDAR, Topografía)</option>
                    <option value="Construcción, Montaje y Piping">Construcción, Montaje Mecánico y Piping Industrial</option>
                    <option value="Obras Eléctricas TE1/TC4">Obras Eléctricas e Instrumentación (TE1 / TC4)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Descripción del Requerimiento *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Detalles del proyecto, plazos estimados, alcance y requerimientos técnicos..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#82DF26] focus:outline-none focus:ring-1 focus:ring-[#82DF26]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#82DF26] hover:bg-[#96f238] text-black font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(130,223,38,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitud de Cotización</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

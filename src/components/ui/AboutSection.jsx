import React from 'react';
import { MapPin, Target, Eye, Shield, CheckCircle, Award, Compass } from 'lucide-react';
import { COMPANY_INFO, VALUES_DATA } from '../../data/content';

export function AboutSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 pointer-events-auto flex flex-col justify-center">
      {/* Section Header */}
      <div className="max-w-2xl space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A7E46]/20 border border-[#82DF26]/30 text-[#82DF26] text-xs font-mono tracking-widest">
          <span>02 / IDENTIDAD & TRAYECTORIA</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Más de 15 Años Conectando el{' '}
          <span className="text-[#82DF26]">Sur y Norte</span> de Chile.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Nuestros inicios se forjaron en la industria de la Celulosa y Papel en la Región del Biobío. 
          Hoy, nuestra capacidad técnica se extiende con presencia activa en la gran minería de la Región de Antofagasta.
        </p>
      </div>

      {/* Main Grid: Territory Hubs + Story Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Geographic Axis & Operational Hubs */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-6 rounded-2xl space-y-4 border border-[#82DF26]/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#82DF26]/10 text-[#82DF26]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  Eje Operacional Estratégico
                </h3>
                <span className="text-xs text-slate-400 font-mono">Cobertura y Despliegue In-Situ</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#82DF26]/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-bold text-[#82DF26] font-mono">
                  <span>CASA MATRIZ (SUR)</span>
                  <span>BIOBÍO</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">Los Ángeles, Región del Biobío</div>
                <div className="text-xs text-slate-400 mt-0.5">{COMPANY_INFO.headquarters.address}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F57C00]/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-bold text-[#F57C00] font-mono">
                  <span>SUCURSAL NORTE</span>
                  <span>ANTOFAGASTA</span>
                </div>
                <div className="text-sm font-semibold text-white mt-1">Calama, Región de Antofagasta</div>
                <div className="text-xs text-slate-400 mt-0.5">{COMPANY_INFO.branch.address}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1A7E46]/10 border border-[#82DF26]/20 flex items-start gap-3">
              <Award className="w-5 h-5 text-[#82DF26] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Garantía de Calidad:</strong> Profesionales acreditados bajo normativas SEC, certificación de recipientes a presión y procedimientos de soldadura ASME/AWS.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Mission, Vision, Values + Integrated Policy */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VALUES_DATA.map((val, i) => (
              <div
                key={i}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#82DF26]">
                    {val.title === 'Visión' && <Eye className="w-5 h-5" />}
                    {val.title === 'Misión' && <Target className="w-5 h-5" />}
                    {val.title === 'Valores' && <Shield className="w-5 h-5" />}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-wide">{val.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{val.text}</p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-[#82DF26]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Compromiso Quinsac</span>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Management Policy Card */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 bg-gradient-to-r from-black/40 via-[#121820]/60 to-black/40">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#82DF26] uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4" />
              <span>Política Integrada de Gestión (Seguridad, Calidad & Medio Ambiente)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              En <strong>Servicios de Ingeniería y Consultoría Quinsac Limitada</strong>, asumimos el compromiso inquebrantable de operar bajo cero daño en seguridad y salud ocupacional, rigor técnico en el aseguramiento de calidad (QA/QC), estricta protección medioambiental y cumplimiento de los requerimientos normativos vigentes (SEC, SMA, SERNAGEOMIN).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

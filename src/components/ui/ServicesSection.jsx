import React, { useState } from 'react';
import { Leaf, Compass, Navigation, Cpu, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../../data/content';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Navigation': return <Navigation className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const currentService = SERVICES_DATA[activeTab];

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 pointer-events-auto flex flex-col justify-center">
      {/* Section Tag */}
      <div className="max-w-2xl space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82DF26]/15 border border-[#82DF26]/30 text-[#82DF26] text-xs font-mono tracking-widest">
          <span>03 / EL GRAN MORPHING INDUSTRIAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Nuestras Áreas de <span className="text-[#82DF26]">Especialización</span>.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Ingeniería de clase mundial articulada a través de cuatro dimensiones de ejecución técnica de alto impacto.
        </p>
      </div>

      {/* 4 Phase Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {SERVICES_DATA.map((srv, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={srv.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#121820] border-[#82DF26] shadow-[0_0_25px_rgba(130,223,38,0.2)]'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-[#82DF26] text-black' : 'bg-white/10 text-slate-400'
                }`}>
                  {srv.phase}
                </span>
                <div className={isSelected ? 'text-[#82DF26]' : 'text-slate-400'}>
                  {getIcon(srv.icon)}
                </div>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide line-clamp-2">
                {srv.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase Card (Glassmorphic) */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#82DF26]/20 relative overflow-hidden">
        {/* Background Accent Glow */}
        <div
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
          style={{ backgroundColor: currentService.color }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Service Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#82DF26] uppercase tracking-widest px-3 py-1 rounded-full bg-[#82DF26]/10 border border-[#82DF26]/30">
                {currentService.phase}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Especialidad Técnica Certificada
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              {currentService.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentService.shortDesc}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Ámbitos de Competencia & Entregables:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentService.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#82DF26] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Morphing Visual Indicator & Context */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3">
                <span>ESTADO 3D INTERACTIVO</span>
                <span className="text-[#82DF26] font-bold">PROCEDURAL GPU</span>
              </div>

              <p className="text-xs text-slate-300 italic">
                "{currentService.threeDVisual}"
              </p>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Sincronización: GSAP ScrollTrigger</span>
                <span className="text-white font-semibold">60 FPS Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

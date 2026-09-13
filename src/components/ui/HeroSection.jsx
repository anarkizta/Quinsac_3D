import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export function HeroSection({ onExplore, onContact }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 pointer-events-auto">
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#82DF26]/10 border border-[#82DF26]/30 text-[#82DF26] text-xs font-mono tracking-wide backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
          <span>INNOVACIÓN Y RIGOR TÉCNICO</span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-[#82DF26]" />
          <span>15+ Años de Liderazgo Industrial</span>
        </div>
      </div>

      {/* Main Hero Typography & Callout */}
      <div className="my-auto max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
          El talento es nuestro{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82DF26] via-[#8CC63F] to-[#1A7E46]">
            Patrimonio.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
          {COMPANY_INFO.subSlogan}
        </p>

        {/* Technical Highlights Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {['Minería', 'Celulosa & Energía', 'Metalurgia', 'Drones & Topografía', 'Normativa SEC'].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded bg-[#121820]/80 border border-white/10 text-xs text-slate-300 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={onContact}
            className="px-7 py-3.5 rounded-lg bg-[#82DF26] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#96f238] shadow-[0_0_30px_rgba(130,223,38,0.35)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>Iniciar Consulta Técnica</span>
            <Zap className="w-4 h-4 fill-black" />
          </button>

          <button
            onClick={onExplore}
            className="px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/15 backdrop-blur-sm transition-all"
          >
            Ver Especialidades
          </button>
        </div>
      </div>

      {/* Bottom KPI Counters & Scroll Indicator */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10">
        {COMPANY_INFO.stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#82DF26] font-mono">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mt-1">
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Scroll Down Cue */}
      <div className="flex justify-center pt-8">
        <button
          onClick={onExplore}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#82DF26] transition-colors group text-xs font-mono uppercase tracking-widest"
        >
          <span>Desplaza para explorar la experiencia 3D</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#82DF26]" />
        </button>
      </div>
    </section>
  );
}

import React from 'react';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../data/content';

export function Footer({ onScrollTop }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070a0e] py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1A7E46]/20 border border-[#82DF26]/40 p-1 flex items-center justify-center">
            <img
              src="/assets/img/LOGO_QUINSAC sinFondo.png"
              alt="Logo Quinsac"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-white font-bold tracking-wider">{COMPANY_INFO.legalName}</div>
            <div className="text-[11px] text-slate-500">
              RUT Empresa de Servicios Integrales en Minería, Energía y Celulosa
            </div>
          </div>
        </div>

        {/* Center Compliance notice */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-[#82DF26]" />
          <span>Normativa SEC Vigente • Procedimientos TE1 & TC4 Certificados</span>
        </div>

        {/* Right Scroll Top & Year */}
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Quinsac Ltda. Todos los derechos reservados.</span>
          <button
            onClick={onScrollTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

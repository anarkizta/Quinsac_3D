import React from 'react';
import { X, MapPin, Calendar, Building, CheckCircle2, ShieldCheck } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-[#121820] border border-[#82DF26]/40 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121820] via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#82DF26] text-black">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <Building className="w-4 h-4 text-[#82DF26]" />
              <span>Cliente: {project.client}</span>
              <span>•</span>
              <MapPin className="w-4 h-4 text-[#F57C00]" />
              <span>{project.location}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#82DF26]" />
              Resultados y Entregables Clave
            </div>
            <ul className="space-y-2">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#82DF26] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Cerrar Ficha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

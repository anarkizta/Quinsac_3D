import React, { useState } from 'react';
import { ExternalLink, MapPin, Calendar, Building, ChevronRight, CheckCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/content';

export function ProjectsSection({ onSelectProject }) {
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Minería', 'Certificación y Combustibles', 'Procesos Industriales', 'Celulosa & Energía'];

  const filteredProjects = filter === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 pointer-events-auto flex flex-col justify-center">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F57C00]/15 border border-[#F57C00]/30 text-[#F57C00] text-xs font-mono tracking-widest">
            <span>04 / EXPERIENCIAS DE ÉXITO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Casos y Proyectos <span className="text-[#82DF26]">Relevantes</span>.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Soluciones de ingeniería implementadas en faenas críticas con altos estándares de seguridad y continuidad operacional.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                filter === cat
                  ? 'bg-[#82DF26] text-black font-semibold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects 3D Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Image Container with Tag */}
              <div className="relative h-48 overflow-hidden bg-black/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#82DF26] text-black shadow-md">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-[#82DF26]" />
                    {project.client}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#82DF26] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#F57C00] shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-semibold text-[#82DF26]">
              <span>Ver Ficha Técnica</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

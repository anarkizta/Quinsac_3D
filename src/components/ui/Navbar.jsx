import React, { useState, useEffect } from 'react';
import { Shield, Compass, PhoneCall, ChevronRight, Menu, X, Layers } from 'lucide-react';

export function Navbar({ currentSection = 'hero', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'nosotros', label: 'Quiénes Somos' },
    { id: 'servicios', label: 'Especialidades' },
    { id: 'proyectos', label: 'Casos de Éxito' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f14]/85 backdrop-blur-md border-b border-[#82DF26]/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1A7E46] to-[#0d3f22] border border-[#82DF26]/40 p-1.5 shadow-lg group-hover:border-[#82DF26] transition-all">
            <img
              src="/assets/img/LOGO_QUINSAC sinFondo.png"
              alt="Logo Quinsac"
              className="w-full h-full object-contain filter drop-shadow"
            />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
              QUINSAC
              <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold bg-[#82DF26]/15 text-[#82DF26] border border-[#82DF26]/30">
                LTDA
              </span>
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-medium">
              Ingeniería & Soluciones
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121820]/70 p-1.5 rounded-full border border-white/10 backdrop-blur-lg">
          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#82DF26] text-black font-semibold shadow-[0_0_15px_rgba(130,223,38,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Tech Indicator */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 px-3 py-1 rounded bg-[#161f28]/60 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#82DF26] animate-pulse"></span>
            <span>SEC • TE1 / TC4</span>
          </div>

          <button
            onClick={() => onNavigate('contacto')}
            className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg bg-gradient-to-r from-[#1A7E46] to-[#155D33] hover:from-[#1f9754] hover:to-[#1A7E46] text-white border border-[#82DF26]/40 hover:border-[#82DF26] shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Cotizar Proyecto</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#82DF26]" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#0b0f14]/95 border-b border-white/10 backdrop-blur-2xl space-y-2 mt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide flex items-center justify-between ${
                currentSection === link.id
                  ? 'bg-[#82DF26] text-black font-semibold'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('contacto');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-lg bg-[#1A7E46] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#82DF26]" />
              <span>Contactar Ahora</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

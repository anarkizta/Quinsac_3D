import React from 'react';
import { Eye, EyeOff, FastForward, Activity } from 'lucide-react';

export function AccessibilityControls({
  wireframeMode,
  setWireframeMode,
  motionReduced,
  setMotionReduced
}) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Wireframe toggle */}
      <button
        onClick={() => setWireframeMode(!wireframeMode)}
        title={wireframeMode ? 'Desactivar Modo Malla/Wireframe' : 'Activar Modo Malla/Wireframe'}
        className={`p-3 rounded-full border backdrop-blur-md transition-all shadow-lg flex items-center gap-2 text-xs font-mono ${
          wireframeMode
            ? 'bg-[#82DF26] text-black border-[#82DF26] shadow-[0_0_20px_rgba(130,223,38,0.4)]'
            : 'bg-[#121820]/80 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
        }`}
      >
        <Activity className="w-4 h-4" />
        <span className="hidden sm:inline">Wireframe 3D</span>
      </button>

      {/* Reduced Motion / Skip 3D toggle */}
      <button
        onClick={() => setMotionReduced(!motionReduced)}
        title={motionReduced ? 'Animaciones 3D Pausadas' : 'Pausar Animaciones 3D'}
        className={`p-3 rounded-full border backdrop-blur-md transition-all shadow-lg flex items-center gap-2 text-xs font-mono ${
          motionReduced
            ? 'bg-amber-500 text-black border-amber-500'
            : 'bg-[#121820]/80 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
        }`}
      >
        {motionReduced ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        <span className="hidden sm:inline">
          {motionReduced ? '3D Estático' : '3D Dinámico'}
        </span>
      </button>
    </div>
  );
}

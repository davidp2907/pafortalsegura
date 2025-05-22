import React, { useEffect } from 'react';
import { setupFadeInAnimation } from '../utils/animation';
import { WHATSAPP_LINK } from '../utils/constants';

export const Hero: React.FC = () => {
  useEffect(() => {
    const cleanup = setupFadeInAnimation();
    return cleanup;
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            Seu Certificado Digital 100% Online
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 fade-in" style={{ transitionDelay: '100ms' }}>
            Rápido, válido em todo o Brasil e sem burocracia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in" style={{ transitionDelay: '200ms' }}>
            <a 
              href={WHATSAPP_LINK}
              className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Quero Emitir Agora
            </a>
            <a href="#como-funciona" className="btn btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              Como Funciona
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mt-16 md:mt-24 max-w-4xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 fade-in" style={{ transitionDelay: '300ms' }}>
          <p className="text-center text-white font-medium">
            🔒 <span className="font-semibold">100% seguro</span> e reconhecido pela ICP-Brasil • Emissão expressa em até 1h • Assistência personalizada
          </p>
        </div>
      </div>
    </section>
  );
};
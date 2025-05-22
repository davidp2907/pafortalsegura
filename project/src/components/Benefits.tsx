import React, { useEffect } from 'react';
import { Clock, MessageSquare, Building2 } from 'lucide-react';
import { setupFadeInAnimation } from '../utils/animation';

const benefitsData = [
  {
    icon: <Clock size={48} className="text-blue-600" />,
    title: "Emissão em até 1 hora!",
    description: "Receba seu certificado digital em até 1 hora, sem filas e sem espera."
  },
  {
    icon: <MessageSquare size={48} className="text-blue-600" />,
    title: "Atendimento via WhatsApp",
    description: "Tire suas dúvidas e finalize a compra diretamente pelo WhatsApp, de forma simples e rápida."
  },
  {
    icon: <Building2 size={48} className="text-blue-600" />,
    title: "Para MEIs, Autônomos, Empresas e muito mais!",
    description: "Soluções para todos os perfis, desde e-CPF para pessoas físicas até e-CNPJ para empresas."
  }
];

export const Benefits: React.FC = () => {
  useEffect(() => {
    const cleanup = setupFadeInAnimation();
    return cleanup;
  }, []);

  return (
    <section id="beneficios" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title fade-in">Vantagens do Nosso Certificado Digital</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React, { useEffect } from 'react';
import { UserRound, MessageCircle, CreditCard } from 'lucide-react';
import { setupFadeInAnimation } from '../utils/animation';
import { WHATSAPP_LINK } from '../utils/constants';

const stepsData = [
  {
    icon: <UserRound size={36} className="text-white" />,
    title: "Escolha o Tipo",
    description: "Selecione o tipo de certificado ideal para você: Pessoa Física (e-CPF) ou Pessoa Jurídica (e-CNPJ)."
  },
  {
    icon: <MessageCircle size={36} className="text-white" />,
    title: "Fale Conosco",
    description: "Entre em contato via WhatsApp para tirar suas dúvidas e receber orientações personalizadas."
  },
  {
    icon: <CreditCard size={36} className="text-white" />,
    title: "Receba Seu Certificado",
    description: "Faça o pagamento e receba seu certificado digital em até 24 horas, pronto para usar."
  }
];

export const HowItWorks: React.FC = () => {
  useEffect(() => {
    const cleanup = setupFadeInAnimation();
    return cleanup;
  }, []);

  return (
    <section id="como-funciona" className="section bg-white">
      <div className="container">
        <h2 className="section-title fade-in">Como Funciona</h2>
        
        <div className="relative">
          {/* Connection Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-24 left-1/2 h-0.5 bg-blue-200 w-3/4 -translate-x-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 relative z-10">
            {stepsData.map((step, index) => (
              <div 
                key={index} 
                className="text-center fade-in"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center fade-in" style={{ transitionDelay: '450ms' }}>
          <a 
            href={WHATSAPP_LINK}
            className="btn btn-primary text-lg px-8 py-3"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};
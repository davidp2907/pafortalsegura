import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { setupFadeInAnimation } from '../utils/animation';

const faqData = [
  {
    question: "O que é um certificado digital?",
    answer: "O certificado digital é uma identidade eletrônica que garante autenticidade e integridade nas transações eletrônicas. Funciona como uma assinatura digital com validade jurídica, permitindo assinar documentos, acessar portais governamentais e realizar transações com segurança."
  },
  {
    question: "Este certificado é válido em todo o Brasil?",
    answer: "Sim, nossos certificados digitais são homologados pela ICP-Brasil (Infraestrutura de Chaves Públicas Brasileira) e possuem validade jurídica em todo o território nacional, sendo aceitos em todos os órgãos federais, estaduais e municipais."
  },
  {
    question: "Quanto tempo leva para receber meu certificado?",
    answer: "Nosso processo é ágil e você receberá seu certificado em até 24 horas após a confirmação do pagamento e validação dos seus documentos. Em alguns casos, conseguimos emitir em poucas horas."
  },
  {
    question: "Preciso sair de casa para adquirir o certificado?",
    answer: "Não! Todo o processo é realizado 100% online, sem necessidade de deslocamento. A verificação de identidade é feita por videochamada, e você recebe seu certificado digital diretamente em seu email."
  },
  {
    question: "Quais tipos de certificado digital vocês oferecem?",
    answer: "Oferecemos e-CPF para pessoas físicas, e-CNPJ para empresas, além de certificados específicos para notas fiscais, MEIs e certificados para uso em nuvem. Consulte-nos para identificar a melhor opção para sua necessidade."
  },
  {
    question: "Como instalar e utilizar meu certificado digital?",
    answer: "Após a emissão, você receberá instruções detalhadas para instalação e uso do seu certificado. Além disso, oferecemos suporte técnico gratuito para ajudar em qualquer dificuldade durante o processo de instalação."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const cleanup = setupFadeInAnimation();
    return cleanup;
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container max-w-4xl">
        <h2 className="section-title fade-in">Perguntas Frequentes</h2>
        
        <div className="mt-12 space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden fade-in"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-blue-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-blue-600" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
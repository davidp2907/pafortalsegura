import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/SEGURA.png" 
                alt="Segura Certificação Digital" 
                className="h-12"
              />
            </div>
            <p className="text-blue-200 mb-6">
              Certificados digitais com agilidade, segurança e atendimento personalizado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/SeguraCertificacaoDigital/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-blue-200 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/SeguraCertificacaoDigital/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-blue-200 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-blue-200 hover:text-white transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#como-funciona" className="text-blue-200 hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-blue-200 hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-200 hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-green-500" />
                <a href={WHATSAPP_LINK} className="text-blue-200 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contato@seguracertificacao.com.br" className="text-blue-200 hover:text-white transition-colors">
                  organizerporto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-blue-800">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="text-blue-300 text-sm">
              © All rights reserved. Segura Certificação Digital - PA Fortaleza
            </p>
            <div className="flex items-center gap-6">
              <img 
                src="/icp.png" 
                alt="ICP Brasil" 
                className="h-12"
              />
              <img 
                src="/itiicon.png" 
                alt="ITI" 
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { setupFadeInAnimation } from '../utils/animation';

const testimonialsData = [
  {
    quote: "Resolvi meu certificado em 40 minutos, atendimento top!",
    author: "Maria Silva",
    role: "Empresária",
    stars: 5
  },
  {
    quote: "Muito mais fácil que outros sites, cliquei e ja falei com o pessoal direto no whatsapp",
    author: "João Santos",
    role: "Contador",
    stars: 5
  },
  {
    quote: "Rápido, eficiente e sem complicação!",
    author: "Ana Oliveira",
    role: "Microempreendedora",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  useEffect(() => {
    const cleanup = setupFadeInAnimation();
    return cleanup;
  }, []);

  return (
    <section id="depoimentos" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title fade-in">O Que Nossos Clientes Dizem</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Quote size={16} className="text-blue-600" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              <div>
                <p className="font-semibold text-blue-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
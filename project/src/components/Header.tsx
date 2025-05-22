import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/SEGURA.png"
            alt="Segura Certificação Digital"
            className="h-8 md:h-10"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6 text-white">
              <li><a href="#beneficios" className=" hover:text-green-900 font-medium">Benefícios</a></li>
              <li><a href="#como-funciona" className=" hover:text-green-900 font-medium">Como Funciona</a></li>
              <li><a href="#depoimentos" className=" hover:text-green-900 font-medium">Depoimentos</a></li>
              <li><a href="#faq" className=" hover:text-green-900 font-medium">FAQ</a></li>
            </ul>
          </nav>
          <a href={WHATSAPP_LINK} className="btn btn-primary">
            Fale Conosco
          </a>
        </div>

        <button
          className="md:hidden text-blue-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <nav className="container">
            <ul className="space-y-4 text-white">
              <li>
                <a
                  href="#beneficios"
                  className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  className="block py-2 text-green-500 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
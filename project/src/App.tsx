import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
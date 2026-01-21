import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Specs } from './components/Specs';
import { TrustBadges } from './components/TrustBadges';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Specs />
        <Testimonials />
        <TrustBadges />
        <CustomerReviews />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
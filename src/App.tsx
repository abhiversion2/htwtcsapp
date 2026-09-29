import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { Pricing } from './pages/Pricing';
import { HowItWorks } from './pages/HowItWorks';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Reviews } from './pages/Reviews';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { Areas } from './pages/Areas';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
        {/* Sticky Header */}
        <Header />

        {/* Dynamic Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Rich Footer */}
        <Footer />

        {/* Floating WhatsApp Action for Desktop */}
        <div className="hidden lg:block">
          <WhatsAppButton variant="floating" />
        </div>

        {/* Sticky Mobile Action Bar */}
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SEO meta (Vite uses index.html, but keeping semantic structure here) */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">Anzar Riyaz</a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-teal-700">About</a>
            <a href="#services" className="hover:text-teal-700">Services</a>
            <a href="#portfolio" className="hover:text-teal-700">Portfolio</a>
            <a href="#testimonials" className="hover:text-teal-700">Testimonials</a>
            <a href="#contact" className="hover:text-teal-700">Contact</a>
          </nav>
          <a
            href="https://wa.me/919000000000?text=Hi%20Anzar%2C%20I%27d%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 md:inline-flex"
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[92vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
            Anzar Riyaz • Freelance Web Designer & Developer
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-tight">
            Freelance Web Designer in Trivandrum
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            I craft fast, SEO-friendly WordPress and custom websites that convert visitors into
            customers. Serving businesses across Kerala and beyond.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919000000000?text=Hi%20Anzar%2C%20I%27d%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 ring-1 ring-slate-200 shadow-sm transition hover:shadow hover:ring-slate-300"
            >
              View Portfolio
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Primary keywords: Web Design Company in Trivandrum • Website Designers in Trivandrum • Website Design Trivandrum
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

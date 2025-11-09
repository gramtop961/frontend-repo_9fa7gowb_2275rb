import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'WordPress',
  'Custom Themes',
  'eCommerce (WooCommerce)',
  'UI Design',
  'Performance & SEO',
];

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-slate-600">
              I’m Anzar Riyaz, a freelance web designer and developer based in Trivandrum, Kerala.
              For over a decade, I’ve helped startups and local businesses launch beautiful, fast,
              and conversion-focused websites. I specialize in WordPress and custom builds tailored to
              your brand and growth goals.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {skills.map((s) => (
                <li key={s} className="flex items-center gap-2 text-slate-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1280&auto=format&fit=crop"
                alt="Anzar Riyaz portrait"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Kerala Organic Store',
    desc: 'WooCommerce store with custom design, filters, and fast checkout.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1280&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Trivandrum Clinic',
    desc: 'WordPress site for a healthcare brand with booking integration.',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1280&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Fintech Landing',
    desc: 'Custom React landing page with animation and lead forms.',
    image:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1280&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Resort Website',
    desc: 'High‑impact visuals, booking widget, and SEO‑ready content.',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1280&auto=format&fit=crop',
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-3 text-slate-600">A selection of recent work and experiments.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group block overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm hover:shadow-lg"
            >
              <div className="aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-slate-600">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

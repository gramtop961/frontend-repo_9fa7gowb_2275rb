import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha K.',
    role: 'Founder, Organic Market',
    quote:
      'Anzar delivered a beautiful store that loads fast and converts. Communication was flawless throughout.',
  },
  {
    name: 'Dr. Vivek',
    role: 'Director, Trivandrum Clinic',
    quote:
      'He understood our needs and created a website that patients love using. Highly recommended.',
  },
  {
    name: 'Rahul S.',
    role: 'Product Lead',
    quote:
      'Clean code, strong UX, and on-time delivery. Our leads increased within weeks of launch.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Testimonials</h2>
          <p className="mt-3 text-slate-600">Words from happy clients.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-1 text-teal-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-slate-900">
                {t.name}
                <span className="ml-2 font-normal text-slate-500">• {t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

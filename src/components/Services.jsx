import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, ShoppingCart, Search, Wrench } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Web Design',
    desc: 'Clean, modern UI tailored to your brand with a focus on usability and conversions.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Custom WordPress and hand-coded builds with best practices and performance.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Websites',
    desc: 'Sell online with WooCommerce or custom carts, optimized for speed and trust.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'On-page SEO, schema, and performance tweaks to boost rankings in Kerala and beyond.',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Updates, backups, security, and care plans to keep your site healthy.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Services</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to launch a fast, beautiful, and goal‑driven website.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

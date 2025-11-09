import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build something great</h2>
            <p className="mt-3 text-slate-600">
              Send a quick message about your project. I’ll respond within 24 hours.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:hello@anzarriyaz.com"
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800"
              >
                <Mail size={18} /> hello@anzarriyaz.com
              </a>
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800"
              >
                <Phone size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="4"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-teal-500 focus:ring"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

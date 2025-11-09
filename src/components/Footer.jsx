import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm">© {new Date().getFullYear()} Anzar Riyaz. All rights reserved.</p>
            <p className="text-sm text-slate-400">Trivandrum, Kerala</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="rounded-lg p-2 hover:bg-slate-800">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-lg p-2 hover:bg-slate-800">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-lg p-2 hover:bg-slate-800">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

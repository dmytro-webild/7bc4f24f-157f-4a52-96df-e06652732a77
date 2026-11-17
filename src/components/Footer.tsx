import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#E6007E] text-white font-extrabold text-xs px-2 py-1 rounded tracking-widest uppercase">
                
              </span>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Radsport Derjung
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Fahrradladen & Meisterwerkstatt in Bergen im Chiemgau. Euer Experte für Rennräder, Gravel, Mountainbikes und E-Bikes seit 1986.
            </p>
          </div>

          {/* Menü */}
          <div>
            <h4 className="font-bold text-[#E6007E] text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li><Link to="/" className="hover:text-[#E6007E] transition-colors">Home</Link></li>
              <li><Link to="/wir" className="hover:text-[#E6007E] transition-colors">Wir</Link></li>
              <li><Link to="/bikes" className="hover:text-[#E6007E] transition-colors">Bikes</Link></li>
              <li><Link to="/werkstatt" className="hover:text-[#E6007E] transition-colors">Werkstatt</Link></li>
              <li><Link to="/leasing" className="hover:text-[#E6007E] transition-colors">Leasing</Link></li>
              <li><Link to="/shop" className="hover:text-[#E6007E] transition-colors">Shop</Link></li>
              <li><Link to="/kontakt" className="hover:text-[#E6007E] transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Impressionen */}
          <div>
            <h4 className="font-bold text-[#E6007E] text-sm uppercase tracking-wider mb-4">Galerien</h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li><Link to="/team" className="hover:text-[#E6007E] transition-colors">Team Impressionen</Link></li>
              <li><Link to="/store" className="hover:text-[#E6007E] transition-colors">Store Impressionen</Link></li>
              <li><Link to="/bikestation" className="hover:text-[#E6007E] transition-colors">Bikestation Impressionen</Link></li>
            </ul>
          </div>

          {/* Kontakt Info */}
          <div>
            <h4 className="font-bold text-[#E6007E] text-sm uppercase tracking-wider mb-4">Kontakt & Adresse</h4>
            <address className="not-italic text-sm text-zinc-300 space-y-2">
              <p className="font-medium text-white">Radsport Derjung ()</p>
              <p>Staudacherstraße 47</p>
              <p>83346 Bergen im Chiemgau</p>
              <p className="pt-2">Tel: <a href="tel:086626654476" className="hover:text-[#E6007E] transition-colors">08662 6654476</a></p>
              <p>E-Mail: <a href="mailto:service@radsport-derjung.de" className="hover:text-[#E6007E] transition-colors">service@radsport-derjung.de</a></p>
            </address>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            Staudacherstraße 47, 83346 Bergen · 08662 6654476 · service@radsport-derjung.de
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/legal" className="hover:text-[#E6007E] transition-colors">
              Impressum
            </Link>
            <span>·</span>
            <Link to="/legal" className="hover:text-[#E6007E] transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

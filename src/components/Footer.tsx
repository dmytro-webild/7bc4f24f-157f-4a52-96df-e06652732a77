import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1324] text-white pt-16 pb-12 border-t-4 border-[#0056c6] bg-topo">
      <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="bg-[#0f1d38] text-white px-3 py-1.5 rounded border border-[#0056c6] font-extrabold italic tracking-tighter text-2xl font-race inline-flex items-center shadow-md">
              <span>RADSPORT</span>
              <span className="text-[#0056c6] ml-1.5">DERJUNG</span>
              <span className="ml-2 bg-[#facc15] text-[#0a1324] text-xs px-1.5 py-0.5 rounded font-black tracking-normal not-italic">
                D74
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Seit 1986 euer Fahrradladen mit Meisterwerkstatt in Bergen im Chiemgau. Wir leben Radsport – von High-End Rennrädern über E-MTB bis zur perfekten Wartung.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="bg-slate-800 text-[#facc15] text-xs font-mono font-bold px-2.5 py-1 rounded border border-slate-700">
                MEISTERBETRIEB D74
              </span>
              <span className="bg-slate-800 text-slate-300 text-xs font-mono px-2.5 py-1 rounded border border-slate-700">
                EST. 1986
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-race italic text-xl font-bold uppercase tracking-wide text-white mb-4 border-b border-slate-800 pb-2">
              Bikes & Shop
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-sans">
              <li>
                <Link to="/bikes/rennrad" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Rennräder & Aero-Boliden
                </Link>
              </li>
              <li>
                <Link to="/bikes/gravel" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Gravelbikes Chiemgau Edition
                </Link>
              </li>
              <li>
                <Link to="/bikes/e-mtb" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> E-MTBs mit Bosch & Shimano
                </Link>
              </li>
              <li>
                <Link to="/bikes/premium" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Premium Custom Bausätze
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Ersatzteile & Helme Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Leasing */}
          <div>
            <h4 className="font-race italic text-xl font-bold uppercase tracking-wide text-white mb-4 border-b border-slate-800 pb-2">
              Leistungen
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-sans">
              <li>
                <Link to="/werkstatt" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Meisterwerkstatt & Inspektion
                </Link>
              </li>
              <li>
                <Link to="/leasing" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Dienstrad Leasing (JobRad etc.)
                </Link>
              </li>
              <li>
                <Link to="/wir" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Über uns & Zeitleiste
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Team Impressionen
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:text-[#facc15] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#0056c6]" /> Store & Bikestation Bergen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-race italic text-xl font-bold uppercase tracking-wide text-white mb-4 border-b border-slate-800 pb-2">
              Kontakt & Zeiten
            </h4>
            <div className="text-sm space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#facc15] shrink-0 mt-1" />
                <span>Bahnhofstraße 12, 83346 Bergen im Chiemgau</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#facc15] shrink-0" />
                <a href="tel:+49866212345" className="hover:text-white transition-colors">08662 / 12345</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#facc15] shrink-0" />
                <a href="mailto:info@radsport-derjung.de" className="hover:text-white transition-colors">info@radsport-derjung.de</a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#0056c6] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">Öffnungszeiten:</div>
                  <div className="text-xs text-slate-400">Di - Fr: 08:30 - 12:30 & 14:00 - 18:00</div>
                  <div className="text-xs text-slate-400">Sa: 09:00 - 13:00 | Mo: Ruhetag</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Radsport Derjung (D74). Alle Rechte vorbehalten. Bergen im Chiemgau.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-[#facc15] transition-colors">
              Impressum & Datenschutz
            </Link>
            <Link to="/kontakt" className="hover:text-[#facc15] transition-colors">
              Anfahrt & Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

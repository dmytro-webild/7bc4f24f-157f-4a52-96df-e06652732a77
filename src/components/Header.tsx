import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MapPin, Wrench } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bikesDropdownOpen, setBikesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const bikeCategories = [
    { name: 'Übersicht', path: '/bikes', desc: 'Alle Modellreihen' },
    { name: 'Premium Bikes', path: '/bikes/premium', desc: 'Custom High-End Bausätze' },
    { name: 'Rennrad', path: '/bikes/rennrad', desc: 'Aero & Endurance Boliden' },
    { name: 'Gravel', path: '/bikes/gravel', desc: 'Abenteuer für Straße & Trail' },
    { name: 'Mountainbikes', path: '/bikes/mtb', desc: 'Fully & Hardtail für Alpen' },
    { name: 'E-MTB', path: '/bikes/e-mtb', desc: 'Bosch & Shimano Power' },
  ];

  const galleryPages = [
    { name: 'Team Impressionen', path: '/team', desc: 'Meisterwerkstatt & Crew' },
    { name: 'Store Impressionen', path: '/store', desc: 'Showroom in Bergen' },
    { name: 'Bikestation Impressionen', path: '/bikestation', desc: 'Chiemgau Test-Center' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Status Bar */}
      <div className="bg-[#0a1324] text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-[100rem] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Geöffnet: Di-Fr 08:30-18:00 | Sa 09:00-13:00
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#facc15]" />
              Bergen im Chiemgau (D74) · Am Fuße des Hochfelln
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="tel:+49866212345" className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-[#facc15]" />
              08662 / 12345
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline font-bold text-[#facc15]">Seit 1986 Euer Radsport-Experte</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[100rem] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-[#0a1324] text-white px-2.5 py-1 rounded border-2 border-[#0056c6] font-extrabold italic tracking-tighter text-xl font-race flex items-center shadow-md">
            <span className="text-white">RADSPORT</span>
            <span className="text-[#0056c6] ml-1">DERJUNG</span>
            <span className="ml-2 bg-[#facc15] text-[#0a1324] text-xs px-1.5 py-0.5 rounded font-black tracking-normal not-italic">
              D74
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-race italic text-lg uppercase tracking-wide">
          <Link
            to="/"
            className={`transition-colors py-1 ${
              isActive('/') ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]' : 'text-slate-800 hover:text-[#0056c6]'
            }`}
          >
            Home
          </Link>

          <Link
            to="/wir"
            className={`transition-colors py-1 ${
              isActive('/wir') ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]' : 'text-slate-800 hover:text-[#0056c6]'
            }`}
          >
            Wir
          </Link>

          {/* Bikes Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBikesDropdownOpen(true)}
            onMouseLeave={() => setBikesDropdownOpen(false)}
          >
            <Link
              to="/bikes"
              className={`flex items-center gap-1 transition-colors py-1 ${
                isActive('/bikes') ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]' : 'text-slate-800 hover:text-[#0056c6]'
              }`}
            >
              Bikes
              <ChevronDown className={`w-4 h-4 transition-transform ${bikesDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {bikesDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-md shadow-xl py-2 z-50 not-italic font-sans text-sm">
                <div className="px-3 py-1 text-xs font-race italic font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Fahrrad-Kategorien
                </div>
                {bikeCategories.map((cat) => (
                  <Link
                    key={cat.path}
                    to={cat.path}
                    className="block px-4 py-2 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-race italic font-bold text-slate-900 text-base">{cat.name}</div>
                    <div className="text-xs text-slate-500">{cat.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/werkstatt"
            className={`transition-colors py-1 flex items-center gap-1.5 ${
              isActive('/werkstatt') ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]' : 'text-slate-800 hover:text-[#0056c6]'
            }`}
          >
            Werkstatt
          </Link>

          <Link
            to="/leasing"
            className={`transition-colors py-1 ${
              isActive('/leasing') ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]' : 'text-slate-800 hover:text-[#0056c6]'
            }`}
          >
            Leasing
          </Link>

          <Link
            to="/shop"
            className={`transition-colors py-1 ${
              isActive('/shop') ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]' : 'text-slate-800 hover:text-[#0056c6]'
            }`}
          >
            Shop
          </Link>

          {/* Gallery Subpages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setGalleryDropdownOpen(true)}
            onMouseLeave={() => setGalleryDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-1 ${
                location.pathname === '/team' || location.pathname === '/store' || location.pathname === '/bikestation'
                  ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]'
                  : 'text-slate-800 hover:text-[#0056c6]'
              }`}
            >
              Impressionen
              <ChevronDown className={`w-4 h-4 transition-transform ${galleryDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {galleryDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-md shadow-xl py-2 z-50 not-italic font-sans text-sm">
                <div className="px-3 py-1 text-xs font-race italic font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Galerien & Eindrucke
                </div>
                {galleryPages.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-race italic font-bold text-slate-900 text-base">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/kontakt"
            className={`transition-colors py-1 ${
              isActive('/kontakt') ? 'text-[#0056c6] font-extrabold border-b-2 border-[#0056c6]' : 'text-slate-800 hover:text-[#0056c6]'
            }`}
          >
            Kontakt
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/werkstatt"
            className="bg-[#0056c6] hover:bg-[#0045a3] text-white font-race italic font-bold px-4 py-2 rounded text-sm tracking-wide uppercase shadow-md flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
          >
            <Wrench className="w-4 h-4 text-[#facc15]" />
            Werkstatt-Termin
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#0056c6] focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 font-race italic text-xl uppercase">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 text-slate-800 hover:text-[#0056c6]"
          >
            Home
          </Link>
          <Link
            to="/wir"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 text-slate-800 hover:text-[#0056c6]"
          >
            Wir (Geschichte & Team)
          </Link>

          {/* Mobile Bikes */}
          <div className="py-2 border-b border-slate-100">
            <div className="text-[#0056c6] font-bold">Bikes</div>
            <div className="pl-4 mt-1 space-y-1.5 not-italic font-sans text-base">
              {bikeCategories.map((c) => (
                <Link
                  key={c.path}
                  to={c.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#0056c6] py-1"
                >
                  • {c.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/werkstatt"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 text-slate-800 hover:text-[#0056c6]"
          >
            Werkstatt & Service
          </Link>
          <Link
            to="/leasing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 text-slate-800 hover:text-[#0056c6]"
          >
            Dienstrad Leasing
          </Link>
          <Link
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100 text-slate-800 hover:text-[#0056c6]"
          >
            Shop & Zubehör
          </Link>

          {/* Mobile Impressionen */}
          <div className="py-2 border-b border-slate-100">
            <div className="text-[#0056c6] font-bold">Impressionen</div>
            <div className="pl-4 mt-1 space-y-1.5 not-italic font-sans text-base">
              {galleryPages.map((g) => (
                <Link
                  key={g.path}
                  to={g.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#0056c6] py-1"
                >
                  • {g.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 hover:text-[#0056c6]"
          >
            Kontakt & Anfahrt
          </Link>

          <div className="pt-2">
            <Link
              to="/werkstatt"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#0056c6] text-white font-bold py-3 rounded text-center block uppercase tracking-wide"
            >
              Werkstatt-Termin Buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

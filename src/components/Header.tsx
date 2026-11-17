import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bikesDropdownOpen, setBikesDropdownOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const bikeCategories = [
    { name: 'Alle Bikes', path: '/bikes', desc: 'Übersicht aller Kategorien' },
    { name: 'Premium Bikes', path: '/bikes/premium', desc: 'High-End Custom Aufbauten' },
    { name: 'Rennrad', path: '/bikes/rennrad', desc: 'Speed & Endurance' },
    { name: 'Gravel', path: '/bikes/gravel', desc: 'Freiheit auf Schotter & Asphalt' },
    { name: 'Mountainbikes', path: '/bikes/mtb', desc: 'Trail & Enduro Fullys' },
    { name: 'E-MTB', path: '/bikes/e-mtb', desc: 'Maximale Power am Berg' },
  ];

  const homeSubpages = [
    { name: 'Startseite', path: '/' },
    { name: 'Team Impressionen', path: '/team' },
    { name: 'Store Impressionen', path: '/store' },
    { name: 'Bikestation Impressionen', path: '/bikestation' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      <div className="max-w-[100rem] mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Logo + Status Badge */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794903043999-m29fskzi.jpg"
              alt="D74 Logo"
              className="w-10 h-10 md:w-11 md:h-11 object-contain rounded-lg border border-zinc-200/80 bg-white p-0.5 shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-zinc-950 group-hover:text-[#E6007E] transition-colors">
              Radsport Derjung
            </span>
          </Link>

          {/* Status Label für Öffnungszeiten */}
          <div className="hidden md:inline-flex items-center gap-2 bg-zinc-100/90 border border-zinc-200/80 px-3 py-1 rounded-full text-xs font-medium text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Mi–Fr 09:00–18:00 | Sa 09:00–14:00
</span>
          </div>
        </div>

        {/* Right Nav & CTA */}
        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-6 font-semibold text-sm">
            {/* Home dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <Link
                to="/"
                className={`flex items-center gap-1 py-1 transition-colors ${
                  isActive('/') || location.pathname === '/team' || location.pathname === '/store' || location.pathname === '/bikestation'
                    ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]'
                    : 'text-zinc-800 hover:text-[#E6007E]'
                }`}
              >
                Home
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${homeDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {homeDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border border-zinc-200 rounded-2xl shadow-xl py-2 z-50 mt-1">
                  {homeSubpages.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === sub.path ? 'bg-zinc-50 text-[#E6007E] font-bold' : 'text-zinc-700 hover:bg-zinc-50 hover:text-[#E6007E]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/wir"
              className={`py-1 transition-colors ${
                isActive('/wir') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-800 hover:text-[#E6007E]'
              }`}
            >
              Wir
            </Link>

            {/* Bikes dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBikesDropdownOpen(true)}
              onMouseLeave={() => setBikesDropdownOpen(false)}
            >
              <Link
                to="/bikes"
                className={`flex items-center gap-1 py-1 transition-colors ${
                  location.pathname.startsWith('/bikes') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-800 hover:text-[#E6007E]'
                }`}
              >
                Bikes
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${bikesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {bikesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-zinc-200 rounded-2xl shadow-xl py-2 z-50 mt-1">
                  {bikeCategories.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      className="block px-4 py-2.5 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="font-semibold text-zinc-900 hover:text-[#E6007E]">{cat.name}</div>
                      <div className="text-xs text-zinc-500">{cat.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/werkstatt"
              className={`py-1 transition-colors ${
                isActive('/werkstatt') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-800 hover:text-[#E6007E]'
              }`}
            >
              Werkstatt
            </Link>

            <Link
              to="/leasing"
              className={`py-1 transition-colors ${
                isActive('/leasing') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-800 hover:text-[#E6007E]'
              }`}
            >
              Leasing
            </Link>

            <a
              href="https://radsport-derjung.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 transition-colors text-zinc-800 hover:text-[#E6007E]"
            >
              Shop
            </a>

            <Link
              to="/kontakt"
              className={`py-1 transition-colors ${
                isActive('/kontakt') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-800 hover:text-[#E6007E]'
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Pink Button: Termin anfragen */}
          <Link
            to="/kontakt"
            className="bg-[#E6007E] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#c4006b] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Termin anfragen
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-900 hover:text-[#E6007E] focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4 font-semibold text-base shadow-xl">
          <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Mi–Fr 09:00–18:00 | Sa 09:00–14:00
</span>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-900 hover:text-[#E6007E]"
            >
              Home
            </Link>
            <div className="pl-4 space-y-2 border-l-2 border-zinc-200">
              {homeSubpages.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-zinc-600 hover:text-[#E6007E]"
                >
                  {sub.name}
                </Link>
              ))}
            </div>

            <Link
              to="/wir"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-900 hover:text-[#E6007E]"
            >
              Wir
            </Link>

            <Link
              to="/bikes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-900 hover:text-[#E6007E]"
            >
              Bikes
            </Link>
            <div className="pl-4 space-y-2 border-l-2 border-zinc-200">
              {bikeCategories.map((cat) => (
                <Link
                  key={cat.path}
                  to={cat.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-zinc-600 hover:text-[#E6007E]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <Link
              to="/werkstatt"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-900 hover:text-[#E6007E]"
            >
              Werkstatt
            </Link>

            <Link
              to="/leasing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-900 hover:text-[#E6007E]"
            >
              Leasing
            </Link>

            <a
              href="https://radsport-derjung.shop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-900 hover:text-[#E6007E]"
            >
              Shop
            </a>

            <Link
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-900 hover:text-[#E6007E]"
            >
              Kontakt
            </Link>
          </div>

          <div className="pt-4">
            <Link
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#E6007E] text-white font-bold py-3 rounded-full hover:bg-[#c4006b] transition-all"
            >
              Termin anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

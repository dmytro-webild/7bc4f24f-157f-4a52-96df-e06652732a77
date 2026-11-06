import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';

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
    { name: 'Premium Bikes', path: '/bikes/premium', desc: 'High-End Custom Bikes' },
    { name: 'Rennrad', path: '/bikes/rennrad', desc: 'Speed & Endurance' },
    { name: 'Gravel', path: '/bikes/gravel', desc: 'Freiheit auf asphalt & dirt' },
    { name: 'Mountainbikes', path: '/bikes/mtb', desc: 'Trail & Enduro Performance' },
    { name: 'E-MTB', path: '/bikes/e-mtb', desc: 'Maximale Power am Berg' },
  ];

  const homeSubpages = [
    { name: 'Home Übersicht', path: '/' },
    { name: 'Team Impressionen', path: '/team' },
    { name: 'Store Impressionen', path: '/store' },
    { name: 'Bikestation Impressionen', path: '/bikestation' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-[100rem] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="inline-flex items-center gap-1.5 text-zinc-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#E6007E] animate-pulse"></span>
              Staudacherstraße 47, 83346 Bergen im Chiemgau
            </span>
            <span className="hidden md:inline text-zinc-500">|</span>
            <span className="hidden md:inline text-zinc-400">Seit 1986 in Bergen</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:086626654476" className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#E6007E]" />
              08662 6654476
            </a>
            <span className="text-zinc-600">|</span>
            <a href="mailto:service@radsport-derjung.de" className="hover:text-[#E6007E] transition-colors">
              service@radsport-derjung.de
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Header */}
      <div className="max-w-[100rem] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="bg-[#E6007E] text-white font-extrabold text-xs px-2 py-1 rounded tracking-widest uppercase">
            D74
          </span>
          <span className="font-extrabold text-xl md:text-2xl tracking-tight text-zinc-900 group-hover:text-[#E6007E] transition-colors">
            Radsport Derjung
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 font-semibold text-sm">
          {/* Home with Dropdown */}
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
                  : 'text-zinc-700 hover:text-[#E6007E]'
              }`}
            >
              Home
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${homeDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {homeDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-zinc-200 rounded-lg shadow-lg py-2 z-50 mt-1">
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
              isActive('/wir') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-700 hover:text-[#E6007E]'
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
              className={`flex items-center gap-1 py-1 transition-colors ${
                location.pathname.startsWith('/bikes') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-700 hover:text-[#E6007E]'
              }`}
            >
              Bikes
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${bikesDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {bikesDropdownOpen && (
              <div className="absolute top-full left-0 w-60 bg-white border border-zinc-200 rounded-lg shadow-lg py-2 z-50 mt-1">
                {bikeCategories.map((cat) => (
                  <Link
                    key={cat.path}
                    to={cat.path}
                    className="block px-4 py-2 hover:bg-zinc-50 transition-colors"
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
              isActive('/werkstatt') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Werkstatt
          </Link>

          <Link
            to="/leasing"
            className={`py-1 transition-colors ${
              isActive('/leasing') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Leasing
          </Link>

          <Link
            to="/shop"
            className={`py-1 transition-colors ${
              isActive('/shop') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Shop
          </Link>

          <Link
            to="/kontakt"
            className={`py-1 transition-colors ${
              isActive('/kontakt') ? 'text-[#E6007E] font-bold border-b-2 border-[#E6007E]' : 'text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/kontakt"
            className="primary-button text-sm"
          >
            Probefahrt anfragen
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-800 hover:text-[#E6007E] focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-6 space-y-3 font-semibold text-base">
          <div>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${isActive('/') ? 'text-[#E6007E] font-bold' : 'text-zinc-800'}`}
            >
              Home
            </Link>
            <div className="pl-4 space-y-1 text-sm border-l-2 border-zinc-100 ml-2">
              <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-600 hover:text-[#E6007E]">
                Team Impressionen
              </Link>
              <Link to="/store" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-600 hover:text-[#E6007E]">
                Store Impressionen
              </Link>
              <Link to="/bikestation" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-600 hover:text-[#E6007E]">
                Bikestation Impressionen
              </Link>
            </div>
          </div>

          <Link
            to="/wir"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${isActive('/wir') ? 'text-[#E6007E] font-bold' : 'text-zinc-800'}`}
          >
            Wir
          </Link>

          <div>
            <Link
              to="/bikes"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${location.pathname.startsWith('/bikes') ? 'text-[#E6007E] font-bold' : 'text-zinc-800'}`}
            >
              Bikes
            </Link>
            <div className="pl-4 space-y-1 text-sm border-l-2 border-zinc-100 ml-2">
              {bikeCategories.slice(1).map((cat) => (
                <Link
                  key={cat.path}
                  to={cat.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-zinc-600 hover:text-[#E6007E]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/werkstatt"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${isActive('/werkstatt') ? 'text-[#E6007E] font-bold' : 'text-zinc-800'}`}
          >
            Werkstatt
          </Link>

          <Link
            to="/leasing"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${isActive('/leasing') ? 'text-[#E6007E] font-bold' : 'text-zinc-800'}`}
          >
            Leasing
          </Link>

          <Link
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${isActive('/shop') ? 'text-[#E6007E] font-bold' : 'text-zinc-800'}`}
          >
            Shop
          </Link>

          <Link
            to="/kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 ${isActive('/kontakt') ? 'text-[#E6007E] font-bold' : 'text-zinc-800'}`}
          >
            Kontakt
          </Link>

          <div className="pt-2">
            <Link
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="primary-button w-full text-center"
            >
              Probefahrt anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

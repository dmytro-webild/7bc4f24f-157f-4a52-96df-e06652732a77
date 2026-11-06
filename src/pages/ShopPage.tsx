import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  const shopCategories = [
    {
      title: 'Helme & Protektoren',
      desc: 'MIPS-Sicherheitssysteme & Aero-Helme von Giro, Abus & Poc.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      tag: 'Sicherheit',
    },
    {
      title: 'Bekleidung & Trikots',
      desc: 'High-Performance Radbekleidung, Windjacken & Hosen für jedes Wetter.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      tag: 'Apparel',
    },
    {
      title: 'Laufräder & Reifen',
      desc: 'Carbon-Aerosätze von DT Swiss, Mavic & Continental GP5000 / Schwalbe.',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
      tag: 'Performance',
    },
    {
      title: 'Verschleißteile & Kassetten',
      desc: 'Ketten, Bremsbeläge, Kassetten von Shimano, SRAM & Campagnolo.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      tag: 'Ersatzteile',
    },
    {
      title: 'Elektronik & Beleuchtung',
      desc: 'GPS-Radcomputer (Garmin, Wahoo) & Hochleistungs-LED Scheinwerfer.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
      tag: 'Tech Gadgets',
    },
    {
      title: 'Pflege & Schmiermittel',
      desc: 'Kettenwachs, Reiniger & Entfetter von Muc-Off & Tunap Sports.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
      tag: 'Werkstatt Lab',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="bg-[#0a1324] text-white py-20 bg-topo border-b-4 border-[#0056c6]">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#0a1324] px-3 py-1 rounded text-xs font-mono font-bold uppercase">
                <ShoppingBag className="w-4 h-4" /> SHOP & ZUBEHÖR D74
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                EQUIPMENT & <span className="text-[#0056c6]">ZUBEHÖR SHOP</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Entdeckt unser Sortiment an Bekleidung, Helmen, Ersatzteilen und Zubehör direkt in unserem Store in Bergen im Chiemgau oder fragt Teile online bei uns an.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              UNSERE ZUBEHÖR <span className="text-[#0056c6]">KATEGORIEN</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              Alles was ihr für eure Ausfahrten, Rennen und Werkstattarbeiten benötigt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopCategories.map((cat) => (
              <div key={cat.title} className="card group rounded border border-slate-200 overflow-hidden bg-white flex flex-col justify-between">
                <div className="relative h-64 bg-slate-900 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a1324] text-[#facc15] text-xs font-mono font-bold px-2.5 py-1 rounded border border-[#0056c6]">
                    {cat.tag}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-race italic uppercase font-extrabold text-slate-900 group-hover:text-[#0056c6] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-sm mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/kontakt"
                      className="w-full bg-[#0a1324] hover:bg-[#0056c6] text-white font-race italic font-bold py-2.5 px-4 rounded text-center block uppercase text-sm transition-colors"
                    >
                      Teile & Verfügbarkeit Anfragen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ADVICE CTA */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded border-2 border-[#0056c6] shadow-md text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-3xl md:text-4xl font-race italic uppercase font-black text-slate-900">
            SUCHT IHR EIN BESTIMMTES ERSATZTEIL?
          </h3>
          <p className="text-slate-700 font-sans max-w-2xl mx-auto">
            Wir führen alle gängigen Ersatzteile vor Ort im Laden in Bergen. Rumpft uns einfach kurz an oder schickt uns eine Anfrage – wir prüfen lagernde Bestände oder bestellen Express!
          </p>
          <div className="pt-2 flex justify-center gap-4 font-race italic uppercase font-bold">
            <a
              href="tel:+49866212345"
              className="bg-[#0056c6] text-white px-8 py-3.5 rounded text-lg shadow-md hover:bg-[#0045a3]"
            >
              Telefon: 08662 / 12345
            </a>
            <Link
              to="/kontakt"
              className="bg-[#0a1324] text-white px-8 py-3.5 rounded text-lg hover:bg-[#182645]"
            >
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Store } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StorePage() {
  const storeGallery = [
    {
      title: 'Showroom & Radpräsentation',
      desc: '350m² Verkaufsfläche mit den neuesten Rennrad-, Gravel- & E-MTB-Modellen.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80',
      tag: 'Showroom Bergen',
    },
    {
      title: 'Custom-Bike Studio D74',
      desc: 'Rahmenwände und Komponenten-Auswahl für euren individuellen Wunschaufbau.',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80',
      tag: 'Custom Studio',
    },
    {
      title: 'Helm & Protektoren Wand',
      desc: 'Aero-Helme und MIPS-Schutzbekleidung von Giro, Poc, Abus & Specialized.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
      tag: 'Helme & Bekleidung',
    },
    {
      title: 'High-End Rennrad Ausstellungsbereich',
      desc: 'Top-Modelle mit elektronischer Schaltung und Carbon-Aero-Laufrädern.',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80',
      tag: 'Speed Zone',
    },
    {
      title: 'Werkstatt-Annahme & Espresso Bar',
      desc: 'Besprecht eure Reparaturen entspannt bei einem frischen Espresso.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
      tag: 'Empfang D74',
    },
    {
      title: 'Gravel & Bikepacking Corner',
      desc: 'Taschen, Spezialübersetzungen und Bekleidung für Abenteuer abseits der Straße.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
      tag: 'Gravel Zone',
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
                <Store className="w-4 h-4" /> GALERIE // STORE IMPRESSIONEN
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                STORE <span className="text-[#0056c6]">IMPRESSIONEN</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Willkommen in unserem Fahrradladen in der Bahnhofstraße 12 in Bergen im Chiemgau. Werft einen Blick in unseren Showroom und das Custom Studio.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storeGallery.map((item, idx) => (
              <div key={idx} className="card rounded border border-slate-200 overflow-hidden bg-white flex flex-col justify-between">
                <div className="relative h-72 bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a1324] text-[#facc15] text-xs font-mono font-bold px-2.5 py-1 rounded border border-[#0056c6]">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-race italic uppercase font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-sans text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-[#0056c6] text-white font-race italic font-bold px-8 py-3.5 rounded text-lg uppercase shadow-md hover:bg-[#0045a3]"
            >
              Besucht uns in Bergen im Chiemgau (Anfahrt)
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

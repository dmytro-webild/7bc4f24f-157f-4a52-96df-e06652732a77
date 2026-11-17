import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function ShopPage() {
  const shopCategories = [
    {
      title: 'Helme & Protektoren',
      desc: 'Sicherheit mit MIPS-Technologie und bester Belüftung von führenden Herstellern.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Bekleidung & Trikots',
      desc: 'Funktionsbekleidung, Windjacken und Radhosen für jede Jahreszeit.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Laufräder & Reifen',
      desc: 'Carbon-Laufradsätze, High-End Tubeless Reifen und Gravel-Komponenten.',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Verschleißteile & Antrieb',
      desc: 'Ketten, Kassetten, Bremsbeläge und Schalungskomponenten auf Lager.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Elektronik & Navigation',
      desc: 'GPS-Radcomputer, Wattmesser und leistungsstarke LED-Beleuchtungssets.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pflege & Werkzeug',
      desc: 'Kettenöle, Reiniger, Drehmomentschlüssel und Pannen-Sets für unterwegs.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=2000&q=80"
            alt="Shop Radsport Derjung"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                Zubehör & Equipment
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                Shop & Ausrüstung
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                Entdeckt ausgewählte Bekleidung, Helme, Ersatzteile und Zubehör bei uns vor Ort in Bergen im Chiemgau oder rund um die Uhr im Onlineshop.
              </p>
              <div className="pt-4">
                <a
                  href="https://radsport-derjung.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button text-base inline-flex items-center gap-2"
                >
                  Zum Onlineshop
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TEXT ABSCHNITT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Erstklassiges Sortiment
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Erstausstattung & Spezialteile im Chiemgau
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            Wir führen ausschließlich Produkte, von deren Qualität und Haltbarkeit wir selbst überzeugt sind. Egal ob ihr ein Ersatzteil für eure Schaltung sucht oder das passende Trikot für kalte Ausfahrten – wir beraten euch gerne.
          </p>
        </div>
      </section>

      {/* KATEGORIEN MIT BILDERN */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopCategories.map((cat) => (
            <div key={cat.title} className="card overflow-hidden flex flex-col justify-between">
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">{cat.title}</h3>
                  <p className="text-zinc-600 text-sm mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <a
                    href="https://radsport-derjung.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button w-full text-center text-sm inline-flex items-center justify-center gap-2"
                  >
                    Kategorie im Shop ansehen
                    <ArrowRight className="w-4 h-4 text-[#E6007E]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ONLINESHOP BANNER */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="bg-zinc-950 text-white rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            24/7 Online einkaufen
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm md:text-base">
            Besucht unseren vollständigen Katalog online, prüft Verfügbarkeiten in Echtzeit oder bestellt euch Ersatzteile bequem nach Hause.
          </p>
          <div className="pt-2">
            <a
              href="https://radsport-derjung.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button text-base inline-flex items-center gap-2"
            >
              Zum Onlineshop
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const categories = [
    {
      title: 'Premium Bikes',
      slug: 'premium',
      desc: 'Maßgeschneiderte High-End Custom-Aufbauten und exklusive Traumbikes.',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Rennrad',
      slug: 'rennrad',
      desc: 'Aero-Performance und Endurance-Komfort für lange Einheiten im Voralpenland.',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Gravel',
      slug: 'gravel',
      desc: 'Vielseitige All-Road Bikes für Abenteuer auf Schotter und Asphalt.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Mountainbikes',
      slug: 'mtb',
      desc: 'Fullys & Hardtails für technische Trails und alpine Anstiege.',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'E-MTB',
      slug: 'e-mtb',
      desc: 'Moderne E-Performance mit starken Antrieben für maximale Höhenmeter.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const galleryPages = [
    {
      title: 'Team Impressionen',
      path: '/team',
      desc: 'Eure Experten in Werkstatt und Beratung.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Store Impressionen',
      path: '/store',
      desc: 'Unser Showroom in Bergen im Chiemgau.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Bikestation Impressionen',
      path: '/bikestation',
      desc: 'Test-Center und Startpunkt am Hochfelln.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const brands = [
    'TREK', 'SPECIALIZED', 'CANNONDALE', 'PINARELLO', 'CUBE', 'SCOTT', 'SHIMANO', 'SRAM', 'BOSCH'
  ];

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80"
            alt="Radsport Derjung Bergen im Chiemgau"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-block bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                Seit 1986 in Bergen im Chiemgau
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white">
                Radsport Derjung
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-zinc-200">
                Fahrradladen & Meisterwerkstatt am Fuße des Hochfelln.
              </p>

              <p className="text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed">
                Ob Highend-Rennrad, Geländegängiges Gravelbike oder professionelle Inspektion in unserer Meisterwerkstatt – wir sorgen dafür, dass ihr perfekt auf zwei Rädern unterwegs seid.
              </p>

              {/* Two Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/bikes" className="primary-button text-base">
                  Bikes entdecken
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/werkstatt" className="secondary-button text-base">
                  Werkstatt entdecken
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARKEN LEISTE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-center mb-6">
          Ausgewählte Marken & Premium-Partner
        </p>
        <div className="flex flex-wrap justify-between items-center gap-6 py-6 border-y border-zinc-200">
          {brands.map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-black text-zinc-400 hover:text-[#E6007E] transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* BIKE KATEGORIEN BIL DRASTER */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest block mb-2">
                Vielfalt & Performance
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Unsere Bike-Kategorien
              </h2>
            </div>
            <Link to="/bikes" className="text-sm font-bold text-[#E6007E] hover:underline inline-flex items-center gap-1">
              Alle Modelle & Details anzeigen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link
                key={cat.slug}
                to={`/bikes/${cat.slug}`}
                className={`group card overflow-hidden flex flex-col ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative h-72 md:h-96 overflow-hidden bg-zinc-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-zinc-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                      {cat.title}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-[#E6007E] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-zinc-600 text-sm mt-1 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-[#E6007E] group-hover:translate-x-1 transition-transform">
                    Kategorie erkunden <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* WERKSTATT ABSCHNITT */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <ScrollReveal variant="slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
                  Meisterwerkstatt Bergen
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  Euer Bike in besten Händen
                </h2>
                <p className="text-zinc-600 text-base leading-relaxed">
                  In unserer hauseigenen Meisterwerkstatt führen wir Inspektionen, Software-Updates für E-Bikes, Gabel-Services sowie individuelles Tuning fachgerecht und zügig durch.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-[#E6007E] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm">Meisterlicher Service</h4>
                      <p className="text-xs text-zinc-500">Erfahrene Mechaniker für alle Marken</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#E6007E] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm">Original-Ersatzteile</h4>
                      <p className="text-xs text-zinc-500">Höchste Qualität & Herstellervorgaben</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/werkstatt" className="primary-button text-sm">
                    Werkstatt-Leistungen ansehen
                  </Link>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden h-96 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                  alt="Werkstatt Radsport Derjung"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEIT 1986 ABSCHNITT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80"
                alt="Seit 1986 Radsport Derjung"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white text-zinc-900 p-4 rounded-xl shadow-lg border border-zinc-100">
                <div className="text-3xl font-black text-[#E6007E]">1986</div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Gegründet in Bergen</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
                Tradition & Innovation
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Seit 1986 – Euer Radsport-Partner im Chiemgau
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Seit fast 40 Jahren steht der Name Derjung für Qualität, persönliche Beratung und die tiefe Liebe zum Radfahren. Von den ersten Stahlrennrädern bis zu den modernsten E-MTBs haben wir jede Entwicklung begleitet.
              </p>
              <p className="text-zinc-600 text-base leading-relaxed">
                Wir sind selbst begeisterte Radfahrer und testen unsere Produkte auf den Trails und Straßen unserer Heimat. Bei uns erhaltet ihr ehrliche Empfehlungen aus der Praxis.
              </p>
              <div className="pt-2">
                <Link to="/wir" className="secondary-button text-sm">
                  Erfahrt mehr über uns
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* GALERIEN ABSCHNITT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Einblicke & impressionen
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Entdeckt unsere Standorte & Crew
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryPages.map((item) => (
            <Link key={item.path} to={item.path} className="group card overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2 flex-grow">
                <h3 className="text-xl font-bold group-hover:text-[#E6007E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
                <div className="pt-3 text-xs font-bold text-[#E6007E] flex items-center">
                  Galerie ansehen <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

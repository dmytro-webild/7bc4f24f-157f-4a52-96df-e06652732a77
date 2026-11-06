import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Wrench, ChevronRight, Award, Compass, Users, Store, Mountain, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  const categories = [
    {
      title: 'Premium Bikes',
      slug: 'premium',
      desc: 'Handgefertigte Custom-Setups & High-End Rennmaschinen für Höchstleistung.',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80',
      badge: 'High-End Bausätze',
    },
    {
      title: 'Rennrad',
      slug: 'rennrad',
      desc: 'Aero-Boliden und Endurance-Räder für schnelle Runden um den Chiemsee.',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1000&q=80',
      badge: 'Speed & Aero',
    },
    {
      title: 'Gravel',
      slug: 'gravel',
      desc: 'Freiheit abseits des Asphalts. Stabilität & Speed für Forstwege im Chiemgau.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
      badge: 'All-Terrain',
    },
    {
      title: 'Mountainbikes',
      slug: 'mtb',
      desc: 'Trail-Fully & Hardtail Biker-Traum für Hochfelln, Kampenwand & Trails.',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=80',
      badge: 'Trail & Enduro',
    },
    {
      title: 'E-MTB & E-Bikes',
      slug: 'e-mtb',
      desc: 'Maximale Power bergauf mit Bosch Smart System & Shimano EP8 Antrieben.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=80',
      badge: 'Power Support',
    },
  ];

  const brands = [
    'TREK', 'SPECIALIZED', 'CANNONDALE', 'PINARELLO', 'CUBE', 'SCOTT', 'SHIMANO', 'SRAM', 'BOSCH POWER', 'DT SWISS', 'FOX RACING'
  ];

  const galleryTeasers = [
    {
      title: 'Team Impressionen',
      path: '/team',
      subtitle: 'Unsere Meistermechaniker & Rennfahrer',
      desc: 'Erfahrt, wer hinter Radsport Derjung steht. Jahrelange Rennsporterfahrung und Leidenschaft für Schrauben und Feintuning.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
      icon: Users,
    },
    {
      title: 'Store Impressionen',
      path: '/store',
      subtitle: 'Showroom in Bergen im Chiemgau',
      desc: 'Blickt in unseren modernen Laden mit Bekleidungsbereich, Helmgalerie, Zubehörwand und Custom-Bike-Studio.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80',
      icon: Store,
    },
    {
      title: 'Bikestation Impressionen',
      path: '/bikestation',
      subtitle: 'Chiemgau Test- & Verleihstation',
      desc: 'Direkter Ausgangspunkt für Radtouren in den Chiemgauer Alpen am Fuß des Hochfelln. Testet aktuelle Modelle direkt am Berg.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=900&q=80',
      icon: Mountain,
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0a1324] text-white overflow-hidden py-24 border-b-4 border-[#0056c6]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80"
            alt="Radsport Derjung Chiemgau"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1324] via-[#0a1324]/80 to-transparent"></div>
          {/* Topo line grid */}
          <div className="absolute inset-0 bg-topo opacity-40 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#0056c6] text-white px-3 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase shadow-md">
                <span className="bg-[#facc15] text-[#0a1324] px-1.5 py-0.5 rounded font-black">D74</span>
                EST. 1986 · BERGEN IM CHIEMGAU
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-race italic uppercase font-extrabold text-white leading-none tracking-tight">
                RADSPORT <span className="text-[#0056c6]">DERJUNG</span>
              </h1>

              <p className="text-xl md:text-2xl font-race italic text-[#facc15] tracking-wide">
                EUER FAHRRADLADEN & MEISTERWERKSTATT IN BERGEN IM CHIEMGAU
              </p>

              <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed font-sans">
                Seit 1986 stehen wir für echte Leidenschaft auf zwei Rädern. Egal ob ihr auf der Suche nach dem perfekten Aero-Rennrad, einem robusten Gravelbike für die Chiemgauer Voralpen oder einer erstklassigen Inspektion seid – bei uns seid ihr goldrichtig.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 font-race italic text-lg uppercase tracking-wider">
                <Link
                  to="/bikes"
                  className="bg-[#0056c6] hover:bg-[#0045a3] text-white px-8 py-4 rounded font-bold shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                >
                  Bikes Entdecken
                  <ChevronRight className="w-5 h-5 text-[#facc15]" />
                </Link>

                <Link
                  to="/werkstatt"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded font-bold backdrop-blur-sm flex items-center gap-2 transition-colors"
                >
                  <Wrench className="w-5 h-5 text-[#facc15]" />
                  Werkstatt-Termin
                </Link>
              </div>

              {/* Specs Badge Bar */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                <div>
                  <span className="text-white font-bold block text-sm">38+ JAHRE</span>
                  Erfahrung seit 1986
                </div>
                <div>
                  <span className="text-[#facc15] font-bold block text-sm">MEISTERBETRIEB</span>
                  D74 Zertifiziert
                </div>
                <div>
                  <span className="text-white font-bold block text-sm">BERGEN / CHIEMGAU</span>
                  Am Fuß des Hochfelln
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARKEN LEISTE */}
      <section className="bg-white py-6 border-y border-slate-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="text-xs font-race italic uppercase font-bold text-slate-400 mb-3 text-center tracking-widest">
            UNSERE PREMIUM PARTNER & MARKEN
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80">
            {brands.map((brand) => (
              <span key={brand} className="font-race italic font-black text-xl md:text-2xl text-slate-800 hover:text-[#0056c6] transition-colors cursor-pointer">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BIKE KATEGORIEN BIL DRASTER */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-slate-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4 text-[#facc15]" /> SPEZIFIKATION & KATEGORIEN
              </div>
              <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
                FAHRRAD-KATEGORIEN BEI <span className="text-[#0056c6]">DERJUNG</span>
              </h2>
            </div>
            <Link
              to="/bikes"
              className="text-[#0056c6] font-race italic font-bold text-xl uppercase hover:text-slate-900 flex items-center gap-1"
            >
              Alle Kategorien ansehen <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={cat.slug}
                className={`card group overflow-hidden rounded border border-slate-200 flex flex-col ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative h-64 md:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a1324]/90 backdrop-blur-sm text-[#facc15] font-mono text-xs font-bold px-3 py-1 rounded border border-[#0056c6]">
                    {cat.badge}
                  </div>
                </div>

                <div className="p-6 bg-white flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-3xl font-race italic uppercase font-extrabold text-slate-900 group-hover:text-[#0056c6] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 font-sans leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/bikes/${cat.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-race italic font-bold uppercase text-[#0056c6] group-hover:translate-x-1 transition-transform"
                    >
                      Modelle & Datenblatt ansehen
                      <ChevronRight className="w-4 h-4 text-[#facc15]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* WERKSTATT ABSCHNITT MIT DATENBLATT */}
      <section className="bg-[#0a1324] text-white py-20 bg-topo border-y-4 border-[#0056c6]">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slide-up" className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#0a1324] px-3 py-1 rounded text-xs font-mono font-bold uppercase">
                <Wrench className="w-4 h-4" /> D74 MEISTERWERKSTATT BERGEN
              </div>

              <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-white leading-tight">
                SCHNELLER SERVICE. <br />
                <span className="text-[#0056c6]">PRÄZISION BIS INS DETAIL.</span>
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans">
                Euer Bike verdient die beste Pflege. Unsere Werkstatt in Bergen im Chiemgau arbeitet nach höchsten technischen Standards – von der grundlegenden Jahresinspektion über komplexe Fahrwerks-Tunings bis zur E-Bike Systemdiagnose.
              </p>

              <div className="space-y-3 font-sans text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0" />
                  <span><strong>24h Express-Reparatur:</strong> Für dringende Fahrten vor der Tour.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0" />
                  <span><strong>Bosch & Shimano Zertifiziert:</strong> Neueste Diagnosesoftware & Akkutests.</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#facc15] shrink-0" />
                  <span><strong>Echte Transparenz:</strong> Ausführlicher Werkstatt-Bericht nach Drehmoment-Protokoll.</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4 font-race italic text-lg uppercase">
                <Link
                  to="/werkstatt"
                  className="bg-[#0056c6] hover:bg-[#0045a3] text-white px-8 py-3.5 rounded font-bold shadow-md flex items-center gap-2"
                >
                  Werkstatt Leistungen & Buchung
                  <ChevronRight className="w-5 h-5 text-[#facc15]" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Technisches Datenblatt Box */}
            <ScrollReveal variant="fade-blur">
              <div className="datenblatt-box p-6 rounded text-slate-900">
                <div className="flex justify-between items-center border-b-2 border-[#0a1324] pb-3 mb-4">
                  <span className="font-race italic font-black text-2xl uppercase text-[#0056c6]">
                    SPEC SHEET // MEISTER-WERKSTATT D74
                  </span>
                  <span className="bg-[#0a1324] text-[#facc15] text-xs font-mono font-bold px-2.5 py-1 rounded">
                    PROTOKOL: D74-2026
                  </span>
                </div>

                <div className="space-y-1 divide-y divide-slate-200 font-mono text-xs md:text-sm">
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Standort</span>
                    <span className="font-bold">Bergen im Chiemgau (D74)</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Leiter Werkstatt</span>
                    <span className="font-bold">Zweiradmechanikermeister Derjung</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Inspektions-Umfang</span>
                    <span className="font-bold text-[#0056c6]">32 Prüfpunkte inkl. Drehmoment</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Diagnosesysteme</span>
                    <span className="font-bold">Bosch eBike Systems, Shimano STEPS, SRAM AXS</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Dämpfer & Gabel</span>
                    <span className="font-bold">Fox Racing & RockShox Certified Lab</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Durchlaufzeit</span>
                    <span className="font-bold text-emerald-700">Express 24h / Standard 48h</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Garantie</span>
                    <span className="font-bold">12 Monate auf Werkstattleistung</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                  <span>Prüfzeichen: DIN EN ISO 4210</span>
                  <span className="font-bold text-[#0a1324]">Radsport Derjung Bergen</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GESCHICHTE ABSCHNITT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="slide-up">
          <div className="bg-white p-8 md:p-14 rounded border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              {/* Startnummer Badge */}
              <div className="startnummer-badge p-8 w-64 h-80 flex flex-col justify-between items-center text-center">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  CHIEMGAU RACE NO.
                </div>
                <div className="text-6xl md:text-7xl font-extrabold text-[#0a1324] font-race italic my-2">
                  #1986
                </div>
                <div className="w-full bg-[#0056c6] text-white py-1.5 text-xs font-mono font-bold uppercase rounded">
                  GRÜNDUNGSJAHR BERGEN
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase">
                <Award className="w-4 h-4 text-[#facc15]" /> RADSPORT-TRADITION SEIT 1986
              </div>

              <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-slate-900">
                VOM RENNSORT-CLUB ZUM <span className="text-[#0056c6]">TOP BIKESHOP IN BERGEN</span>
              </h2>

              <p className="text-slate-700 font-sans leading-relaxed">
                1986 hat bei uns in Bergen im Chiemgau alles angefangen: Aus der Leidenschaft für den Straßenradsport und das Rennfahren entstand Radsport Derjung (D74). Über drei Jahrzehnte hinweg haben wir uns vom Geheimtipp unter Rennfahrern zu einem der führenden Fachgeschäfte und Werkstätten im Chiemgau entwickelt.
              </p>

              <p className="text-slate-700 font-sans leading-relaxed">
                Wir testen alle Produkte selbst an den Anstiegen des Hochfelln und der Kampenwand. Bei uns bekommt ihr ehrliche Empfehlungen, Fachwissen auf Meister-Niveau und die Begeisterung fürs Fahrradfahren aus erster Hand.
              </p>

              <div className="pt-2">
                <Link
                  to="/wir"
                  className="inline-flex items-center gap-2 bg-[#0a1324] hover:bg-[#152340] text-white px-6 py-3 rounded font-race italic font-bold uppercase text-base"
                >
                  Unsere Geschichte & Team Zeitleiste lesen
                  <ChevronRight className="w-4 h-4 text-[#facc15]" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* GALERIE UNTERSEITEN TEASER (Team, Store, Bikestation) */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-2">
              <Store className="w-4 h-4 text-[#facc15]" /> EINBLICKE IN DIE WELT VON DERJUNG
            </div>
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              IMPRESSIONEN & <span className="text-[#0056c6]">GALERIEN</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-3">
              Klickt euch durch unsere Impressionen und erhaltet einen Blick hinter die Kulissen unseres Ladens, der Meisterwerkstatt und unserer Test-Bikestation am Chiemgau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryTeasers.map((g) => {
              const IconComp = g.icon;
              return (
                <Link
                  key={g.path}
                  to={g.path}
                  className="card group overflow-hidden rounded border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={g.image}
                      alt={g.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a1324]/90 text-[#facc15] p-2 rounded border border-[#0056c6]">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 bg-white space-y-3 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#0056c6] uppercase">
                        {g.subtitle}
                      </div>
                      <h3 className="text-2xl font-race italic uppercase font-extrabold text-slate-900 group-hover:text-[#0056c6] transition-colors mt-1">
                        {g.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-sans mt-2 leading-relaxed">
                        {g.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-race italic font-bold uppercase text-sm text-[#0056c6]">
                      <span>Galerie öffnen</span>
                      <ChevronRight className="w-4 h-4 text-[#facc15]" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

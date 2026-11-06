import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Compass, CheckCircle2, Calculator, Calendar, ShieldCheck, Zap, X } from 'lucide-react';

interface BikeCategoryData {
  title: string;
  badge: string;
  heroText: string;
  image: string;
  specsFocus: Array<{ label: string; value: string }>;
  models: Array<{
    name: string;
    sub: string;
    price: string;
    image: string;
    frame: string;
    groupset: string;
    wheels: string;
    weight: string;
    highlight: string;
  }>;
}

export default function BikesPage() {
  const { category } = useParams<{ category?: string }>();
  const activeCategory = category || 'all';

  // Calculator State
  const [height, setHeight] = useState<number>(175);
  const [inseam, setInseam] = useState<number>(82);
  const [bikeType, setBikeType] = useState<string>('rennrad');

  // Test Ride Modal State
  const [testRideModalOpen, setTestRideModalOpen] = useState<boolean>(false);
  const [selectedBike, setSelectedBike] = useState<string>('Derjung D74 Pro');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const bikeCategories: Record<string, BikeCategoryData> = {
    premium: {
      title: 'PREMIUM CUSTOM BIKES',
      badge: 'HIGH-END BAUSÄTZE D74',
      heroText: 'Individuelle Meisterstücke auf Maß. Wir bauen euer Traum-Bike mit handverlesenen Komponenten, Carbon-Laufrädern und maßgeschneiderter Ergonomie.',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
      specsFocus: [
        { label: 'Rahmenmaterial', value: 'High-Modulus Torayca Carbon T1100' },
        { label: 'Montage-Standard', value: '100% Handaufbau in Bergen D74 Lab' },
        { label: 'Kabelintegration', value: 'Vollintegrierte Cockpit-Führung (ICR)' },
        { label: 'Toleranzen', value: 'Präzisionsmessung ±0.1mm' },
      ],
      models: [
        {
          name: 'Derjung D74 Apex Edition',
          sub: 'Custom High-End Bausatz',
          price: 'ab 8.990 €',
          image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80',
          frame: 'Toray T1100 Custom Spec D74',
          groupset: 'SRAM RED AXS E-Tap 12s Powermeter',
          wheels: 'DT Swiss ARC 1100 Dicut 50',
          weight: '6.7 kg',
          highlight: 'Inklusive professionellem D74 Bikefitting',
        },
        {
          name: 'Derjung Chiemgau Titan S',
          sub: 'Exklusives Custom Titan Bike',
          price: 'ab 7.490 €',
          image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
          frame: 'Grade 9 3Al/2.5V Titan Handgeschweißt',
          groupset: 'Shimano Dura-Ace Di2 12-Speed',
          wheels: 'Mavic Cosmic SLR 45 Carbon',
          weight: '7.4 kg',
          highlight: 'Lebenslange Garantie auf Rahmen',
        },
      ],
    },
    rennrad: {
      title: 'RENNRAD // AERO & ENDURANCE',
      badge: 'CHIEMGAU SPEED EDITION',
      heroText: 'Für schnelle Runden um den Chiemsee und steile Passagen am Hochfelln. Aerodynamik, Leichtgewicht und kompromisslose Kraftübertragung.',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80',
      specsFocus: [
        { label: 'Steifigkeit Headtube', value: '110 Nm/° für maximale Lenkpräzision' },
        { label: 'Reifenfreiheit', value: 'bis 32mm All-Road Spezifikation' },
        { label: 'Tretlager-Standard', value: 'T47 Threaded Precision' },
        { label: 'Aerodynamik-Test', value: 'CdA 0.024 im Windkanal erprobt' },
      ],
      models: [
        {
          name: 'Derjung Aero Veloce D74',
          sub: 'Aero-Rennrad Competizione',
          price: '5.490 €',
          image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
          frame: 'Aerodynamic Monocoque Carbon',
          groupset: 'Shimano Ultegra Di2 12s',
          wheels: 'DT Swiss ARC 1400 62mm',
          weight: '7.1 kg',
          highlight: 'Maximale Aerodynamik für Flach- & Hügeletappen',
        },
        {
          name: 'Derjung Hochfelln Light',
          sub: 'Endurance & Bergziege',
          price: '4.290 €',
          image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80',
          frame: 'Superlight Carbon 790g Frame',
          groupset: 'SRAM Force AXS Wireless 12s',
          wheels: 'Fulcrum Speed 40 Carbon',
          weight: '6.9 kg',
          highlight: 'Perfekte Kompaktübersetzung für Alpenpässe',
        },
      ],
    },
    gravel: {
      title: 'GRAVEL // ABENTEUER & TRAILS',
      badge: 'ALL-TERRAIN CHIEMGAU',
      heroText: 'Vom Teer direkt auf die Forstwege der Chiemgauer Voralpen. Zuverlässig, komfortabel und bereit für Mehrtagestouren & Bikepacking.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      specsFocus: [
        { label: 'Reifenbreite', value: 'bis 700x48c / 650x2.1"' },
        { label: 'Anlötpunkte', value: '14 Ösen für Bikepacking & Schutzbleche' },
        { label: 'Geometrie', value: 'Endurance Slack Head Angle 70.5°' },
        { label: 'Dämpfungssystem', value: 'Vibration Dampening Micro-Flex Seatstays' },
      ],
      models: [
        {
          name: 'Derjung Chiemgau Explorer Gravel',
          sub: 'Gravel & Bikepacking Machine',
          price: '3.790 €',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
          frame: 'Carbon Adventure Spec D74',
          groupset: 'SRAM Rival XPLR AXS 1x12',
          wheels: 'DT Swiss GR 1600 Spline',
          weight: '8.4 kg',
          highlight: 'Integraphische Ösen für Rahmentaschen',
        },
        {
          name: 'Derjung TrailGravel Alloy',
          sub: 'Robuster Alu Gravel-Allrounder',
          price: '2.490 €',
          image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
          frame: 'Ultralight 6061-T6 Triple Butted Alu',
          groupset: 'Shimano GRX RX810 2x11',
          wheels: 'Mavic Allroad Disc',
          weight: '9.2 kg',
          highlight: 'Inkl. Panaracer GravelKing SK Reifen',
        },
      ],
    },
    mtb: {
      title: 'MOUNTAINBIKES // FULLY & HARDTAIL',
      badge: 'ALPEN TRAIL EXPERT',
      heroText: 'Eure Waffe für Kampenwand-Trails und steile Abfahrten. Hocheffizientes Fahrwerk, präzise Schaltung und maximale Kontrolle.',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80',
      specsFocus: [
        { label: 'Federweg Front/Heck', value: '140mm / 130mm Fox Factory Line' },
        { label: 'Hinterbau-Kinematik', value: 'Horst-Link 4-Bar Active Suspension' },
        { label: 'Bremsanlage', value: '4-Kolben Hydraulik 203mm Rotoren' },
        { label: 'Dropper Post', value: '170mm Adjustable Internal Routing' },
      ],
      models: [
        {
          name: 'Derjung Hochfelln Trail 140 Fully',
          sub: 'All-Mountain & Enduro Fully',
          price: '4.890 €',
          image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=80',
          frame: 'Full Carbon 29er Trail Platform',
          groupset: 'SRAM GX Eagle AXS Transmission',
          wheels: 'DT Swiss M 1900 Spline 30mm',
          weight: '12.8 kg',
          highlight: 'Fox 36 Factory Grip2 + Float X Dämpfer',
        },
        {
          name: 'Derjung XC Race Hardtail 29',
          sub: 'Speed Cross Country',
          price: '2.990 €',
          image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
          frame: 'Lightweight Carbon XC Hardtail',
          groupset: 'Shimano XT M8100 1x12',
          wheels: 'DT Swiss X 1900 29"',
          weight: '9.8 kg',
          highlight: 'RockShox Sid SL Ultimate Remote Lockout',
        },
      ],
    },
    'e-mtb': {
      title: 'E-MTB & E-BIKES // POWER SUPPORT',
      badge: 'BOSCH & SHIMANO POWER D74',
      heroText: 'Reichweite ohne Grenzen. Bewältigt die steilsten Anstiege am Hochfelln mit bis zu 85Nm Drehmoment und Smart-System Anbindung.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80',
      specsFocus: [
        { label: 'Motor-Einheit', value: 'Bosch Performance CX Smart System / 85Nm' },
        { label: 'Akkukapazität', value: 'Bosch PowerTube 750Wh integriert' },
        { label: 'Reichweite', value: 'bis zu 140km (Erkundung Chiemgau)' },
        { label: 'Display & Steuerung', value: 'Bosch Kiox 300 & LED Remote' },
      ],
      models: [
        {
          name: 'Derjung E-Peak 750 Fully',
          sub: 'High-End E-MTB All-Mountain',
          price: '6.490 €',
          image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80',
          frame: 'Alu/Carbon Hybrid E-Trail Frame 150mm',
          groupset: 'Shimano XT E-Bike Spec 12s',
          wheels: 'DT Swiss HX 1700 Hybrid 29/27.5 Mullet',
          weight: '23.4 kg',
          highlight: 'Bosch CX 85Nm + 750Wh Akku + Kiox Display',
        },
        {
          name: 'Derjung E-SUV Tourer Chiemgau',
          sub: 'Allround E-Bike mit Vollausstattung',
          price: '4.190 €',
          image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
          frame: 'Comfort Low-Step Alu Hydroform',
          groupset: 'Shimano Deore LinkGlide 10s',
          wheels: 'Schwalbe Marathon Plus Tour 28"',
          weight: '24.8 kg',
          highlight: 'Inkl. Supernova LED Licht & Racktime Gepäckträger',
        },
      ],
    },
  };

  // Calculate Frame Size
  const calculateFrameSize = () => {
    let sizeCm = 0;
    let sizeLetters = 'M';
    if (bikeType === 'rennrad') {
      sizeCm = Math.round(inseam * 0.665);
    } else if (bikeType === 'gravel') {
      sizeCm = Math.round(inseam * 0.66);
    } else {
      sizeCm = Math.round((inseam * 0.57) / 2.54); // inches
    }

    if (height < 165) sizeLetters = 'S (48-51 cm)';
    else if (height < 178) sizeLetters = 'M (52-54 cm)';
    else if (height < 188) sizeLetters = 'L (55-57 cm)';
    else sizeLetters = 'XL (58-61 cm)';

    return { sizeCm, sizeLetters };
  };

  const frameResult = calculateFrameSize();

  const handleProbefahrtClick = (modelName: string) => {
    setSelectedBike(modelName);
    setTestRideModalOpen(true);
    setFormSubmitted(false);
  };

  // Determine current active display data
  const isAll = activeCategory === 'all';
  const categoryKeys = isAll ? Object.keys(bikeCategories) : [activeCategory];
  const activeData = !isAll && bikeCategories[activeCategory] ? bikeCategories[activeCategory] : null;

  return (
    <div className="space-y-20 pb-20">
      {/* CATEGORY NAV SWITCHER */}
      <section className="bg-[#0a1324] text-white py-12 bg-topo border-b-4 border-[#0056c6]">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#0a1324] px-3 py-1 rounded text-xs font-mono font-bold uppercase">
                <Compass className="w-4 h-4" /> BIKES MODELLPROGRAMM D74
              </div>
              <h1 className="text-4xl md:text-6xl font-race italic uppercase font-extrabold text-white mt-2">
                FAHRRÄDER BEI <span className="text-[#0056c6]">RADSPORT DERJUNG</span>
              </h1>
            </div>
          </div>

          {/* Sub-Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 font-race italic text-base uppercase">
            <Link
              to="/bikes"
              className={`px-4 py-2 rounded transition-colors ${
                isAll ? 'bg-[#0056c6] text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Alle Modelle
            </Link>
            <Link
              to="/bikes/premium"
              className={`px-4 py-2 rounded transition-colors ${
                activeCategory === 'premium' ? 'bg-[#0056c6] text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Premium Bikes
            </Link>
            <Link
              to="/bikes/rennrad"
              className={`px-4 py-2 rounded transition-colors ${
                activeCategory === 'rennrad' ? 'bg-[#0056c6] text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Rennrad
            </Link>
            <Link
              to="/bikes/gravel"
              className={`px-4 py-2 rounded transition-colors ${
                activeCategory === 'gravel' ? 'bg-[#0056c6] text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Gravel
            </Link>
            <Link
              to="/bikes/mtb"
              className={`px-4 py-2 rounded transition-colors ${
                activeCategory === 'mtb' ? 'bg-[#0056c6] text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Mountainbikes
            </Link>
            <Link
              to="/bikes/e-mtb"
              className={`px-4 py-2 rounded transition-colors ${
                activeCategory === 'e-mtb' ? 'bg-[#0056c6] text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              E-MTB & E-Bikes
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY SPECIFIC HERO & SPEC SHEET */}
      {activeData && (
        <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <ScrollReveal variant="fade-blur">
            <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="bg-[#0056c6] text-white text-xs font-mono font-bold px-3 py-1 rounded">
                  {activeData.badge}
                </span>
                <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-slate-900">
                  {activeData.title}
                </h2>
                <p className="text-slate-700 font-sans text-base leading-relaxed">
                  {activeData.heroText}
                </p>

                {/* Technical Specs List (Datenblatt Look) */}
                <div className="datenblatt-box rounded p-4 mt-4">
                  <div className="font-race italic font-bold text-lg text-[#0056c6] uppercase mb-2 border-b border-slate-200 pb-1">
                    DARAUF ACHTEN WIR // D74 DATENBLATT
                  </div>
                  <div className="space-y-1 divide-y divide-slate-100 font-mono text-xs">
                    {activeData.specsFocus.map((sf) => (
                      <div key={sf.label} className="datenblatt-row py-1.5">
                        <span className="text-slate-500 uppercase">{sf.label}</span>
                        <span className="font-bold text-slate-900">{sf.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 h-80 rounded overflow-hidden shadow-md">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* BIKE MODEL RASTER */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-1">
            <Zap className="w-4 h-4 text-[#facc15]" /> AKTUELLES MODELL-RASTER
          </div>
          <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-slate-900">
            {isAll ? 'ALLE AKTUELLEN BIKES IM CHIEMGAU' : `MODELLE: ${activeData?.title}`}
          </h2>
        </div>

        <div className="space-y-16">
          {categoryKeys.map((key) => {
            const catObj = bikeCategories[key];
            if (!catObj) return null;
            return (
              <div key={key} className="space-y-6">
                {isAll && (
                  <div className="border-b-2 border-slate-300 pb-2 flex justify-between items-end">
                    <h3 className="text-3xl font-race italic uppercase font-extrabold text-[#0056c6]">
                      {catObj.title}
                    </h3>
                    <Link to={`/bikes/${key}`} className="text-xs font-mono font-bold text-slate-600 hover:text-[#0056c6]">
                      Kategorie Details →
                    </Link>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {catObj.models.map((model) => (
                    <div key={model.name} className="card group rounded border border-slate-200 overflow-hidden flex flex-col justify-between">
                      <div className="relative h-72 bg-slate-900 overflow-hidden">
                        <img
                          src={model.image}
                          alt={model.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        />
                        <div className="absolute top-3 right-3 bg-[#0a1324] text-[#facc15] font-race italic font-black text-xl px-3 py-1 rounded border border-[#0056c6]">
                          {model.price}
                        </div>
                        <div className="absolute bottom-3 left-3 bg-[#0a1324]/80 backdrop-blur-sm text-white font-mono text-xs px-2.5 py-1 rounded">
                          Gewicht: {model.weight}
                        </div>
                      </div>

                      <div className="p-6 bg-white space-y-4 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-mono font-bold text-[#0056c6] uppercase">{model.sub}</div>
                          <h4 className="text-2xl md:text-3xl font-race italic uppercase font-black text-slate-900 mt-1">
                            {model.name}
                          </h4>

                          {/* Specifications Table (Datenblatt) */}
                          <div className="mt-4 datenblatt-box rounded text-xs font-mono divide-y divide-slate-100">
                            <div className="datenblatt-row py-1">
                              <span className="text-slate-500">Rahmen:</span>
                              <span className="font-semibold text-slate-800">{model.frame}</span>
                            </div>
                            <div className="datenblatt-row py-1">
                              <span className="text-slate-500">Schaltung:</span>
                              <span className="font-semibold text-slate-800">{model.groupset}</span>
                            </div>
                            <div className="datenblatt-row py-1">
                              <span className="text-slate-500">Laufräder:</span>
                              <span className="font-semibold text-slate-800">{model.wheels}</span>
                            </div>
                          </div>

                          <div className="mt-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs p-2.5 rounded font-sans flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#0056c6] shrink-0" />
                            <span><strong>Highlight:</strong> {model.highlight}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => handleProbefahrtClick(model.name)}
                            className="w-full bg-[#0056c6] hover:bg-[#0045a3] text-white font-race italic font-bold py-3 px-4 rounded text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform hover:-translate-y-0.5"
                          >
                            <Calendar className="w-4 h-4 text-[#facc15]" />
                            Probefahrt Anfragen
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RAHMENGRÖSSEN RECHNER */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase">
                <Calculator className="w-4 h-4 text-[#facc15]" /> INTERAKTIVER RECHNER
              </div>
              <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-slate-900">
                RAHMENGRÖSSEN- <span className="text-[#0056c6]">RECHNER</span>
              </h2>
              <p className="text-slate-700 font-sans leading-relaxed">
                Ermittelt mit wenigen Klicks eure optimale Rahmengröße für Straßenrennräder, Gravelbikes und Mountainbikes. Für die finale Feinabstimmung bieten wir euch vor Ort in Bergen unser professionelles D74-Laser-Fitting an.
              </p>

              <div className="p-4 bg-[#0a1324] text-white rounded border border-[#0056c6] text-xs font-mono space-y-1">
                <div className="text-[#facc15] font-bold">SO MESST IHR EURE SCHRITTLÄNGE:</div>
                <p className="text-slate-300">
                  Stellt euch barfuß an eine Wand. Klemmt ein Buch zwischen die Beine ganz nach oben und messt den Abstand von der Oberkante des Buches zum Boden in Zentimetern.
                </p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-[#f4f7fa] p-8 rounded border border-slate-300 shadow-md space-y-6">
              <h3 className="text-2xl font-race italic uppercase font-bold text-[#0a1324] border-b border-slate-200 pb-2">
                BERECHNE DEINE RAHMENGRÖSSE
              </h3>

              <div className="space-y-4 font-sans text-sm">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                    Fahrrad-Typ wählen:
                  </label>
                  <select
                    value={bikeType}
                    onChange={(e) => setBikeType(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-slate-900 font-medium focus:ring-2 focus:ring-[#0056c6]"
                  >
                    <option value="rennrad">Rennrad (Aero & Endurance)</option>
                    <option value="gravel">Gravelbike (All-Terrain)</option>
                    <option value="mtb">Mountainbike & E-MTB</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                      Körpergröße (cm): <span className="text-[#0056c6] font-extrabold">{height} cm</span>
                    </label>
                    <input
                      type="range"
                      min="150"
                      max="210"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full accent-[#0056c6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                      Schrittlänge (cm): <span className="text-[#0056c6] font-extrabold">{inseam} cm</span>
                    </label>
                    <input
                      type="range"
                      min="65"
                      max="105"
                      value={inseam}
                      onChange={(e) => setInseam(Number(e.target.value))}
                      className="w-full accent-[#0056c6]"
                    />
                  </div>
                </div>
              </div>

              {/* Calculated Result Box */}
              <div className="datenblatt-box p-6 rounded text-center space-y-2 bg-white">
                <div className="text-xs font-mono text-slate-500 uppercase">DEIN ERGEBNIS // EMPFOHLENE GRÖSSE</div>
                <div className="text-4xl md:text-5xl font-race italic font-black text-[#0056c6]">
                  {frameResult.sizeLetters}
                </div>
                {bikeType !== 'mtb' && (
                  <div className="text-sm font-mono text-slate-700">
                    Spezifische Rahmenhöhe: <strong>ca. {frameResult.sizeCm} cm</strong>
                  </div>
                )}
                <div className="text-xs text-slate-500 pt-1 font-sans">
                  Empfohlene Vorbaulänge: 100-110mm · Sattelstützen-Offset: 15-20mm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBEFAHRT MODAL */}
      {testRideModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 border-2 border-[#0056c6] relative space-y-4">
            <button
              onClick={() => setTestRideModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="inline-flex items-center gap-2 bg-[#0056c6] text-white px-2.5 py-1 rounded text-xs font-mono font-bold uppercase">
              PROBEFAHRT ANFRAGEN // BERGEN D74
            </div>

            <h3 className="text-3xl font-race italic uppercase font-black text-slate-900">
              {selectedBike} TESTEN
            </h3>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-race italic font-bold text-2xl uppercase">Vielen Dank!</h4>
                <p className="text-sm font-sans">
                  Wir haben eure Probefahrt-Anfrage für das <strong>{selectedBike}</strong> erhalten. Wir melden uns in Kürze telefonisch oder per E-Mail zur Terminbestätigung.
                </p>
                <button
                  onClick={() => setTestRideModalOpen(false)}
                  className="mt-4 bg-[#0a1324] text-white font-race italic font-bold px-6 py-2 rounded text-sm uppercase"
                >
                  Schließen
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4 font-sans text-sm"
              >
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Euer Name:</label>
                  <input
                    required
                    type="text"
                    placeholder="Vor- & Nachname"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Telefon / Mobil:</label>
                    <input
                      required
                      type="tel"
                      placeholder="0170 / 1234567"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">E-Mail:</label>
                    <input
                      required
                      type="email"
                      placeholder="euer.name@beispiel.de"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Wunschtermin & Anmerkungen:</label>
                  <textarea
                    rows={2}
                    placeholder="z.B. Nächsten Samstag ca. 10 Uhr, bevorzugte Rahmengröße L..."
                    className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0056c6] hover:bg-[#0045a3] text-white font-race italic font-bold py-3.5 rounded text-lg uppercase shadow-md"
                >
                  Probefahrt Verbindlich Anfragen
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

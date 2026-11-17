import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle2, X } from 'lucide-react';

interface BikeModel {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  frame: string;
  groupset: string;
  weight: string;
  highlight: string;
}

interface CategoryInfo {
  title: string;
  badge: string;
  heroText: string;
  image: string;
  models: BikeModel[];
}

export default function BikesPage() {
  const { category } = useParams<{ category?: string }>();
  const activeCategoryKey = category ? category.toLowerCase() : 'all';

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBikeName, setSelectedBikeName] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categoriesData: Record<string, CategoryInfo> = {
    premium: {
      title: 'Premium Bikes',
      badge: 'Custom Aufbauten',
      heroText: 'Individuelle Meisterstücke auf Maß. Wir fertigen euer Traum-Bike mit handverlesenen High-End Komponenten, maßgeschneiderter Ergonomie und unverwechselbarem Design.',
      image: 'https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794901262267-zk2vz7vi.png',
      models: [
        {
          id: 'p1',
          name: 'Derjung D74 Custom Apex',
          category: 'Premium Custom',
          price: 'ab 8.990 €',
          image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80',
          frame: 'Toray T1100 Custom Carbon',
          groupset: 'SRAM RED AXS E-Tap 12s',
          weight: '6.7 kg',
          highlight: 'Handaufbau im Meister-Lab Bergen',
        },
        {
          id: 'p2',
          name: 'Derjung Chiemgau Titan S',
          category: 'Titan Custom',
          price: 'ab 7.490 €',
          image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
          frame: 'Grade 9 Titan handgeschweißt',
          groupset: 'Shimano Dura-Ace Di2 12s',
          weight: '7.4 kg',
          highlight: 'Lebenslange Rahmen-Garantie',
        },
      ],
    },
    rennrad: {
      title: 'Rennrad',
      badge: 'Aero & Speed',
      heroText: 'Für schnelle Runden um den Chiemsee und anspruchsvolle Anstiege am Hochfelln. Perfekte Aerodynamik, Leichtgewicht und kompromisslose Effizienz.',
      image: 'https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794901322545-f1l849zv.jpg',
      models: [
        {
          id: 'r1',
          name: 'Derjung Aero Veloce D74',
          category: 'Aero Rennrad',
          price: '5.490 €',
          image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80',
          frame: 'Aerodynamic Monocoque Carbon',
          groupset: 'Shimano Ultegra Di2 12s',
          weight: '7.1 kg',
          highlight: 'Vollintegrierte Cockpit-Führung',
        },
        {
          id: 'r2',
          name: 'Derjung Hochfelln Light',
          category: 'Endurance Rennrad',
          price: '4.290 €',
          image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
          frame: 'Superlight Carbon (790g)',
          groupset: 'SRAM Force AXS Wireless 12s',
          weight: '6.9 kg',
          highlight: 'Perfekt für steile Alpenpässe',
        },
      ],
    },
    gravel: {
      title: 'Gravel',
      badge: 'All-Terrain',
      heroText: 'Vom Teer direkt auf die Forstwege im Chiemgau. Vielseitig, stabil und komfortabel für Tagestouren, Bikepacking und Abenteuer.',
      image: 'https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794901388485-1xiklvm4.jpg',
      models: [
        {
          id: 'g1',
          name: 'Derjung Chiemgau Explorer',
          category: 'Gravel Carbon',
          price: '3.790 €',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
          frame: 'Carbon Adventure Spec D74',
          groupset: 'SRAM Rival XPLR AXS 1x12',
          weight: '8.4 kg',
          highlight: '14 Ösen für Rahmentaschen',
        },
        {
          id: 'g2',
          name: 'Derjung TrailGravel Alloy',
          category: 'Gravel Aluminium',
          price: '2.490 €',
          image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
          frame: 'Triple-Butted 6061 Aluminium',
          groupset: 'Shimano GRX RX810 2x11',
          weight: '9.2 kg',
          highlight: 'Komfortable All-Road Geometrie',
        },
      ],
    },
    mtb: {
      title: 'Mountainbikes',
      badge: 'Trail & Enduro',
      heroText: 'Eure Waffe für alpine Trails, Wurzelpassagen und steile Mountainbike-Strecken. Maximale Kontrolle und Schluckfreudiges Fahrwerk.',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1600&q=80',
      models: [
        {
          id: 'm1',
          name: 'Derjung Hochfelln Trail 140',
          category: 'All-Mountain Fully',
          price: '4.890 €',
          image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=80',
          frame: 'Full Carbon 29er Trail',
          groupset: 'SRAM GX Eagle Transmission',
          weight: '12.8 kg',
          highlight: 'Fox 36 Factory 140mm Fahrwerk',
        },
        {
          id: 'm2',
          name: 'Derjung XC Race Hardtail',
          category: 'XC Hardtail',
          price: '2.990 €',
          image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
          frame: 'Ultralight XC Carbon Hardtail',
          groupset: 'Shimano XT M8100 1x12',
          weight: '9.8 kg',
          highlight: 'RockShox SID SL Remote Lockout',
        },
      ],
    },
    'e-mtb': {
      title: 'E-MTB',
      badge: 'Power Support',
      heroText: 'Erreicht neue Höhen ohne Kompromisse. Starke Antriebe von Bosch und Shimano liefern die Power für lange Touren und steilste Anstiege.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1600&q=80',
      models: [
        {
          id: 'e1',
          name: 'Derjung E-Peak 750 Fully',
          category: 'E-MTB All-Mountain',
          price: '6.490 €',
          image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80',
          frame: 'Carbon/Alu Hybrid Frame',
          groupset: 'Bosch CX 85Nm + 750Wh Akkupack',
          weight: '23.2 kg',
          highlight: 'Bosch Smart System & Kiox Display',
        },
        {
          id: 'e2',
          name: 'Derjung E-Tour Hardtail',
          category: 'E-Touring Hardtail',
          price: '3.990 €',
          image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
          frame: 'Hydroformed Alu E-Frame',
          groupset: 'Shimano EP801 85Nm + 630Wh',
          weight: '21.8 kg',
          highlight: 'Inkl. Lichtanlage & Gepäckträger',
        },
      ],
    },
  };

  // Determine current active category or default to 'premium' when '/bikes' is visited
  const currentCategoryKey = activeCategoryKey in categoriesData ? activeCategoryKey : 'premium';
  const currentData = categoriesData[currentCategoryKey];

  // 4 Beratungspunkte as requested
  const consultationPoints = [
    {
      num: '01',
      title: 'Ergonomie & Bikefitting',
      desc: 'Wir passen Rahmenhöhe, Vorbaulänge und Sattelposition exakt an eure Anatomie an, für schmerzfreies Radfahren.',
    },
    {
      num: '02',
      title: 'Probefahrt im Chiemgau',
      desc: 'Testet euer Wunschmodell direkt auf realen Strecken vor unserem Laden in Bergen im Chiemgau.',
    },
    {
      num: '03',
      title: 'Individuelle Komponenten-Wahl',
      desc: 'Wir passen Übersetzungen, Laufräder, Reifen und Anbauteile genau an eure Fahrweise an.',
    },
    {
      num: '04',
      title: 'Meisterwerkstatt & Erstinspektion',
      desc: 'Jedes Bike verlässt unseren Laden betriebsbereit eingestellt. Die erste Inspektion nach 500km ist inklusive.',
    },
  ];

  const handleOpenModal = (bikeName: string) => {
    setSelectedBikeName(bikeName);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* CATEGORY SELECTOR TABS */}
      <div className="bg-zinc-100 border-b border-zinc-200 py-4 sticky top-[73px] z-40 backdrop-blur-md bg-zinc-100/90">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8 flex items-center justify-start md:justify-center gap-3 overflow-x-auto no-scrollbar text-sm font-semibold">
          <Link
            to="/bikes/premium"
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              currentCategoryKey === 'premium' ? 'bg-[#E6007E] text-white font-bold' : 'bg-white text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Premium Bikes
          </Link>
          <Link
            to="/bikes/rennrad"
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              currentCategoryKey === 'rennrad' ? 'bg-[#E6007E] text-white font-bold' : 'bg-white text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Rennrad
          </Link>
          <Link
            to="/bikes/gravel"
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              currentCategoryKey === 'gravel' ? 'bg-[#E6007E] text-white font-bold' : 'bg-white text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Gravel
          </Link>
          <Link
            to="/bikes/mtb"
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              currentCategoryKey === 'mtb' ? 'bg-[#E6007E] text-white font-bold' : 'bg-white text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            Mountainbikes
          </Link>
          <Link
            to="/bikes/e-mtb"
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              currentCategoryKey === 'e-mtb' ? 'bg-[#E6007E] text-white font-bold' : 'bg-white text-zinc-700 hover:text-[#E6007E]'
            }`}
          >
            E-MTB
          </Link>
        </div>
      </div>

      {/* HERO BILD & HEADLINE */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={currentData.image}
            alt={currentData.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                {currentData.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                {currentData.title}
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                {currentData.heroText}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => handleOpenModal(currentData.title)}
                  className="primary-button text-base"
                >
                  Probefahrt anfragen
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TEXT ABSCHNITT & VIER BERATUNGSPUNKTE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Erstklassige Beratung
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Worauf wir bei eurem Bike achten
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            Ein hervorragendes Fahrrad ist mehr als die Summe seiner Einzelteile. Wir sorgen dafür, dass Ergonomie, Fahrverhalten und Übersetzung genau zu euch und euren Strecken im Chiemgau passen.
          </p>
        </div>

        {/* 4 BERATUNGSPUNKTE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultationPoints.map((pt) => (
            <div key={pt.num} className="card p-8 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-black text-[#E6007E] block mb-2">
                  {pt.num}
                </span>
                <h3 className="text-xl font-bold text-zinc-900">{pt.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mt-2">
                  {pt.desc}
                </p>
              </div>
              <div className="pt-2">
                <CheckCircle2 className="w-5 h-5 text-[#E6007E]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODELL RASTER */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest block mb-2">
              Modellauswahl
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Modelle in dieser Kategorie
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentData.models.map((model) => (
            <div key={model.id} className="card overflow-hidden flex flex-col">
              <div className="relative h-80 bg-zinc-100 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white text-zinc-900 px-4 py-1.5 rounded-full text-sm font-black shadow">
                  {model.price}
                </div>
              </div>

              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#E6007E] uppercase tracking-wider">
                    {model.category}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">{model.name}</h3>
                  <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 text-xs text-zinc-600 space-y-2 font-mono">
                    <div><strong className="text-zinc-900">Rahmen:</strong> {model.frame}</div>
                    <div><strong className="text-zinc-900">Schaltung:</strong> {model.groupset}</div>
                    <div><strong className="text-zinc-900">Gewicht:</strong> {model.weight}</div>
                    <div className="text-[#E6007E] font-bold"><strong className="text-zinc-900">Highlight:</strong> {model.highlight}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenModal(model.name)}
                    className="primary-button w-full text-sm"
                  >
                    Probefahrt anfragen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBEFAHRT MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative border border-zinc-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-800"
            >
              <X className="w-6 h-6" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Anfrage erhalten!</h3>
                <p className="text-zinc-600 text-sm">
                  Vielen Dank für eure Anfrage zur Probefahrt für <strong>{selectedBikeName}</strong>. Wir melden uns in Kürze zur Terminbestätigung.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="secondary-button text-sm mt-4"
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
                className="space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-[#E6007E] text-xs font-bold uppercase tracking-wider">
                    Unverbindlich testen
                  </span>
                  <h3 className="text-2xl font-black text-zinc-900">
                    Probefahrt anfragen
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Modell: <strong className="text-zinc-800">{selectedBikeName || currentData.title}</strong>
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Euer Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Vor- und Nachname"
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">E-Mail Adresse</label>
                  <input
                    type="email"
                    required
                    placeholder="eure.email@beispiel.de"
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Telefonnummer</label>
                  <input
                    type="tel"
                    placeholder="0170 1234567"
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Wunschtermin & Nachricht</label>
                  <textarea
                    rows={3}
                    placeholder="Wann passt es euch am besten?"
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="primary-button w-full text-base">
                    Anfrage absenden
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

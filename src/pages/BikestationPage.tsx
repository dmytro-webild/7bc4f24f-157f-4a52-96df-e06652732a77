import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BikestationPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const bikestationGallery = [
    {
      title: 'Ausgangspunkt Hochfelln-Talstation',
      desc: 'Direkter Einstieg in die Trails und Forstwege der Chiemgauer Alpen.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'E-MTB Testflotte D74',
      desc: 'Neueste Bosch CX Fully Flotte bereit für ganztägige Testfahrten am Berg.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Gravel-Teststrecke Chiemgau',
      desc: 'Flache Schotterpassagen und sanfte Anstiege direkt ab Bikestation.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Werkzeug- & Akku-Ladestation',
      desc: 'Kostenlose Bosch Schnellladestation und Luftpumpen-Terminal vor der Station.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Guiding & Tourenberatung',
      desc: 'Routeneffekte und GPX-Tracks für die schönsten Hüttentouren um Bergen.',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Rennrad-Startpunkt Chiemsee-Runde',
      desc: 'Der perfekte Ausgangspunkt für die klassische 55km See-Umfahrung.',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % bikestationGallery.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) - 1 + bikestationGallery.length) % bikestationGallery.length);
    }
  };

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=2000&q=80"
            alt="Bikestation Impressionen"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                Testcenter am Hochfelln
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                Bikestation Impressionen
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                Unsere Teststation am Fuß des Hochfelln. Testet aktuelle Modelle direkt auf realen Chiemgauer Strecken.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EINLEITUNG & BILDERRASTER */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Testen unter realen Bedingungen
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Chiemgauer Alpen direkt vor der Tür
          </h2>
          <p className="text-zinc-600 text-base leading-relaxed">
            An unserer Bikestation könnt ihr Rennräder, Gravelbikes und E-MTBs direkt am Berg ausprobieren. Klickt auf die Aufnahmen für die Großansicht.
          </p>
        </div>

        {/* BILDERRASTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikestationGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="card group cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 shadow">
                    <Maximize2 className="w-4 h-4 text-[#E6007E]" /> Bild vergrößern
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-1">
                <h3 className="text-xl font-bold group-hover:text-[#E6007E] transition-colors">{item.title}</h3>
                <p className="text-zinc-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link to="/bikes" className="primary-button text-base">
            Probefahrt für ein Testbike anfragen
          </Link>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-[#E6007E] z-50 p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#E6007E] z-50 p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#E6007E] z-50 p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={bikestationGallery[lightboxIndex].image}
              alt={bikestationGallery[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center text-white space-y-1">
              <h3 className="text-2xl font-bold">{bikestationGallery[lightboxIndex].title}</h3>
              <p className="text-zinc-300 text-sm">{bikestationGallery[lightboxIndex].desc}</p>
              <div className="text-xs text-zinc-500 pt-1">
                {lightboxIndex + 1} von {bikestationGallery.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

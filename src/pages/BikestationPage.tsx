import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BikestationPage() {
  const bikestationGallery = [
    {
      title: 'Ausgangspunkt Hochfelln-Talstation',
      desc: 'Direkter Einstieg in die Trails und Forstwege der Chiemgauer Alpen.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=900&q=80',
      tag: 'Teststation Bergen',
    },
    {
      title: 'E-MTB Testflotte D74',
      desc: 'Neueste Bosch CX Fully Flotte bereit für ganztägige Testfahrten am Berg.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80',
      tag: 'E-MTB Flotte',
    },
    {
      title: 'Gravel-Teststrecke Chiemgau',
      desc: 'Flache Schotterpassagen und sanfte Anstiege direkt ab Bikestation.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
      tag: 'Gravel Trail',
    },
    {
      title: 'Werkzeug- & Akku-Ladestation',
      desc: 'Kostenlose Bosch Schnellladestation und Luftpumpen-Terminal vor der Station.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80',
      tag: 'Service Hub',
    },
    {
      title: 'Guiding & Tourenberatung',
      desc: 'Routeneffekte und GPX-Tracks für die schönsten Hüttentouren um Bergen.',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=80',
      tag: 'Touring Hub',
    },
    {
      title: 'Rennrad-Startpunkt Chiemsee-Runde',
      desc: 'Der perfekte Ausgangspunkt für die klassische 55km See-Umfahrung.',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80',
      tag: 'Speed Start',
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
                <Mountain className="w-4 h-4" /> GALERIE // BIKESTATION CHIEMGAU
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                BIKESTATION <span className="text-[#0056c6]">IMPRESSIONEN</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Unsere Teststation am Fuß des Hochfelln in Bergen im Chiemgau. Testet aktuelle Rennräder, Gravelbikes und E-MTBs direkt im echten Gelände.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikestationGallery.map((item, idx) => (
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
              to="/bikes"
              className="inline-flex items-center gap-2 bg-[#0056c6] text-white font-race italic font-bold px-8 py-3.5 rounded text-lg uppercase shadow-md hover:bg-[#0045a3]"
            >
              Testbike Auswählen & Probefahrt Buchen
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

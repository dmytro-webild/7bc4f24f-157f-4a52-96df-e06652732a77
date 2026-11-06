import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  const teamGallery = [
    {
      title: 'Meisterwerkstatt in Aktion',
      desc: 'Feinjustierung einer Shimano Di2 Schaltung mit Drehmomentprüfer.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
      tag: 'Werkstatt D74',
    },
    {
      title: 'Ergonomie & Custom Fitting',
      desc: 'Laser-Winkelmessung der Knie- & Fußstellung für optimale Kraftübertragung.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
      tag: 'Bikefitting',
    },
    {
      title: 'Hans & Florian Derjung',
      desc: 'Zwei Generationen Radsport-Meisterwissen im Chiemgau.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      tag: 'Gründer & Meister',
    },
    {
      title: 'D74 Rennteam Support',
      desc: 'Betreuung unserer regionalen Rennfahrer vor dem Hochfelln Bergrennen.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=900&q=80',
      tag: 'Rennsport D74',
    },
    {
      title: 'Fox Suspension Wartungslabor',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=80',
      desc: 'Dämpferprüfstand und Ölwechsel unter Reinraum-Bedingungen.',
      tag: 'Suspension Lab',
    },
    {
      title: 'Beratung im Showroom Bergen',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80',
      desc: 'Persönliche Modellberatung auf Augenhöhe.',
      tag: 'Store Crew',
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
                <Users className="w-4 h-4" /> GALERIE // TEAM IMPRESSIONEN
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                UNSER TEAM <span className="text-[#0056c6]">IMPRESSIONEN</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Blickt hinter die Kulissen unserer Meisterwerkstatt in Bergen im Chiemgau und seht unser Team bei der täglichen Arbeit am Fahrrad.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamGallery.map((item, idx) => (
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
              to="/wir"
              className="inline-flex items-center gap-2 bg-[#0056c6] text-white font-race italic font-bold px-8 py-3.5 rounded text-lg uppercase shadow-md hover:bg-[#0045a3]"
            >
              Mehr über unsere Team-Geschichte lesen
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

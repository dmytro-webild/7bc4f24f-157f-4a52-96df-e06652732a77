import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';

export default function WirPage() {
  const timelineEvents = [
    {
      year: '1986',
      title: 'Gründung in Bergen im Chiemgau',
      desc: 'Hans Derjung gründet die Werkstatt D74 in Bergen. Was als leidenschaftlicher Service für lokale Rennfahrer begann, wuchs rasch zu einer festen Institution im Chiemgau.',
    },
    {
      year: '1995',
      title: 'Meisterbrief & Erweiterung',
      desc: 'Mit dem Meisterbrief im Zweiradmechaniker-Handwerk und dem Neubau des Showrooms wird der Grundstein für hochspezialisierten Custom-Aufbau gelegt.',
    },
    {
      year: '2008',
      title: 'Gravel & Mountainbike Pionier',
      desc: 'Erweiterung des Sortiments um führende MTB- und Gravelbike-Marken für die anspruchsvollen Strecken der Chiemgauer Alpen.',
    },
    {
      year: '2018',
      title: 'E-Performance & Dienstrad-Leasing',
      desc: 'Einführung von High-Tech Diagnosestationen für Bosch- und Shimano-Antriebe sowie Partnerschaften mit führenden Leasing-Anbietern.',
    },
    {
      year: 'Heute',
      title: 'Tradition & Moderne vereint',
      desc: 'Seit fast 40 Jahren bieten wir euch persönliche Beratung, modernste Werkstatt-Technik und unbändige Begeisterung für den Radsport.',
    },
  ];

  const team = [
    {
      name: 'Hans Derjung',
      role: 'Gründer & Zweiradmechaniker-Meister',
      desc: 'Über 38 Jahre Erfahrung auf und neben der Rennstrecke. Hans berät euch mit fundierter Fachkenntnis und Leidenschaft.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Florian Derjung',
      role: 'Werkstattleiter & E-Bike Specialist',
      desc: 'Experte für elektronische Schaltungen, Fahrwerksabstimmungen und Diagnostik moderner E-Bike-Systeme.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Michael Huber',
      role: 'Verkaufsberatung & Bikefitting',
      desc: 'Sorgt für das optimale Zusammenspiel von Ergonomie und Bike-Geometrie für beschwerdefreies Fahren.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=2000&q=80"
            alt="Über uns Radsport Derjung"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                Über Radsport Derjung
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                Wir über uns
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                Leidenschaft für Mechanik, Präzision im Detail und echte Beratung im Chiemgau seit 1986.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TEXT-BILD ABSCHNITTE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                alt="Werkstatt Bergen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
                Unsere Philosophie
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Ein Fahrrad ist erst perfekt, wenn es zu euch passt.
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Bei Radsport Derjung geht es nicht nur um den Verkauf von Fahrrädern, sondern darum, dass ihr bei jeder Fahrt das beste Gefühl erlebt. Wir beraten euch ohne Hektik und gehen genau auf eure Wünsche und Anforderungen ein.
              </p>
              <p className="text-zinc-600 text-base leading-relaxed">
                Ob sportlicher Rennradfahrer, Mountainbiker in den Chiemgauer Alpen oder Freizeitradler – wir unterstützen euch mit Fachkompetenz und Leidenschaft.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-200">
                <div>
                  <div className="text-3xl font-black text-[#E6007E]">38+</div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mt-1">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#E6007E]">100%</div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mt-1">Meisterwerkstatt</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PORTRÄT / TEAM ABSCHNITT */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
              Porträts & Mannschaft
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Eure Ansprechpartner in Bergen
            </h2>
            <p className="text-zinc-600 text-sm md:text-base">
              Hinter Radsport Derjung steht ein engagiertes Team von Radsportlern und Technikern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card overflow-hidden flex flex-col">
                <div className="relative h-80 overflow-hidden bg-zinc-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <div className="text-xs font-bold text-[#E6007E] uppercase tracking-wider mt-0.5">
                      {member.role}
                    </div>
                    <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZEITLEISTE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Geschichte & Meilensteine
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Unsere Zeitleiste
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {timelineEvents.map((item) => (
            <ScrollReveal key={item.year} variant="slide-up">
              <div className="flex flex-col md:flex-row gap-6 p-8 bg-white border border-zinc-200 rounded-xl hover:border-[#E6007E] transition-colors shadow-sm">
                <div className="md:w-32 shrink-0">
                  <span className="text-3xl font-black text-[#E6007E] block">
                    {item.year}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 text-center pt-8">
        <div className="bg-zinc-950 text-white rounded-2xl p-12 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Besucht uns in Bergen im Chiemgau
          </h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-sm md:text-base">
            Kommt vorbei und lasst euch persönlich beraten oder vereinbart einen Termin für eure Probefahrt.
          </p>
          <div className="pt-2">
            <Link to="/kontakt" className="primary-button text-base">
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

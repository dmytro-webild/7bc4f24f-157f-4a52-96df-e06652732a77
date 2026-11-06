import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Award, Flag, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WirPage() {
  const timelineEvents = [
    {
      year: '1986',
      bib: '#1986',
      title: 'GRÜNDUNG IN BERGEN IM CHIEMGAU',
      subtitle: 'Vom Rennfahrer-Werkstattraum zum Fachgeschäft',
      desc: 'Hans Derjung gründet die Rennsportwerkstatt D74 in Bergen. Ursprünglich als reiner Speichen- & Rahmen-Service für regionale Straßenrennfahrer gedacht, wächst schnell die Nachfrage im gesamten Chiemgau.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
      specs: ['Gründer: Hans Derjung', 'Fokus: Straßensport', 'Renncode: D74-BERGEN'],
    },
    {
      year: '1995',
      bib: '#1995',
      title: 'ERWEITERUNG & MEISTERBRIEF',
      subtitle: 'Offizielle Meisterwerkstatt D74',
      desc: 'Neubau des heutigen Showrooms in der Bahnhofstraße Bergen. Erlangung des Zweiradmechanikermeister-Titels und Spezialisierung auf maßgeschneiderte Custom-Rennräder.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      specs: ['Meisterbetrieb seit 1995', 'Showroom: 350 m²', 'Custom Bausätze'],
    },
    {
      year: '2008',
      bib: '#2008',
      title: 'PIONIERARBEIT FÜR MOUNTAINBIKE & GRAVEL',
      subtitle: 'Alpenüberquerung & Chiemgauer Trails',
      desc: 'Aufnahme führender MTB- und Gravel-Marken. Radsport Derjung etabliert sich als erste Anlaufstelle für Alpenüberquerer und Trailbiker am Fuße des Hochfelln.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      specs: ['MTB Testcenter', 'Gravel Setup Lab', 'Trail-Guide Service'],
    },
    {
      year: '2018',
      bib: '#2018',
      title: 'E-PERFORMANCE & LEASING D74',
      subtitle: 'High-Tech Diagnose & Dienstrad-Zentrum',
      desc: 'Erweiterung um moderne Bosch & Shimano Diagnosestationen. Radsport Derjung wird Premium-Partner von JobRad, Bikeleasing und BusinessBike für Gehaltsumwandlung.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80',
      specs: ['JobRad Zertifikat', 'Bosch Smart System', 'E-MTB Spezialisten'],
    },
    {
      year: '2024',
      bib: '#2024',
      title: 'RADSPORT DERJUNG HEUTE',
      subtitle: 'Tradition trifft modernstes Ergonomie- & Werkstatt-Lab',
      desc: 'Über 38 Jahre Erfahrung. Wir verbinden Rennsport-DNA mit modernstem Bikefitting, Werkstatt-Präzision und familiärer Beratung für Biker aller Leistungsstufen.',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
      specs: ['38+ Jahre im Chiemgau', 'Meister-Werkstatt', '100% Kundenzufriedenheit'],
    },
  ];

  const teamMembers = [
    {
      name: 'Hans Derjung',
      role: 'Gründer & Zweirad-Meister',
      exp: '38+ Jahre Radsporterfahrung',
      desc: 'Ehemaliger Straßenrennfahrer. Hans ist Herz und Seele des Ladens. Er kennt jede Speiche und jede Steigung im Chiemgau.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      fav: 'Custom Aero Rennrad & Hochfelln-Sprints',
    },
    {
      name: 'Florian Derjung',
      role: 'Werkstattleiter & E-Bike Specialist',
      exp: '14 Jahre Werkstattpraxis',
      desc: 'Spezialist für elektronische Schaltungen (Di2, AXS), Bosch Diagnostik und komplexe Fahrwerksabstimmungen für MTB Fully.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      fav: 'Enduro Fully & Chiemgau Gravel Trails',
    },
    {
      name: 'Michael "Michi" Huber',
      role: 'Bikefitting & Verkaufsberatung',
      exp: 'Rennrad-Kaderfahrer',
      desc: 'Michi passt euch das Rad ergonomisch perfekt an. Keine Knieschmerzen, kein Taubheitsgefühl – nur maximale Watt-Ausbeute.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      fav: 'Speed Rennrad Runden um den Chiemsee',
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
                <Flag className="w-4 h-4" /> SEIT 1986 IN BERGEN IM CHIEMGAU
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                WIR SIND <span className="text-[#0056c6]">RADSPORT DERJUNG</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Leidenschaft für Mechanik, Präzision im Detail und echte Chiemgauer Gastfreundschaft. Erfahrt hier alles über unsere Geschichte, unser Team und unsere Philosophie.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PHILOSOPHIE & PORTRÄT TEXT-BILD ABSCHNITT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                alt="Werkstatt Derjung Bergen"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0a1324]/90 backdrop-blur-md p-4 rounded text-white border border-[#0056c6] flex justify-between items-center">
                <div>
                  <div className="font-race italic font-bold text-xl text-[#facc15] uppercase">
                    MEISTERWERKSTATT D74 BERGEN
                  </div>
                  <div className="text-xs text-slate-300 font-mono">
                    Qualität, Ehrlichkeit & Präzision seit 1986
                  </div>
                </div>
                <span className="bg-[#0056c6] text-white text-xs font-mono px-2.5 py-1 rounded font-bold">
                  D74 LAB
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase">
                <Heart className="w-4 h-4 text-[#facc15]" /> UNSERE PHILOSOPHIE
              </div>
              <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-slate-900 leading-tight">
                "EIN FAHRRAD IST ERST PERFEKT, WENN ES <span className="text-[#0056c6]">ZU EUCH PASST"</span>
              </h2>

              <p className="text-slate-700 font-sans leading-relaxed">
                Bei Radsport Derjung dreht sich alles darum, dass ihr auf jedem Kilometer Freude am Fahren habt. Wir sind keine anonymer Kettenhändler – wir sind leidenschaftliche Schrauber und Sportler aus Bergen im Chiemgau.
              </p>

              <p className="text-slate-700 font-sans leading-relaxed">
                Ob ihr eure ersten Runden um den Chiemsee drehen wollt, eine maßgeschneiderte Übersetzung für den Hochfelln sucht oder euer E-MTB für den nächsten Trail fit gemacht werden muss – wir beraten euch persönlich, kompetent und ohne Hektik.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded border border-slate-200 shadow-sm">
                  <div className="font-race italic font-extrabold text-2xl text-[#0056c6]">100% PERFEKTION</div>
                  <div className="text-xs text-slate-600 font-sans mt-1">Jedes Bike wird vor der Übergabe von Meisterhand geprüft.</div>
                </div>
                <div className="p-4 bg-white rounded border border-slate-200 shadow-sm">
                  <div className="font-race italic font-extrabold text-2xl text-[#facc15]">CHIEMGAU DNA</div>
                  <div className="text-xs text-slate-600 font-sans mt-1">Erprobte Setups für die Straßen & Trails der Region.</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ZEITLEISTE MIT STARTNUMMERN */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-[#facc15]" /> CHIEMGAU RACE HISTORY
            </div>
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              UNSERE ZEITLEISTE <span className="text-[#0056c6]">(STARTNUMMERN)</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              Verfolgt die wichtigsten Etappen von Radsport Derjung seit 1986 im Stil von klassischen Startnummern.
            </p>
          </div>

          <div className="space-y-12">
            {timelineEvents.map((item, index) => (
              <ScrollReveal key={item.year} variant="slide-up">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f4f7fa] p-6 md:p-10 rounded border border-slate-200 hover:border-[#0056c6] transition-colors">
                  {/* Startnummer Bib Column */}
                  <div className="lg:col-span-3 flex justify-center">
                    <div className="startnummer-badge w-48 h-56 p-6 flex flex-col justify-between items-center text-center">
                      <div className="text-2xs font-mono uppercase text-slate-500">STAGE NO. 0{index + 1}</div>
                      <div className="text-5xl font-extrabold text-[#0a1324] font-race italic">{item.bib}</div>
                      <div className="w-full bg-[#0056c6] text-white py-1 text-xs font-mono font-bold uppercase rounded">
                        JAHR {item.year}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="text-xs font-mono font-bold text-[#0056c6] uppercase">{item.subtitle}</div>
                    <h3 className="text-3xl font-race italic uppercase font-black text-slate-900">{item.title}</h3>
                    <p className="text-slate-700 font-sans text-sm md:text-base leading-relaxed">{item.desc}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.specs.map((s) => (
                        <span key={s} className="bg-white border border-slate-300 text-slate-700 text-xs font-mono px-2.5 py-1 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="lg:col-span-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded border border-slate-300 shadow-sm"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PORTRÄT ABSCHNITT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-2">
              <Users className="w-4 h-4 text-[#facc15]" /> DIE MENSCHEN HINTER D74
            </div>
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              UNSER TEAM IN <span className="text-[#0056c6]">BERGEN</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              Kompetenz, Leidenschaft und ein offenes Ohr für eure Wünsche. Wir bringen euch aufs Rad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((m) => (
              <div key={m.name} className="card rounded overflow-hidden border border-slate-200 flex flex-col justify-between">
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a1324] text-[#facc15] text-xs font-mono font-bold px-2.5 py-1 rounded border border-[#0056c6]">
                    {m.exp}
                  </div>
                </div>

                <div className="p-6 bg-white space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-race italic uppercase font-extrabold text-slate-900">
                      {m.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#0056c6] uppercase mb-2">
                      {m.role}
                    </div>
                    <p className="text-slate-600 text-sm font-sans leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                    <span className="font-bold text-[#0a1324]">Lieblingsstrecke:</span> {m.fav}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to Team Impressionen */}
          <div className="text-center pt-10">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 bg-[#0056c6] hover:bg-[#0045a3] text-white px-8 py-3.5 rounded font-race italic font-bold uppercase text-lg shadow-md"
            >
              Mehr Team Impressionen ansehen
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

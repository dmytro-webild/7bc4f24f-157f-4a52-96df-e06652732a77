import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Wrench, CheckCircle2, Clock, ShieldCheck, Cpu, Calendar } from 'lucide-react';

export default function WerkstattPage() {
  const [selectedService, setSelectedService] = useState('Grosse Jahresinspektion');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const werkstattLeistungen = [
    {
      title: 'Kleine Jahresinspektion',
      price: '69 €',
      time: '24-48 Std',
      points: [
        'Sicherheits-Check aller Schraubverbindungen mit Drehmoment',
        'Bremsbelag- & Scheibenverschleißprüfung',
        'Schaltung einstellen & Kette beurteilen',
        'Reifendruck- & Laufflächenkontrolle',
        'Lichtanlagenprüfung',
      ],
      badge: 'Basis Check',
    },
    {
      title: 'Grosse Jahresinspektion D74',
      price: '129 €',
      time: '24-48 Std',
      points: [
        'Inklusive aller Leistungen der kleinen Inspektion',
        'Zentrieren beider Laufräder im Speichenständer',
        'Reinigung & Schmierung des gesamten Antriebsstrangs',
        'Steuersatz- & Tretlager-Demontage, Nachfetten',
        'Schaltzug-Erneuerung & Hydraulikbremsen-Druckpunktprüfung',
        'Probefahrt durch Meister',
      ],
      badge: 'Empfehlung',
    },
    {
      title: 'E-Bike Diagnostik & Service',
      price: '99 €',
      time: '24 Std',
      points: [
        'Software-Update (Bosch, Shimano STEPS, Specialized)',
        'Akku-Kapazitäts- und Kapazitätsmessung mit Prüfprotokoll',
        'Motorbefestigung & Sensor-Feinjustierung',
        'Fehlerspeicher auslesen & Bereinigen',
        'Kontakt-Korrosionsschutz & Stecker-Pflege',
      ],
      badge: 'Smart System',
    },
    {
      title: 'Dämpfer & Gabel Lab-Service',
      price: 'ab 119 €',
      time: '48 Std',
      points: [
        'O-Ring- & Abstreifer-Erneuerung (Fox Racing & RockShox)',
        'Dämpfungsöl-Wechsel mit Original-Herstellervorgabe',
        'Stickstoff-Kammer Befüllung',
        'Luftkammerservice & SAG-Feinabstimmung auf Fahrergewicht',
      ],
      badge: 'Suspension Lab',
    },
  ];

  const ablaufSchritte = [
    {
      nr: '01',
      title: 'TERMIN & ONLINE-ANMELDUNG',
      desc: 'Bucht euren Wunschtermin bequem online oder bringt euer Bike direkt in unsere Meisterwerkstatt nach Bergen.',
    },
    {
      nr: '02',
      title: 'DATENBLATT-AUFNAHME',
      desc: 'Gemeinsam mit unserem Werkstattmeister besprechen wir alle Mängel und legen das Datenblatt fest – transparente Kosten ohne Überraschungen.',
    },
    {
      nr: '03',
      title: 'MEISTERSERVICE D74',
      desc: 'Präzisionsarbeit mit Drehmoment-Protokoll, Diagnosesoftware und Original-Ersatzteilen namhafter Hersteller.',
    },
    {
      nr: '04',
      title: 'TESTFAHRT & ÜBERGABE',
      desc: 'Nach ausgiebiger Probefahrt durch den Meister ist euer Bike abholbereit – inklusive 12 Monaten Werkstattgarantie.',
    },
  ];

  const galleryImages = [
    {
      title: 'Präzisions-Werkzeuge D74 Lab',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Bosch & Shimano Diagnosestation',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Custom Laufradbau & Speichenzentrierung',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Fox Suspension Wartung',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=80',
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
                <Wrench className="w-4 h-4" /> MEISTERWERKSTATT D74 BERGEN IM CHIEMGAU
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                WERKSTATT & <span className="text-[#0056c6]">MEISTERSERVICE</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Ob professionelle Jahresinspektion, E-Bike Diagnose oder kompletter Fahrwerksservice – eure Bikes sind bei unserem Meisterteam in den besten Händen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LEISTUNGEN ALS DATENBLATT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4 text-[#facc15]" /> PRÄZISION NACH NORM
            </div>
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              WERKSTATT-LEISTUNGEN <span className="text-[#0056c6]">(DATENBLATT)</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              Klare Preise, definierte Prüfpunkte und garantierte Qualität bei jedem Werkstattauftrag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {werkstattLeistungen.map((item) => (
              <div key={item.title} className="card rounded border border-slate-200 overflow-hidden flex flex-col justify-between">
                <div className="p-6 bg-[#0a1324] text-white flex justify-between items-center border-b-2 border-[#0056c6]">
                  <div>
                    <span className="bg-[#facc15] text-[#0a1324] text-xs font-mono font-bold px-2 py-0.5 rounded uppercase">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl font-race italic uppercase font-extrabold mt-2 text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-race italic font-extrabold text-[#facc15]">
                      {item.price}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      Dauer: {item.time}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-[#0056c6] uppercase">
                      Prüf- & Serviceprotokoll:
                    </div>
                    <ul className="space-y-2 font-sans text-sm text-slate-700">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="#buchung"
                      onClick={() => setSelectedService(item.title)}
                      className="w-full bg-[#0056c6] hover:bg-[#0045a3] text-white font-race italic font-bold py-2.5 rounded text-center block uppercase text-sm tracking-wide"
                    >
                      Diesen Service Wählen
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ABLAUF IN 4 SCHRITTEN */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-[#facc15]" /> SCHNELL & TRANSPARENT
            </div>
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              ABLAUF IN <span className="text-[#0056c6]">4 SCHRITTEN</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              So einfach bringt ihr euer Fahrrad in unsere Meisterwerkstatt nach Bergen im Chiemgau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ablaufSchritte.map((step) => (
              <div key={step.nr} className="bg-[#f4f7fa] p-6 rounded border border-slate-300 relative space-y-3">
                <div className="text-5xl font-race italic font-black text-[#0056c6]">
                  {step.nr}
                </div>
                <h3 className="text-xl font-race italic uppercase font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERKSTATT BUCHUNGSFORMULAR */}
      <section id="buchung" className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="slide-up">
          <div className="bg-[#0a1324] text-white p-8 md:p-12 rounded border-2 border-[#0056c6] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#0a1324] px-3 py-1 rounded text-xs font-mono font-bold uppercase">
                <Calendar className="w-4 h-4" /> ONLINE TERMINE D74
              </div>
              <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-white leading-tight">
                WERKSTATT-TERMIN <br />
                <span className="text-[#0056c6]">DIREKT BUCHEN</span>
              </h2>
              <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed">
                Wählt euren gewünschten Service und Wunschtermin. Wir bestätigen euren Werkstatttermin schnellstmöglich.
              </p>

              <div className="space-y-3 font-sans text-xs text-slate-300 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#facc15]" />
                  <span>Kostenlose Vorab-Diagnose bei Annahme</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#facc15]" />
                  <span>Öffnungszeiten: Di-Fr 08:30-18:00, Sa 09:00-13:00</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white text-slate-900 p-6 md:p-8 rounded shadow-md space-y-4">
              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded text-center space-y-3">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h3 className="text-3xl font-race italic uppercase font-bold">TERMINANFRAGE ERHALTEN!</h3>
                  <p className="text-slate-700 font-sans">
                    Vielen Dank! Wir haben eure Werkstattanfrage für <strong>{selectedService}</strong> erfolgreich registriert. Unser Team aus Bergen meldet sich in Kürze mit der Terminbestätigung.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-[#0a1324] text-white font-race italic font-bold px-6 py-2.5 rounded text-sm uppercase"
                  >
                    Weitere Buchung vornehmen
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
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                      Gewünschte Leistung:
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 font-medium"
                    >
                      <option value="Kleine Jahresinspektion">Kleine Jahresinspektion (69 €)</option>
                      <option value="Grosse Jahresinspektion D74">Grosse Jahresinspektion D74 (129 €)</option>
                      <option value="E-Bike Diagnostik & Service">E-Bike Diagnostik & Service (99 €)</option>
                      <option value="Dämpfer & Gabel Lab-Service">Dämpfer & Gabel Lab-Service (ab 119 €)</option>
                      <option value="Sonstige Reparatur / Individuell">Sonstige Reparatur / Reifen / Bremsen</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Euer Name:</label>
                      <input
                        required
                        type="text"
                        placeholder="Vor- & Nachname"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Telefon / Mobil:</label>
                      <input
                        required
                        type="tel"
                        placeholder="08662 / ..."
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">E-Mail:</label>
                      <input
                        required
                        type="email"
                        placeholder="ihre.mail@beispiel.de"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Wunschdatum:</label>
                      <input
                        required
                        type="date"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                      Fahrrad Modell & Besonderheiten:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="z.B. Specialized Levo E-MTB, Geräusche an der Kette, Bremse entlüften..."
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0056c6] hover:bg-[#0045a3] text-white font-race italic font-bold py-3.5 rounded text-lg uppercase tracking-wide shadow-md"
                  >
                    Werkstatt-Termin Verbindlich Anfragen
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* WERKSTATT GALERIE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-slate-900">
              EINBLICKE IN UNSERE <span className="text-[#0056c6]">MEISTERWERKSTATT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((g, idx) => (
              <div key={idx} className="card rounded overflow-hidden border border-slate-200">
                <img src={g.image} alt={g.title} className="w-full h-48 object-cover" />
                <div className="p-3 bg-white font-mono text-xs font-bold text-slate-800">
                  {g.title}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, Phone, Mail, CheckCircle2, Navigation, Send } from 'lucide-react';

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState('werkstatt');

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="bg-[#0a1324] text-white py-20 bg-topo border-b-4 border-[#0056c6]">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#0a1324] px-3 py-1 rounded text-xs font-mono font-bold uppercase">
                <MapPin className="w-4 h-4" /> BERGEN IM CHIEMGAU D74
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                KONTAKT & <span className="text-[#0056c6]">ANFAHRT</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Habt ihr Fragen zu unseren Bikes, möchtet ihr einen Werkstatt-Termin buchen oder eine Probefahrt anfragen? Wir sind gern für euch da!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN CONTACT GRID: DETAILS + FORM */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Hours Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="card bg-white p-8 rounded border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-3xl font-race italic uppercase font-black text-slate-900 border-b border-slate-200 pb-3">
                  STAMMDATEN & ANSPRECHPARTNER
                </h2>

                <div className="space-y-4 font-sans text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0056c6] shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-slate-900">Radsport Derjung (D74)</div>
                      <div>Bahnhofstraße 12</div>
                      <div>83346 Bergen im Chiemgau</div>
                      <div className="text-xs text-slate-500 mt-0.5">Am Fuße des Hochfelln · Chiemgau</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0056c6] shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">Telefon:</div>
                      <a href="tel:+49866212345" className="text-[#0056c6] font-mono hover:underline">
                        08662 / 12345
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0056c6] shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">E-Mail:</div>
                      <a href="mailto:info@radsport-derjung.de" className="text-[#0056c6] font-mono hover:underline">
                        info@radsport-derjung.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours Table */}
              <div className="datenblatt-box p-8 rounded bg-white shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                  <span className="font-race italic font-black text-2xl uppercase text-[#0a1324]">
                    ÖFFNUNGSZEITEN
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    AKTIV
                  </span>
                </div>

                <div className="space-y-1.5 divide-y divide-slate-100 font-mono text-xs md:text-sm">
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Dienstag - Freitag</span>
                    <span className="font-bold text-slate-900">08:30 - 12:30 & 14:00 - 18:00</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Samstag</span>
                    <span className="font-bold text-slate-900">09:00 - 13:00 Uhr</span>
                  </div>
                  <div className="datenblatt-row">
                    <span className="text-slate-500 uppercase">Montag & Sonntag</span>
                    <span className="font-bold text-amber-600">Ruhetag (Werkstatt geschlossen)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-3xl font-race italic uppercase font-black text-slate-900 border-b border-slate-200 pb-3">
                NACHRICHT AN RADSPORT DERJUNG
              </h2>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded text-center space-y-3">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h3 className="text-3xl font-race italic uppercase font-bold">VIELEN DANK FÜR EURE NACHRICHT!</h3>
                  <p className="text-slate-700 font-sans">
                    Wir haben eure Anfrage erhalten. Unser Team aus Bergen im Chiemgau setzt sich schnellstmöglich mit euch in Verbindung.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#0a1324] text-white font-race italic font-bold px-6 py-2.5 rounded text-sm uppercase"
                  >
                    Neue Nachricht Verfassen
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4 font-sans text-sm"
                >
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                      Worum geht es euch?
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 font-medium"
                    >
                      <option value="werkstatt">Werkstatt-Termin / Reparatur</option>
                      <option value="probefahrt">Probefahrt für ein Bike</option>
                      <option value="leasing">Dienstrad Leasing (JobRad etc.)</option>
                      <option value="shop">Teile & Zubehör Anfrage</option>
                      <option value="allgemein">Allgemeine Frage</option>
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
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Telefonnummer:</label>
                      <input
                        required
                        type="tel"
                        placeholder="0170 / 1234567"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">E-Mail Adresse:</label>
                    <input
                      required
                      type="email"
                      placeholder="euer.name@beispiel.de"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">Eure Nachricht:</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Schreibt uns hier eure Wünsche oder Fragen..."
                      className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0056c6] hover:bg-[#0045a3] text-white font-race italic font-bold py-3.5 rounded text-lg uppercase tracking-wide shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 text-[#facc15]" />
                    Nachricht Jetzt Absenden
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ANFAHRT & KARTE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="bg-[#0a1324] text-white p-8 md:p-12 rounded border-2 border-[#0056c6] shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#facc15] uppercase mb-1">
                  <Navigation className="w-4 h-4" /> SO FINDET IHR UNS IN BERGEN
                </div>
                <h3 className="text-3xl font-race italic uppercase font-black text-white">
                  ANFAHRT & ROUTENPLANER
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Bahnhofstraße+12+83346+Bergen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0056c6] hover:bg-[#0045a3] text-white font-race italic font-bold px-6 py-2.5 rounded text-sm uppercase tracking-wide"
              >
                In Google Maps Öffnen ↗
              </a>
            </div>

            {/* Visual Map UI Mockup */}
            <div className="relative h-80 rounded overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80"
                alt="Karte Bergen im Chiemgau"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute bg-[#0a1324]/95 p-6 rounded-lg border-2 border-[#0056c6] shadow-2xl text-center space-y-2 max-w-sm">
                <div className="bg-[#facc15] text-[#0a1324] font-race italic font-black text-xl px-3 py-1 rounded inline-block">
                  RADSPORT DERJUNG (D74)
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  Bahnhofstraße 12 · 83346 Bergen im Chiemgau
                </p>
                <div className="text-2xs text-slate-400 font-sans border-t border-slate-800 pt-2">
                  A8 Autobahnabfahrt Bergen (Nr. 110) → 2 Min. Richtung Ortsmitte. Kundenparkplätze direkt vor dem Laden!
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

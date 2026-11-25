import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, Phone, Mail, CheckCircle2, Navigation } from 'lucide-react';

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState('werkstatt');

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794902953078-bked991j.avif"
            alt="Kontakt Radsport Derjung"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                Bergen im Chiemgau
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                Kontakt & Anfahrt
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                Wir freuen uns auf euren Besuch in unserem Laden in Bergen im Chiemgau oder über eure Nachricht.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Kontaktdaten & Öffnungszeiten Winter */}
          <div className="lg:col-span-5 space-y-8">
            {/* Kontaktdaten */}
            <div className="card p-8 space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">
                Kontaktdaten
              </h2>

              <div className="space-y-4 text-sm text-zinc-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E6007E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-zinc-900">Radsport Derjung (D74)</div>
                    <div>Staudacherstraße 47</div>
                    <div>83346 Bergen im Chiemgau</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E6007E] shrink-0" />
                  <div>
                    <div className="font-bold text-zinc-900">Telefon:</div>
                    <a href="tel:086626654476" className="text-zinc-700 hover:text-[#E6007E]">
                      08662 6654476
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E6007E] shrink-0" />
                  <div>
                    <div className="font-bold text-zinc-900">E-Mail:</div>
                    <a href="mailto:service@radsport-derjung.de" className="text-zinc-700 hover:text-[#E6007E]">
                      service@radsport-derjung.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Öffnungszeiten Winter */}
            <div className="card p-8 space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                <h2 className="text-2xl font-bold text-zinc-900">
                  Öffnungszeiten Winter
                </h2>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Geöffnet
                </span>
              </div>

              <div className="space-y-3 text-sm text-zinc-600">
                <div className="flex justify-between py-1 border-b border-zinc-100">
                  <span className="font-medium text-zinc-800">Mittwoch – Freitag</span>
                  <span> 14:00 – 18:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-100">
                  <span className="font-medium text-zinc-800">Samstag</span>
                  <span>09:30 – 12:00</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-zinc-800">Montag &amp; Dienstag</span>
                  <span className="text-zinc-400 font-medium">Ruhetag</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formular */}
          <div className="lg:col-span-7 card p-8 md:p-10 space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">
              Leider funktioniert dieses Tool momentan nicht, wir bitten dies zu entschuldiegen! Schreib uns gerne über dein Mailprogramm, an service@radsport-derjung.de                                DANKE :)   
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold">Vielen Dank für eure Nachricht!</h3>
                <p className="text-zinc-600 text-sm">
                  Wir haben eure Anfrage erhalten und melden uns rasch bei euch zurück.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="secondary-button text-xs mt-2"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-sm"
              >
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">Anliegen</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-zinc-900 focus:outline-none focus:border-[#E6007E] bg-white"
                  >
                    <option value="werkstatt">Werkstatt-Termin & Service</option>
                    <option value="probefahrt">Probefahrt vereinbaren</option>
                    <option value="leasing">Dienstrad-Leasing Beratung</option>
                    <option value="shop">Shop & Ersatzteile</option>
                    <option value="allgemein">Allgemeine Anfrage</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">Euer Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Vor- und Nachname"
                      className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-zinc-900 focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">Telefonnummer</label>
                    <input
                      required
                      type="tel"
                      placeholder="08662 123456"
                      className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-zinc-900 focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">E-Mail Adresse</label>
                  <input
                    required
                    type="email"
                    placeholder="eure.email@beispiel.de"
                    className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-zinc-900 focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-700 mb-1">Eure Nachricht</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Wie können wir euch weiterhelfen?"
                    className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-zinc-900 focus:outline-none focus:border-[#E6007E]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="primary-button w-full text-base">
                    Nachricht absenden
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* KARTE ABSCHNITT */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="card overflow-hidden p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
                Anfahrt & Lage
              </span>
              <h2 className="text-3xl font-black text-zinc-900">
                Hier findet ihr uns in Bergen
              </h2>
              <p className="text-zinc-600 text-sm mt-1">
                Staudacherstraße 47, 83346 Bergen im Chiemgau
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Staudacherstraße+47+83346+Bergen"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button text-sm inline-flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#E6007E]" />
              Routenplaner öffnen
            </a>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
            <iframe
              title="Google Karte Radsport Derjung"
              src="https://maps.google.com/maps?q=Staudacherstraße%2047,%2083346%20Bergen%20im%20Chiemgau&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 left-4 pointer-events-none hidden sm:block">
              <div className="bg-white/95 backdrop-blur-sm text-zinc-900 px-4 py-3 rounded-xl shadow-lg border border-zinc-200 text-left space-y-0.5">
                <div className="font-bold text-sm text-[#E6007E]">Radsport Derjung (D74)</div>
                <div className="text-xs text-zinc-600">Staudacherstraße 47 · 83346 Bergen</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

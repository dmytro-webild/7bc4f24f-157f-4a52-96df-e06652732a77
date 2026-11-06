import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export default function WerkstattPage() {
  const [selectedService, setSelectedService] = useState('Grosse Jahresinspektion');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const werkstattLeistungen = [
    {
      title: 'Kleine Jahresinspektion',
      price: '69 €',
      time: '24-48 Std.',
      points: [
        'Prüfung aller Schraubverbindungen mit Drehmoment',
        'Bremsen- & Verschleißkontrolle',
        'Schaltung & Kettenpflege',
        'Reifendruck- & Sichtprüfung',
      ],
    },
    {
      title: 'Grosse Jahresinspektion',
      price: '129 €',
      time: '24-48 Std.',
      points: [
        'Alle Leistungen der kleinen Inspektion',
        'Zentrierung der Laufräder',
        'Demontage & Reinigung des Antriebs',
        'Steuersatz- & Tretlagerwartung',
        'Probefahrt & Meisterabnahme',
      ],
    },
    {
      title: 'E-Bike Service & Software-Update',
      price: '99 €',
      time: '24 Std.',
      points: [
        'Software-Diagnose & System-Update (Bosch, Shimano)',
        'Akku-Kapazitätsprüfung mit Protokoll',
        'Motorbefestigung & Sensorabstimmung',
        'Kontaktreinigung & Pflege',
      ],
    },
    {
      title: 'Fahrwerk & Dämpfer-Service',
      price: 'ab 119 €',
      time: '48 Std.',
      points: [
        'Dichtungs- & Abstreifer-Erneuerung (Fox, RockShox)',
        'Ölwechsel nach Herstellervorgaben',
        'SAG-Abstimmung auf Fahrergewicht',
        'Druck- & Zugstufen-Check',
      ],
    },
  ];

  const ablaufSchritte = [
    {
      nr: '01',
      title: 'Termin vereinbaren',
      desc: 'Nutzt unser Online-Formular oder ruft uns an, um euren Wunschtermin in unserer Meisterwerkstatt in Bergen festzulegen.',
    },
    {
      nr: '02',
      title: 'Fahrrad-Übergabe',
      desc: 'Gemeinsam mit unserem Werkstattmeister besprechen wir alle Wünsche und legen den Serviceumfang transparent fest.',
    },
    {
      nr: '03',
      title: 'Fachgerechte Reparatur',
      desc: 'Euer Bike wird mit Präzisionswerkzeug und Original-Ersatzteilen sorgfältig gewartet und eingestellt.',
    },
    {
      nr: '04',
      title: 'Probefahrt & Abholung',
      desc: 'Nach der Meisterabnahme und Funktionsprüfung steht euer Fahrrad einsatzbereit zur Abholung bereit.',
    },
  ];

  const galleryImages = [
    {
      title: 'Meisterwerkstatt Bergen',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Diagnosesysteme',
      image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Laufradbau',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Fahrwerksservice',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=80"
            alt="Werkstatt Radsport Derjung"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                Meisterwerkstatt in Bergen
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                Werkstatt & Service
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                Präzision, Transparenz und Fachkompetenz. Von der einfachen Inspektion bis zum kompletten Custom-Aufbau.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Überblick & Festpreise
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Unsere Werkstatt-Leistungen
          </h2>
          <p className="text-zinc-600 text-sm md:text-base">
            Faire Festpreise und garantierte Qualität bei jedem Werkstattauftrag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {werkstattLeistungen.map((item) => (
            <div key={item.title} className="card p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">{item.title}</h3>
                    <div className="text-xs text-zinc-500 font-medium mt-1">Dauer: {item.time}</div>
                  </div>
                  <div className="text-2xl font-black text-[#E6007E] bg-pink-50 px-3 py-1 rounded-lg">
                    {item.price}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-zinc-600 pt-2 border-t border-zinc-100">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E6007E] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#buchungsformular"
                  onClick={() => setSelectedService(item.title)}
                  className="primary-button w-full text-center text-sm"
                >
                  Termin für diesen Service wählen
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABLAUF IN 4 SCHRITTEN */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
              Einfach & unkompliziert
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Ablauf in 4 Schritten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ablaufSchritte.map((step) => (
              <div key={step.nr} className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm space-y-3">
                <span className="text-3xl font-black text-[#E6007E] block">
                  {step.nr}
                </span>
                <h3 className="text-xl font-bold text-zinc-900">{step.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATZ FÜR BUCHUNGSFORMULAR */}
      <section id="buchungsformular" className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto card p-8 md:p-12 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
              Werkstatt-Termin vereinbaren
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Online Buchungsanfrage
            </h2>
            <p className="text-zinc-600 text-sm">
              Tragt eure Kontaktdaten und Wunschleistung ein. Wir bestätigen euren Termin zeitnah.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-emerald-900">Terminanfrage gesendet!</h3>
              <p className="text-emerald-700 text-sm">
                Vielen Dank! Wir haben eure Anfrage für "{selectedService}" erhalten und melden uns in Kürze.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="space-y-4 pt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Telefonnummer</label>
                  <input
                    type="tel"
                    required
                    placeholder="08662 123456"
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Gewünschter Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] bg-white"
                  >
                    <option value="Kleine Jahresinspektion">Kleine Jahresinspektion (69 €)</option>
                    <option value="Grosse Jahresinspektion">Grosse Jahresinspektion (129 €)</option>
                    <option value="E-Bike Service & Software-Update">E-Bike Service (99 €)</option>
                    <option value="Fahrwerk & Dämpfer-Service">Fahrwerk-Service (ab 119 €)</option>
                    <option value="Sonstige Reparatur">Sonstige Reparatur / Individualanfrage</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Fahrradmodell & Anmerkungen</label>
                <textarea
                  rows={4}
                  placeholder="Welches Modell fahrt ihr? Beschreibt kurz euer Anliegen..."
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="primary-button w-full text-base">
                  Werkstatt-Termin verbindlich anfragen
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* BILDERGALERIE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Einblicke in die Werkstatt
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Meisterhandwerk im Detail
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden h-64 bg-zinc-100 shadow-sm">
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm">
                {img.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

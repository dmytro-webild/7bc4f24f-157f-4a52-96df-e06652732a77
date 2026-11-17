import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LeasingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const leasingPartners = [
    { name: 'JobRad', desc: 'Deutschlands führender Anbieter für Dienstrad-Leasing' },
    { name: 'Bikeleasing', desc: 'Einfaches Leasing-Portal für Unternehmen' },
    { name: 'BusinessBike', desc: 'Schnelle & unkomplizierte Abwicklung' },
    { name: 'Deutsche Dienstrad', desc: 'Nachhaltige Mobilitätskonzepte' },
    { name: 'Eurorad', desc: 'Leasing inklusive umfassendem Schutzpaket' },
    { name: 'Lease a Bike', desc: 'Starker Partner in ganz Europa' },
  ];

  const ablaufLeasing = [
    {
      step: '01',
      title: 'Traumbike aussuchen',
      desc: 'Besucht unseren Store in Bergen im Chiemgau oder wählt euer Wunschmodell aus unserem Sortiment (Rennrad, Gravel, E-MTB).',
    },
    {
      step: '02',
      title: 'Angebot anfordern',
      desc: 'Wir erstellen euch umgehend ein digitales Angebot für euren Leasing-Anbieter.',
    },
    {
      step: '03',
      title: 'Arbeitgeber-Freigabe',
      desc: 'Euer Arbeitgeber bestätigt den Antrag. Durch die Gehaltsumwandlung spart ihr bis zu 40% gegenüber dem Direktkauf.',
    },
    {
      step: '04',
      title: 'Abholen & losfahren',
      desc: 'Wir stellen euer Bike fahrfertig ein. Ihr holt es ab und genießt eure Touren im Chiemgau.',
    },
  ];

  const faqs = [
    {
      q: 'Wie funktioniert Dienstrad-Leasing über Gehaltsumwandlung?',
      a: 'Beim Dienstrad-Leasing schließt euer Arbeitgeber einen Rahmenvertrag mit einem Leasinganbieter ab. Die monatliche Rate wird direkt von eurem Bruttogehalt einbehalten. Durch den Steuervorteil (0,25%-Regelung) spart ihr im Vergleich zum Kauf bis zu 40%.',
    },
    {
      q: 'Welche Fahrräder kann ich leasen?',
      a: 'Ihr könnt bei Radsport Derjung nahezu jedes Fahrrad ab 649 € leasen – von Highend-Rennrädern über Gravelbikes bis hin zu leistungsstarken E-MTBs.',
    },
    {
      q: 'Sind Versicherung und Wartung enthalten?',
      a: 'Ja! Alle Leasinganbieter bieten Schutzpakete gegen Diebstahl, Sturz- und Akkuschäden. Zudem könnt ihr jährliche Inspektionspakete mit einkalkulieren.',
    },
    {
      q: 'Wie lange läuft der Vertrag?',
      a: 'Die reguläre Vertragslaufzeit beträgt 36 Monate. Nach Ablauf könnt ihr das Rad günstig übernehmen oder euch ein neues Modell aussuchen.',
    },
    {
      q: 'Darf ich das Rad auch in der Freizeit nutzen?',
      a: 'Ja! Das geleaste Fahrrad steht euch für den Arbeitsweg wie auch für private Ausflüge rund um den Chiemsee uneingeschränkt zur Verfügung.',
    },
  ];

  return (
    <div className="space-y-24 pb-24 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1793971463627-8758or4o.jpg"
            alt="Dienstrad Leasing Radsport Derjung"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                Dienstrad-Leasing im Chiemgau
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                Fahrrad-Leasing
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
                Least euer Traum-Bike über euren Arbeitgeber und spart bis zu 40% gegenüber dem regulären Kaufpreis.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/bikes" className="primary-button text-base">
                  Leasingfähige Bikes entdecken
                </Link>
                <Link to="/kontakt" className="secondary-button text-base">
                  Beratungstermin vereinbaren
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABLAUF IN 4 SCHRITTEN */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Einfacher Prozess
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            In 4 Schritten zum Dienstrad
          </h2>
          <p className="text-zinc-600 text-sm md:text-base">
            So unkompliziert ist der Weg zu eurem neuen Fahrrad über die Gehaltsumwandlung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ablaufLeasing.map((item) => (
            <div key={item.step} className="card p-8 space-y-4">
              <span className="text-3xl font-black text-[#E6007E] block">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
              Kooperationen & Fachhändler
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Unsere Leasing-Partner
            </h2>
            <p className="text-zinc-600 text-sm md:text-base">
              Wir arbeiten mit allen etablierten Anbietern in Deutschland zusammen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leasingPartners.map((partner) => (
              <div key={partner.name} className="card p-6 bg-white space-y-2 border border-zinc-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xl text-zinc-900">{partner.name}</h4>
                  <CheckCircle2 className="w-5 h-5 text-[#E6007E]" />
                </div>
                <p className="text-zinc-600 text-xs">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest">
            Wissenswertes
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Häufig gestellte Fragen (FAQ)
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="card overflow-hidden bg-white border border-zinc-200">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-6 font-bold text-lg text-zinc-900 flex justify-between items-center gap-4 hover:text-[#E6007E] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#E6007E] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

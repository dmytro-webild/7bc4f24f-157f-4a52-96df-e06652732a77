import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Shield, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LeasingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const leasingPartners = [
    { name: 'JobRad', desc: 'Deutschlands Nr. 1 Dienstrad-Leasing' },
    { name: 'Bikeleasing-Service', desc: 'Einfaches Leasing für Arbeitgeber & Arbeitnehmer' },
    { name: 'BusinessBike', desc: 'Zuverlässiges Leasingkonzept ohne Aufwand' },
    { name: 'Deutsche Dienstrad', desc: 'Digitales Leasing für Unternehmen' },
    { name: 'Eurorad', desc: 'Dienstrad Leasing & Versicherung inklusive' },
    { name: 'Lease a Bike', desc: 'Europas starker Partner für Bike-Leasing' },
  ];

  const ablaufLeasing = [
    {
      step: '01',
      title: 'TRAUMBIKE AUSSUCHEN',
      desc: 'Kommt in unseren Store nach Bergen im Chiemgau oder sucht euch euer Wunsch-Bike (Rennrad, Gravel, E-MTB) aus unserem Sortiment aus.',
    },
    {
      step: '02',
      title: 'ANGEBOT ANFORDERN',
      desc: 'Wir erstellen euch umgehend das digitale Leasing-Angebot für euren Leasinganbieter (JobRad, Bikeleasing, BusinessBike etc.).',
    },
    {
      step: '03',
      title: 'ARBEITGEBER-FREIGABE',
      desc: 'Euer Arbeitgeber bestätigt das Angebot digital im Portal. Dank Gehaltsumwandlung spart ihr bis zu 40% gegenüber dem Direktkauf.',
    },
    {
      step: '04',
      title: 'ABHOLEN & LOSFAHREN',
      desc: 'Wir montieren und prüfen euer Bike fahrfertig in unserer Meisterwerkstatt. Ihr holt es ab und genießt die Fahrten im Chiemgau!',
    },
  ];

  const faqs = [
    {
      q: 'Wie funktioniert Dienstrad-Leasing über Gehaltsumwandlung?',
      a: 'Beim Dienstrad-Leasing schließt euer Arbeitgeber einen Rahmenvertrag mit einem Leasinganbieter (z.B. JobRad) ab. Die monatliche Leasingrate wird direkt von eurem Bruttogehalt einbehalten. Durch den Steuervorteil (0,25%-Regelung) spart ihr im Vergleich zum Direktkauf bis zu 40%.',
    },
    {
      q: 'Welche Marken und Fahrradtypen kann ich leasen?',
      a: 'Ihr könnt bei Radsport Derjung nahezu jedes Fahrrad ab einem Verkaufspreis von 649 € leasen – egal ob Premium Carbon-Rennrad, E-MTB Fully, Gravelbike oder E-SUV.',
    },
    {
      q: 'Ist eine Vollkaskoversicherung und Inspektion enthalten?',
      a: 'Ja! Alle Leasinganbieter bieten umfassende Versicherungspakete gegen Diebstahl, Vandalismus, Sturzschäden und Akku-Defekte an. Zudem könnt ihr jährliche Inspektions- und Verschleißpakete direkt einrechnen lassen.',
    },
    {
      q: 'Wie lange ist die Vertragslaufzeit?',
      a: 'Die reguläre Vertragslaufzeit beträgt 36 Monate. Nach Ablauf der 3 Jahre könnt ihr das Rad meist zu einem günstigen Restwert übernehmen oder euch ein nagelneues Traum-Bike aussuchen.',
    },
    {
      q: 'Kann ich das Dienstrad auch private in der Freizeit nutzen?',
      a: 'Absolut! Das leaste Fahrrad steht euch für den täglichen Weg zur Arbeit ebenso uneingeschränkt zur Verfügung wie für private Ausflüge rund um den Chiemsee und in die Alpen.',
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
                <Building2 className="w-4 h-4" /> DIENSTRAD LEASING D74
              </div>
              <h1 className="text-5xl md:text-7xl font-race italic uppercase font-extrabold leading-none text-white">
                FAHRRAD LEASING <span className="text-[#0056c6]">BIS ZU 40% SPAREN</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans leading-relaxed">
                Least euer Traum-Bike bequem über euren Arbeitgeber. Bei Radsport Derjung in Bergen arbeiten wir mit allen führenden Leasinganbietern zusammen.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 font-race italic text-base uppercase">
                <Link
                  to="/bikes"
                  className="bg-[#0056c6] hover:bg-[#0045a3] text-white px-8 py-3.5 rounded font-bold shadow-md"
                >
                  Leasingfähige Bikes Entdecken
                </Link>
                <Link
                  to="/kontakt"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded font-bold"
                >
                  Beratungstermin Vereinbaren
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LEASING PARTNER LOGOS & VORTEILE */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0056c6] uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4 text-[#facc15]" /> ZERTIFIZIERTER FACHHÄNDLER
            </div>
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              UNSERE LEASING <span className="text-[#0056c6]">PARTNER</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              Wir arbeiten mit allen großen deutschen Leasing-Gesellschaften zusammen für eine reibungslose Abwicklung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leasingPartners.map((partner) => (
              <div key={partner.name} className="card p-6 rounded border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-race italic font-black text-2xl text-[#0a1324]">{partner.name}</span>
                  <span className="bg-[#0056c6] text-white text-2xs font-mono px-2 py-0.5 rounded font-bold uppercase">
                    OFFIZIELLER PARTNER
                  </span>
                </div>
                <p className="text-slate-600 font-sans text-xs">{partner.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ABLAUF IN 4 SCHRITTEN */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-race italic uppercase font-black text-slate-900">
              IN 4 SCHRITTEN ZUM <span className="text-[#0056c6]">DIENSTRAD</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              So unkompliziert ist der Weg zu eurem neuen Fahrrad über Gehaltsumwandlung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ablaufLeasing.map((item) => (
              <div key={item.step} className="bg-[#f4f7fa] p-6 rounded border border-slate-300 space-y-3">
                <div className="text-5xl font-race italic font-black text-[#0056c6]">{item.step}</div>
                <h3 className="text-xl font-race italic uppercase font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-race italic uppercase font-black text-slate-900">
              HÄUFIG GESTELLTE <span className="text-[#0056c6]">FRAGEN (FAQ)</span>
            </h2>
            <p className="text-slate-600 font-sans text-base mt-2">
              Alles, was ihr zum Fahrrad-Leasing bei Radsport Derjung wissen müsst.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="card rounded border border-slate-200 overflow-hidden bg-white transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 font-race italic uppercase font-bold text-xl md:text-2xl text-slate-900 flex justify-between items-center gap-4 hover:text-[#0056c6]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-[#0056c6] shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 font-sans text-slate-700 text-sm md:text-base border-t border-slate-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

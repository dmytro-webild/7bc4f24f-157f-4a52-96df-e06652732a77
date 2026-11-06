import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';


export default function LegalPage() {
  return (
    <div className="space-y-16 pb-20 bg-white text-zinc-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[35vh] flex items-center justify-center bg-zinc-900 text-white overflow-hidden py-16">
        <div className="relative z-10 max-w-[100rem] mx-auto px-4 lg:px-8 w-full text-center md:text-left">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-3">
              <span className="bg-[#E6007E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm inline-block">
                Rechtliche Hinweise
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                Impressum & Datenschutz
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-4 lg:px-8 space-y-12">
        {/* IMPRESSUM */}
        <div className="card p-8 space-y-4 text-sm text-zinc-600">
          <h2 className="text-2xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">
            Impressum
          </h2>

          <div className="space-y-2">
            <p className="font-bold text-zinc-900">Angaben gemäß § 5 TMG:</p>
            <p>
              Radsport Derjung (D74)<br />
              Inhaber: Hans Derjung / Florian Derjung<br />
              Staudacherstraße 47<br />
              83346 Bergen im Chiemgau<br />
              Deutschland
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-bold text-zinc-900">Kontakt:</p>
            <p>
              Telefon: 08662 6654476<br />
              E-Mail: service@radsport-derjung.de<br />
              Website: www.radsport-derjung.de
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-bold text-zinc-900">Umsatzsteuer-ID:</p>
            <p className="font-mono">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 131 892 740
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-bold text-zinc-900">Berufsbezeichnung & Zuständige Kammer:</p>
            <p>
              Zweiradmechanikermeister (verliehen in der Bundesrepublik Deutschland)<br />
              Handwerkskammer für München und Oberbayern
            </p>
          </div>
        </div>

        {/* DATENSCHUTZ */}
        <div className="card p-8 space-y-4 text-sm text-zinc-600">
          <h2 className="text-2xl font-bold text-zinc-900 border-b border-zinc-100 pb-3">
            Datenschutzerklärung
          </h2>

          <div className="space-y-2">
            <h3 className="font-bold text-zinc-900 text-base">1. Datenschutz auf einen Blick</h3>
            <p>
              Wir nehmen den Schutz eurer persönlichen Daten sehr ernst. Personenbezogene Daten (z.B. Name, E-Mail, Telefonnummer bei Werkstatt- oder Probefahrtanfragen) werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) behandelt.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-zinc-900 text-base">2. Datenerfassung auf dieser Website</h3>
            <p>
              Eure Daten werden einerseits dadurch erhoben, dass ihr uns diese mitteilt (z.B. über Kontaktformulare oder Buchungssysteme). Andere Daten werden automatisch beim Besuch der Website erfasst.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-zinc-900 text-base">3. Eure Rechte</h3>
            <p>
              Ihr habt jederzeit das Recht auf kostenlose Auskunft über Herkunft, Empfänger und Zweck eurer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

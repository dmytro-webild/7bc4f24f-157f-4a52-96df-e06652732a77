import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Shield } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* HERO SECTION */}
      <section className="bg-[#0a1324] text-white py-16 bg-topo border-b-4 border-[#0056c6]">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#0a1324] px-3 py-1 rounded text-xs font-mono font-bold uppercase">
                <Shield className="w-4 h-4" /> RECHTLICHES D74
              </div>
              <h1 className="text-4xl md:text-6xl font-race italic uppercase font-extrabold text-white">
                IMPRESSUM & <span className="text-[#0056c6]">DATENSCHUTZ</span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-4 lg:px-8 space-y-12">
        {/* IMPRESSUM */}
        <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-4 font-sans text-sm text-slate-700">
          <h2 className="text-3xl font-race italic uppercase font-black text-slate-900 border-b border-slate-200 pb-2">
            IMPRESSUM
          </h2>

          <div className="space-y-2">
            <p className="font-bold text-slate-900">Angaben gemäß § 5 TMG:</p>
            <p>
              Radsport Derjung (D74)<br />
              Inhaber: Hans Derjung / Florian Derjung<br />
              Bahnhofstraße 12<br />
              83346 Bergen im Chiemgau<br />
              Deutschland
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-bold text-slate-900">Kontakt:</p>
            <p>
              Telefon: 08662 / 12345<br />
              E-Mail: info@radsport-derjung.de<br />
              Website: www.radsport-derjung.de
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-bold text-slate-900">Umsatzsteuer-ID:</p>
            <p className="font-mono">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 131 892 740
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-bold text-slate-900">Berufsbezeichnung & Zuständige Kammer:</p>
            <p>
              Zweiradmechanikermeister (verliehen in Deutschland)<br />
              Handwerkskammer für München und Oberbayern
            </p>
          </div>
        </div>

        {/* DATENSCHUTZ */}
        <div className="bg-white p-8 rounded border border-slate-200 shadow-sm space-y-4 font-sans text-sm text-slate-700">
          <h2 className="text-3xl font-race italic uppercase font-black text-slate-900 border-b border-slate-200 pb-2">
            DATENSCHUTZERKLÄRUNG
          </h2>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">1. Datenschutz auf einen Blick</h3>
            <p>
              Wir nehmen den Schutz eurer persönlichen Daten sehr ernst. Personenbezogene Daten (z.B. Name, E-Mail, Telefonnummer bei Werkstattanfragen) werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) behandelt.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-slate-900 text-base">2. Datenerfassung auf dieser Website</h3>
            <p>
              Eure Daten werden einerseits dadurch erhoben, dass ihr uns diese mitteilt (z.B. Formular für Werkstatt-Termine oder Probefahrten). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-slate-900 text-base">3. Eure Rechte</h3>
            <p>
              Ihr habt jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck eurer gespeicherten personenbezogenen Daten zu erhalten. Ihr habt außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

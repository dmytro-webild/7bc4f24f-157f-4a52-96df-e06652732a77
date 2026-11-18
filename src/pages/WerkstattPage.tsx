import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  Wrench,
  Info,
  Phone,
  Calendar,
  ChevronRight,
  Check
} from 'lucide-react';

export default function WerkstattPage() {
  // Service chips list
  const availableServices = [
    'Inspektion',
    'Federungsservice',
    'E-Bike-Service',
    'Laufräder',
    'Bremsen',
    'Individueller Aufbau',
    'Sonstiges / Anliegen',
  ];

  const bikeTypes = [
    'Rennrad',
    'Gravel',
    'Mountainbike',
    'E-MTB / E-Bike',
    'City / Trekking',
    'Sonstiges',
  ];

  const timeOptions = [
    '14:00 Uhr',
    '14:30 Uhr',
    '15:00 Uhr',
    '15:30 Uhr',
    '16:00 Uhr',
    '16:30 Uhr',
    '17:00 Uhr',
    '17:30 Uhr',
  ];

  // Form State
  const [selectedChips, setSelectedChips] = useState<string[]>(['Inspektion']);
  const [bikeType, setBikeType] = useState<string>('Gravel');
  const [brandModel, setBrandModel] = useState<string>('');
  const [workDetails, setWorkDetails] = useState<string>('');
  const [desiredDate, setDesiredDate] = useState<string>('');
  const [desiredTime, setDesiredTime] = useState<string>('14:00 Uhr');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(false);

  const [dateError, setDateError] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const toggleChip = (chip: string) => {
    if (selectedChips.includes(chip)) {
      if (selectedChips.length > 1) {
        setSelectedChips(selectedChips.filter((c) => c !== chip));
      }
    } else {
      setSelectedChips([...selectedChips, chip]);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDesiredDate(value);
    setDateError('');

    if (value) {
      const selected = new Date(value);
      const day = selected.getDay(); // 0 = Sun, 1 = Mon, 6 = Sat

      // Saturday (6) and Sunday (0) are locked/closed for drop-off
      if (day === 6) {
        setDateError('Samstags ist keine Radabgabe möglich. Bitte wählt einen Tag von Dienstag bis Freitag (im Winter Mi–Fr).');
      } else if (day === 0) {
        setDateError('Sonntags hat unsere Werkstatt geschlossen. Bitte wählt einen Tag von Dienstag bis Freitag.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (desiredDate) {
      const selected = new Date(desiredDate);
      const day = selected.getDay();
      if (day === 6 || day === 0) {
        setDateError('Bitte wählt einen gültigen Abgabetag (Dienstag bis Freitag). Samstags und sonntags ist keine Abgabe möglich.');
        return;
      }
    }

    if (!privacyAgreed) {
      alert('Bitte stimmt den Datenschutzhinweisen zu.');
      return;
    }

    setFormSubmitted(true);
  };

  // 3. Leistungen 6 Items
  const leistungenList = [
    {
      title: 'Inspektion',
      desc: 'Komplette Funktionsprüfung, Drehmomentkontrolle aller Schrauben und Sicherheits-Check für ein perfekt eingestelltes Rad.',
    },
    {
      title: 'Federungsservice',
      desc: 'Fachgerechte Wartung, Ölsortierung, Dichtungswechsel und SAG-Abstimmung von Federgabeln und Dämpfern.',
    },
    {
      title: 'E-Bike-Service',
      desc: 'Herstellerkonforme Systemdiagnose, Software-Updates und Akku-Kapazitätsprüfung für Bosch, Shimano & Brose.',
    },
    {
      title: 'Laufräder',
      desc: 'Präzises Nachzentrieren, Speichenersatz, Lagerwechsel sowie maßgeschneiderter Laufradbau für Straße & Trail.',
    },
    {
      title: 'Bremsen',
      desc: 'Hydraulisches Entlüften, Wechsel von Belägen & Scheiben sowie exakte Ausrichtung für maximale Stoppkraft.',
    },
    {
      title: 'Individueller Aufbau',
      desc: 'Traumbike nach euren eigenen Vorstellungen konfigurieren und von Grund auf präzise aufbauen lassen.',
    },
  ];

  // 4. Ablauf 4 Schritte
  const steps = [
    {
      num: '1',
      title: 'Termin anfragen',
      desc: 'Online-Formular ausfüllen oder anrufen, um euren Wunschtermin zu reservieren.',
    },
    {
      num: '2',
      title: 'Rad vorbeibringen',
      desc: 'Euer Bike entspannt zum vereinbarten Termin in unserer Werkstatt in Bergen abgeben.',
    },
    {
      num: '3',
      title: 'Rückmeldung vor Mehrkosten',
      desc: 'Wir prüfen das Rad gründlich und halten vor Zusatzarbeiten immer Rücksprache mit euch.',
    },
    {
      num: '4',
      title: 'Abholen und losfahren',
      desc: 'Euer perfekt gewartetes Fahrrad in Empfang nehmen und sofort wieder durchstarten.',
    },
  ];

  return (
    <div className="bg-white text-zinc-950 font-sans selection:bg-[#E6007E] selection:text-white space-y-16 md:space-y-24 pb-20">
      
      {/* =========================================================
          1. KOPFZEILE (HERO)
         ========================================================= */}
      <section className="pt-8 md:pt-12 max-w-[100rem] mx-auto px-4 lg:px-8">
        <ScrollReveal variant="fade-blur">
          <div className="space-y-6 max-w-4xl">
            {/* Klein grau label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3.5 py-1.5 rounded-full border border-zinc-200">
              <Wrench className="w-3.5 h-3.5 text-[#E6007E]" />
              Werkstatt · Bergen im Chiemgau
            </div>

            {/* Riesig "Werkstatt" */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-zinc-950 tracking-tight leading-[0.95]">
              Werkstatt
            </h1>

            {/* Subline text */}
            <p className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed font-normal">
              Geschraubt wird bei uns von einem gelernten Feinmechaniker und ehemaligen Profimechaniker der Radbundesliga. Gründlich, ehrlich und mit Rückmeldung, bevor es teurer wird.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#termin-anfragen"
                className="bg-[#E6007E] text-white font-bold text-base px-8 py-3.5 rounded-full hover:bg-[#c4006b] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center gap-2"
              >
                Werkstatttermin anfragen
              </a>
              <a
                href="#leistungen"
                className="border-2 border-zinc-950 text-zinc-950 font-bold text-base px-8 py-3.5 rounded-full hover:bg-zinc-950 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center gap-2"
              >
                Unsere Leistungen
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Großes Foto 21:9 mit runden Ecken */}
        <div className="mt-10 md:mt-12">
          <ScrollReveal variant="slide-up">
            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200">
              <img
                src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1793971539113-d1rk0nag.png"
                alt="Meisterwerkstatt Radsport Derjung"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* =========================================================
          2. GROSSER SATZ
         ========================================================= */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 py-8 md:py-16 text-center">
        <ScrollReveal variant="fade-blur">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 max-w-5xl mx-auto leading-[1.15]">
            Service und Beratung <span className="text-[#E6007E]">auch für Bikes, die nicht bei uns gekauft wurden.</span>
          </h2>
        </ScrollReveal>
      </section>


      {/* =========================================================
          3. LEISTUNGEN
         ========================================================= */}
      <section id="leistungen" className="max-w-[100rem] mx-auto px-4 lg:px-8 scroll-mt-24">
        <ScrollReveal variant="fade">
          <div className="mb-10 md:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E] block mb-2">
              Meisterhandwerk
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
              Unsere Leistungen
            </h2>
          </div>

          {/* 3 Spalten mit feinen Linien */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-12">
            {leistungenList.map((item) => (
              <div key={item.title} className="border-t border-zinc-200 pt-6 space-y-2">
                <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight flex items-center justify-between">
                  {item.title}
                  <ChevronRight className="w-5 h-5 text-[#E6007E]" />
                </h3>
                <p className="text-zinc-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>


      {/* =========================================================
          4. SO LÄUFT EIN TERMIN
         ========================================================= */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 py-8">
        <ScrollReveal variant="slide-up">
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E] block mb-2">
              Transparent & Verlässlich
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
              So läuft ein Termin
            </h2>
          </div>

          {/* 4 Schritte nebeneinander mit pinken Nummernkreisen auf einer Linie */}
          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-zinc-200 -z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="space-y-4">
                  {/* Pink Circle Number */}
                  <div className="w-12 h-12 rounded-full bg-[#E6007E] text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-md">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>


      {/* =========================================================
          5. TERMIN ANFRAGEN (Hellgrauer Hintergrund)
         ========================================================= */}
      <section id="termin-anfragen" className="bg-zinc-100/80 border-y border-zinc-200 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Text + Hellpinke Box + Telefon */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal variant="fade-blur">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E] block">
                    Werkstattbuchung
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.05]">
                    Termin anfragen
                  </h2>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                    Sichert euch schnell und unkompliziert euren Werkstatttermin. Wir prüfen eure Angaben und antworten umgehend.
                  </p>
                </div>

                {/* Hellpinke Box */}
                <div className="bg-pink-50/90 border border-pink-200/90 p-6 md:p-7 rounded-[20px] space-y-3 mt-6">
                  <div className="flex items-center gap-2.5 text-pink-950 font-extrabold text-base">
                    <Info className="w-5 h-5 text-[#E6007E] shrink-0" />
                    <span>Gut zu wissen:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-pink-950 font-medium leading-relaxed pl-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E6007E] font-bold">•</span>
                      <span>Radabgabe Di–Fr 14–18 Uhr (im Winter Mi–Fr)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E6007E] font-bold">•</span>
                      <span>Samstags keine Radabgabe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E6007E] font-bold">•</span>
                      <span>Maximal 3 Räder pro Tag</span>
                    </li>
                  </ul>
                </div>

                {/* Lieber anrufen? */}
                <div className="bg-white p-6 rounded-[20px] border border-zinc-200 shadow-sm flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E6007E]" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                      Lieber anrufen?
                    </div>
                    <a
                      href="tel:086626654476"
                      className="text-xl font-extrabold text-zinc-950 hover:text-[#E6007E] transition-colors"
                    >
                      08662 6654476
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Weißes Formular */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="slide-up">
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[24px] border border-zinc-200 shadow-xl">
                  {formSubmitted ? (
                    <div className="py-10 text-center space-y-5">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8 stroke-[3]" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-zinc-950 tracking-tight">
                        Terminanfrage erhalten!
                      </h3>
                      <p className="text-zinc-600 text-base max-w-md mx-auto leading-relaxed">
                        Vielen Dank, <strong className="text-zinc-900">{clientName || 'Kunde'}</strong>! Eure Anfrage für euren <strong className="text-zinc-900">{bikeType}</strong> wurde per E-Mail an <strong className="text-[#E6007E]">service@radsport-derjung.de</strong> übermittelt.
                      </p>
                      <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 text-xs text-zinc-500 max-w-md mx-auto">
                        Eine Bestätigungsmail wurde soeben an <strong>{clientEmail}</strong> versendet. Wir melden uns in Kürze mit der Terminbestätigung.
                      </div>
                      <div className="pt-4">
                        <button
                          onClick={() => setFormSubmitted(false)}
                          className="bg-zinc-950 text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-zinc-800 transition-colors"
                        >
                          Neue Anfrage stellen
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* 1. Leistungen als Auswahl-Chips */}
                      <div className="space-y-2.5">
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700">
                          Gewünschte Leistungen (Auswahl)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {availableServices.map((chip) => {
                            const active = selectedChips.includes(chip);
                            return (
                              <button
                                key={chip}
                                type="button"
                                onClick={() => toggleChip(chip)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                                  active
                                    ? 'bg-[#E6007E] text-white border-[#E6007E] shadow-sm'
                                    : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                                }`}
                              >
                                {active && <span className="mr-1.5">✓</span>}
                                {chip}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 2. Radtyp & Marke/Modell */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                            Radtyp *
                          </label>
                          <select
                            value={bikeType}
                            onChange={(e) => setBikeType(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] bg-white font-medium text-zinc-900"
                            required
                          >
                            {bikeTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                            Marke / Modell
                          </label>
                          <input
                            type="text"
                            placeholder="z. B. Specialized Tarmac"
                            value={brandModel}
                            onChange={(e) => setBrandModel(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] text-zinc-900"
                          />
                        </div>
                      </div>

                      {/* 3. Was ist zu tun */}
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                          Was ist zu tun? (Beschreibung)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Kurze Beschreibung der gewünschten Reparatur oder Auffälligkeiten..."
                          value={workDetails}
                          onChange={(e) => setWorkDetails(e.target.value)}
                          className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] text-zinc-900"
                        ></textarea>
                      </div>

                      {/* 4. Wunschtag & Uhrzeit */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5 flex items-center justify-between">
                            <span>Wunschtag *</span>
                            <span className="text-[10px] text-zinc-500 font-semibold uppercase">Di–Fr (im Winter Mi–Fr)</span>
                          </label>
                          <input
                            type="date"
                            value={desiredDate}
                            onChange={handleDateChange}
                            required
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] text-zinc-900 bg-white"
                          />
                          {dateError && (
                            <p className="text-xs font-semibold text-rose-600 mt-1.5 leading-snug">
                              {dateError}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                            Uhrzeit (14:00 – 17:30) *
                          </label>
                          <select
                            value={desiredTime}
                            onChange={(e) => setDesiredTime(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] bg-white font-medium text-zinc-900"
                            required
                          >
                            {timeOptions.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* 5. Name, Telefon, E-Mail */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Euer Name"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] text-zinc-900"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                            Telefon *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="08662 12345"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] text-zinc-900"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-700 mb-1.5">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="eure@email.de"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:outline-none focus:border-[#E6007E] text-zinc-900"
                          />
                        </div>
                      </div>

                      {/* 6. Datenschutz Checkbox */}
                      <div className="flex items-start gap-3 pt-1">
                        <input
                          type="checkbox"
                          id="privacy"
                          checked={privacyAgreed}
                          onChange={(e) => setPrivacyAgreed(e.target.checked)}
                          required
                          className="mt-1 h-4 w-4 rounded text-[#E6007E] focus:ring-[#E6007E] border-zinc-300 cursor-pointer"
                        />
                        <label htmlFor="privacy" className="text-xs text-zinc-600 leading-normal cursor-pointer select-none">
                          Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme und Terminabwicklung gemäß der Datenschutzerklärung zu.
                        </label>
                      </div>

                      {/* 7. Pinker Button "Termin anfragen" */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-[#E6007E] hover:bg-[#c4006b] text-white font-extrabold text-base py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Calendar className="w-5 h-5" />
                          Termin anfragen
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

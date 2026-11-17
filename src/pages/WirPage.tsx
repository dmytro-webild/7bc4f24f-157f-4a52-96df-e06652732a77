import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function WirPage() {
  const timelineEvents = [
    {
      year: '1986 (März)',
      desc: 'Erste Radrennen in der Schülerklasse, danach aktive Laufbahn auf Straße, Bahn und Mountainbike.                                           Nebenbei immer in Radgeschäften geholfen.',
      isCurrent: false,
    },
    {
      year: '1999',
      desc: 'Gründung von M BIKE, erste Radstation auf Mallorca mit Verleih und MTB-Touren.',
      isCurrent: false,
    },
    {
      year: '2003',
      desc: 'Eröffnung einer weiteren Radstation.',
      isCurrent: false,
    },
    {
      year: '2006',
      desc: 'Organisation und Betreuung der Shimano XTR Präsentation auf Mallorca.',
      isCurrent: false,
    },
    {
      year: '2006–08',
      desc: 'Transalp 2006 und 2008, Transgermany 2007.',
      isCurrent: false,
    },
    {
      year: '2008/09',
      desc: 'MTB-Berater für Zillertal Tourismus, Organisation der Zillertal Bikechallenge 2009.',
      isCurrent: false,
    },
    {
      year: '2010 (Januar)',
      desc: 'Eigener Laden in Marquartstein.',
      isCurrent: false,
    },
    {
      year: '2016',
      desc: 'Umbenennung von M BIKE in D74 Radsport Derjung.',
      isCurrent: false,
    },
    {
      year: '2024',
      desc: 'Xaver beginnt seine Lehre im Betrieb, die zweite Generation.',
      isCurrent: false,
    },
    {
      year: 'Heute',
      desc: 'Laden und Werkstatt in Bergen',
      isCurrent: true,
    },
  ];

  const impressions = [
    {
      title: 'Team Impressionen',
      link: '/team',
      image: 'https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794900826336-b80yej6b.png',
    },
    {
      title: 'Store Impressionen',
      link: '/store',
      image: 'https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794900941481-6b6neh6g.png',
    },
    {
      title: 'Bikestation Impressionen',
      link: '/bikestation',
      image: 'https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794906055702-x16i7zrb.jpg',
    },
  ];

  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* 1. KOPFSECTION */}
      <section id="hero" data-section="hero" className="pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="w-content-width mx-auto px-4 lg:px-8">
          <ScrollReveal variant="slide-up">
            <div className="max-w-4xl space-y-3">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-xs md:text-sm">
                D74 · Radsport Derjung
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-950 leading-[1.05]">
                Seit 1986 dreht sich alles ums Rad
              </h1>
              <p className="text-zinc-600 text-lg md:text-xl leading-relaxed pt-2 max-w-3xl">
                Aus den ersten Schülerrennen wurde eine Leidenschaft und daraus ein Familienbetrieb mit Laden und Werkstatt in Bergen.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-blur" delay={150}>
            <div className="mt-10 relative aspect-[21/9] rounded-[24px] overflow-hidden shadow-sm bg-zinc-100">
              <img
                src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794906426078-ens4f5yd.jpg"
                alt="D74 Radsport Derjung seit 1986"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. UNSERE GESCHICHTE (ZEITSTRAHL) */}
      <section id="geschichte" data-section="geschichte" className="py-16 md:py-24 border-t border-zinc-100">
        <div className="w-content-width mx-auto px-4 lg:px-8">
          <ScrollReveal variant="slide-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center text-zinc-950 mb-16 md:mb-20">
              Unsere Geschichte
            </h2>
          </ScrollReveal>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line: left side on mobile (left-5), center on desktop (md:left-1/2) */}
            <div className="absolute top-3 bottom-3 left-5 md:left-1/2 w-0.5 bg-zinc-200 -translate-x-1/2" />

            <div className="space-y-10 md:space-y-12">
              {timelineEvents.map((event, idx) => {
                const isEven = idx % 2 === 1; // odd index = right side on desktop
                return (
                  <ScrollReveal key={event.year} variant="slide-up" delay={idx * 50}>
                    <div className="relative flex flex-col md:flex-row items-start">
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-5 md:left-1/2 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full z-10 transition-colors ${
                          event.isCurrent
                            ? 'bg-[#E6007E] border-2 border-[#E6007E] ring-4 ring-[#E6007E]/20'
                            : 'bg-white border-2 border-[#E6007E]'
                        }`}
                      />

                      {/* Content Box */}
                      <div
                        className={`pl-12 md:pl-0 w-full md:w-[calc(50%-2.5rem)] ${
                          isEven
                            ? 'md:ml-auto md:pl-0 md:text-left'
                            : 'md:mr-auto md:pr-0 md:text-right'
                        }`}
                      >
                        <div
                          className={`p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm transition-all hover:border-[#E6007E]/40 ${
                            event.isCurrent ? 'border-[#E6007E] bg-pink-50/20' : ''
                          }`}
                        >
                          <div
                            className={`text-2xl md:text-3xl font-black mb-1 ${
                              event.isCurrent ? 'text-[#E6007E]' : 'text-zinc-950'
                            }`}
                          >
                            {event.year}
                          </div>
                          <p
                            className={`text-base md:text-lg leading-relaxed ${
                              event.isCurrent
                                ? 'text-[#E6007E] font-medium'
                                : 'text-zinc-600'
                            }`}
                          >
                            {event.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HELLGRAUER ABSCHNITT (ZITAT & TEXT) */}
      <section id="zitat" data-section="zitat" className="py-20 bg-zinc-100">
        <div className="w-content-width mx-auto px-4 lg:px-8">
          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 leading-tight">
                  <span className="text-[#E6007E]">“</span>Nur Sachen, die ich auch selbst kaufen würde<span className="text-[#E6007E]">”</span>
                </blockquote>
              </div>
              <div>
                <p className="text-zinc-600 text-lg md:text-xl leading-relaxed">
                  Was sich im harten Bikestationseinsatz über Jahre bewährt hat, kann ruhigen Gewissens verkauft werden. Viele Artikel nutzen wir selbst. Nicht jedem Trend muss man hinterherlaufen, wir setzen auf Bewährtes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. BILD LINKS, TEXT RECHTS (BETREUUNG UND SERVICE) */}
      <section id="service" data-section="service" className="py-20 md:py-28">
        <div className="w-content-width mx-auto px-4 lg:px-8">
          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm bg-zinc-100">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794900826336-b80yej6b.png"
                  alt="Betreuung und Service bei Radsport Derjung"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-950">
                  Betreuung und Service
                </h2>
                <p className="text-zinc-600 text-lg md:text-xl leading-relaxed">
                  Service und Beratung auch für Bikes, die nicht bei uns gekauft wurden.
                </p>
                <div className="pt-2">
                  <Link
                    to="/werkstatt"
                    className="primary-button inline-flex items-center gap-2"
                  >
                    Zur Werkstatt <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. TEXT LINKS, BILD RECHTS (NÄHE ZUR INDUSTRIE) */}
      <section id="industrie" data-section="industrie" className="py-20 md:py-28 border-t border-zinc-100">
        <div className="w-content-width mx-auto px-4 lg:px-8">
          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-950">
                  Nähe zur Industrie
                </h2>
                <p className="text-zinc-600 text-lg md:text-xl leading-relaxed">
                  Durch die enge Zusammenarbeit mit CUBE konnten wir Neuheiten testen und haben Fotoshootings im Zillertal, Händler- und Presseevents sowie Testcamps mitorganisiert.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm bg-zinc-100 order-1 lg:order-2">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794900850597-co1bxouz.png"
                  alt="Zusammenarbeit mit CUBE und Events"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. HELLGRAU: PORTRÄT MARKUS DERJUNG */}
      <section id="inhaber" data-section="inhaber" className="py-20 md:py-28 bg-zinc-100">
        <div className="w-content-width mx-auto px-4 lg:px-8">
          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Hochkantes Porträt links */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-sm bg-zinc-200">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794900876005-hah9r7g8.png"
                    alt="Markus Derjung Inhaber"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text und Stats rechts */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-950">
                    Markus Derjung
                  </h2>
                  <p className="text-zinc-500 text-base md:text-lg font-medium mt-1">
                    Inhaber · Baujahr 1974 · gelernter Feinmechaniker
                  </p>
                </div>

                <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                  Mit über 35 Jahren Erfahrung im Radsport verbindet Markus handwerkliche Präzision mit echter Begeisterung. Als gelernter Feinmechaniker sammelte er nach der Ausbildung unter anderem wertvolle Erfahrungen als Profimechaniker bei SG/EC Bayer Köln Worringen in der Radbundesliga. Von 1999 bis 2010 führte er erfolgreich eigene Bikestationen auf Mallorca. Seit 2010 betreibt er seinen eigenen Laden – erst in Marquartstein, heute in Bergen – inzwischen gemeinsam mit seinem Sohn Xaver in zweiter Generation.
                </p>

                {/* 3 pinke Zahlen */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-200/80">
                  <div>
                    <div className="text-3xl lg:text-4xl font-black text-[#E6007E]">
                      35+ Jahre
                    </div>
                    <div className="text-sm font-bold text-zinc-700 mt-1">
                      Radsport
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-black text-[#E6007E]">
                      3×
                    </div>
                    <div className="text-sm font-bold text-zinc-700 mt-1">
                      Transalp und Transgermany
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-black text-[#E6007E]">
                      11 Jahre
                    </div>
                    <div className="text-sm font-bold text-zinc-700 mt-1">
                      Bikestationen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. IMPRESSIONEN */}
      <section id="impressionen" data-section="impressionen" className="py-20 md:py-28">
        <div className="w-content-width mx-auto px-4 lg:px-8">
          <ScrollReveal variant="slide-up">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center text-zinc-950 mb-12 md:mb-16">
              Impressionen
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impressions.map((item, idx) => (
              <ScrollReveal key={item.title} variant="fade-blur" delay={idx * 100}>
                <Link
                  to={item.link}
                  className="group block card overflow-hidden p-0 rounded-[24px] border border-zinc-200/80 transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between bg-white">
                    <h3 className="text-xl font-bold text-zinc-950 group-hover:text-[#E6007E] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[#E6007E] group-hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ABSCHLUSS */}
      <section id="abschluss" data-section="abschluss" className="py-20 md:py-28 border-t border-zinc-100 bg-zinc-50/50">
        <div className="w-content-width mx-auto px-4 lg:px-8 text-center">
          <ScrollReveal variant="slide-up">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-950 leading-tight">
                Wir freuen uns auf euren Besuch, bei dem ihr D74 und unser Angebot kennenlernen könnt.
              </h2>
              <div>
                <Link
                  to="/kontakt"
                  className="primary-button inline-flex items-center gap-2 text-base px-8 py-4"
                >
                  Kontakt und Anfahrt <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

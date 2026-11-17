import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import {
  ArrowRight,
  ChevronRight,
  Calculator,
  MapPin,
  Clock
} from 'lucide-react';

export default function HomePage() {
  // -------------------------------------------------------------
  // HERO MOUNTAIN SCROLL ANIMATION STATE & LOGIC
  // -------------------------------------------------------------
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bikePos, setBikePos] = useState({ x: 40, y: 190, angle: 0 });
  const [pathTotalLength, setPathTotalLength] = useState(1000);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroContainerRef.current) return;
      const rect = heroContainerRef.current.getBoundingClientRect();
      const scrollableDistance = heroContainerRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathTotalLength(len);
      const targetLen = scrollProgress * len;
      const point = pathRef.current.getPointAtLength(targetLen);
      const prevPoint = pathRef.current.getPointAtLength(Math.max(0, targetLen - 5));
      const nextPoint = pathRef.current.getPointAtLength(Math.min(len, targetLen + 5));
      const dx = nextPoint.x - prevPoint.x;
      const dy = nextPoint.y - prevPoint.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setBikePos({ x: point.x, y: point.y, angle });
    }
  }, [scrollProgress]);

  // -------------------------------------------------------------
  // RAHMENGRÖSSEN-RECHNER STATE & CALCULATION
  // -------------------------------------------------------------
  type BikeCategoryType = 'mtb' | 'fully' | 'rennrad' | 'gravel';

  const [bikeType, setBikeType] = useState<BikeCategoryType>('gravel');
  const [heightCm, setHeightCm] = useState<number>(178);
  const [inseamCm, setInseamCm] = useState<number>(83);
  const [ridingStyle, setRidingStyle] = useState<'sport' | 'comfort'>('sport');

  // Calculate recommended frame size based on inputs
  const calculateFrame = () => {
    let rawCm = 0;
    if (bikeType === 'rennrad' || bikeType === 'gravel') {
      rawCm = inseamCm * 0.665;
    } else {
      // MTB & Fully
      rawCm = inseamCm * 0.574;
    }

    if (ridingStyle === 'comfort') {
      rawCm += 1.5;
    }

    const cm = Math.round(rawCm);
    const inches = (cm / 2.54).toFixed(1);

    let letter = 'M';
    if (bikeType === 'rennrad' || bikeType === 'gravel') {
      if (cm < 51) letter = 'XS (48–50 cm)';
      else if (cm < 54) letter = 'S (51–53 cm)';
      else if (cm < 57) letter = 'M (54–56 cm)';
      else if (cm < 60) letter = 'L (57–59 cm)';
      else letter = 'XL (60–62 cm)';
    } else {
      // MTB
      if (cm < 42) letter = 'S (15"–16")';
      else if (cm < 47) letter = 'M (17"–18")';
      else if (cm < 51) letter = 'L (19"–20")';
      else letter = 'XL (21"–22")';
    }

    return { cm, inches, letter };
  };

  const frameResult = calculateFrame();

  const scrollToCalculator = () => {
    const el = document.getElementById('groessenrechner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wheelRotation = scrollProgress * 360 * 16;
  const crankRotation = scrollProgress * 360 * 8;

  return (
    <div className="bg-white text-zinc-950 font-sans selection:bg-[#E6007E] selection:text-white">

      {/* =========================================================
          2. HERO MIT BERGFAHRT (Scroll-Animation)
         ========================================================= */}
      <section ref={heroContainerRef} className="relative h-[200vh] bg-white">
        <div className="sticky top-16 min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-8 pb-4 px-4 lg:px-8 max-w-[100rem] mx-auto overflow-hidden">
          
          {/* Header & Text block left-aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3.5 py-1.5 rounded-full border border-zinc-200">
                <MapPin className="w-3.5 h-3.5 text-[#E6007E]" />
                Bergen im Chiemgau · seit 1986
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-zinc-950 tracking-tight leading-[0.95]">
                Fahrräder & Werkstatt <br className="hidden sm:inline" />
                <span className="text-zinc-950">am Hochfelln</span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed font-normal">
                Rennrad, Gravel, Mountainbike und E-MTB. Beratung und Service von Radsportlern, die seit 1986 im Sattel sitzen.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/bikes"
                  className="bg-[#E6007E] text-white font-bold text-base px-8 py-3.5 rounded-full hover:bg-[#c4006b] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Bikes entdecken
                </Link>
                <Link
                  to="/werkstatt"
                  className="border-2 border-zinc-950 text-zinc-950 font-bold text-base px-8 py-3.5 rounded-full hover:bg-zinc-950 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Zur Werkstatt
                </Link>
              </div>
            </div>

            {/* Quick Badges / Stat display right */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 border-l-2 border-zinc-100 pl-8">
              <div className="bg-zinc-50 p-5 rounded-[20px] border border-zinc-200/80">
                <div className="text-3xl font-extrabold text-zinc-950">38+ Jahre</div>
                <div className="text-xs text-zinc-500 mt-1 uppercase font-semibold tracking-wider">Erfahrung im Chiemgau</div>
              </div>
              <div className="bg-zinc-50 p-5 rounded-[20px] border border-zinc-200/80">
                <div className="text-3xl font-extrabold text-[#E6007E]">Service, Reparatur,...</div>
                <div className="text-xs text-zinc-500 mt-1 uppercase font-semibold tracking-wider">Service, Reparatur,...</div>
              </div>
            </div>
          </div>

          {/* Bottom Area: Mountain line & Animated Bicycle */}
          <div className="relative w-full pt-10 pb-4">
            <svg
              className="w-full h-48 md:h-64 overflow-visible"
              viewBox="0 0 1000 240"
              preserveAspectRatio="none"
            >
              {/* Background fine mountain silhouette line */}
              <path
                d="M 0,210 L 120,205 L 230,175 L 340,190 L 460,135 L 590,150 L 730,75 L 880,55 L 1000,45"
                fill="none"
                stroke="#e4e4e7"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Main Gray Path line */}
              <path
                ref={pathRef}
                d="M 30,215 C 160,215 280,205 400,175 C 520,145 640,120 780,75 C 870,45 930,35 970,35"
                fill="none"
                stroke="#d4d4d8"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Pink active progress path overlay */}
              <path
                d="M 30,215 C 160,215 280,205 400,175 C 520,145 640,120 780,75 C 870,45 930,35 970,35"
                fill="none"
                stroke="#E6007E"
                strokeWidth="4"
                strokeDasharray={pathTotalLength}
                strokeDashoffset={pathTotalLength * (1 - scrollProgress)}
                strokeLinecap="round"
              />

              {/* Summit Marker Dot & Text */}
              <g transform="translate(970, 35)">
                <circle r="8" fill="#E6007E" className="animate-ping opacity-40" />
                <circle r="6" fill="#E6007E" />
                <text
                  x="-15"
                  y="-16"
                  fill="#09090b"
                  fontSize="12"
                  fontWeight="800"
                  textAnchor="end"
                  className="font-sans"
                >
                  Hochfelln · 1.674 m
                </text>
              </g>

              {/* Bicycle Vector Line Drawing (without rider) */}
              <g
                transform={`translate(${bikePos.x}, ${bikePos.y}) rotate(${bikePos.angle})`}
                className="transition-transform duration-75 ease-out"
              >
                {/* Rear Wheel */}
                <g transform="translate(-16, -11)">
                  <circle r="10" fill="none" stroke="#09090b" strokeWidth="2" />
                  <circle r="2" fill="#09090b" />
                  <g transform={`rotate(${wheelRotation})`}>
                    <line x1="-10" y1="0" x2="10" y2="0" stroke="#09090b" strokeWidth="1" />
                    <line x1="0" y1="-10" x2="0" y2="10" stroke="#09090b" strokeWidth="1" />
                  </g>
                </g>

                {/* Front Wheel */}
                <g transform="translate(16, -11)">
                  <circle r="10" fill="none" stroke="#09090b" strokeWidth="2" />
                  <circle r="2" fill="#09090b" />
                  <g transform={`rotate(${wheelRotation})`}>
                    <line x1="-10" y1="0" x2="10" y2="0" stroke="#09090b" strokeWidth="1" />
                    <line x1="0" y1="-10" x2="0" y2="10" stroke="#09090b" strokeWidth="1" />
                  </g>
                </g>

                {/* Frame Geometry Lines */}
                {/* Chainstay: rear hub (-16, -11) to BB (0, -11) */}
                <line x1="-16" y1="-11" x2="0" y2="-11" stroke="#09090b" strokeWidth="2" />
                {/* Seatstay: rear hub (-16, -11) to seat collar (-6, -24) */}
                <line x1="-16" y1="-11" x2="-6" y2="-24" stroke="#09090b" strokeWidth="2" />
                {/* Seat tube: BB (0, -11) to seat collar (-6, -24) */}
                <line x1="0" y1="-11" x2="-6" y2="-24" stroke="#09090b" strokeWidth="2" />
                {/* Down tube: BB (0, -11) to head tube (12, -23) */}
                <line x1="0" y1="-11" x2="12" y2="-23" stroke="#09090b" strokeWidth="2.5" />
                {/* Top tube: seat collar (-6, -24) to head tube (12, -23) */}
                <line x1="-6" y1="-24" x2="12" y2="-23" stroke="#09090b" strokeWidth="2" />
                {/* Fork: head tube (12, -23) to front hub (16, -11) */}
                <line x1="12" y1="-23" x2="16" y2="-11" stroke="#09090b" strokeWidth="2" />

                {/* Seat Post & Saddle */}
                <line x1="-6" y1="-24" x2="-8" y2="-28" stroke="#09090b" strokeWidth="2" />
                <path d="M -13,-28 Q -8,-29 -3,-28" fill="none" stroke="#09090b" strokeWidth="3.5" strokeLinecap="round" />

                {/* Handlebar Stem & Drop */}
                <line x1="12" y1="-23" x2="14" y2="-27" stroke="#09090b" strokeWidth="2" />
                <path d="M 12,-27 L 16,-27 Q 19,-27 18,-23" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" />

                {/* Crank & Pedals */}
                <g transform="translate(0, -11)">
                  <circle r="3" fill="none" stroke="#E6007E" strokeWidth="1.5" />
                  <g transform={`rotate(${crankRotation})`}>
                    <line x1="0" y1="-6" x2="0" y2="6" stroke="#E6007E" strokeWidth="2" />
                    <circle cx="0" cy="-6" r="1.5" fill="#09090b" />
                    <circle cx="0" cy="6" r="1.5" fill="#09090b" />
                  </g>
                </g>
              </g>
            </svg>

            {/* Scroll Indicator */}
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 pt-2 border-t border-zinc-100">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E6007E]"></span>
                Scrollen, um hochzufahren
              </span>
              <span>{Math.round(scrollProgress * 100)}% Anstieg</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. GROSSES FOTO (21:9 format, 24px rounded corners)
         ========================================================= */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 py-12">
        <ScrollReveal variant="fade-blur">
          <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200">
            <img
              src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1793971463627-8758or4o.jpg"
              alt="Radsport Derjung Chiemgau Touren"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-xl space-y-2">
              <span className="bg-[#E6007E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Alpenvorland & Hochfelln
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Die besten Trails direkt vor unserer Haustür
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================
          4. UNSERE BIKES (Header, Grid: 2 big top, 3 bottom)
         ========================================================= */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 py-20">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-100 pb-8">
            <div className="space-y-3 text-left">
              <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest block">
                Vielfalt & Performance
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950">
                Unsere Bikes
              </h2>
              <p className="text-zinc-600 text-base max-w-2xl">
                Von der entspannten Feierabendrunde im Chiemgau bis zur hochalpinen Passüberquerung – findet euer perfektes Setup.
              </p>
            </div>
            <button
              onClick={scrollToCalculator}
              className="bg-[#E6007E] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#c4006b] transition-all self-start md:self-end flex items-center gap-2 shadow-sm"
            >
              <Calculator className="w-4 h-4" />
              Rahmengröße berechnen
            </button>
          </div>

          {/* Grid Layout: 2 large cards top, 3 below */}
          <div className="space-y-8">
            {/* Top Row: 2 Big Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Premium Bikes */}
              <Link
                to="/bikes/premium"
                className="group relative rounded-[24px] overflow-hidden border border-zinc-200 bg-white flex flex-col justify-between hover:border-[#E6007E] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative h-80 sm:h-96 overflow-hidden bg-zinc-100">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794902202597-li4sgmb2.jpg"
                    alt="Premium Bikes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Terrain Contour overlay lines */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <path d="M 0,50 Q 150,120 400,30" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                      <path d="M 0,120 Q 200,200 400,100" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                      <path d="M 0,220 Q 250,280 400,190" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-zinc-950 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      Custom Build
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-3 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 group-hover:text-[#E6007E] transition-colors">
                      Premium Bikes
                    </h3>
                    <ChevronRight className="w-6 h-6 text-zinc-400 group-hover:text-[#E6007E] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Maßgeschneiderte High-End Custom Aufbauten und exklusive Traumbikes für höchste Ansprüche.
                  </p>
                </div>
              </Link>

              {/* Rennrad */}
              <Link
                to="/bikes/rennrad"
                className="group relative rounded-[24px] overflow-hidden border border-zinc-200 bg-white flex flex-col justify-between hover:border-[#E6007E] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative h-80 sm:h-96 overflow-hidden bg-zinc-100">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794901836545-47kc262q.jpg"
                    alt="Rennrad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                      <path d="M 0,40 Q 180,90 400,20" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                      <path d="M 0,140 Q 220,170 400,120" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                      <path d="M 0,240 Q 200,250 400,210" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-zinc-950 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      Speed & Endurance
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-3 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 group-hover:text-[#E6007E] transition-colors">
                      Rennrad
                    </h3>
                    <ChevronRight className="w-6 h-6 text-zinc-400 group-hover:text-[#E6007E] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    Aero-Performance und Endurance-Komfort für schnelle Einheiten im Chiemgau und steile Alpenpässe.
                  </p>
                </div>
              </Link>
            </div>

            {/* Bottom Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Gravel */}
              <Link
                to="/bikes/gravel"
                className="group relative rounded-[24px] overflow-hidden border border-zinc-200 bg-white flex flex-col justify-between hover:border-[#E6007E] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-100">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1793976010883-hw6apxsr.jpg"
                    alt="Gravel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      <path d="M 0,30 Q 150,90 300,20" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                      <path d="M 0,110 Q 150,160 300,100" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 space-y-2 bg-white">
                  <h3 className="text-xl font-extrabold text-zinc-950 group-hover:text-[#E6007E] transition-colors">
                    Gravel
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    Vielseitige All-Road Bikes für grenzenlose Abenteuer auf Schotter, Forstwegen und Asphalt.
                  </p>
                </div>
              </Link>

              {/* Mountainbikes */}
              <Link
                to="/bikes/mtb"
                className="group relative rounded-[24px] overflow-hidden border border-zinc-200 bg-white flex flex-col justify-between hover:border-[#E6007E] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-100">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794901812188-2nupne5i.jpg"
                    alt="Mountainbikes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      <path d="M 0,20 Q 150,80 300,30" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                      <path d="M 0,100 Q 150,150 300,110" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 space-y-2 bg-white">
                  <h3 className="text-xl font-extrabold text-zinc-950 group-hover:text-[#E6007E] transition-colors">
                    Mountainbikes
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    Fullys & Hardtails für technische Downhill-Trails und verblockte Anstiege am Hochfelln.
                  </p>
                </div>
              </Link>

              {/* E-MTB */}
              <Link
                to="/bikes/e-mtb"
                className="group relative rounded-[24px] overflow-hidden border border-zinc-200 bg-white flex flex-col justify-between hover:border-[#E6007E] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-100">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1793976010880-72z1ymeo.jpg"
                    alt="E-MTB"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                      <path d="M 0,25 Q 150,75 300,25" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                      <path d="M 0,105 Q 150,155 300,95" fill="none" stroke="#000" strokeWidth="1" className="group-hover:stroke-[#E6007E]" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 space-y-2 bg-white">
                  <h3 className="text-xl font-extrabold text-zinc-950 group-hover:text-[#E6007E] transition-colors">
                    E-MTB
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">
                    Starke Antriebe und ausdauernde Akkuleistung für mühelose Höhenmeter und maximalen Trail-Spass.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================
          5. MARKEN (Streifen mit Linien oben/unten)
         ========================================================= */}
      <section className="w-full border-t border-b border-zinc-200 bg-white py-12">
        <div className="max-w-[100rem] mx-auto px-4 lg:px-8">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest text-left mb-8">
            Ausgewählte Premium-Hersteller & Partner
          </p>
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
            {/* CUBE with pink badge */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-3xl font-extrabold tracking-tighter text-zinc-950 hover:text-[#E6007E] transition-colors cursor-default">
                CUBE
              </span>
              <span className="text-[10px] font-bold text-[#E6007E] bg-[#E6007E]/10 px-2 py-0.5 rounded-full">
                Langjähriger Partner
              </span>
            </div>

            <span className="text-2xl md:text-3xl font-black text-zinc-400 hover:text-zinc-950 transition-colors cursor-default tracking-tight uppercase">
              Bianchi
            </span>
            <span className="text-2xl md:text-3xl font-black text-zinc-400 hover:text-zinc-950 transition-colors cursor-default tracking-tight uppercase">
              Colnago
            </span>
            <span className="text-2xl md:text-3xl font-black text-zinc-400 hover:text-zinc-950 transition-colors cursor-default tracking-tight uppercase">
              Evolve
            </span>
            <span className="text-2xl md:text-3xl font-black text-zinc-400 hover:text-zinc-950 transition-colors cursor-default tracking-tight uppercase">
              Shimano
            </span>
            <span className="text-2xl md:text-3xl font-black text-zinc-400 hover:text-zinc-950 transition-colors cursor-default tracking-tight uppercase">
              SRAM
            </span>
            <span className="text-2xl md:text-3xl font-black text-zinc-400 hover:text-zinc-950 transition-colors cursor-default tracking-tight uppercase">
              Schwalbe
            </span>
            <span className="text-2xl md:text-3xl font-black text-zinc-400 hover:text-zinc-950 transition-colors cursor-default tracking-tight uppercase">
              Pirelli
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. WERKSTATT (Bild links hochkant, rechts Text, 2-spaltige Leistungen, pinke Info-Box)
         ========================================================= */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 py-20">
        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Bild links hochkant mit 24px Ecken */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-xl border border-zinc-200">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1793971539113-d1rk0nag.png"
                  alt="Werkstatt Radsport Derjung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                  <span className="bg-[#E6007E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Hauseigenes Service-Center
                  </span>
                  <div className="text-xl font-bold">Meisterliche Präzision</div>
                </div>
              </div>
            </div>

            {/* Content rechts */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest block">
                  Service & Reparatur
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
                  Feinmechaniker-Expertise in Bergen
                </h2>
                <p className="text-zinc-600 text-base leading-relaxed">
                  In unserer professionellen Werkstatt widmen wir uns jedem Detail mit höchster Sorgfalt. Wir betreuen Custom-Bikes wie auch Alltagsräder. <strong>Service bieten wir selbstverständlich auch für Fremdräder an.</strong>
                </p>
              </div>

              {/* Zweispaltige Leistungsübersicht mit feinen Linien */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-b border-zinc-200 py-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-950">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]"></span>
                    Jahresinspektion & Sicherheitscheck
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-950">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]"></span>
                    E-Bike Software & Akku-Diagnose
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-950">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]"></span>
                    Präzisions-Laufradbau & Zentrieren
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-950">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]"></span>
                    Gabel- & Dämpferservice (Fox, RockShox)
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-950">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]"></span>
                    Hydraulik-Bremsen Entlüften & Beläge
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-zinc-950">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]"></span>
                    Ergonomie & Sitzpositions-Anpassung
                  </div>
                </div>
              </div>

              {/* Hellpinke Info-Box zu Öffnungszeiten */}
              <div className="bg-[#E6007E]/10 border border-[#E6007E]/20 p-5 rounded-[20px] flex items-center gap-4 text-zinc-900">
                <div className="w-10 h-10 rounded-full bg-[#E6007E] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-zinc-950">Werkstatt-Öffnungszeiten</div>
                  <div className="text-xs text-zinc-700 mt-0.5">
                    Montag bis Freitag: 09:00 – 18:00 Uhr | Samstag: 09:00 – 14:00 Uhr
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/kontakt"
                  className="bg-[#E6007E] text-white font-bold text-base px-8 py-3.5 rounded-full hover:bg-[#c4006b] transition-all shadow-md"
                >
                  Werkstatttermin anfragen
                </Link>
                <Link
                  to="/werkstatt"
                  className="border-2 border-zinc-950 text-zinc-950 font-bold text-base px-8 py-3.5 rounded-full hover:bg-zinc-950 hover:text-white transition-all"
                >
                  Alle Leistungen
                </Link>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================
          7. LEASING (Hellgrauer Hintergrund, Bild links, Text, 4-Schritte Ablauf)
         ========================================================= */}
      <section className="max-w-[100rem] mx-auto px-4 lg:px-8 py-16">
        <ScrollReveal variant="fade-blur">
          <div className="bg-zinc-100 rounded-[24px] p-8 md:p-14 border border-zinc-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Bild links mit 24px Ecken */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] lg:aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg bg-white border border-zinc-200">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3LjUWTZsUqfgaeVmEkCmQhyVehx/uploaded-1794902627000-wbtd0hr6.png"
                    alt="Dienstrad Leasing Radsport Derjung"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text rechts zu Dienstrad-Modellen */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="space-y-3">
                  <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest block">
                    Vorteil für Arbeitnehmer & Arbeitgeber
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
                    Dienstrad-Leasing mit bis zu 40% Ersparnis
                  </h2>
                  <p className="text-zinc-600 text-base leading-relaxed">
                    Fahrt euer Traum-Bike bequem über Gehaltsumwandlung. Wir sind offizieller Partner aller großen Leasing-Anbieter: JobRad, Bikeleasing, BusinessBike, Eurorad, Deutsche Leasing u.v.m.
                  </p>
                </div>

                {/* 4-Schritte-Ablauf mit pinken Nummernkreisen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-start gap-4 bg-white p-5 rounded-[20px] border border-zinc-200/80 shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-[#E6007E] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-zinc-950">Portal prüfen</div>
                      <div className="text-xs text-zinc-600 mt-1">Arbeitgeber-Freigabe im Leasingportal klären.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-5 rounded-[20px] border border-zinc-200/80 shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-[#E6007E] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-zinc-950">Wunschbike aussuchen</div>
                      <div className="text-xs text-zinc-600 mt-1">Ausstattung & Zubehör bei uns in Bergen wählen.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-5 rounded-[20px] border border-zinc-200/80 shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-[#E6007E] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-zinc-950">Angebot bestätigen</div>
                      <div className="text-xs text-zinc-600 mt-1">Unkomplizierte digitale Freigabe durch den Arbeitgeber.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-5 rounded-[20px] border border-zinc-200/80 shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-[#E6007E] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-zinc-950">Bike abholen</div>
                      <div className="text-xs text-zinc-600 mt-1">Perfekt eingestellt in Bergen abholen & losradeln!</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/leasing"
                    className="bg-[#E6007E] text-white font-bold text-base px-8 py-3.5 rounded-full hover:bg-[#c4006b] transition-all shadow-md inline-block"
                  >
                    Leasing-Beratung anfragen
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================
          8. RAHMENGRÖSSEN-RECHNER
         ========================================================= */}
      <section id="groessenrechner" className="max-w-[100rem] mx-auto px-4 lg:px-8 py-20">
        <ScrollReveal variant="slide-up">
          <div className="space-y-4 mb-12 text-left">
            <span className="text-[#E6007E] font-bold text-xs uppercase tracking-widest block">
              Perfekte Ergonomie
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
              Rahmengrößen-Rechner
            </h2>
            <p className="text-zinc-600 text-base max-w-2xl">
              Berechnet anhand eurer Körpermaße und des gewünschten Radtyps blitzschnell die optimale Rahmengröße.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Eingabebereich links */}
            <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-[24px] p-8 space-y-8 shadow-sm text-left">
              
              {/* Radtyp Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  1. Radtyp auswählen
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'gravel', label: 'Gravel' },
                    { id: 'rennrad', label: 'Rennrad' },
                    { id: 'mtb', label: 'Hardtail MTB' },
                    { id: 'fully', label: 'Fully / E-MTB' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setBikeType(item.id as BikeCategoryType)}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                        bikeType === item.id
                          ? 'bg-[#E6007E] text-white border-[#E6007E] shadow-sm'
                          : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Körpergröße Schieberegler 150 – 205 cm */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    2. Körpergröße
                  </label>
                  <span className="text-xl font-extrabold text-[#E6007E]">
                    {heightCm} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="205"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-[#E6007E] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-zinc-400 font-medium">
                  <span>150 cm</span>
                  <span>175 cm</span>
                  <span>205 cm</span>
                </div>
              </div>

              {/* Schrittlänge (Inseam) */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    3. Schrittlänge (Innenbeinlänge)
                  </label>
                  <span className="text-xl font-extrabold text-[#E6007E]">
                    {inseamCm} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="65"
                  max="102"
                  value={inseamCm}
                  onChange={(e) => setInseamCm(Number(e.target.value))}
                  className="w-full accent-[#E6007E] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-zinc-400 font-medium">
                  <span>65 cm</span>
                  <span>82 cm</span>
                  <span>102 cm</span>
                </div>
              </div>

              {/* Fahrweise Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  4. Bevorzugte Fahrweise
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRidingStyle('sport')}
                    className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                      ridingStyle === 'sport'
                        ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                        : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    Sportlich / Agil
                  </button>
                  <button
                    type="button"
                    onClick={() => setRidingStyle('comfort')}
                    className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
                      ridingStyle === 'comfort'
                        ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                        : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    Komfortabel / Tour
                  </button>
                </div>
              </div>

            </div>

            {/* Graue Box rechts mit Pink-Ergebnisanzeige */}
            <div className="lg:col-span-5 bg-zinc-100 border border-zinc-200 rounded-[24px] p-8 space-y-6 flex flex-col justify-between text-left">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E6007E]"></span>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    Berechnetes Ergebnis
                  </span>
                </div>

                <div>
                  <div className="text-sm text-zinc-500 font-semibold mb-1">Empfohlener Rahmen:</div>
                  <div className="text-5xl md:text-6xl font-extrabold text-zinc-950 tracking-tight">
                    {frameResult.letter}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-zinc-200 py-4">
                  <div>
                    <div className="text-xs text-zinc-500 font-semibold uppercase">Rahmenhöhe (cm)</div>
                    <div className="text-2xl font-black text-[#E6007E]">{frameResult.cm} cm</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-semibold uppercase">Rahmenhöhe (Zoll)</div>
                    <div className="text-2xl font-black text-[#E6007E]">{frameResult.inches}″</div>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  Hinweis: Liegt dein Wert zwischen zwei Größen, wähle für ein agileres Fahrverhalten die kleinere, für mehr Laufruhe auf Langstrecken die größere Rahmengröße.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/kontakt"
                  className="w-full bg-[#E6007E] text-white font-bold text-base py-4 px-6 rounded-full hover:bg-[#c4006b] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Probefahrt für Größe {frameResult.cm} cm anfragen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitVerticalMarqueeTall from '@/components/sections/hero/HeroSplitVerticalMarqueeTall';
import PricingLayeredCards from '@/components/sections/pricing/PricingLayeredCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Award, CheckCircle, Users } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarqueeTall
      tag="Dein Experte für Radsport"
      title="Radsport Derjung"
      description="Erlebe Leidenschaft, Qualität und professionelle Beratung rund um dein Fahrrad. Dein Partner für Straße, Trail und Alltag."
      primaryButton={{
        text: "Entdecke Bikes",
        href: "/products",
      }}
      secondaryButton={{
        text: "Werkstatt",
        href: "/service",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-cyclist-training-with-bicycle-outdoors_23-2149748650.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-handlebar-grip-with-woman_23-2148777218.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/long-ride-sunset_329181-8664.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-riding-mountain-bike-autumn-leaves_23-2148775575.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-section-person-riding-bicycle-park_23-2148139925.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/two-handsome-stylish-males-working-with-bicycle-repair-shop-workers-repair-mounts-bike-workshop_613910-5729.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-red-head-bearded-bicycle-mechanic-workshop-with-bike-parts-wheel-background_613910-14228.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-riding-bicycle-outdoors_23-2150884230.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/model-wearing-motorcycle-helmet-portrait_23-2151585563.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-riding-bicycle-mountains-early-morning_651396-3459.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-cyclist-wearing-helmet-posing-with-bicycle_23-2149749607.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/professional-cyclist-woman_23-2149703277.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Über Derjung"
      title="Leidenschaft für Zweiräder"
      description="Seit Jahrzehnten leben wir Radsport. Unsere Experten sorgen dafür, dass dein Bike immer in Bestform ist und du das Maximum aus jeder Tour holst."
      items={[
        {
          icon: CheckCircle,
          title: "Meisterwerkstatt",
          description: "Professionelle Wartung & Reparatur",
        },
        {
          icon: Award,
          title: "Top-Marken",
          description: "Qualität auf jeder Fahrt",
        },
        {
          icon: Users,
          title: "Individuelle Beratung",
          description: "Dein Setup ist unser Ziel",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-repairing-bicycle_1170-2521.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="product-highlights" data-section="product-highlights">
    <SectionErrorBoundary name="product-highlights">
          <FeaturesImageBento
      tag="Unser Sortiment"
      title="Für jeden Anspruch"
      description="Ob Rennrad, MTB oder Urban-Bike – unsere Bikes vereinen Performance, Design und Fahrfreude."
      items={[
        {
          title: "Rennmaschinen",
          description: "Aerodynamik pur",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-athlete-cycling_23-2150845608.jpg",
        },
        {
          title: "Trail-Bezwinger",
          description: "Geländetauglichkeit",
          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-using-electric-bike-country-side_23-2149124607.jpg",
        },
        {
          title: "City-E-Bikes",
          description: "Elektrisch durch die Stadt",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-riding-scooter-park_1303-21246.jpg",
        },
        {
          title: "Apparel",
          description: "Pro-Level Kleidung",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-senior-woman-riding-bike-outdoors_23-2148685747.jpg",
        },
        {
          title: "Zubehör",
          description: "Sicherheit & Style",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bicycle-gears_1170-2566.jpg",
        },
        {
          title: "Werkstatt",
          description: "Pro-Mechaniker",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-female-working-clothes-apron-goggles-repairs-bicycle-wheel-workshop_613910-5846.jpg",
        },
        {
          title: "Custom Components",
          description: "Individuelle Upgrades",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-bicycle-details-parts_23-2150834342.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingLayeredCards
      tag="Service-Pakete"
      title="Unsere Werkstatt-Leistungen"
      description="Egal ob kleiner Check-up oder Full-Service – wir machen dein Rad wieder fit."
      plans={[
        {
          tag: "Basic",
          price: "49 €",
          description: "Sicherheits-Check",
          primaryButton: {
            text: "Jetzt buchen",
            href: "/contact",
          },
          features: [
            "Bremsen-Check",
            "Schaltung justieren",
            "Reifendruck",
          ],
        },
        {
          tag: "Pro",
          price: "99 €",
          description: "Full-Service",
          primaryButton: {
            text: "Jetzt buchen",
            href: "/contact",
          },
          features: [
            "Basic inklusive",
            "Laufrad-Zentrierung",
            "Reinigung",
            "Antrieb-Pflege",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Erfahrungen"
      title="Unsere Community"
      description="Unsere Kunden vertrauen uns bei jedem Kilometer."
      testimonials={[
        {
          name: "Max B.",
          role: "Rennrad-Fan",
          quote: "Top Beratung und super schnelle Werkstatt-Hilfe. Immer wieder gerne!",
          imageSrc: "http://img.b2bpic.net/free-photo/glad-african-cyclist-posing-with-thumb-up-indoor-shot-black-guy-casual-green-t-shirt-sitting-bicycle_197531-20125.jpg",
        },
        {
          name: "Lena K.",
          role: "Mountainbikerin",
          quote: "Mein Bike läuft jetzt wie am ersten Tag. Beste Werkstatt der Region.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-helmet_23-2149413700.jpg",
        },
        {
          name: "Tom W.",
          role: "Pendler",
          quote: "Endlich ein E-Bike, das zu mir passt. Vielen Dank an das Team!",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-posing-together-office-showing-thumbs-up-camera_1098-20268.jpg",
        },
        {
          name: "Sarah P.",
          role: "Pro-Athletin",
          quote: "Hervorragendes Setup für meine Rennen. Professionell und präzise.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-her-bicycle-sunset_1140-1.jpg",
        },
        {
          name: "Jan S.",
          role: "Freizeitfahrer",
          quote: "Einfach kompetent und freundlich. Absolute Empfehlung.",
          imageSrc: "http://img.b2bpic.net/free-photo/refined-girl-stylish-glasses-riding-around-town-outdoor-photo-lovely-dark-haired-woman-sitting-bicycle-front-trees_197531-19979.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Kontakt"
      text="Bereit für deine nächste Tour?"
      primaryButton={{
        text: "Werkstatt-Termin",
        href: "/contact",
      }}
      secondaryButton={{
        text: "Bikes ansehen",
        href: "/products",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import { Clock, MapPin, Phone } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ContactPage() {
  return (
    <>
  <div id="contact-page" data-section="contact-page">
    <SectionErrorBoundary name="contact-page">
          <ContactCta
      tag="Kontakt"
      text="Schreib uns oder komm direkt vorbei!"
      primaryButton={{
        text: "E-Mail senden",
        href: "mailto:info@radsport-derjung.de",
      }}
      secondaryButton={{
        text: "Anrufen",
        href: "tel:+49000000000",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Besuche uns"
      title="Finde deinen Weg zu uns"
      description="Komm vorbei, lass dich persönlich beraten und wir finden gemeinsam die beste Lösung für dein Anliegen."
      items={[
        {
          icon: MapPin,
          title: "Standort",
          description: "Zentral gelegen, gut erreichbar",
        },
        {
          icon: Clock,
          title: "Öffnungszeiten",
          description: "Flexibel für dich da",
        },
        {
          icon: Phone,
          title: "Erreichbarkeit",
          description: "Schnell per Telefon oder Mail",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-man-bike-shop_23-2148932613.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

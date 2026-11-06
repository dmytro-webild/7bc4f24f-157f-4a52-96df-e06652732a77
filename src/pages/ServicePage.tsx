import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import { RotateCw, Settings, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ServicePage() {
  return (
    <>
  <div id="service-details" data-section="service-details">
    <SectionErrorBoundary name="service-details">
          <FeaturesComparison
      tag="Unser Werkstatt-Service"
      title="Professionelle Wartung"
      description="Wir pflegen und reparieren jedes Bike mit höchster Präzision."
      negativeItems={[
        "Dreck & Verschleiß",
        "Quietschen",
        "Schleifende Bremsen",
      ]}
      positiveItems={[
        "Perfekte Schaltung",
        "Optimale Bremsleistung",
        "Sicherer Antrieb",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Werkstatt-Service"
      title="Profi-Support vor Ort"
      description="Unsere zertifizierten Mechaniker bringen jedes Rad wieder auf Vordermann. Wir nutzen ausschließlich hochwertige Ersatzteile."
      items={[
        {
          icon: Settings,
          title: "Feinjustierung",
          description: "Schaltung & Bremsen",
        },
        {
          icon: Zap,
          title: "E-Bike Service",
          description: "Software & Antrieb",
        },
        {
          icon: RotateCw,
          title: "Inspektion",
          description: "Umfassender Sicherheitscheck",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/two-handsome-stylish-males-working-with-bicycle-repair-shop-workers-repair-mounts-bike-workshop_613910-19665.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

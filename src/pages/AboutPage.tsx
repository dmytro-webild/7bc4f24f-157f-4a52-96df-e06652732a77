import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import { Shield, TrendingUp, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function AboutPage() {
  return (
    <>
  <div id="about-details" data-section="about-details">
    <SectionErrorBoundary name="about-details">
          <AboutFeaturesSplit
      tag="Unsere Geschichte"
      title="Mehr als nur ein Fahrradgeschäft"
      description="Wir stehen für Tradition, modernste Technik und vor allem für Menschen, die das Radfahren lieben. Seit unserer Gründung sind wir der Anlaufpunkt für ambitionierte Sportler."
      items={[
        {
          icon: Zap,
          title: "Innovation",
          description: "Immer am Puls der Zeit",
        },
        {
          icon: Shield,
          title: "Verlässlichkeit",
          description: "Dein Partner für lange Zeit",
        },
        {
          icon: TrendingUp,
          title: "Entwicklung",
          description: "Wir wachsen mit dir",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-bicycle-outdoors_23-2148889116.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesComparison
      tag="Warum Derjung"
      title="Dein Vorteil"
      description="Wir bieten mehr als nur Reparaturen. Wir begleiten dich auf dem Weg zum perfekten Radsport-Erlebnis."
      negativeItems={[
        "Unbekannte Quellen",
        "Mangelnde Präzision",
        "Standard-Lösungen",
      ]}
      positiveItems={[
        "Experten-Beratung",
        "Meister-Qualität",
        "Individuelle Anpassung",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

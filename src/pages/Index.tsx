import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import AgendaSection from "@/components/AgendaSection";
import MentorSection from "@/components/MentorSection";
import TargetSection from "@/components/TargetSection";
import TransformSection from "@/components/TransformSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <AgendaSection />
      <MentorSection />
      <TargetSection />
      <TransformSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />

      {/* Footer */}
      <footer className="section-dark-alt py-8 text-center">
        <div className="gold-divider max-w-xs mx-auto mb-6" />
        <p className="text-muted-foreground text-xs font-body">
          © 2026 Maestria Speakers. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;

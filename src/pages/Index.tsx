import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PurchaseNotification from "@/components/PurchaseNotification";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PurchaseNotification />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <AudienceSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;

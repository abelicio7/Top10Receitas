import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import BonusSection from "@/components/BonusSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PurchaseNotification from "@/components/PurchaseNotification";
import RecipeGallery from "@/components/RecipeGallery";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PurchaseNotification />
      <HeroSection />
      <BenefitsSection />
      <RecipeGallery />
      <FeaturesSection />
      <AudienceSection />
      <BonusSection />

      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;

import CtaSection from "../../ui/CtaSection";
import HeroSection from "../../ui/HeroSection";
import SectionHeading from "../../ui/SectionHeading";
import TrustedBy from "../../ui/TrustedBy";
import BenefitBox from "./BenefitBox";
import FeatureSection from "./FeatureSection";
import SectionBenefits from "./SectionBenefits";
import SectionFromVision from "./SectionFromVision";
import SectionTrustedBy from "./SectionTrustedBy";

function HomeLayout() {
  return (
    <div>
      <HeroSection />
      <TrustedBy />
      <FeatureSection />
      <SectionBenefits />
      <SectionFromVision />
      <CtaSection />
      <SectionTrustedBy />
    </div>
  );
}

export default HomeLayout;

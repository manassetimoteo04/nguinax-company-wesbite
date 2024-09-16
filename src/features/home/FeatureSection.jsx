import SectionHeading from "../../ui/SectionHeading";
import FeatureBox from "./FeatureBox";
import {
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlineComputerDesktop,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
} from "react-icons/hi2";

function FeatureSection() {
  return (
    <section className="container feature-section">
      <SectionHeading>
        <span>Feature</span>
        <h3>Features that makes us stand out</h3>
      </SectionHeading>
      <div className="grid">
        <FeatureBox>
          <span>
            <HiOutlineGlobeAlt />
          </span>
          <h4>Global customers</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FeatureBox>
        <FeatureBox>
          <span>
            <HiOutlineClock />
          </span>
          <h4>Global customers</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FeatureBox>
        <FeatureBox>
          <span>
            <HiOutlineComputerDesktop />
          </span>
          <h4>Global customers</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FeatureBox>
        <FeatureBox>
          <span>
            <HiOutlineHeart />
          </span>
          <h4>Global customers</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FeatureBox>
      </div>
    </section>
  );
}

export default FeatureSection;

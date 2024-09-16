import SectionHeading from "../../ui/SectionHeading";
import BenefitBox from "./BenefitBox";
import VisionBox from "./VisionBox";
import { HiOutlineArrowRight } from "react-icons/hi2";

function SectionFromVision() {
  return (
    <section className="container section-vision">
      <SectionHeading>
        <span>Visão</span>
        <h3>Da visão para a realidade</h3>
      </SectionHeading>
      <div className="grid">
        <VisionBox type="left">
          <span>2020</span>
          <div className="content">
            <span className="icon"></span>
            <h4>Found the Dream</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, nulla maxime! Cumque recusandae provident quidem
              aspernatur doloribus quod ratione eius exercitationem nesciunt
              necessitatibus? Quidem vitae reprehenderit quia distinctio dolore
              officiis.
            </p>
          </div>
        </VisionBox>
        <VisionBox type="right">
          <div className="content">
            <h4>Found the Dream</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, nulla maxime! Cumque recusandae provident quidem
              aspernatur doloribus quod ratione eius exercitationem nesciunt
              necessitatibus? Quidem vitae reprehenderit quia distinctio dolore
              officiis.
            </p>
          </div>
          <span>2024</span>
        </VisionBox>
      </div>
    </section>
  );
}

export default SectionFromVision;

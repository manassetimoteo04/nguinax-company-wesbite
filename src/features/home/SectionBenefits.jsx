import SectionHeading from "../../ui/SectionHeading";
import BenefitBox from "./BenefitBox";

function SectionBenefits() {
  return (
    <section className="container section-advantages">
      <SectionHeading>
        <span>Benefits</span>
        <h3>Experience Unmateched Advantages With Our Platform</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          fugit
        </p>
      </SectionHeading>
      <div className="grid">
        <BenefitBox type="left">
          <div className="content">
            <h4>Verdadeiro desenvolvimento</h4>
            <p>
              No mercado Angolano e nas instituições, onde muitas entidades
              priorizam lucro em detrimento de sua verdadeira responsabilidade,
              vocação, papel e missão.
            </p>
          </div>
          <div>
            <img src="ilustration/ilustration1.svg" alt="" />
          </div>
        </BenefitBox>
        <BenefitBox type="right">
          <div>
            <img src="ilustration/ilustration3.svg" alt="" />
          </div>
          <div className="content">
            <h4>Verdadeiro desenvolvimento</h4>
            <p>
              No mercado Angolano e nas instituições, onde muitas entidades
              priorizam lucro em detrimento de sua verdadeira responsabilidade,
              vocação, papel e missão.
            </p>
          </div>
        </BenefitBox>
        <BenefitBox type="left">
          <div className="content">
            <h4>Verdadeiro desenvolvimento</h4>
            <p>
              No mercado Angolano e nas instituições, onde muitas entidades
              priorizam lucro em detrimento de sua verdadeira responsabilidade,
              vocação, papel e missão.
            </p>
          </div>
          <div>
            <img src="ilustration/ilustration2.svg" alt="" />
          </div>
        </BenefitBox>
      </div>
    </section>
  );
}

export default SectionBenefits;

import SectionHeading from "../../ui/SectionHeading";
import TrustedBy from "../../ui/TrustedBy";

function SectionTrustedBy() {
  return (
    <section className="home-trusted-by">
      <div className="container">
        <SectionHeading>
          <span>Trusted by</span>
          <h3>All the companies that have trusted to our services</h3>
        </SectionHeading>
      </div>
      <TrustedBy />
    </section>
  );
}

export default SectionTrustedBy;

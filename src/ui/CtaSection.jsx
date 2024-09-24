import Button from "./Button";

function CtaSection() {
  return (
    <section className="container cta-section">
      <div className="cta-content">
        <h3>The staterd with our latest features</h3>
        <Button type="secondary">Get started</Button>
      </div>
      <div className="cta-img"></div>
    </section>
  );
}

export default CtaSection;

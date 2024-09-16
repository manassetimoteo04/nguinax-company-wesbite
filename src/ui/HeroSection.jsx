import Button from "./Button";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="content container">
        <h2>
          Streamline your Projects with <span>Nginax Company</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          atque! Dolores nam nihil debitis molestiae laborum cum, tenetur
          praesentium quis eum minus molestias. Maiores perferendis
          reprehenderit commodi nulla, unde animi?
        </p>
        <Button type="primary">Get Started</Button>
      </div>
      <img src="images/hero.jpeg" alt="" />
    </section>
  );
}

export default HeroSection;

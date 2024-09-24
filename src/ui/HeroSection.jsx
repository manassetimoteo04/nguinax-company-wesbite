import { useEffect, useRef } from "react";
import Button from "./Button";
import { useApp } from "../contexts/AppContexts";

function HeroSection() {
  const refEl = useRef();
  const { setShowScrollTop } = useApp();

  useEffect(() => {
    window.addEventListener("scroll", () => {});
    function heroObserver(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        setShowScrollTop(true);
      }
      if (entry.isIntersecting) {
        setShowScrollTop(false);
      }
    }
    const observer = new IntersectionObserver(heroObserver, {
      root: null,
      threshold: 0,
    });
    observer.observe(refEl.current);
  }, []);
  return (
    <section className="hero-section" ref={refEl}>
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
      <img src="/images/hero.jpeg" alt="" />
    </section>
  );
}

export default HeroSection;

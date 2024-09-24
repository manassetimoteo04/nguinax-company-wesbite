import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  const refEl = useRef();
  const scrollRef = useRef(0);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const event = () => {
      const scroll = window.scrollY;
      if (scroll > scrollRef.current) {
        scrollRef.current = scroll;
        setTop(true);
      }
      if (scroll < scrollRef.current) {
        scrollRef.current = scroll;
        setTop(false);
      }
    };
    window.addEventListener("scroll", event);
    // return window.removeEventListener("scroll", event);
  }, [setTop]);
  return (
    <header className={`main-header ${top ? "top-header" : ""}`} ref={refEl}>
      <div>
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;

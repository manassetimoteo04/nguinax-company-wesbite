import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="main-header">
      <div>
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;

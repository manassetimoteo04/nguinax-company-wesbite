import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre nós</NavLink>
        </li>
        <li>
          <NavLink to="/services">Serviços</NavLink>
        </li>
        <li>
          <NavLink to="/team">Equipe</NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">Depoimentos</NavLink>
        </li>{" "}
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

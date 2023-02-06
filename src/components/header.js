import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="header-content">
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="header-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

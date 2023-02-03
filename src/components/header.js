import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <div className="header-content">
        <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">
          <img src={logo} />
        </a>
        <div className="header-links">
          <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">About</a>
          <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

import logo from "../assets/placeholder_logo.png";

function Header(props) {
  return (
    <header>
      <div className="header-content">
        <img src={logo} />
        <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">
          <h1>{props.name}</h1>
        </a>
        <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">
          <h1>{props.name}</h1>
        </a>
      </div>
    </header>
  );
}

export default Header;

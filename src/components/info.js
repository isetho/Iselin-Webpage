import AboutImage from "../assets/about_image.png";

function Info() {
  return (
    <div className="intro info">
      <div className="intro-content">
        <h1>About me</h1>
        <p>
          Iselin er en utvikler, designer og konsulent som bor i Bergen. Hun
          engasjerer seg for universell utforming, gode brukeropplevelser og
          grafisk design. Hun er utdannet innenfor Informasjonsteknologi ved
          Høyskolen på Vestlandet og har en fartstid som utvikler på 1 år.
        </p>
        <img src={AboutImage} className="about-img" />
      </div>
    </div>
  );
}

export default Info;

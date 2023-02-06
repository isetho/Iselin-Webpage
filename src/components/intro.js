function Intro(props) {
  return (
    <div className="intro">
      <div className="intro-content">
        <p>
          Iselin er en utvikler, designer og konsulent som bor i Bergen. Hun
          engasjerer seg for universell utforming, gode brukeropplevelser og
          grafisk design. Hun er utdannet innenfor Informasjonsteknologi ved
          Høyskolen på Vestlandet og har en fartstid som utvikler på 1 år.
        </p>
        <button href="{props.buttonLink" className="button-primary">
          Les mer om personen bak
        </button>
      </div>
    </div>
  );
}

export default Intro;

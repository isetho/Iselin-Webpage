import Hero from "../components/hero";
import Card from "../components/card";
import Intro from "../components/intro";

function Home() {
  return (
    <div>
      <Hero name="Hero" />
      <Intro buttonLink="https://stardewvalleywiki.com/Stardew_Valley_Wiki" />
      <div className="content">
        <h1>Arbeid</h1>
        <div className="content-items">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;

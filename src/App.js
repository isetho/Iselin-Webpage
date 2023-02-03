import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Card from "./components/card";
import Intro from "./components/intro";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero name="Hero" />
      <Intro buttonLink="https://stardewvalleywiki.com/Stardew_Valley_Wiki" />
      <div className="content">
        <div className="content-items">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer name="Fin footer" />
    </div>
  );
}

export default App;

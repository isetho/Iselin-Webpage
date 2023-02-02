import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ImageCard from "./components/imageCard";
import TextCard from "./components/textCard";

function App() {
  return (
    <div className="app">
      <Header name="Kontakt" />
      <Hero name="Hero" />
      <div className="content">
        <ImageCard />
        <TextCard />
      </div>
      <Footer name="Fin footer" />
    </div>
  );
}

export default App;

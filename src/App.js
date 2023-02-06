import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ScrollToTop from "./helpers/scrollToTop";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer name="Fin footer" />
    </div>
  );
}

export default App;

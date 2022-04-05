import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header-container">
        <h1 className="header">Portefølje</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="image-container w-1/4 p-4 m-3">
            <p className="text-center my-10">Image</p>
          </div>
          <div className="text-container w-3/4 p-4 m-3">
            <p className="text-center my-10">Text</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="info-container p-4 m-3">
          <p className="text-center my-10">Info</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="text-container w-3/4 p-4 m-3">
            <p className="text-center my-10">Text</p>
          </div>
          <div className="image-container w-1/4 p-4 m-3">
            <p className="text-center my-10">Image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

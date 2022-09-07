import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Concat from "./components/concat";
import Metabook from "./components/metabook";
import Olympus from "./components/olympus";
import NYPD from "./components/nypd";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="components">
        <Home/>
        <div className="fades">
          <div className="is-visible"><Concat/></div>
          <div className="is-visible"><Metabook/></div>
          <div className="is-visible"><Olympus/></div>
          <div className="is-visible"><NYPD/></div>
          <div className="is-visible"><About/></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/navbar";
import Home from "./components/home";
import Concat from "./components/concat";
import Metabook from "./components/metabook";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="components">
        <Home/>
        <Concat/>
        <Metabook/>
      </div>
    </div>
  );
}

export default App;

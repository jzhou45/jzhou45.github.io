import Navbar from "./components/navbar";
import Home from "./components/home";
import Concat from "./components/concat";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="components">
        <Home/>
        <Concat/>
      </div>
    </div>
  );
}

export default App;

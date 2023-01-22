import "./app.scss";
import Home from "./home/home";
import Project from "./project/project";
import Concat from "./concat/concat";
import Metabook from "./metabook/metabook";
import Olympus from "./olympus/olympus";

function App() {
  return (
    <div className="App">
      <Home/>
      <Project/>
      <Concat/>
      <Metabook/>
      <Olympus/>
    </div>
  );
};

export default App;

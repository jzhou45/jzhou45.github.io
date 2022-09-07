import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Concat from "./components/concat";
import Metabook from "./components/metabook";
import Olympus from "./components/olympus";
import NYPD from "./components/nypd";

const FadeInSection = ({
  children,
}) => {
  const domRef = React.useRef();
  
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (<section ref={ domRef } className={ isVisible ? ' is-visible' : '' }>{ children }</section>);
};

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="components">
        <Home/>
        <div className="fades">
          <FadeInSection><Concat/></FadeInSection>
          <FadeInSection><Metabook/></FadeInSection>
          <FadeInSection><Olympus/></FadeInSection>
          <FadeInSection><NYPD/></FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default App;

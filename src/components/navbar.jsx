import React from "react";
import "../stylesheets/navbar.css";

const Navbar = () => {
    const scrollToComponent = componentId => {
        document.getElementById(componentId).scrollIntoView({
            behavior: "smooth"
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    return(
        <nav className="navbar">
            <span onClick={scrollToTop}>Home</span>
            <span onClick={() => scrollToComponent("concat")}>.concat</span>
            <span onClick={() => scrollToComponent("metabook")}>Metabook</span>
            <span onClick={() => scrollToComponent("olympus")}>Olympus Card-Jitsu</span>
            <span onClick={() => scrollToComponent("nypd") }>Visualizing NYPD Arrest Data</span>
            <span onClick={() => scrollToComponent("about")}>About</span>
        </nav>
    );
};

export default Navbar;
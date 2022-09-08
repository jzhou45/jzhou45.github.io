import React from "react";
import "../stylesheets/navbar.css";

const Navbar = () => {
    const scrollToComponent = componentId => {
        document.getElementById(componentId).scrollIntoView({
            behavior: "smooth"
        });
    };
    
    return(
        <nav className="navbar">
            <span onClick={() => scrollToComponent("gotohome")}>Home</span>
            <span onClick={() => scrollToComponent("concat")}>.concat</span>
            <span onClick={() => scrollToComponent("metabook")}>Metabook</span>
            <span onClick={() => scrollToComponent("olympus")}>Olympus Card-Jitsu</span>
            <span onClick={() => scrollToComponent("nypd") }>Visualizing NYPD Arrest Data</span>
            <span onClick={() => scrollToComponent("about")}>About</span>
        </nav>
    );
};

export default Navbar;
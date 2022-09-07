import React from "react";
import "../stylesheets/navbar.css";

const Navbar = () => {
    const scrollToComponent = componentId => {
        let pageHeight;
        switch (componentId) {
            case "concat":
                pageHeight = window.innerHeight;
                break;
            case "metabook":
                pageHeight = window.innerHeight * 2;
                break;
            case "olympus":
                pageHeight = window.innerHeight * 3;
                break;
            case "nypd":
                pageHeight = window.innerHeight * 4;
                break
            default:
                break;
        }

        window.scrollTo({
            top: pageHeight,
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
            <span>About</span>
        </nav>
    );
};

export default Navbar;
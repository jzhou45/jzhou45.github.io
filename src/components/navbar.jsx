import React from "react";
import "../stylesheets/navbar.css";

const Navbar = () => {
    return(
        <nav className="navbar">
            <span>Home</span>
            <span>.concat</span>
            <span>Metabook</span>
            <span>Olympus Card-Jitsu</span>
            <span>Visualizing NYPD Arrest Data</span>
            <span>About</span>
        </nav>
    );
};

export default Navbar;
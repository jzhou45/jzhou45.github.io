import React from "react";
import "./home.scss";
import astronaut from "./astronaut.png"

const Home = () => {

    return(
        <div className="home"> 
            <div className="name">
                <span>Jonathan Zhou</span>
                <span>Jonathan Zhou</span>
                <span>Jonathan Zhou</span>
                <span>Jonathan Zhou</span>
            </div>
            <div className="astronaut">
                <div className="astronaut1"></div>
                <div className="astronaut2"></div>
                <div className="astronaut3"></div>
            </div>
        </div>
    );
};

export default Home;
import React from "react";
import olympus from "../images/olympus.png";
import "../stylesheets/olympus.css"

const Olympus = () => {
    return(
        <div id="olympus">
            <div>
                <img src={olympus} alt="olympus" />
            </div>

            <div className="olympus-about">
                <div>
                    <h1>Olympus Card-Jitsu</h1>

                    <div className="concat-tech">
                        <span>Technology Used:</span>
                        <span>JavaScript, HTML5, CSS3</span>
                    </div>

                    <p>
                        Olympus Card-Jitsu combines an agglomeration of favorite 
                        things from my childhood, including Club Penguin, ninjas 
                        (which inspired the original Card-Jitsu), and Greek myths 
                        and the Percy Jackson series.

                        Olympus Card-Jitsu aims to make a faithful adapatation to 
                        the core Card-Jitsu gameplay with new classes and cards 
                        based on Greek mythology and lore. In order to keep the game 
                        a client-side project, the opponenet will be a simple A.I., 
                        rather than an opposing player.
                    </p>

                    <div className="link-buttons">
                        <a href="https://github.com/jzhou45/Olympus-Card-Jitsu" target="_blank" className="bbutton">GitHub</a>
                        <a href="https://jzhou45.github.io/Olympus-Card-Jitsu/" target="_blank" className="abutton">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Olympus;
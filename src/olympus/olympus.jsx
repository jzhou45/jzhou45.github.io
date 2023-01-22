import React, {useState} from "react";
import "./olympus.scss";
import card1 from "./screenshots/card1.png";
import card2 from "./screenshots/card2.png";
import card3 from "./screenshots/card3.png";
import card4 from "./screenshots/card4.png";
import card5 from "./screenshots/card5.png";
import zeus from "./screenshots/zeus.png";
import medusa from "./screenshots/medusa.png";
import hera from "./screenshots/hera.png";
import heracles from "./screenshots/heracles.png";
import dino from "./screenshots/dino.png";

const Olympus = () => {
    const [zeusHover, setZeusHover] = useState(false);
    const [medusaHover, setMedusaHover] = useState(false);
    const [heraHover, setHeraHover] = useState(false);
    const [heraclesHover, setHeraclesHover] = useState(false);
    const [dinoHover, setDinoHover] = useState(false);

    const openLink = () => {
        window.open("https://jzhou45.github.io/Olympus-Card-Jitsu/", "_blank");
    };

    return(
        <div className="olympus">
            <img 
                src={zeus} 
                alt="" 
                className={zeusHover ? "zeus" : "hidden"}
                />

            <img 
                src={medusa} 
                alt="" 
                className={medusaHover ? "medusa" : "hidden"}
            />

            <img 
                src={hera} 
                alt="" 
                className={heraHover ? "hera" : "hidden"}
            />

            <img 
                src={heracles} 
                alt="" 
                className={heraclesHover ? "heracles" : "hidden"}
            />

            <img 
                src={dino} 
                alt="" 
                className={dinoHover ? "dino" : "hidden"}
            />

            <div className="olympus-info">
                <h1 onClick={openLink}>Olympus Card-Jitsu</h1>
                <span>JavaScript, HTML5, CSS3</span>
            </div>

            <div className="hand">
                <img src={card1} alt="" onMouseEnter={() => setZeusHover(!zeusHover)} onMouseLeave={() => setZeusHover(!zeusHover)}/>
                <img src={card2} alt="" onMouseEnter={() => setMedusaHover(!medusaHover)} onMouseLeave={() => setMedusaHover(!medusaHover)}/>
                <img src={card3} alt="" onMouseEnter={() => setHeraHover(!heraHover)} onMouseLeave={() => setHeraHover(!heraHover)}/>
                <img src={card4} alt="" onMouseEnter={() => setHeraclesHover(!heraclesHover)} onMouseLeave={() => setHeraclesHover(!heraclesHover)}/>
                <img src={card5} alt="" onMouseEnter={() => setDinoHover(!dinoHover)} onMouseLeave={() => setDinoHover(!dinoHover)}/>
            </div>
        </div>
    );
};

export default Olympus;
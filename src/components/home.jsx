import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import concat from "../images/concat.png";
import metabook from "../images/metabook.png";
import olympus from "../images/olympus.png";
import "../stylesheets/home.css";
import { useState, useEffect } from "react";

const Home = () => {
    const [state, setState] = useState({
        funcText: "",
        consoleText: "",
        consoleText2: "",
        closeText: "",
    });

    const {funcText, consoleText, consoleText2, closeText} = state;

    useEffect(() => {
        let funcN = 0;
        let funcStr = "function helloThere( ){";
        let consoleN = 0;
        let consoleStr = "console.log('I am Jonathan Zhou \\n);";
        let consoleN2 = 0;
        let consoleStr2 = "console.log('and Welcome to my Page');";
        let closeN = 0;
        let closeStr = "};"
        let blink = 0;
        let timer = setInterval(() => {
            if (funcN !== funcStr.length){
                funcN++;
                setState({
                    ...state,
                    funcText: funcStr.slice(0, funcN)
                });
            } else if (consoleN !== consoleStr.length - 1){
                consoleN++;
                setState({
                    ...state,
                    funcText: funcStr,
                    consoleText: consoleStr.slice(0, consoleN)
                });
            } else if (consoleN2 !== consoleStr2.length){
                consoleN2++;
                setState({
                    ...state,
                    funcText: funcStr,
                    consoleText: consoleStr,
                    consoleText2: consoleStr2.slice(0, consoleN2)
                });
            } else{
                closeN++;
                setState({
                    ...state,
                    funcText: funcStr,
                    consoleText: consoleStr,
                    consoleText2: consoleStr2,
                    closeText: closeStr.slice(0, closeN)
                });
                if (closeN === closeStr.length){
                    clearInterval(timer);
                    setInterval(() => {
                        if (blink === 0){
                            setState({
                                ...state,
                                funcText: funcStr,
                                consoleText: consoleStr,
                                consoleText2: consoleStr2,
                                closeText: closeStr + "|"
                            });
                            blink = 1;
                        } else{
                            setState({
                                ...state,
                                funcText: funcStr,
                                consoleText: consoleStr,
                                consoleText2: consoleStr2,
                                closeText: closeStr
                            });
                            blink = 0;
                        };
                    }, 500);
                };
            };
        }, 60);
    }, [])


    return(
        <div id="home">
            <div>
                <p className="func">{funcText}</p>
                <p className="console">{consoleText}</p>
                <p className="console2">{consoleText2}</p>
                <p className="close">{closeText}</p>
            </div>
            <div id="gotohome"></div>
        </div>
    );
};

export default Home;
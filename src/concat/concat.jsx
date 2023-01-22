import React from "react";
import "./concat.scss";
import splash from "./screenshots/splash.png";
import homepage from "./screenshots/homepage.png";
import progress from "./screenshots/progress.png";
import rooms from "./screenshots/rooms.png";
import question from "./screenshots/question.png";


const Concat = () => {
    const view = (e) => {
        e.target.style.zIndex = 6;
    };

    const goBack = (e, num) => {
        e.target.style.zIndex = num;
    };

    const openLinks = () => {
        window.open("https://concat.herokuapp.com/", "_blank");
    }

    return(
        <div className="concat">
            <div className="images">
                <img onMouseEnter={e => view(e)} onMouseLeave={e => goBack(e,1)} className="img1" src={splash} alt="" />
                <img onMouseEnter={e => view(e)} onMouseLeave={e => goBack(e,2)} className="img2" src={homepage} alt="" />
                <img onMouseEnter={e => view(e)} onMouseLeave={e => goBack(e,3)} className="img3" src={progress} alt="" />
                <img onMouseEnter={e => view(e)} onMouseLeave={e => goBack(e,4)} className="img4" src={rooms} alt="" />
                <img onMouseEnter={e => view(e)} onMouseLeave={e => goBack(e,5)} className="img5" src={question} alt="" />
            </div>

            <div className="concat-info">
                <h1 onClick={openLinks}>.concat</h1>

                <span>
                    React
                    {/* React, Redux, Express, Axios, Node.js, MongoDB, Socket.IO, Monaco Editor */}
                </span>
                <span>
                    Redux
                </span>
                <span>
                    Express
                </span>
                <span>
                    Axios
                </span>
                <span>
                    Node.js
                </span>
                <span>
                    MongoDB
                </span>
                <span>
                    Socket.IO
                </span>
                <span>
                    Monaco Editor
                </span>
            </div>
        </div>
    );
};

export default Concat;
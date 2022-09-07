import React from "react";
import concat from "../images/concat.png";
import "../stylesheets/concat.css";

const Concat = () => {
    return(
        <div id="concat">
            <div>
                <img src={concat} alt="concat" />
            </div>

            <div className="concat-about">
                <div>
                    <h1>.concat</h1>

                    <div className="concat-tech">
                        <span>Technology Used:</span>
                        <span>
                            React, Redux, Express, Node.js, MongoDB, Socket.IO,
                            Monaco Editor
                        </span>
                    </div>

                    <p>
                    .concat is a MERN stack web application that is geared 
                    towards engineers practicing Leetcode questions 
                    collaboratively with their colleagues. Users 
                    would create rooms where they can invite their friends into 
                    with a unique room link. There, they can either choose to use 
                    one of the default 75 questions or create their own questions. 
                    After selecting a question to work on, they can go into the 
                    problem's room where there will be live chat functionality 
                    that allows for easy communication as well as live share of 
                    IDE to make it easy to work together.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Concat
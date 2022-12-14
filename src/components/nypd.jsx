import React from "react";
import nypd from "../images/nypd.png";
import "../stylesheets/nypd.css"

const NYPD = () => {
    return(
            <div id="nypd">
            <div className="nypd-about">
                <div>
                    <h1>Visualizing NYPD Arrest Data</h1>

                    <div className="nypd-tech">
                        <span>Technology Used:</span>
                        <span>
                            Python, JavaScript, Bottle.py, Plotly
                        </span>
                    </div>

                    <p>
                        My first ever CS project made for an intro CS course at UB
                        during my last semester of university. This project is a
                        web application utilizing Python and JavaScript to 
                        visualize arrest data by boroughs from NYC Open Data.
                    </p>

                    <div className="link-buttons">
                        <a href="https://github.com/jzhou45/Visualizing_NYPD_Arrest_Data" target="_blank" className="bbutton">GitHub</a>
                    </div>
                </div>
            </div>

            <div>
                <img src={nypd} alt="nypd" />
            </div>
        </div>
    );
};

export default NYPD;
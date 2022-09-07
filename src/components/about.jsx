import React from "react";
import about from "../images/me.png";
import "../stylesheets/about.css";
import resume from "../images/Jonathan_Zhou_Resume.pdf";

const About = () => {
    return(
        <div id="about">
            <div>
                <img src={about} alt="about" />
            </div>

            <div className="about">
                <div>
                    <h1>Jonathan Zhou</h1>

                    <div className="about-education">
                        <div className="education-flex">
                            <div className="education">
                                <span className="school" id="ub">The State University of New York at Buffalo</span>
                            </div>
                            <span className="major">Bachelor of Science in Psychology</span>
                            <span className="major">Minor in History</span>
                        </div>

                        <div className="education-flex">
                            <div className="education">
                                <span className="school" id="aa">App Academy</span>
                            </div>
                            <span className="major">Full-Stack Software Engineering Program</span>
                        </div>
                    </div>

                    <a href={resume} target="_blank" className="resume">Resume</a>

                    <div className="link-buttons">
                        <div>
                            <a href="https://github.com/jzhou45" target="_blank" className="bbutton">GitHub</a>
                            <a href="https://angel.co/u/jonathan-zhou-5" target="_blank" className="abutton">AngelList</a>
                            <a href="https://www.linkedin.com/in/jonathanzhou77/" target="_blank" className="bbutton">LinkedIn</a>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
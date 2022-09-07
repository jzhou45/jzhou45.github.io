import React from "react";
import metabook from "../images/metabook.png";
import "../stylesheets/metabook.css"

const Metabook = () => {
    return(
        <div id="metabook">
            <div className="metabook-about">
                <div>
                    <h1>metabook</h1>

                    <div className="metabook-tech">
                        <span>Technology Used:</span>
                        <span>
                            React, Redux, jQuery, Ruby on Rails, jBuilder,
                            PostgreSQL, AWS S3/IAM
                        </span>
                    </div>

                    <p>
                        Metabook is a clone of Facebook and aims to reproduce the 
                        profile, wall/newsfeed, and friend functionality of Facebook. 
                        Users are able to view other people's post, make/edit/delete 
                        posts from their newsfeed and profile page, and update thier 
                        profile.
                    </p>
                </div>
            </div>

            <div>
                <img src={metabook} alt="metabook" />
            </div>
        </div>
    );
};

export default Metabook;
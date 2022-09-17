import React from "react";
import metabook from "../images/metabook.png";
import "../stylesheets/metabook.css"
import { Carousel } from "react-responsive-carousel";
import newsfeed from "../images/metabook_newsfeed.gif";
import makePosts from "../images/make_posts.gif";
import commentsAndReplies from "../images/comments_and_replies.gif";
import likes from "../images/likes.gif";
import crudPosts from "../images/crud_posts.gif";
import profile from "../images/profile.gif";
import searchbar from "../images/searchbar.gif";

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

                    <div className="link-buttons">
                        <a href="https://github.com/jzhou45/metabook" target="_blank" className="bbutton">GitHub</a>
                        <a href="https://metabookclone.herokuapp.com/#/" target="_blank" className="abutton">Demo</a>
                    </div>
                </div>
            </div>

            <Carousel
                infiniteLoop 
                autoPlay	
                interval={8000} 
                stopOnHover={false} 
                showThumbs={false} 
                showStatus={false}
                showArrows={false}
                swipeable={false}
            >
                <div>
                    <img src={metabook} alt="metabook" />
                </div>

                <div>
                    <img src={newsfeed} alt="newsfeed" />
                </div>

                <div>
                    <img src={makePosts} alt="make posts" />
                </div>

                <div>
                    <img src={commentsAndReplies} alt="comments and replies" />
                </div>

                <div>
                    <img src={likes} alt="likes" />
                </div>

                <div>
                    <img src={crudPosts} alt="crud posts" />
                </div>

                <div>
                    <img src={profile} alt="profile" />
                </div>

                <div>
                    <img src={searchbar} alt="search bar" />
                </div>
            </Carousel>
        </div>
    );
};

export default Metabook;
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./metabook.scss";
import metabook from "./screenshots/metabook.png";
import commentsAndReplies from "./screenshots/comments_and_replies.gif";
import crudPosts from "./screenshots/crud_posts.gif";
import likes from "./screenshots/likes.gif";
import makePosts from "./screenshots/make_posts.gif";
import metabookNewsfeed from "./screenshots/metabook_newsfeed.gif";
import profile from "./screenshots/profile.gif";
import searchbar from "./screenshots/searchbar.gif";

const Metabook = () => {
    const openLink = () => {
        window.open("https://metabookclone.herokuapp.com/#/", "_blank");
    };

    return (
        <div className="metabook">
            <div className="metabook-info">
                <h1 onClick={openLink}>metabook</h1>
                <span>React, Redux, jQuery, Ruby on Rails, jBuilder, PostgreSQL, AWS S3/IAM</span>
            </div>

            <div  className="car">
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
                        <img src={metabook} alt="" />
                    </div>

                    <div>
                        <img src={commentsAndReplies} alt="" />
                    </div>

                    <div>
                        <img src={crudPosts} alt="" />
                    </div>

                    <div>
                        <img src={likes} alt="" />
                    </div>

                    <div>
                        <img src={metabook} alt="" />
                    </div>

                    <div>
                        <img src={makePosts} alt="" />
                    </div>

                    <div>
                        <img src={metabookNewsfeed} alt="" />
                    </div>

                    <div>
                        <img src={profile} alt="" />
                    </div>

                    <div>
                        <img src={searchbar} alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Metabook;
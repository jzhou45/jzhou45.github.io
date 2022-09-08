import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import concat from "../images/concat.png";
import metabook from "../images/metabook.png";
import olympus from "../images/olympus.png";
import "../stylesheets/home.css";

const Home = () => {
    return(
        <div id="home">
            <Carousel
                infiniteLoop 
                autoPlay	
                interval={4000} 
                stopOnHover={false} 
                showThumbs={false} 
                showStatus={false}
                showArrows={false}
                swipeable={false}
                className="home-carousel"
            >
                <div>
                    <img src={concat} alt=".concat" />
                </div>

                <div>
                    <img src={metabook} alt="metabook" />
                </div>

                <div>
                    <img src={olympus} alt="olympus card-jitsu" />
                </div>
            </Carousel>

            <h1 className="word">Jonathan Zhou</h1>

            <div id="gotohome">Nothing to see here</div>

            <div className="swipe-down-div">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/25/25623.png" 
                    alt="swipe down" 
                    className="swipe-down"
                />
            </div>
        </div>
    );
};

export default Home;
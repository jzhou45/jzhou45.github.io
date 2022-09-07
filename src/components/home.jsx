import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import concat from "../images/concat.png";
import metabook from "../images/metabook.png";
import olympus from "../images/olympus.png";

const Home = () => {
    return(
        <div className="Home">
            <Carousel
                infiniteLoop 
                autoPlay	
                interval={4000} 
                stopOnHover={false} 
                showThumbs={false} 
                showStatus={false}
                showArrows={false}
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
        </div>
    );
};

export default Home;
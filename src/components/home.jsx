import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import concat from "../images/concat.png";
import metabook from "../images/metabook.png";
import olympus from "../images/olympus.png";
import "../stylesheets/home.css";
import $ from "jquery";

const Home = () => {
    let words =["Hi there,", "I'm Jonathan", "Welcome to my page!"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 120;

    const wordflick = () => {
        setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length){
                    ++skip_count;
                    if (skip_count === skip_delay){
                        forwards = false;
                        skip_count = 0;
                    };
                };
            } else{
                if (offset === 0){
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len){
                        i = 0;
                    };
                };
            };
            part = words[i].substring(0, offset);
            if (skip_count === 0){
                if (forwards){
                    offset++
                } else{
                    offset--
                };
            };
            $('.word').text(part);
        }, speed);
    };

    $(function () {
        wordflick();
    });

    return(
        <div className="home">
            <Carousel
                infiniteLoop 
                autoPlay	
                interval={4000} 
                stopOnHover={false} 
                showThumbs={false} 
                showStatus={false}
                showArrows={false}
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

            <div className="word"></div>
        </div>
    );
};

export default Home;
import React from "react";
import "./Banner.css";
import Img1 from "./../../img/banner1.jpg";
import Img2 from "./../../img/banner2.jpg";
import Img3 from "./../../img/banner3.jpg";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay infiniteLoop>
        <div className="slide-container">
          <img src={Img1} alt="Jean 1" />
        </div>
        <div className="slide-container">
          <img src={Img2} alt="Jean 2" />
        </div>
        <div className="slide-container">
          <img src={Img3} alt="Jean " />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

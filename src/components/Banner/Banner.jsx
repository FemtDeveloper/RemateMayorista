import React from "react";
import "./Banner.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons";
import Img1 from "./../../img/banner1.jpg";
import Img2 from "./../../img/banner2.jpg";
import Img3 from "./../../img/banner3.jpg";

const Banner = () => {
  return (
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />

        <div className="slide first">
          <img src={Img1} alt="slide" />
        </div>
        <div className="slide">
          <img src={Img2} alt="slide" />
        </div>
        <div className="slide">
          <img src={Img3} alt="slide" />
        </div>
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
        </div>
      </div>
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
      </div>
    </div>
  );
};

export default Banner;

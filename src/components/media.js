import React from "react";
import imgmed from "../images/m1.jpeg";
import imgmed1 from "../images/m2.jpeg";
import imgmed2 from "../images/m3.jpeg";
import imgmed3 from "../images/m4.jpeg";
import imgmed4 from "../images/m5.jpeg";
import imgmed5 from "../images/m6.jpeg";
import imgmed6 from "../images/2.jpeg";

const media = () => {
  return (
    <div>
      <div className="gallery" id="media">
        <img
          className="four-grid-cells"
          src={imgmed}
          alt="Northern Winter"
        />

        <img
          src={imgmed1}
          alt="Shining Stars"
        />

        <img
          className="wide-"
          src={imgmed2}
          alt="A River Flowing"
        />

        <img
          src={imgmed3}
          alt="A cloudy Mountain "
        />

        <img
          src={imgmed4}
          alt="A Winter Rainbow "
        />

        <img
          className="wide-"
          src={imgmed5}
          alt="A Clean Mountain Lake"
        />

        <img
          src={imgmed6}
          alt="Shining Stars "
        />
      </div>
    </div>
  );
};

export default media;

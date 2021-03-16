import React from "react";
import Sunset from "./pics/sunset/d.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function HomeImg() {
  return (
    <div>
      <div>
        <img
          src={Sunset}
          alt=""
          className=" imgLanding fluid   "
          style={{
            justifyContent: "center",
            zIndex: "-3",
            position: "",
            marginTop: "0%",
          }}
        />
        <div className="overlay-image "></div>
        <div
          className=""
          style={{
            zIndex: "1",
            position: "absolute ",
          }}
        >
          <div
            style={{
              width: "85vw",
              fontFamily: "fantasy",
              textAlign: "cemter",
            }}
            className="absoluteTopMidHome"
          >
            <h3> Home Page </h3>
            <p>{}</p>
          </div>
          <div className="overlayimg"></div>
        </div>
      </div>
    </div>
  );
}

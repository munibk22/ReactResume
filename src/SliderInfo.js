import React from "react";
import SliderResume from "./SliderResume";

export default function SliderInfo() {
  return (
    <div>
      <div
        className="absolute marginautomod "
        style={{
          color: "white",
          marginLeft: "4%",
          marginTop: "-15px",
          zIndex: "3",
        }}
      >
        <p className="h">
          <h1 style={{ textShadow: "3px 3px 2px slategray" }} id="mySlider">
            <strong>Hello World</strong>
          </h1>
        </p>
      </div>
      <div
        className="container absolutebottom relativeb"
        style={{
          zIndex: "3",
          maxWidth: "800px",
          textAlign: "center",
          marginBottom: "7rem",
        }}
      >
        <SliderResume />
      </div>
    </div>
  );
}

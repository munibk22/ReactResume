import React from "react";
import SideNav from "./SideNav";
import Carousel from "./Carousel";

export default function About() {
  return (
    <div className="section" style={{ width: "" }}>
      <div className="componentBoxB col">
        <Carousel />
      </div>

      <div
        className="componentBoxB componentBoxD absoluteright"
        style={{ float: "left", marginTop: "" }}
      >
        {/* <SideNav /> */}
      </div>
    </div>
  );
}

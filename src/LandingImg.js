import React from "react";

import Sidenav from "./SideNav";
import ResumeRouter from "./ResumeRouter";

import Carousel from "react-bootstrap/Carousel";

const LandingImg = () => {
  return (
    <div>
      <div
        className=" landingdiv  "
        style={{
          position: "relative",
        }}
      >
        <div></div>
      </div>
      <div style={{}} className="">
        <div
          className="componentBoxB  "
          style={{
            float: "left",
            maxHeight: "",
            display: "flex",
            marginTop: "2%",
          }}
        >
          <Sidenav />
        </div>

        <div
          className="center"
          style={{
            justifyContent: "center",
            maxWidth: "1000px",
            width: "65%",
            float: "",
            display: "flex",
          }}
        >
          <ResumeRouter />
        </div>
      </div>
    </div>
  );
};

export default LandingImg;

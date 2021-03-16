import React from "react";
import Sunset from "./pics/sunset/d.jpg";
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
              <Carousel.Caption
                style={{
                  align: "center",
                  zIndex: "1",
                  marginLeft: "",
                  width: "85vw",
                }}
              >
                <h3> Home Page </h3>
                <p>{}</p>
              </Carousel.Caption>
              <div className="overlayimg"></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{}} className="">
        <div
          className="componentBoxB  "
          style={{ float: "left", maxHeight: "", display: "flex" }}
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

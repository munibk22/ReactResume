import React from "react";
import Sunset from "./pics/sunset.jpg";
import Sidenav from "./SideNav";
import ResumeRouter from "./ResumeRouter";

import Carousel from "react-bootstrap/Carousel";

const LandingImg = () => {
  return (
    <div>
      <div className="componentBoxB " style={{ float: "left", maxHeight: "" }}>
        <Sidenav />
      </div>

      <div className="   " style={{ margin: "auto", justifyContent: "center" }}>
        <div style={{ marginLeft: "10%" }}>
          <div>
            <img
              src={Sunset}
              alt=""
              className=" imgLanding fluid center "
              style={{
                justifyContent: "center",
                zIndex: "-3",
              }}
            />
            <div
              className=""
              style={{
                zIndex: "1",
                position: "absolute ",
              }}
            >
              <Carousel.Caption
                style={{
                  justifyContent: "center",
                  align: "center",
                  zIndex: "1",
                  marginLeft: "-5rem",
                  width: "100vw",
                }}
              >
                <h3> Home Page </h3>
                <p>{}</p>
              </Carousel.Caption>
            </div>
          </div>
        </div>
        <div style={{}} className="">
          <div
            className="center"
            style={{
              justifyContent: "center",
              maxWidth: "800px",
              width: "55%",
              marginLeft: "",
            }}
          >
            <ResumeRouter />
          </div>
        </div>

        {/* <div
          style={{
            marginLeft: "35%",
            justifyContent: "center",
            maxWidth: "850px",
          }}
        >
          <ResumeRouter />
        </div> */}
      </div>

      {/* <div style={{ margin: "auto", justifyContent: "center" }}>
        <ResumeRouter style={{ margin: "auto", justifyContent: "center" }} />
      </div> */}
    </div>
  );
};

export default LandingImg;

import React, { useEffect } from "react";
import Softskills from "./SoftSkills";
import Skills from "./Skills";
import { Row } from "react-bootstrap";
import Dynamic from "./Dynamic";
import Education from "./Education";
import Moon from "./pics/moon.png";
import Moonb from "./pics/moonb.jpeg";
import SliderInfo from "./SliderInfo";

export default function Resume2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="absoluteTop">
      <div className="relative">
        <Row
          className="absolute"
          style={{ margin: "", marginLeft: "", marginTop: "" }}
        >
          {/* <Col
            md="auto"
            className="hbox hexgrid1"
            style={{ marginRight: "-15px" }}
          >
            <Row className="d-flex flex-row">
              <div className="hexagon"></div>
            </Row>

            <Row className="d-flex ">
              <div className="hexagon"></div>
            </Row>
          </Col> */}

          {/* <Col md="auto">
            <h4 style={{ color: "white", textAlign: "", margin: "auto" }}>
              Munib Khan Resume
            </h4>
          </Col> */}

          {/* <div > 
<hr className="hrEnd"></hr>
<p></p>
 <hr className="hrEnd"></hr>
  </div> */}
        </Row>
        <div>
          <img
            src={Moonb}
            alt=""
            className="imgstyle  "
            style={{ width: "100%" }}
          />
        </div>

        <div className="backdrop"></div>

        <div className="absoluteTop backdropred " style={{}}></div>
        {/* <div className="absoluteTop componentBoxB" style={{ maxHeight:'100%', height:'900px', overflow:'hidden', zIndex:"2"}}>
      <SideNav  />
 </div>  */}
        <div
          className=" moon "
          style={{ color: "white", marginLeft: "8%", marginRight: "25%" }}
        >
          <img src={Moon} className="up " alt="" id="mySlider" />
        </div>
        <div className="relativeb " style={{}}>
          <SliderInfo />
        </div>
      </div>

      <section style={{ maxWidth: "98vw" }}>
        <div className="section" style={{ maxWidth: "" }}>
          <Dynamic />
        </div>

        <div
          style={{
            width: "100vw",
            margin: "auto",
            marginTop: "5%",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2>Skills and Education</h2>
          <hr className="hrRed" />
        </div>

        <div className="componentBox2 section ">
          <Skills />
        </div>
        <div className="componentBox2 section ">
          <Softskills />
        </div>
        <div className="componentBox2 section">
          <Education />
        </div>

        <div
          style={{
            width: "100vw",
            margin: "auto",
            marginTop: "5%",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2>About Me and Experience</h2>
          <hr className="hrRed" />
        </div>

        <div className="componentBox2">
          <Softskills />
        </div>
        <div className="componentBox2">
          {" "}
          <Skills />{" "}
        </div>
      </section>
    </div>
  );
}

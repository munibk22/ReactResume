import React from "react";
import { Link } from "react-router-dom";
import Logo from "../pics/logob.png";
import Rose from "../pics/cloud.png";
import Rasp from "../pics/rasp.png";
//import Html from'./pics/htmllogo.png';

function ResumeRouter() {
  return (
    <div style={{ marginLeft: "-" }}>
      <Link to="/reactresume">
        <button className="box threedhover " id="" style={{ margin: "25px" }}>
          React Resume:
          <div></div>
          <img
            src={Logo}
            alt=""
            className="rotate"
            style={{ width: "55px", height: "60px", marginTop: "10%" }}
          />
        </button>
      </Link>

      <Link to="htmlresume">
        <button className="box threedhover" style={{ margin: "25px" }} id="">
          HTML5 Resume:
          <div>
            <img
              style={{
                width: "60%",
                height: "60px",
                marginTop: "10%",
                backgroundColor: "",
              }}
              className="sidescroll"
              src={Rose}
              alt=""
            />
          </div>
        </button>
      </Link>
      <Link to="cleanresume">
        <button className="box threedhover" style={{ margin: "25px" }} id="">
          Full Page Resume:
          <div></div>
          <img
            src={Rasp}
            alt=""
            className="rotated sidescroll"
            style={{ width: "55px", height: "60px", marginTop: "10%" }}
          />
        </button>
      </Link>

      <Link to="/reactresume">
        <button className="box threedhover" id="" style={{ margin: "25px" }}>
          React Resume:
          <div></div>
          <img
            src={Logo}
            alt=""
            className="rotate"
            style={{ width: "55px", height: "60px", marginTop: "10%" }}
          />
        </button>
      </Link>

      <Link to="htmlresume">
        <button className="box threedhover" style={{ margin: "25px" }} id="">
          HTML5 Resume:
          <div>
            <img
              style={{
                width: "60%",
                height: "60px",
                marginTop: "10%",
                backgroundColor: "",
              }}
              className="sidescroll"
              src={Rose}
              alt=""
            />
          </div>
        </button>
      </Link>
      <Link to="cleanresume">
        <button className="box threedhover" style={{ margin: "25px" }} id="">
          Full Page Resume:
          <div></div>
          <img
            src={Rasp}
            alt=""
            className="rotated sidescroll"
            style={{ width: "55px", height: "60px", marginTop: "10%" }}
          />
        </button>
      </Link>
      <Link to="/recipes">
        <button className="box threedhover" id="" style={{ margin: "25px" }}>
          Recipe Component:
          <div></div>
          <img
            src={Logo}
            alt=""
            className="rotate"
            style={{ width: "55px", height: "60px", marginTop: "10%" }}
          />
        </button>
      </Link>

      <Link to="htmlresume">
        <button className="box threedhover" style={{ margin: "25px" }} id="">
          HTML5 Resume:
          <div>
            <img
              style={{
                width: "60%",
                height: "60px",
                marginTop: "10%",
                backgroundColor: "",
              }}
              className="sidescroll"
              src={Rose}
              alt=""
            />
          </div>
        </button>
      </Link>
      <Link to="cleanresume">
        <button className="box threedhover" style={{ margin: "25px" }} id="">
          Full Page Resume:
          <div></div>
          <img
            src={Rasp}
            alt=""
            className="rotated sidescroll"
            style={{ width: "55px", height: "60px", marginTop: "10%" }}
          />
        </button>
      </Link>

    </div>
  );
}

export default ResumeRouter;

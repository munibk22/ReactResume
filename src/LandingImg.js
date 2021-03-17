import React from "react";
import ResumeRouter from "./ResumeRouter";

const LandingImg = () => {
  return (
    <div style={{ width: "88%", margin: "auto" }}>
      <div
        className=" landingdiv  "
        style={{
          position: "relative",
        }}
      >
        <div></div>
      </div>
      <div style={{}} className="">
        {/* <div
          className="componentBoxB"
          style={{
            float: "left",
            maxHeight: "",
            display: "flex",
            marginTop: "1%",
          }}
        >
          <Sidenav />
        </div> */}

        <div
          className="center"
          style={{
            justifyContent: "center",
            maxWidth: "1100px",
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

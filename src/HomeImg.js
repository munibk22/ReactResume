import React from "react";
import Sunset from "./pics/sunset/d.jpg";
import Carousel2 from "./carousel/Carousel2";

export default function HomeImg() {
  return (
    <div className="" style={{ top: '0' }}>

      <div className="relative">
        <img
          src={Sunset}
          alt=""
          className=" imgLanding fluid  "
          style={{
            justifyContent: "center",
            zIndex: "-3",

            marginTop: "0%",
          }}
        />
        <div className="overlay-image "></div>
        <div className='car2 absoluteTopMidHome'
          style={{
            marginLeft: "-2%", width: '100vw'
          }}
        >
          <Carousel2 />  </div>
        <div
          className=""
          style={{
            zIndex: "1",
            position: "absolute ",
          }}
        >
          {/* <div
            style={{
              width: "100vw",
              fontFamily: "Arial",
              textAlign: "center",
              fontSize: '2.2rem',
            }}
            className="absoluteTopMidHome"
          >
            Home Page
                   
          </div> */}


        </div>
      </div>
    </div>
  );
}

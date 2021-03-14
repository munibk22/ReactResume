import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Sunset from "./pics/sunset.jpg";
import Moon from "./pics/moon.png";
import Moonb from "./pics/moonb.jpeg";

export default function CarouselApp() {
  return (
    <div>
      <div className="carouselitem ">
        <div className="container absolutebottom active ">
          <h1>Example Headline</h1>
          <p>
            Non ex amet id officia sunt ipsum irure velit ut labore. Ea aliquip
            incididunt labore qui deserunt eu minim pariatur consequat proident.
            Aliquip incididunt dolore nostrud velit ullamco esse pariatur amet
            aute. Deserunt excepteur Lorem amet sunt. In sunt laborum fugiat
            consectetur magna incididunt culpa aliqua nostrud exercitation sint
            commodo quis.
          </p>
          <a href="/" className="btn btn-lg btn-success">
            Sign up Today
          </a>
        </div>
      </div>
      {/* <Carousel fade interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sunset}
            alt="Third slide"
            style={{ height: "40rem", width: "20rem" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sunset}
            alt="Third slide"
            style={{ height: "40rem", width: "20rem" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sunset}
            alt="Third slide"
            style={{ height: "40rem", width: "20rem" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

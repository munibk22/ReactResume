import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Sunset from "./pics/sunset.jpg";
import Moon from "./pics/moon.png";
import Moonb from "./pics/moonb.jpeg";

export default function CarouselApp() {
  return (
    <div className="containerB">
      <div id="myCarousel" className="slide carousel " data-ride="carousel">
        <ol className="ca">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner containerB center">
          <div className="carousel-item active center ">
            <div className="container absolutebottom  ">
              <h1>Full Stack Web Developer</h1>
              <p>Learning, Coding, Building.</p>
              <a href="/" className="btn btn-lg btn-success">
                Contact Me Today
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container absolutebottom  ">
              <h1>Full Stack Web Developer</h1>
              <p>Learning, Coding, Building.</p>
              <a href="/" className="btn btn-lg btn-success">
                Contact Me Today
              </a>
            </div>
          </div>
        </div>

        <a
          href="#myCarousel"
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <span class="sr-only">Prvious</span>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>

        <a
          href="#myCarousel"
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <span class="sr-only">Prvious</span>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

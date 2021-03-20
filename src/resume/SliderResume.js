import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function SliderResume() {
  return (
    <Carousel fade className="ca  container">
      <Carousel.Item>
        <Carousel.Caption>
          <h1> Munib Khan Resume</h1>
          <p>Full Stack Web Developer</p>
          <div style={{ marginLeft: "" }}>
            <button className="btn btn-lg btn-success " disabled></button>
            <button className="btn btn-lg btn-primary " disabled></button>
            <button className="btn btn-lg btn-danger " disabled></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Mobile Friendly UI UX Designer</h3>
          <p>User Friendly and Clean Interfaces</p>
          <div style={{ marginLeft: "" }}>
            <button className="btn btn-lg btn-success " disabled></button>
            <button className="btn btn-lg btn-primary " disabled></button>
            <button className="btn btn-lg btn-danger " disabled></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <h3>Coding Learning Teaching</h3>
          <p>Learn new skills everyday</p>
          <div style={{ marginLeft: "" }}>
            <button className="btn btn-lg btn-success " disabled></button>
            <button className="btn btn-lg btn-primary " disabled></button>
            <button className="btn btn-lg btn-danger " disabled></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Yoga and Cooking Enthusiast</h3>

          <div style={{ marginLeft: "1rem" }}>
            <button className="btn btn-lg btn-success " disabled></button>
            <button className="btn btn-lg btn-primary " disabled></button>
            <button className="btn btn-lg btn-danger " disabled></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

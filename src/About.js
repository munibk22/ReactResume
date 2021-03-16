import React from "react";
import SideNav from "./SideNav";
import Carousel from "react-bootstrap/Carousel";
import "react-bootstrap";

export default function About() {
  return (
    <div>
      <div className=" center carousel slide carousel-fade">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <div className="carousel-caption">
              <h1> Munib Khan Resume</h1>
              <p>Full Stack Web Developer</p>
              <button className="btn btn-lg btn-success " disabled=""></button>
              <button className="btn btn-lg btn-primary " disabled=""></button>
              <button className="btn btn-lg btn-danger " disabled=""></button>
            </div>
          </div>
          <div className="active carousel-item">
            <div className="carousel-caption">
              <h3>UI UX Designer</h3>
              <p>User-friendly and clean interfaces</p>
              <button className="btn btn-lg btn-success " disabled=""></button>
              <button className="btn btn-lg btn-primary " disabled=""></button>
              <button className="btn btn-lg btn-danger " disabled=""></button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&amp;bg=282c34"
              alt="Second slide"
            ></img>
            <div className="carousel-caption">
              <h3>Learning Coding Teaching</h3>
              <p>Learn something new everyday</p>
              <button className="btn btn-lg btn-success " disabled=""></button>
              <button className="btn btn-lg btn-primary " disabled=""></button>
              <button className="btn btn-lg btn-danger " disabled=""></button>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" role="button" href="#">
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" role="button" href="/">
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <div className="">
        <Carousel />
      </div> */}
      {/* 
      <div className="componentBoxB  " style={{ float: "left", marginTop: "" }}>
      <SideNav /> 
      </div> */}
    </div>
  );
}

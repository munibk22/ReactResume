import React from "react";
import Carousel from "react-bootstrap/Carousel";


export default function Carousel2() {
    return (
        <Carousel fade className=" container" style={{
            display: "inline"
        }}>
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
                    <h3> UI/UX Designer</h3>
                    <p>Mobile and User Friendly and Clean Interfaces</p>
                    <div style={{ marginLeft: "" }}>
                        <button className="btn btn-lg btn-success " disabled></button>
                        <button className="btn btn-lg btn-primary " disabled></button>
                        <button className="btn btn-lg btn-danger " disabled></button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Design, Development, and Integration</h3>
                    <p>Test and document to ensure proper operation of software</p>
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

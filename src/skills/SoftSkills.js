import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";

export default function SoftSkills() {
  const [isColor, setColor] = useState(false);
  const [isBgColor, setBgColor] = useState(false)


  const btnClickHandler = () => {
    // document.getElementById("foo").setAttribute("class", "bgColor ");
    setBgColor(!isBgColor)
  };

  const btnClickHandlerText = () => {
    // document.getElementById("foo").setAttribute("class", "fColor ");
    setColor(!isColor)
  };

  const btnClickHandlerOriginal = () => {
    // document.getElementById("foo").setAttribute("class", "resumecomponents ");
    if (isColor) { setColor(!isColor) }
    else { }
    if (isBgColor) {
      setBgColor(!isBgColor)
    }
    else return

  };

  return (
    <div className={isBgColor ? "bgColor " : ""}  >
      <div id="foo" className="resumecomponents" style={{}}>

        <div className="App-link">
          SOFT SKILLS
          <hr className="newhr"></hr>
        </div>

        <div className="row">
          <div className={isColor ? "fColor" : ""}>
            <ul style={{ fontSize: "" }} >
              <Row className="item2">Web Development:</Row>
              <Row>SLACK</Row>
              <Row>BOOT STRAP</Row>

              <Row>GIT AND GITHUB</Row>
              <Row>SWEETALERTS </Row>
              <Row>TOASTR </Row>
            </ul>
          </div>
          <div>
            <div className="item2">Software:</div>

            <ul style={{ fontSize: "" }} className={isColor ? "fColor" : ""}>
              <Row>MICROSOFT OFFICE</Row>
              <Row>ADOBE CREATIVE SUITE</Row>
              <Row>MICROSOFT ACCESS</Row>
              <Row>SVG</Row>
              <Row>SKYCONS</Row>
              <Row>UNDRAW</Row>
              <Row>PAPERJS</Row>
              <Row></Row>
            </ul>
          </div>

          <Col className="fColor">
            <div >  Change Text Color:</div>
            <p></p>
            <button
              className="btn btn-success btn-sm"
              onClick={btnClickHandlerText}
            >
              Click ME
            </button>
            <p></p>
            Change Background Color:
            <p></p>
            <button
              className="btn btn-primary btn-sm"
              onClick={btnClickHandler}
            >
              Click ME
            </button>
            <p></p>
            Orginal State:
            <p></p>
            <button
              className="btn btn-danger btn-sm"
              onClick={btnClickHandlerOriginal}
            >
              Click ME
            </button>
          </Col>
        </div>
      </div>
    </div>
  );
}

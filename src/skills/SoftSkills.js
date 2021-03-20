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
    <div className={isBgColor ? "bgColor " : ""} style={{ width: '100%' }}  >


      <div className="App-link">
        SOFT SKILLS
          <hr className="newhr"></hr>
      </div>
      <div id="foo" className="resumecomponents row" style={{ width: '100%' }}>

        <div className="section col">

          <div className={isColor ? "fColor" : ""}>
            <ul style={{}} >
              <div className="item2">Web Development:</div>
              <div>SLACK</div>
              <div>BOOT STRAP</div>
              <div>GIT AND GITHUB</div>
              <div>SWEETALERTS </div>
              <div>TOASTR </div>
            </ul>
          </div>
        </div>


        <div className="  col">
          <div className="item2">Software:</div>
          <div style={{ fontSize: ".9EM", width: '130%', display: 'noflex' }} className={isColor ? "fColor" : ""}>
            <div>MICROSOFT OFFICE</div>
            <div>ADOBE CREATIVE SUITE</div>
            <div>MICROSOFT ACCESS</div>
            <div>SVG</div>
            <div>UNDRAW</div>
            <div>PAPERJS</div>

          </div>
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

  );
}

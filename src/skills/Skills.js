import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactImg from "../pics/logob.png";
import Sql from "../pics/rasp.png";
import Info from "../pics/nodejs.png";


class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "value",
    };
  }
  btnClickHandlerText = () => {
    document.getElementById("skills").setAttribute("class", "hide");
  };

  render() {
    return (
      <div
        style={{ width: '100%' }}
        className="resumecomponents resumedetails"
        id="skills"
      >
        <div className="App-link">
          TECH SKILLS
          <hr className="new1"></hr>
        </div>

        <div style={{}} className="row">
          <div className=" col">

            <ul style={{ lineHeight: "", fontSize: "" }}>
              <div className="item2 ">Frontend:</div>
              <div>REACT</div>
              <div>HTML5</div>
              <div>CSS</div>
              <div>JAVASCRIPT</div>
              <div>C#</div>
              <div>jQUERY</div>
            </ul>

          </div >

          <div style={{}} className="col">

            <ul style={{ lineHeight: "", fontSize: ".9em" }}>
              <div className="item2 ">Back End Development:</div>
              <div>MICROSOFT SQL</div>
              <div>API/AXIOS</div>
              <div>POSTMAN </div>
              <div>NODE.js</div>
              <div>JSON and AJAX </div>
            </ul>

          </div>

          <div className="col">
            <img
              alt=""
              src={Info}
              style={{
                height: "4rem",
                width: "4rem",
                margin: "2%",
                marginTop: "",
                marginBottom: "20%",
              }}
            ></img>
            <img
              alt=""
              src={Sql}
              style={{
                height: "3rem",
                width: "3rem",
                marginRight: "20%",
                marginTop: "20%",
                marginBottom: "20%",
              }}
            ></img>
            <img
              alt=""
              src={ReactImg}
              style={{
                height: "3rem",
                width: "3rem",
                margin: "2%",
                marginTop: "20%",
                marginBottom: "20%",
              }}
            ></img>
          </div>
        </div>

      </div>
    );
  }
}
export default Skills;

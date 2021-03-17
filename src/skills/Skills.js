import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactImg from "../pics/logob.png";
import Sql from "../pics/rasp.png";

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
      <Container
        style={{}}
        className="resumecomponents resumedetails"
        id="skills"
      >
        <div className="App-link">
          TECH SKILLS
          <hr className="new1"></hr>
        </div>

        <Row style={{ marginLeft: "1.5%" }}>
          <div>
            <Col>
              <p className="item2 ">Frontend:</p>

              <ul style={{ lineHeight: "", fontSize: ".9em" }}>
                <Row>HTML5</Row>
                <Row>CSS</Row>
                <Row>JAVASCRIPT</Row>
                <Row>C#</Row>
                <Row>jQUERY</Row>
              </ul>
            </Col>
          </div>

          <div>
            <Col>
              <p className="item2 ">Back End Development:</p>

              <ul style={{ lineHeight: "", fontSize: ".9em" }}>
                <Row>MICROSOFT SQL</Row>
                <Row>API/Axios</Row>
                <Row>POSTMAN </Row>
                <Row>NODE.js</Row>
                <Row>JSON and AJAX </Row>
              </ul>
            </Col>
          </div>

          <div className="col">
            <img
              alt=""
              src="
              
              https://img1.pnghut.com/11/10/16/UNTygJCLuM/sign-trademark-logo-text-website-development.jpg


              "
              style={{
                height: "3rem",
                width: "3rem",
                margin: "2%",
                marginTop: "25%",
                marginBottom: "25%",
              }}
            ></img>
            <img
              alt=""
              src={Sql}
              style={{
                height: "3rem",
                width: "3rem",
                margin: "2%",
                marginTop: "20%",
                marginBottom: "25%",
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
                marginBottom: "25%",
              }}
            ></img>
          </div>
        </Row>
        {/* <Row>
<Col>
<div  md="" className="item2 ">
Programming: 
        </div > 
        <Row>HTML5</Row>
        <Row>CSS</Row>
        <Row>JAVASCRIPT</Row>
        <Row>C#</Row>
        <Row>jQUERY</Row>
         <Row>NODE JS</Row>
        <Row>BOOT STRAP</Row>
        <Row>JSON and AJAX </Row>     
</Col>
</Row>
<Row>
<Col className="item2 md-auto">
    
Back End:
<Row>HTML5</Row>
</Col>

</Row> */}
      </Container>
    );
  }
}
export default Skills;

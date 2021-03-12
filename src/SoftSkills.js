import React from 'react'
import {Row,Col, Container} from 'react-bootstrap'
import  './App.css'

export default function SoftSkills() {

     
    const btnClickHandler=()=>{ 
        document.getElementById('foo').setAttribute("class", "bgColor col");
    };

    const btnClickHandlerText=()=>{
        document.getElementById('foo').setAttribute("class", "fColor col");

    }

const btnClickHandlerOriginal=()=>{

    document.getElementById('foo').setAttribute("class", "resumecomponents col");

}

    return (

      <Container style={{padding:"0px"}}>
            <Row className="resumedetails"  style={{width: ""}}>
  <Col className="resumecomponents" id="foo">
  <div className="item1 App-link">Soft Skills
        <hr className="newhr"></hr>
      </div>
    
        <Row>
        <Col>
      <p className="item2">
      Web Development:                
        </p> 
        <ul>
        <Row>SVG</Row>
        <Row>BOOT STRAP</Row>
        <Row>SKYCONS</Row>
        <Row>UNDRAW</Row>
        <Row>PAPERJS</Row>  
        </ul>
     
      </Col>
      <Col>
      <p className="item2">
        <span  >Software:</span>
        </p>
        
        <ul>
        <Row>MICROSOFT OFFICE</Row>
        <Row>ADOBE CREATIVE SUITE</Row>
        <Row>MICROSOFT ACCESS</Row>
        <Row></Row>
      
        </ul>  
      </Col>

      <Col>
      Change Text Color:
      <button className="btn btn-success btn-sm" onClick={btnClickHandlerText}>Click ME</button>

      <p></p>
      
      Change Background Color:
      <button className="btn btn-primary btn-sm" onClick={btnClickHandler}>Click ME</button>
      <p></p>
      Orginal State:
      <button className="btn btn-danger btn-sm" onClick={btnClickHandlerOriginal}>Click ME</button>
      </Col>
      </Row>
     




      </Col>

    
  </Row>
  </Container>
    
)}

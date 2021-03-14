import React from 'react'
import {Row,Col} from 'react-bootstrap'
import  './App.css'

export default function SoftSkills() {

     
    const btnClickHandler=()=>{ 
        document.getElementById('foo').setAttribute("class", "bgColor col ");
    };

    const btnClickHandlerText=()=>{
        document.getElementById('foo').setAttribute("class", "fColor ");

    }

const btnClickHandlerOriginal=()=>{

    document.getElementById('foo').setAttribute("class", "resumecomponents ");

}

    return (

      <div id="foo" className="resumecomponents " style={{}}>
           
  <div  >
  <div className="App-link">SOFT SKILLS
        <hr className="newhr"></hr>
      </div>
    
      <div className="row"  >
    <div className="col" >
      <div className="item2">
         Web Development:                
        </div> 
        <ul style={{fontSize:'.9em'}}>

        <Row>SVG</Row>
        <Row>BOOT STRAP</Row>
        <Row> REACT BOOT  </Row>
        <Row>SKYCONS</Row>
        <Row>UNDRAW</Row>
        <Row>PAPERJS</Row>  
       
        </ul>

      </div>
      <div>
       
        <div className="item2">Software:</div>
        
        
        <ul style={{ fontSize:'.9em'}}>
        <Row>MICROSOFT OFFICE</Row>
        <Row>ADOBE CREATIVE SUITE</Row>
        <Row>MICROSOFT ACCESS</Row>
        <Row></Row>
      
        </ul>  
      </div>

      <Col>
      Change Text Color:
      <p></p>
      <button className="btn btn-success btn-sm" onClick={btnClickHandlerText}>Click ME</button>

      <p></p>
      
      Change Background Color:
      <p></p>
      <button className="btn btn-primary btn-sm" onClick={btnClickHandler}>Click ME</button>
      <p></p>
      Orginal State:
      <p></p>
      <button className="btn btn-danger btn-sm" onClick={btnClickHandlerOriginal}>Click ME</button>
      </Col>
      </div>
     




      </div>

    

  </div>
    
)}

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

      <div id="foo" className="resumecomponents" style={{}}>
           
  <div  >
  <div className="App-link">SOFT SKILLS
        <hr className="newhr"></hr>
      </div>
    
      <div className="row"  >
    <div className="col" >
      <div className="item2">
         Web Development:                
        </div> 
        
        <li>SVG</li>
        <li>BOOT STRAP</li>
        <li>REACT BOOT STRAP</li>
        <li>SKYCONS</li>
        <li>UNDRAW</li>
        <li>PAPERJS</li>  
       
     
      </div>
      <Col>
       
        <div className="item2">Software:</div>
        
        
        <ul>
        <li>MICROSOFT OFFICE</li>
        <li>ADOBE CREATIVE SUITE</li>
        <li>MICROSOFT ACCESS</li>
        <li></li>
      
        </ul>  
      </Col>

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

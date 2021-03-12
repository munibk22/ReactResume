import React from 'react';
import {Row, Col, Container,Image} from 'react-bootstrap';
import './App.css'
import SoftSkills from './SoftSkills'
import Education from './Education'
import Skills from './Skills'
import ResumeTable from './ResumeTable'


export default function ReactResume(){

    return (
        <div style={{justifyContent:"",marginLeft:""}} >
   


<Container fluid="md" style={{ }}>            
<Row expand="lg" style={{ margin:"",marginRight:"" ,width: "80vw" }}>
<Col expand="lg" md=""  >
     <hr className="hrNew" ></hr> 
     <hr className="hrNew"></hr>

</Col>

<Col expand="lg" md="auto" className='hbox hexgrid1'>

    <Row className="d-flex flex-row">
    		<div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>

    <Row className="d-flex flex-row-reverse">
    <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>
</Col>

<Col  md="auto">
    <h1 style={{color:"white", textAlign:"", margin:"auto"}}>Munib Khan Resume</h1>
</Col>

<Col expand="lg" md="auto" className='hbox hexgrid1'>

    <Row className="d-flex flex-row">
    		<div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>

    <Row className="d-flex flex-row-reverse">
    <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>
</Col>
<Col expand="lg"> 
<hr className="hrEnd"></hr>
<p></p>
 <hr className="hrEnd"></hr>
  </Col>

</Row>

    <Row  className="" style={{width: "80vw", maxHeight:"550px"}} md="8">
  
<Image src=            
            "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80"
                        
 alt=""
 style={{maxWidth: "", minWidth:"10%", opacity:".6", maxHeight:"550px", marginLeft:"", width:"100%"}}
            ></Image>

</Row>


  </Container>

  <Row style={{padding:"0px"}}><ResumeTable /> </Row>
{/* <Container  >
  <Row>
    <Col><SoftSkills /></Col>
    <Col><Skills /></Col>
    <Col className='Box ' >1 of 1</Col>
  </Row>
 
</Container> */}

{/* <Row>
<Col>
<SoftSkills />
</Col>

<Col>
<Skills />
</Col>


<Col>
<Education />
</Col>
</Row> */}

  





            {/* <Row className="resumedetails"  style={{width: "80vw"}}>
  <Col>
  <span className="item1 title2">SKILLS
        <hr className="new1"></hr>
      </span>
    
      <p className="item2">
        Programming: 
      <ul>
     
        <li>HTML5</li>
        <li>JAVASCRIPT</li>
        <li>CSS</li>
        <li>C++</li>
        <li>C#</li>
         <li>jQUERY</li>
          <li>NODE JS</li>
        <li>SVG</li>
        <li>BOOT STRAP</li>

      </ul>
     
      </p> 
      <p className="item3">
        <span>Software:</span>
        <ul>
        
        <li>MICROSOFT OFFICE</li>
        <li>ADOBE CREATIVE SUITE</li>
        <li>CSS</li>
        <li>C++</li>
        <li>SKYCONS</li>
        <li>UNDRAW</li>
        <li>PAPERJS</li>

      </ul> 
      </p>
      </Col>

    <Col>
    <h2 style={{color:"white", textAlign:"", margin:"auto"}}>Munib Khan Resume</h2>
    </Col>

        <Col> test</Col>
  </Row> */}
            

           

        </div>
    
    )}
import React from 'react'
import {Container,Row,Col }from'react-bootstrap';

class Skills extends React.Component {

constructor(props){
    super(props);
this.state= {
    name:"value"
}
};
 btnClickHandler=()=>{ 
    document.getElementById('skills').setAttribute("className", "bgColor");
};

    render(){
    return (
        <Container style={{}} className="resumecomponents resumedetails" id='skills'>
        <div className="App-link">TECH  SKILLS
        <hr className="new1"></hr>
      </div>
      
      <Row  style={{width:"", marginLeft:"1.5%"}}>

<div>   
<Col> 
<p  className="item2 ">
    Frontend: 
        </p > 
 

<ul style={{lineHeight:"2.5"}}> 
    <Row>HTML5</Row>
    <Row>CSS</Row>
    <Row>JAVASCRIPT</Row>       
    <Row>jQUERY</Row>
</ul>

</Col>
       

</div>

 
    
    <div >
    <Col> 
    <p  className="item2 ">
Back End Development: 
        </p > 

<ul style={{lineHeight:"2.5"}}>
        <Row>MICROSOFT SQL</Row>
        <Row>AXIOS</Row>
        <Row>C#</Row>
         <Row>NODE JS</Row>
        <Row>JSON and AJAX </Row>    

        </ul>
        </Col> 
    </div>


    <div className="col">
    Remove Component:
      <p></p>
      <button className="btn btn-success btn-sm" onClick={this.btnClickHandlerText}>Click ME</button>
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


    )
}
}
export default Skills;
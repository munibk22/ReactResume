import React from 'react'
import {Container,Row} from'react-bootstrap';

class Skills extends React.Component {

constructor(props){
    super(props);
this.state= {
    name:"value"
}
};
 btnClickHandler=()=>{ 
    document.getElementById('skills').setAttribute("className", "bgColor col");
};

 btnClickHandlerText=()=>{
    document.getElementById('skills').setAttribute("className", "fColor col");

}

 btnClickHandlerOriginal=()=>{

document.getElementById('skills').setAttribute("className", "resumecomponents col");

}

    render(){
    return (
        <Container style={{padding:"0px"}} className="resumedetails" id='skills'>
        <div className="item1 App-link"> Skills
        <hr className="new1"></hr>
      </div>

      <div className="row"  >
    <div className="col" >
    <p  md="" className="item2 ">
Programming: 
        </p > 

<ul>
        <Row>HTML5</Row>
        <Row>CSS</Row>
        <Row>JAVASCRIPT</Row>
        <Row>C#</Row>
        <Row>jQUERY</Row>
         

        </ul>  
    </div>
    <div className="col" >
    <p  md="" className="item2 ">
Back End Development: 
        </p > 

<ul>
        <Row>MICROSOFT SQL</Row>
        <Row>AXIOS</Row>
        <Row>C#</Row>
         <Row>NODE JS</Row>
        <Row>JSON and AJAX </Row>    

        </ul>
    </div>
    <div className="col">
    Change Text Color:
      <button className="btn btn-success btn-sm" onClick={this.btnClickHandlerText}>Click ME</button>
      <p></p>
      
     
      Orginal State:
      <button className="btn btn-danger btn-sm" onClick={this.btnClickHandlerOriginal}>Click ME</button>
    </div>
  </div>
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
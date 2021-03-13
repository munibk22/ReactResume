import React from 'react'
import {Row,Container} from 'react-bootstrap';
import SoftSkills from './SoftSkills'
import Education from './Education'
import Skills from './Skills'

export default function ResumeTable() {
    return (
       
 <Container > 

     <Row  style={{width:"", marginLeft:""}}>

<div className='componentBox' id="">   <SoftSkills /></div>

<div className='componentBox'  id="">
<Skills />
</div>

<div className='componentBox'  id=""><Education />

</div>



     </Row>
      <Row  style={{width:"82vw", marginLeft:"1.5%", position:""}}>
 
  <div className='componentBox'>
  <SoftSkills />
  </div>  
   
    <div className='componentBox'>
    <Skills />
    </div>
   
    
    <div className='componentBox'>
        <Skills />
    </div>
   
  </Row>

  <Row  style={{width:"79.5vw", marginLeft:"1.5%"}}>
      <span> 
      <SoftSkills />
      </span>  
      <span> 
      <Skills />
      </span>
    
  </Row>
  </Container>

    )
}

import React from 'react'
import {Row,Container,Col} from 'react-bootstrap';
import SoftSkills from './SoftSkills'
import Education from './Education'
import Skills from './Skills'

export default function ResumeTable() {
    return (
       
 <Container > 
  <Row  style={{width:"79vw"}}>
  <Col><SoftSkills /></Col>
  
    <Col><Skills /></Col>
    
  </Row>
  </Container>

    )
}

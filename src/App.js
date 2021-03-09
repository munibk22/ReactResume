import React from 'react';
import NavBar from'./NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Incrementb from './Increment';
import Pass from'./PokemonApp'
import ScrollingApp from'./ScrollingApp'
import {Container,Row, Col } from 'react-bootstrap';

function App() {
 
  return ( 
  <>
  <NavBar />
  <br />
  

  <Container>
  <Row>
        <Col style={{color: "red", width:"200px"}}> <Pass></Pass></Col>
        <Col><ScrollingApp /></Col>
        <Col><Incrementb /> </Col>
        <Col>.col</Col>
      </Row>  
      </Container>


   </>
  );
}

export default App;

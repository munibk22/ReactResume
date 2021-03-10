import React from 'react';
import NavBar from'./NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Incrementb from './Increment';
import Pass from'./PokemonApp'
import ScrollingApp from'./ScrollingApp'
import {Container,Row, Col } from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactResume from './ReactResume'
import About from './About';
import Sidenav from'./SideNav';

function App() {
 
  return ( 
  <>
  <br />
  <NavBar />
  <br />
  <BrowserRouter>
 
 
  <Container style={{paddingLeft: "15px", marginLeft:'0px'}}>
  
 
  <Row md="auto">
    <Col> <Sidenav /></Col>
        <Col style={{color: "red"}}>
         <Route path ="/about" exact component ={About} ></Route>
        <Route path= "/increment" exact component ={Incrementb} /> 
        </Col>

        <Route path='/scrolling' exact compoent={ScrollingApp}> </Route>
        

        <Col><Route path='/scrolling' exact compoent={ScrollingApp}> </Route>
        <Route path='/pokemon' exact component={Pass} />
        </Col>
        <Col>
     
        </Col>
      
      
<Route path='/resume' exact component={ReactResume}></Route>
      
      </Row>  
     
      </Container>

      </BrowserRouter>

   </>
  );
}

export default App;

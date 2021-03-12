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
import Events from './Events'
import ItemDetail from'./ItemDetail';
import Home from './Home'


function App() {
 
  return ( 
  <BrowserRouter>
  <br />
  <NavBar />
  <br />
  
 
 
  <Container style={{paddingLeft: "1px", marginLeft:'0px', maxWidth:"95vw"}}>
  
 
  <Row md="">
    
    <Col sm={2.5} className='a' md="" style={{width: ""}}> <Sidenav /></Col>


    <Col  sm={6} >
    <Route path='/reactresume' exact component={ReactResume} />
    <Route path='/' exact component={Home}></Route>
    <Route path ="/about" exact component ={About} ></Route>
    </Col>

{/* 
        <Col sm={2}className='b' style={{marginLeft:"20%" }}>
        
        <div style={{width: "40vw"}} className=""> 
<Route path='/' exact component={Home}></Route>


<Route path ="/about" exact component ={About} ></Route>
        <Route path= "/increment" exact component ={Incrementb} />
        <Route path='/scrolling' exact compoent={ScrollingApp}> </Route>
        <Route path='/pokemon' exact component={Pass} />
        <Route path='/events' exact component={Events} />
        <Route path='/events/:id' exact component={ItemDetail} />

</div>

        </Col> */}
        
       
        <Route path='/scrolling' exact compoent={ScrollingApp}> </Route>
        

        
      
      

      
      </Row>  
     
      </Container>

      

   </BrowserRouter>
  );
}

export default App;

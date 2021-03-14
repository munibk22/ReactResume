import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Incrementb from "./Increment";
import Pass from "./PokemonApp";
import ScrollingApp from "./ScrollingApp";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import ReactResume from "./ReactResume";
import About from "./About";

import Events from "./Events";
import ItemDetail from "./ItemDetail";
import Home from "./Home";
import Resume2 from "./Resume2";
import FooterPage from "./Footer";
import CleanResume from "./CleanResume";
import LandImg from "./LandingImg";

function App() {
  return (
    <BrowserRouter>
      <div className="" style={{ zIndex: "5" }}>
        <NavBar />
      </div>

      <div className="" style={{ height: "" }}>
        <div>
          <Route exact path="/" component={LandImg} />
        </div>

        <section>
          {/* <div expand="md"  className='componentBoxB' style={{ maxHeight:'700px' }}> <Sidenav /></div>  */}

          <div className="componentBoxC" style={{}}>
            <Route path="/about" exact component={About}></Route>
            <Route path="/htmlresume" exact component={Resume2} />
            <Route path="/reactresume" exact component={Resume2} />
            <Route path="/cleanresume" exact component={CleanResume} />
          </div>

          <div
            className=" absolute marginautomod"
            style={{ maxHeight: "", height: "" }}
          >
            {/* <Route path="/" exact component={Home}></Route> */}
          </div>
        </section>

        {/* < div className='absolutebottom'> <FooterPage /> </div> */}
        {/* <div id='' style={{marginLeft:"-15px"}}> <Route path='/reactresume' exact component={ReactResume} />
     </div>
<div id='center'>    <Route path='/' exact component={Home}></Route>

<Route path='/scrolling' exact compoent={ScrollingApp}> </Route>

 </div> */}

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
      </div>

      {/* <div className="absolutebottom" style={{position:"absolute", width:'98w'}} >
        
        <FooterPage  />
      </div> */}
    </BrowserRouter>
  );
}

export default App;

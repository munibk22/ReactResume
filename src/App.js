import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Increment from "./Increment";
import Pass from "./PokemonApp";
import ScrollingApp from "./ScrollingApp";
import { BrowserRouter, Route } from "react-router-dom";
import ReactResume from "./ReactResume";
import About from "./About";
import SliderResume from "./SliderResume";
import Events from "./Events";
import ItemDetail from "./ItemDetail";
import Home from "./Home";
import Resume2 from "./Resume2";
import FooterPage from "./Footer";
import CleanResume from "./CleanResume";
import LandImg from "./LandingImg";
import HomeImg from "./HomeImg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative center" style={{ zIndex: "5", width: "80%" }}>
          <NavBar />
        </div>
        {/* <div expand="md"  
className='componentBoxB' style={{ maxHeight:'700px' }}> 
<Sidenav /></div>  */}
        <div style={{ position: "relative", width: "85%", margin: "auto" }}>
          <Route path="/" exact component={HomeImg} />
        </div>

        <Route path="/about" exact component={About}></Route>

        <div style={{ width: "85%" }} className="relative center ">
          <Route exact path="/" component={LandImg} />
        </div>

        <Route path="/htmlresume" exact component={Resume2} />
        <Route path="/reactresume" exact component={Resume2} />
        <Route path="/cleanresume" exact component={CleanResume} />
        <Route path="/increment" component={Increment} />
        <Route path="/events" component={Events} />
        <Route path="/cars" component={SliderResume} />

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

        {/*    <div className="absolutebottom" style={{}}>
          <FooterPage />
        </div>
         */}
      </BrowserRouter>
    </div>
  );
}

export default App;

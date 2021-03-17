import React from "react";
import NavBarResume from "./NavBarResume";
import "bootstrap/dist/css/bootstrap.min.css";
import Increment from "./components/Increment";

import ScrollingApp from "./components/ScrollingApp";
import { BrowserRouter, Route } from "react-router-dom";
import ReactResume from "./ReactResume";
import About from "./skills/About";
import SliderResume from "./SliderResume";
import Events from "./components/Events";
import ItemDetail from "./ItemDetail";
import Home from "./Home";
import Resume2 from "./Resume2";
import FooterPage from "./Footer";
import CleanResume from "./CleanResume";
import LandImg from "./LandingImg";
import HomeImg from "./HomeImg";
import HomeNavs from './navbars/HomeNavs'
import Sidenav from "./navbars/SideNav";

function App() {
  return (
    <div>
      <BrowserRouter>


        <div style={{ width: "90%" }} className="absoluteTop center">
          <Route path='/reactresume' exact component={NavBarResume} />  </div>




        <div style={{
          position: "", width: "100%", margin: "auto", top: '0'
        }}
          className=''>
          <Route path="/" exact component={HomeImg} />
        </div>
        <div className=''>
          <div style={{}} className=" center">
            <Route path='/' exact component={HomeNavs} />
          </div>
        </div>
        <Route path="/about" exact component={About}></Route>
        <div style={{ paddingLeft: "1%" }} className=" ">
          <Route exact path='/' component={Sidenav} />
          {/* <div
            className="componentBoxB"
            style={{
              float: "left",
              maxHeight: "",
              display: "flex",
              marginTop: "1%",
            }}
          >
            <Sidenav />
          </div> */}
        </div>

        <div className="relative center "></div>
        <Route exact path="/" component={LandImg} />
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

        {/* <div className="" style={{ bottom: '' }}>
          <div style={{ bottom: '0px' }} className=' navbarHomeB '>

          </div>
        </div> */}


      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import NavBarResume from "./navbars/NavBarResume";
import "bootstrap/dist/css/bootstrap.min.css";
import Increment from "./components/Increment";
import NavBarBottom from './navbars/NavBarBottom';
import ScrollingApp from "./components/ScrollingApp";
import { BrowserRouter, Route } from "react-router-dom";
import ReactResume from "./resume/ReactResume";
import About from "./skills/About";
import SliderResume from "./resume/SliderResume";
import Events from "./components/Events";
import ItemDetail from "./components/ItemDetail";
import Home from "./home/Home";
import Resume2 from "./resume/Resume2";
import FooterPage from "./home/Footer";
import LandImg from "./LandingImg";
import HomeImg from "./home/HomeImg";
import HomeNavs from './navbars/HomeNavs'
import Sidenav from "./navbars/SideNav";
import Recipes from './components/recipes/Recipes';

function App() {
  return (
    <div>
      <BrowserRouter>


        {/* <div style={{ width: "85%" }} className="absoluteTop center">
          <Route path='/reactresume' exact component={NavBarResume} /> 
           </div> */}




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

        <div style={{}}>
          <div style={{ paddingLeft: "3.4%", height: '100%' }} className=" ">
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
          <Route exact path="/" component={LandImg} />

        </div>
        <div className="  "></div>

        <Route path="/htmlresume" exact component={Resume2} />
        <Route path="/reactresume" exact component={Resume2} />
        <Route path="/increment" component={Increment} />
        <Route path="/events" component={Events} />
        <Route path="/cars" component={SliderResume} />
        <Route path='/events/:id' exact component={ItemDetail} />
        <div style={{
          float: "left",
          maxHeight: "",
          display: "flex",
          marginTop: "15%",

        }}>  <Route path='/recipes' exact component={Sidenav} /></div>
        <Route path='/recipes' exact component={Recipes} />


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

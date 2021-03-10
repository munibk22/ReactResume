import React from'react';
import {Link, NavLink} from 'react-router-dom'
import './App.css'


function SideNav(){

    return(<nav>    
     



<div  style={{ margin:"0", width: "20rem"}}>
       <form style={{ backgroundColor: 'white', width:"65%", border:"1px solid grey",
        height:"", borderRadius:"1%"}}>
       <div className="alert alert-primary" role="alert">
       <h5 style={{color:"white", textAlign:"center"}}>Nav Menu</h5>
</div> 

<div style={{textAlign:"center"}} ><img alt="" src="" 
style={{borderRadius:"50%", boxShadow:"8px -1px 5px #ccc"}} ></img></div>
<div className=" text-muted"  style={{fontSize:".8em",textAlign:"center"}}>
<h5>Munib Khan-Software Developer</h5></div>

<ul className="" style={{fontSize:".9em", color:"red",  display:"inline-block"}}>
<br></br>

<NavLink to='/' exact activeClassName="active"> 
<li activeClassName="active" style={{backgroundColor:"#737373", color:"powderblue"}}>Home</li></NavLink> 
<br></br>
<NavLink to='/about' activeClassName="active">
    <li activeClassName="active" style={{backgroundColor:"#737373", 
    color:"wheat"}}>About</li></NavLink>
<br></br>
<NavLink to="/friends"> 
   <li activeClassName="active"
    className="li " style={{backgroundColor:"#737373 ", color:"powderblue"}}>Friends</li>
   </NavLink>
   <br></br>
   <NavLink to="/cars"> 
   <li activeClassName="active"
   className="li " style={{backgroundColor:"#737373", color:"wheat"}}>Cars</li>
   </NavLink>
   <br></br> 
    
   <NavLink to="/companies"> 
   <li activeClassName="active"
   className="li  btn-link" style={{backgroundColor:" #737373", color:"powderblue"}}>Tech companies</li>
   </NavLink>
   <br></br>
   <NavLink to="/jobs"> 
   <li activeClassName="active"
   className="li btn-link" style={{backgroundColor:"#737373", color:"wheat"}}>Jobs</li>
   </NavLink>
   <br></br>
   <NavLink to="/events"> 
   <li activeClassName="active"
   className="li btn-link onclick={this.show}" style={{backgroundColor:"#737373", color:"powderblue"}}>Events</li>
   </NavLink>
   <br></br>
   <NavLink to="/userregister"> 
   <li activeClassName="active"
   className="li btn-link" style={{backgroundColor:"#737373", color:"wheat" }}>Register </li>
   </NavLink>
   <br></br>
   <NavLink to="/userform"> 
   <li activeClassName="active"
   className="li btn-link" style={{backgroundColor:"#737373", color:"powderblue" }}>Product Info Form </li>
   </NavLink>
   <br></br>
   <NavLink to="/scrolling"> 
   <li activeClassName="active"
   className="li btn-link" style={{backgroundColor:"#737373",
    color:"wheat" }}>Scrolling App </li>
   </NavLink>
   <br></br>
   <NavLink to="/increment" activeClassName="active"> 
   <li activeClassName="active"
   className="li btn-link" style={{backgroundColor:"#737373",
    color:"powderblue" }}>Increment App </li>
  
   </NavLink>

   <br></br>
   <NavLink to='/pokemon' activeClassName="active"> 
   <li activeClassName="active"
   className="li btn-link" style={{backgroundColor:"#737373",
    color:"wheat" }}>Pokemon App </li>
   </NavLink>

   
</ul>
        
          <br></br><br></br><br></br>
         <div style={{textAlign:"center", fontSize:".6em"}} className=" text-muted">Need to Signup?</div>
         
        <div style={{textAlign:"center", fontSize:".7em"}} ><a href="./userregister" className="btn btn-link btn-sm" > Register Now</a></div> 
       
       </form>
      
       </div>
       
    </nav>)
}

export default SideNav;

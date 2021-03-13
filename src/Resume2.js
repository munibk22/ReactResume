import React from 'react'
import Softskills from'./SoftSkills'
import Skills from'./Skills'
import {Row, Col} from 'react-bootstrap';
import Dynamic from './Dynamic'

export default function Resume2() {
    return (
        <div >
            
<div  className="relative">
<Row className='absolute' style={{ margin:"",marginLeft:"10px" ,marginTop:"10px" }}>
<div  >
     <hr className="hrNew" ></hr> 
     <hr className="hrNew"></hr>

</div>

<Col  md="auto" className='hbox hexgrid1'>

    <Row className="d-flex flex-row">
    	
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>

    <Row className="d-flex flex-row-reverse">
   
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>
</Col>

<Col  md="auto">
    <h2 style={{color:"white", textAlign:"", margin:"auto"}}>Munib Khan Resume</h2>
</Col>


{/* <div > 
<hr className="hrEnd"></hr>
<p></p>
 <hr className="hrEnd"></hr>
  </div> */}

</Row>
<img src=            
"
https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80"
                        
 alt=""
 className='imgstyle'
 
 //style={{ opacity:".9", maxHeight:"600px", backgroundAttachment:""}}
     />
<div className='backdrop'></div>
<div className="absolute marginautomod"
style={{color:'white'}}>
    <p></p><h1><strong>Hello World</strong> Hello World</h1></div>

 </div>

<section style={{maxWidth:"1200px", margin:"auto"}}> 
<div className=' ' style={{ maxWidth:"1000px", margin:"auto", marginLeft: "4%", marginTop:"8%"}}>
    <Dynamic /></div> 
    
 <div style={{ width:"90%", margin:"auto", marginTop:"5%", textAlign:'center', color:'white'}}>
     <h2>Skills and Education</h2>
     <hr className='hrRed' />
     </div>


    <div className='componentBox2 section ' ><Skills /></div> 
    <div className='componentBox2 section '><Softskills /></div>
    <div className='componentBox2'><Softskills /></div>
    <div className='componentBox2'> <Skills /> </div>

    <div style={{ width:"90%", margin:"auto", marginTop:"5%", textAlign:'center', color:'white'}}>
     <h2>About Me and Experience</h2>
     <hr className='hrRed' />
     </div>

    <div className='componentBox2'><Softskills /></div>
    <div className='componentBox2'> <Skills /> </div>

</section>
        </div>
    )
}

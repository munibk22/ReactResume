import React from "react";
import { div, Col } from "react-bootstrap";

export default function Education() {
  return (
    <div className=" resumecomponents justify" style={{ color: "white", width: "100%" }}>
      <div className=" App-link">
        EDUCATION
        <hr></hr>
      </div>

      <div style={{ marginLeft: '14%' }}>
        <div className="section col " style={{ display: '', textAlign: "" }}>
          <div className="item2 " style={{ width: "70px" }}>School:
      </div>
          <div style={{ marginLeft: '8%', }}>
            <div className="  " style={{ marginLeft: '', textAlign: '' }}>The University of Toledo</div>
          </div>
        </div>


        <div className='section col ' style={{}}>
          <div className="item2 " style={{ width: "70px" }}>Address:</div>
          <div style={{ marginLeft: '8%', }}>
            <div className="  " style={{ marginLeft: '', textAlign: '' }}>   2801 Bancroft St   <br></br>
          Toledo, OH     </div>
          </div>
        </div>
        <div className='section col ' style={{}}>
          <div className="item2 " style={{ width: "70px" }}>Graduated?</div>
          <div style={{ marginLeft: '8%', }}>
            <div className="  " style={{ marginLeft: '', }}>YES</div>
          </div>
        </div>

        <div className='section col ' style={{ width: "100%" }}>
          <div className="item2 " style={{
            width: "70px"
          }}>Degree:</div>
          <div style={{ marginLeft: '8%' }}>

            <div className="  " style={{
              marginLeft: '', fontSize: '',
              width: "100%", flexWrap: 'nowrap'
            }}> Associate of Applied Business <br></br>
            in Programming and <br></br>Software Development</div>
          </div>

        </div>


        <br></br>

        <div className="section col " style={{ display: '' }}>
          <div className="item2 " style={{ width: "70px" }}>School:
      </div>
          <div style={{ marginLeft: '8%', }}>
            <div className="  " style={{ marginLeft: '', textAlign: '' }}>Lincoln University </div>
          </div>
        </div>


        <div className='section col' style={{}}>
          <div className="item2 " style={{ width: "70px" }}>Address:</div>
          <div style={{ marginLeft: '8%', }}>
            <div className="  " style={{ marginLeft: '', textAlign: '' }}>   2801 Bancroft St   <br></br>
          Jefferson City, MO </div>
          </div>
        </div>


        <div className='section col' style={{}}>
          <div className="item2 " style={{ width: "70px" }}>Degree:</div>
          <div style={{ marginLeft: '8%', }}>
            <div className="  " style={{ marginLeft: '', textAlign: '' }}>BS in Information Technology </div>
          </div>

        </div>


        <div className='section col' style={{}}>
          <div className="item2 " style={{ width: "70px" }}>Graduated?</div>
          <div style={{ marginLeft: '8%', }}>
            <div className="  " style={{ marginLeft: '', width: "" }}>NO/Transferred <br></br> (90 Credit Hours Completed)</div>
          </div>
        </div>




        {/* <div className="skill skillgreen section col ">
        PROJECTS SKKITCHENSTOREONLINE.COM — Website I created an online sales
        website for my business.
      </div> */}

        {/* //     <div className="resumedetails" style={{ width: "80vw" }}>
//       <Col className="resumecomponents">
//         <div className="">
//           <span className=" App-link">
//             EDUCATION
//             <hr></hr>
//           </span>
//         </div>

//         <div style={{ marginLeft: "", fontSize: "85%" }}>
//           <div className="section  ">
//             <div>The University of Toledo</div>

//             <div>Toledo, OH </div>
//             <div> AAB in Programming </div>
//             <div> and Software Development </div>
//             <div> AUG 2019 - Fall 2020 </div>
//             <div> Graduated </div>
//           </div>

//           <div className="  ">
//             <div>Lincoln University </div>
//             <div>Jefferson City, MO </div>
//             <div>BS in Information Technology</div>
//             <div> 2005 - 2009: Transferred (90 Credit Hours Completed) </div>
//           </div>
//           <div>
//             PROJECTS SKKITCHENSTOREONLINE.COM — Website I created an online
//             sales website for my business.
//           </div>
//         </div>
//       </Col>

//       {/* <Col className="resumecomponents">
//     <span className=" title2">EXPERIENCE
//    <hr></hr>
        
//       </span>

// <span>
  
// SK KITCHEN STORE, MISSOURI— Owner
// MONTH 2009 - PRESENT
// I owned a retial store for 10 years. I sold organic foods, organic beauty products, kitchen items, and health foods. I dealt with customers on a daily basis, and did bookkeeping and product management.
// Lincoln University , Computer department—Computer lab technician
// MONTH 2008 - MONTH 2009
// I worked to maintain, repair, and update computer systems in the computer department at my university.
// </span>
//     </Col>

//         <Col className="resumecomponents"> test</Col> */}
        {/* //     </div> */}
      </div>
    </div>
  );
}

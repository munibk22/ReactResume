import React from "react";
import Carousel2 from "../carousel/Carousel2";
import "react-bootstrap";

export default function About() {
  return (
    <div className=''>
      <div className="App-link">
        ABOUT ME
          <hr className="newhr"></hr>
      </div>
      <div style={{ color: 'white' }} className='col'>
        <ul>
          <p>
            Seeking a position in a progressive organization that can utilize my
      education, skills, and experience in programming and web development.</p>
          <p>Previous business owner for 10 years, and now I am pursuing new challenges.</p>
          <p>I am coding, learning new skills everyday, and working on exciting projects.</p>

        </ul>
      </div>



      <div style={{ maxHeight: "500px", marginTop: '-60%' }}>

        <Carousel2 />
      </div>
    </div>
  );
}

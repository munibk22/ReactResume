import React from'react';
import { NavLink,Link} from'react-router-dom';

function ResumeRouter(){

    return(
        <>

{/*          
        <div className="row align-items-center">

    <button href="/about"  className='Box' >
      One of three columns
    </button>
    <button className='Box ' >
      One of three columns
    </button>
    <button className='Box ' >
      One of three columns
    </button>
  </div>          */}
  <Link to='/reactresume'>
<button className='box' id="">  React Resume:</button>
</Link>
<NavLink to='htmlresume'>
<button className='box'  id="">HTML5 Resume:</button>
</NavLink>
<NavLink to='cleanresume'>
<p>
<button className='box'  id="">Full Page Resume</button>
</p>
</NavLink>
        </>
    )
}

export default ResumeRouter
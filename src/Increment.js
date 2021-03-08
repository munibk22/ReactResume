import React,{useState} from 'react';




export default function Incrementb() {

    const [count, setCount]=useState(1);
  

      let decrementCount =()=>
  {
    return setCount(prevCount =>
      {
        return prevCount-1;
      })
  }
  
      let incrementCount =()=>
  {
    return setCount(count+1)
  }
  
    return (
        <div>        
        Increment App:
        <br />
  <button onClick={decrementCount}>-</button>
  <span>{count}</span>
  <button onClick={incrementCount}>+</button>
                    
          
      
      </div>
    )
}

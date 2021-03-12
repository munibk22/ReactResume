import React,{useState,useEffect} from 'react'


export default function ItemDetail() {
useEffect(()=>{
    fetchItem()
    console.log()
},[]);

const [item]=useState({
images:"https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80"

});

    const fetchItem = async()=>{
     const fetchItem=await fetch(`https://fortnite-api.com/v1/map`)
    const item =await fetchItem.json();
    //setItem(item.data)
    console.log(item)
    }

    
   // const []=
    return (
        <div>              
         <h3>item </h3>
         <img alt="" src={item.images} style={{height:"300px",width:"720px"}}></img>
       
      
        </div>
    )
}

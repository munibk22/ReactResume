import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

export default function Events() {
useEffect(()=>{
    fetchItems();
},[]);

const [items,setItems]=useState([]);

    const fetchItems = async()=>{
        const data= await fetch("https://fortnite-api.com/v1/map");
        const items=await data.json();
        console.log(items.data.pois)
        setItems(items.data.pois);
    }

    
   // const []=
    return (
        <div>
            {items.map(item =>  <h3 key ={item.id}>
                <Link to={`/events/ ${item.id}`}>{item.name}</Link>
                
                </h3>        

            )
        }
        </div>
    )
}

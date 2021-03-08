import React, {useState, useEffect} from 'react'
import PokemonList from'./PokemonList';
import axios from'axios';

export default function Pass() {
const [pokemon,setPokemon]=useState([]);

useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res =>{
        setPokemon(res.data.results.map(p => p.name))
},[])
.catch(res => res.data)


    
   })
   
    return (
        <div>
            Pass App:
            <PokemonList pokemonA={pokemon} />
        </div>
    )
}

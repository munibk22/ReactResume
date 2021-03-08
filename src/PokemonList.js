import React from 'react';

export default function PokemonList({pokemonA})

{

return(
    <>
    {pokemonA.map(pokemon => <div key={pokemon}>{pokemon}</div>)
      
        }
    </>
)

}

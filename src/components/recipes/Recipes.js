import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './recipemodule.css'
import NavBar from './NavBar'

function App() {

    const APP_ID = '23f20241';
    const APP_KEY = '1cad27a65460bd1077315002987edafc';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("")

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        let resposne = await fetch
            (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await resposne.json();
        setRecipes(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value)

    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }
    return (
        <div className="">
            <NavBar />
            <hr style={{ width: "90%", backgroundColor: "powderblue", marginTop: '2%' }}></hr>
            <div style={{
                textAlign: "center",
                backgroundImage: "",
                color: "white", borderRadius: "2%",
                width: "50%", margin: "auto", height: '5rem',
            }}>
                <br></br><h4 style={{ marginTop: '0%' }} > Get Recipes</h4>
            </div>

            <hr style={{ width: "90%", backgroundColor: "powderblue" }}></hr>
            <div className='' style={{ width: "70%", backgroundImage: "linear-gradient(to top, #4481eb 0%, #04befe 100%)", margin: 'auto', color: 'white' }}>
                <p className='textcenter'><h4>Food Ingredients List using Fetch API Call </h4></p>
                <p className='textcenter'><h3>Enter Food Item Below to Get Started: e.g. Chicken, Peanut, Cake : </h3></p>
            </div>
            <form onSubmit={getSearch} className='search-form'>

                <input type='text' className='search-bar ' value={search}
                    onChange={updateSearch} ></input>

                <button type='submit' className='search-button'>Search </button>

            </form >
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients} />))}

            </div>
        </div >
    );
}

export default App;

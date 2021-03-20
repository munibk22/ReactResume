import React from 'react'
import './recipemodule.css'

export default function Recipe({ title, image, calories, ingredients }) {
    return (
        <div className="recipebox" style={{}}>
            <h1 >{title}</h1>
            <img src={image} alt="" />
            <p >Calories: {calories} </p>
            <img src='' alt=''></img>
            Ingredients:
            <ol style={{ display: '', textAlign: 'left' }} >{ingredients.map(ingredient => <div>{ingredient.text}</div>)}

            </ol>
        </div>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipes, newRecipes}) => {

    const recipesDisplay = (
        newRecipes.length ?
        newRecipes.map(recipe => {
            return(
                <div className="RecipeCard" >
                        <img className="RecipeCard-image" src={recipe.image_url} alt=""/>
                        <h3>{recipe.recipe_name}</h3>
                        <Link to={`/recipe/${recipe.recipe_id}`}><button>See More</button></Link>
                </div> 
            )
        })
        :
        recipes.map(recipe => {
            return(
                <div className="RecipeCard" >
                <img className="RecipeCard-image" src={recipe.image_url} alt=""/>
                <h3>{recipe.recipe_name}</h3>
                <Link to={`/recipe/${recipe.recipe_id}`}><button className="blue-btn">See More</button></Link>
        </div> 
            )
        })
    )

    return(
        <div className="RecipeCard-container">
            <div className="RecipeCard-section">
                {recipesDisplay}
            </div>
        </div>
    )
}
export default RecipeCard;


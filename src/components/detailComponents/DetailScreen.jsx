import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const DetailScreen = () => {  
  const {id} = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
        .get(`https://recipes.devmountain.com/recipes/${id}`)
        .then((res) => {
            setRecipe(res.data);
            console.log(res.data)
        });
}, [id]);

const detailDisplay = (
  recipe.ingredients && recipe.ingredients.map((ingredient, index) => {
    return (
      <div className="ingredient-container">
          <h4>{ingredient.quantity} {ingredient.ingredient}</h4>
      </div>
    )
  })
)

const recipeDisplay = (
  <div className="recipeDisplay-section">
    <h4>Prep Time: {recipe.prep_time}</h4>
    <h4>{recipe.type} Time: {recipe.cook_time}</h4>
    <h4>Serves: {recipe.serves}</h4>
  </div>
)

  return (
    <section className="DetailScreen-container">
      
      <div className="DetailScreen-image-container">
      <img className="DetailScreen-image" alt="" src={recipe.image_url}/>
        <h1 className="DetailScreen-recipeName">{recipe.recipe_name}</h1>
        
      </div>
      
      <div className="DetailScreen-section">
        <div className="detailDisplay-recipeDisplay-container">
          <div className="detailDisplay-recipeDisplay-section">
            <div className="recipeDisplay-container">
              <h2 className="detail-header">Recipe</h2>
              {recipeDisplay}
            </div>
            <div className="detailDisplay-container">
              <h2 className="detail-header">Ingredients</h2>
                {detailDisplay}
            </div>
          </div>
        </div>
        <div className="instructions-container">
          <h2 className="detail-header">Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>

    </section>
  );
};

export default DetailScreen;

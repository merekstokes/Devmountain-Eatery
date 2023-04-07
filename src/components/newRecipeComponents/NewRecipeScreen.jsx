import React, {useState} from "react";
import { Formik } from "formik";
import axios from 'axios';

const NewRecipeScreen = () => {

  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");





  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
};

const addIngredient = () => {
  setIngredients([...ingredients, { name, quantity }]);
  setName("");
  setQuantity("");
};

const onSubmit = (values) => {
  values.ingredients = ingredients;
  axios
  .post(`https://recipes.devmountain.com/recipes`, values)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
}
  
  return (
    <section className="NewRecipeScreen">
      <div className="NewRecipeScreen-container">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className="NewRecipeScreen-nameAndImage">
              <input 
                id="recipeName" 
                placeholder="Title your Recipe!"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName" 
              />
              <input 
                id="imageURL" 
                placeholder="Add an Image!"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className="CookBakeDrink">
              <div>
                <button id="cook" type="radio"></button><span>Cook</span>
              </div>
              <div>
                <button id="bake" type="radio"></button><span>Bake</span>
              </div>
              <div>
                <button id="drink" type="radio"></button><span>Drink</span>
              </div>
            </div>
            <div className="PrepCookServe">
              <input
                id="prepTime" 
                placeholder="Time it takes to prep!"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input 
                id="cookTime" 
                placeholder="Time it takes to cook!"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input 
                id="serves" 
                placeholder="Amount of people it serves!"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <div className="IngredientAndQuantity">
              <input 
                id="ingredient" 
                placeholder="Ingredient"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                id="quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="AddIngredient">
              <button 
                type="button"
                className=" orange-btn"
                onClick={addIngredient}
              >Add Ingredient
              </button>
            </div>
            <div className="Instructions">
              <textarea placeholder="What are the instructions?"></textarea>
            </div>
            <div className="SubmitRecipe">
              <button className="blue-btn" type="submit" onSubmit={onSubmit}>Save</button>
            </div>
          </form>
        )}
      </Formik>
          </div>
    </section>
  );
};

export default NewRecipeScreen;

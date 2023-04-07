import React, {useEffect, useState} from 'react'
import axios from "axios"
import AdBanner from './AdBanner'
import RecipeCard from '../RecipeCard'

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const [newRecipes, setNewRecipes] = useState([])
  const [searchBarValue, setSearchBarValue] = useState("")
  const getRecipes = () => {
    axios
        .get("https://recipes.devmountain.com/recipes")
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
}

useEffect(() => {
    getRecipes()
},[])

const searchBar = () => {
  console.log(recipes)
  const newRecipes =
  recipes.filter(recipe => {
    return (
      recipe.recipe_name.toLowerCase().includes(searchBarValue.toLowerCase())
    )
  })
  console.log(newRecipes)
  setNewRecipes(newRecipes)
}

const handleChange = (event) => {
  console.log(event.target.value)
  setSearchBarValue(event.target.value)
  searchBar()
}

  return (
    <div>
      <AdBanner />
      <div className="searchBar-container">
        <div className="searchBar">
          <input type="text" placeholder="Search for a Recipe" onChange={handleChange}/>
        </div>
      </div>
      <RecipeCard newRecipes={newRecipes} recipes={recipes}/>
    </div>
  )
}

export default HomeScreen
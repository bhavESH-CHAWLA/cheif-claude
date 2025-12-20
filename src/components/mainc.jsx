import React from "react";
import{useState} from "react";

import Recipe from "./recipe"
import Indegredient from "./indegredient";
export default function Mainc() {
  const [ingredients, setIngredients] = React.useState([]);

  const [showRecipe, setShowRecipe] = React.useState(false);
  const [recipe, setRecipe] = useState("");

  function handleAddIngredient(formData) {
    const newIngredient = formData.get("newindegredient")?.trim();
    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }



  return (
    <main className="main-content">
      <h2>Welcome to Chef Claude</h2>

      <p>
        This is the best place to find delicious recipes and cooking tips from
        Chef Claude himself. Whether you're a beginner or a seasoned chef,
        you'll find something here to inspire your culinary journey.
      </p>

      <form action={handleAddIngredient} className="search-form">
        <input
          type="text"
          placeholder="eg: oregano..."
          className="search-input"
          name="newindegredient"
        />
        <button type="submit" className="search-button">
          + Add
        </button>
      </form>

      {ingredients.length>0&&<Indegredient ingredients= {ingredients} setRecipe={setRecipe} setShowRecipe={setShowRecipe}/>}
      <Recipe showRecipe={showRecipe} recipe={recipe}/>

      
    </main>
  );
}

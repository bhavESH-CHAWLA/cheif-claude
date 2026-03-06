import React, { useState } from "react";

export default function Ingredient({ ingredients, setRecipe, setShowRecipe }) {
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/getRecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
      });

      if (!res.ok) {
        let message = "Failed to fetch recipe";
        try {
          const errorData = await res.json();
          message = errorData?.error || message;
        } catch {
          // Keep default message when response isn't valid JSON.
        }
        throw new Error(message);
      }

      const data = await res.json();
      console.log("Recipe API Response:", data);

      if (!data.recipe) {
        throw new Error("Recipe not found in response");
      }

      setRecipe(data.recipe);
      setShowRecipe(true);

    } catch (error) {
      console.error("Error generating recipe:", error);
      alert(error.message || "Something went wrong while generating the recipe.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h3>Your Ingredients Are</h3>

      <ol>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      {ingredients.length > 3 && (
        <div className="recipe-container">
          <h3>Ready for a recipe?</h3>

          <div className="recipe-row">
            <p>Generate a recipe from your list of ingredients.</p>
            <button type="button" onClick={handleGenerate} disabled={loading}>
              {loading ? "Generating..." : "Get a recipe"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

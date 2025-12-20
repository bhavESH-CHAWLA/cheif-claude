import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Recipe({showRecipe ,recipe}) {
  if (!showRecipe) return null;

 return(
  <section className="suggested-recipe-container">
    <ReactMarkdown>{recipe}</ReactMarkdown>
  </section>
 )
}

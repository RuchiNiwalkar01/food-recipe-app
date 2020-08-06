import React, { useState, useEffect } from "react";
import Recipe from "./recipe";
function App() {
  const APP_ID = "6447d78f";
  const APP_KEY = "7a7222a31f8f9d608699955289eac280";

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-box">
        <input type="text" placeholder=" Search..." className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipe-box">
        {recipes.map((recipe) => (
          <Recipe
            className="img-box"
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

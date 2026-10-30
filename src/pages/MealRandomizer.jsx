//usestate remembers w dropdown option user selected
import { useState } from "react";
const recipeFiles = import.meta.glob(
  "../data/recipes/*.json",
  { eager: true, import: "default" }
);

const recipes = Object.values(recipeFiles);

export default function MealRandomizer() { //export allows for other files to use this file
  const [mealType, setMealType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [calories, setCalories] = useState("");

  const matchingRecipes = recipes.filter((recipe) => {
  const matchesMealType =
    !mealType || recipe.mealType?.includes(mealType);

  const matchesPrepTime =
    !prepTime ||
    recipe.cookTimeMinutes <= Number(prepTime);

 const matchesCalories =
  !calories ||
  recipe.nutritionPerServing.calories <= Number(calories);

  return matchesMealType && matchesPrepTime && matchesCalories;
});

  return (
    <div className="meal-randomizer">
      <h1>Meal Randomizer</h1>

      <p>
        Filter your requirements
        <br /> 
        and generate a new recipe to try!
      </p>

      <div className="randomizer-filters"> 

        <select //creates html dropdown menu
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="">Meal Type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Dessert">Dessert</option>
        </select>

        <select
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
        >
          <option value="">Prep Time</option>
          {Array.from({ length: 8 }, (_, i) => {
            const minutes = (i + 1) * 30;
            return (
              <option key={minutes} value={minutes}>
                {minutes} mins
              </option>
            );
          })}
        </select>

        <select
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        >
          <option value="">Calories</option>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={i * 150}>
              {i * 100} calories
            </option>
          ))}
        </select>

      </div>
      <p className="meal-count">
  {matchingRecipes.length === 0
    ? "No meals fit this criteria"
    : `${matchingRecipes.length} meal${matchingRecipes.length === 1 ? "" : "s"} match your requirements`}
</p>

      <button className="generate-button" type="button">
        Generate
        <span className="generate-icon">+</span>
      </button>
    </div>
  );
}
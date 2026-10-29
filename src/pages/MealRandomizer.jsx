
import { useState } from "react";
import jelloRolls from "../data/recipes/jello_rolls.json";
import mongolianBeef from "../data/recipes/mongolian-beef.json";

const recipes = [jelloRolls, mongolianBeef];

export default function MealRandomizer({ onAccept }) {
  const [mealType, setMealType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [calories, setCalories] = useState("");
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [message, setMessage] = useState("");

  function getMatchingRecipes() {
    return recipes.filter((recipe) => {
      const matchesMealType = !mealType || recipe.mealType.includes(mealType);

      const matchesPrepTime = !prepTime || recipe.cookTimeMinutes <= Number(prepTime);

      const matchesCalories = !calories || recipe.nutritionPerServing.calories <= Number(calories);

      return matchesMealType && matchesPrepTime && matchesCalories;
    });
  }

  function generateRecipe(excludeId = null) {
    const matchingRecipes = getMatchingRecipes().filter(
      (recipe) => recipe.id !== excludeId
    );

    if (matchingRecipes.length === 0) {
      setCurrentRecipe(null);
      setMessage(
        excludeId
          ? "No other matching recipes. Try changing your filters."
          : "No recipes match your filters. Try different options."
      );
      return;
    }

    const randomIndex = Math.floor(
      Math.random() * matchingRecipes.length
    );

    setCurrentRecipe(matchingRecipes[randomIndex]);
    setMessage("");
  }

  function handleAccept() {
    if (!currentRecipe) return;

    onAccept(currentRecipe);
    setCurrentRecipe(null);
    setMessage("Recipe accepted! Its ingredients were added to your shopping list.");
  }

  function handleReject() {
    if (!currentRecipe) return;

    generateRecipe(currentRecipe.id);
  }

  return (
    <div className="meal-randomizer">
      <h1>Meal Randomizer</h1>

      <p>
        Filter your requirements
        <br />
        and generate a new recipe to try!
      </p>

      <div className="randomizer-filters">
        <select
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
          <option value="">Calories per serving</option>
          {Array.from({ length: 10 }, (_, i) => {
            const amount = (i + 1) * 100;

            return (
              <option key={amount} value={amount}>
                {amount} calories
              </option>
            );
          })}
        </select>
      </div>

      <button
        className="generate-button"
        type="button"
        onClick={() => generateRecipe()}
      >
        Generate
        <span className="generate-icon">+</span>
      </button>

      {message && <p role="status">{message}</p>}

      {currentRecipe && (
        <div className="randomizer-recipe">
          {currentRecipe.imageUrl && (
            <img
              src={currentRecipe.imageUrl}
              alt={currentRecipe.title}
              className="randomizer-recipe-image"
            />
          )}

          <h2>{currentRecipe.title}</h2>
          <p>{currentRecipe.description}</p>
          <p>Cook time: {currentRecipe.cookTimeMinutes} minutes</p>
          <p>
            Calories per serving:{" "}
            {currentRecipe.nutritionPerServing.calories}
          </p>

          <h3>Ingredients</h3>
          <ul>
            {currentRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>

          
<div className="randomizer-buttons">
  <button
    type="button"
    className="accept-button"
    onClick={handleAccept}
    aria-label="Accept recipe"
  >
    ✓
  </button>

  <button
    type="button"
    className="reject-button"
    onClick={handleReject}
    aria-label="Reject recipe"
  >
    ✕
  </button>
</div>
        </div>
      )}
    </div>
  );
}

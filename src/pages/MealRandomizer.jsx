
import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecipes } from "../context/RecipeContext";

export default function MealRandomizer() {
  const navigate = useNavigate();
  const { getRandomMeal } = useRecipes();

  const [mealType, setMealType] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [calories, setCalories] = useState("");
  const [message, setMessage] = useState("");

  function generateRecipe() {
    const filters = {
      mealType,
      prepTime,
      calories,
    };

    const recipe = getRandomMeal(filters);

    if (!recipe) {
      setMessage("No recipes match your filters. Try different options.");
      return;
    }

    setMessage("");

    navigate("/individual-meal", {
      state: {
        recipe,
        filters,
      },
    });
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
          onChange={(e) => {
            setMealType(e.target.value);
            setMessage("");
          }}
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
          onChange={(e) => {
            setPrepTime(e.target.value);
            setMessage("");
          }}
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
          onChange={(e) => {
            setCalories(e.target.value);
            setMessage("");
          }}
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
        onClick={generateRecipe}
      >
        Generate
        <span className="generate-icon">+</span>
      </button>

      {message && <p role="status">{message}</p>}
    </div>
  );
}

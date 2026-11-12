import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { useRecipes } from "../context/RecipeContext";
import Navbar from "../components/Navbar.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { getRecipeById, DEFAULT_IMAGE } from "../data/loadRecipes.js";
import "./IndividualMeal.css";

export default function IndividualMeal({ recipe: recipeProp, onAccept }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { getRandomMeal, mealPlan, addToMealPlan } = useRecipes();

  const recipe = recipeProp || location.state?.recipe || getRecipeById(id);

  const filters = location.state?.filters || {};

  const [message, setMessage] = useState("");

  const isRandomizer = location.pathname === "/individual-meal";

  function handleAddToMealPlan() {
    if (!recipe) return;

    if (onAccept) {
      onAccept(recipe);
    }
    addToMealPlan(mealPlan, recipe, "Anyday", mealPlan.length + 1);
    navigate("/meal-plan");
  }

  function handleAccept() {
    if (!recipe || !onAccept) return;

    onAccept(recipe);
    addToMealPlan(mealPlan, recipe, "Anyday", mealPlan.length + 1);
    navigate("/meal-plan");
  }

  function handleReject() {
    if (!recipe) return;

    const nextRecipe = getRandomMeal(filters, recipe.id);

    if (!nextRecipe) {
      setMessage("No other matching recipes. Try changing your filters.");
      return;
    }

    setMessage("");

    navigate("/individual-meal", {
      state: {
        recipe: nextRecipe,
        filters,
      },
    });
  }

  if (!recipe) {
    return (
      <div className="individual-meal">
        <PageHeader title="Recipe not found" showBack />
      </div>
    );
  }

  const {
    title,
    description,
    imageUrl,
    servings,
    cookTimeMinutes,
    classification,
  } = recipe;

  const { calories, protein, carbohydrates, fat } = recipe.nutritionPerServing;

  return (
    <div className="individual-meal">
      <PageHeader title={title} showBack />

      <div className="individual-meal-content">
        <img
          className="individual-meal-image"
          src={imageUrl || DEFAULT_IMAGE}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_IMAGE;
          }}
        />

        <p>{description}</p>

        <div className="individual-meal-info">
          <span>Cook time: {cookTimeMinutes} min</span>
          <span>Servings: {servings}</span>
          <span>Type: {classification}</span>
        </div>

        <h2>Nutrition per serving</h2>

        <ul className="individual-meal-nutrition">
          <li>Calories: {calories}</li>
          <li>Protein: {protein}g</li>
          <li>Carbs: {carbohydrates}g</li>
          <li>Fat: {fat}g</li>
        </ul>

        <h2>Ingredients</h2>

        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>
              {item.name} &ndash; {item.quantity} {item.unit}
            </li>
          ))}
        </ul>

        <h2>Instructions</h2>

        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        {message && <p role="status">{message}</p>}

        <div className="individual-meal-buttons">
          {isRandomizer ? (
            <>
              <Button onClick={handleAccept}>Accept</Button>

              <Button variant="outline" onClick={handleReject}>
                Reject
              </Button>
            </>
          ) : (
            <Button onClick={handleAddToMealPlan}>Add to Meal</Button>
          )}
        </div>
      </div>

      <Navbar />
    </div>
  );
}

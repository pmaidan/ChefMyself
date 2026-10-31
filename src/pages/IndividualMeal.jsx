import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar.jsx"; // Turn on once Ibrahim's Navbar is merged
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { getRecipeById } from "../data/loadRecipes.js";
import "./IndividualMeal.css";

export default function IndividualMeal({ recipe: recipeProp, onAccept, onReject }) {
  const { id } = useParams();
  const recipe = recipeProp || getRecipeById(id);

  if (!recipe) {
    return (
      <div className="individual-meal">
        <PageHeader title="Recipe not found" showBack />
      </div>
    );
  }

  const { title, description, imageUrl, servings, cookTimeMinutes, classification } = recipe;
  const { calories, protein, carbohydrates, fat } = recipe.nutritionPerServing;

  return (
    <div className="individual-meal">
      <PageHeader title={title} showBack />

      <div className="individual-meal-content">
        {imageUrl ? (
          <img className="individual-meal-image" src={imageUrl} alt={title} />
        ) : (
          <div className="individual-meal-image individual-meal-placeholder" />
        )}

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

        <div className="individual-meal-buttons">
          {onAccept && onReject ? (
            <>
              <Button onClick={onAccept}>Accept</Button>
              <Button variant="outline" onClick={onReject}>
                Reject
              </Button>
            </>
          ) : (
            <Button onClick={() => console.log("Add to meal plan: TODO")}>
              Add to Meal
            </Button>
          )}
        </div>
      </div>

      {/* <Navbar /> */}
    </div>
  );
}
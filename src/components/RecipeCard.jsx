import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const { id, title, imageUrl, classification, cookTimeMinutes, nutritionPerServing } =
    recipe;

  return (
    <div className="recipe-card" onClick={() => navigate(`/recipe/${id}`)}>
      {imageUrl ? (
        <img className="recipe-card-image" src={imageUrl} alt={title} />
      ) : (
        <div className="recipe-card-image recipe-card-placeholder" />
      )}
      <div>
        <h3 className="recipe-card-title">{title}</h3>
        <p className="recipe-card-category">{classification}</p>
        <p className="recipe-card-info">
          {cookTimeMinutes} min &bull; {nutritionPerServing.calories} cal
        </p>
      </div>
    </div>
  );
}
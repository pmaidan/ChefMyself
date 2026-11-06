
import { useNavigate } from 'react-router';
import './RecipeCard.css';
const DEFAULT_IMAGE = "/images/default-plate.jpg";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const { id, title, imageUrl, classification, cookTimeMinutes, nutritionPerServing } = recipe;

  return (
    <div className="recipe-card" onClick={() => navigate(`/recipe/${id}`)}>
      <img
        className="recipe-card-image"
        src={imageUrl || DEFAULT_IMAGE}
        alt={title}
        onError={(e) => {
          e.target.onerror = null; // stops a loop if the default fails too
          e.target.src = DEFAULT_IMAGE;
        }}
/>
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

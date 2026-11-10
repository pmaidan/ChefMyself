import { X } from "lucide-react";
import "./MealCard.css";

const DEFAULT_IMAGE = "/images/default-plate.jpg";

export default function MealCard({
  title,
  mealDescription,
  imageSrc,
  onEdit,
  onDelete,
}) {
  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <span className="meal-card-title">{title}</span>
        <button
          className="meal-card-close"
          onClick={onDelete}
          aria-label="Delete meal"
        >
          <X size={18} />
        </button>
      </div>

      <div className="meal-card-body">
        <div className="meal-card-image">
          <img
            src={imageSrc || DEFAULT_IMAGE}
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_IMAGE;
            }}
          />
        </div>

        <div className="meal-card-content">
          <span className="meal-card-description">
            {mealDescription || "No description available"}
          </span>
          <button className="edit-button" onClick={onEdit}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}

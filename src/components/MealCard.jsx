

import { X } from 'lucide-react';
import './MealCard.css';

export default function MealCard({ title, mealName, imageSrc, onEdit, onDelete }) {
  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <span className="meal-card-title">{title}</span>
        <button className="meal-card-close" onClick={onDelete} aria-label="Delete meal">
          <X size={18} />
        </button>
      </div>

      <div className="meal-card-body">
        <div className="meal-card-image">
          {imageSrc ? <img src={imageSrc} alt={mealName} /> : <div className="placeholder-img" />}
        </div>

        <div className="meal-card-content">
          <span className="meal-card-name">{mealName || 'Meal'}</span>
          <button className="edit-button" onClick={onEdit}>
            edit
          </button>
        </div>
      </div>
    </div>
  );
}
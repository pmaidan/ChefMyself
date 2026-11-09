
import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';
import MealCard from '../components/MealCard';
import { useRecipes } from '../context/RecipeContext';
import './MealPlan.css';

export default function MealPlan() {
  const navigate = useNavigate();
  const { mealPlan, removeFromMealPlan } = useRecipes();

  const handleAddMeal = () => {
    navigate('/recipe-bank');
  };

  const handleDelete = (idOrInstanceId) => {
    removeFromMealPlan(mealPlan, idOrInstanceId);
  };

  const handleEdit = (meal) => {
    if (['random', 'random meal'].includes(meal.title?.toLowerCase())) {
      navigate('/meal-randomizer');
    } else {
      navigate(`/recipe/${meal.id}`);
    }
  };

  return (
    <div className="meal-plan-page">
      <header className="page-header">
        <h1>ChefMyself</h1>
      </header>

      <main className="meal-plan-content">
        <h2 className="page-title">Meal Plan</h2>

        <div className="meal-list">
          {mealPlan.map((meal) => (
            <MealCard
              key={meal.instanceId || meal.id}
              title={meal.title || meal.name}
              mealName={meal.mealName || meal.title || meal.name}
              onEdit={() => handleEdit(meal)}
              onDelete={() => handleDelete(meal.instanceId || meal.id)}
            />
          ))}
        </div>
      </main>

      <button className="fab-add" onClick={handleAddMeal} aria-label="Add meal">
        <Plus size={32} />
      </button>
    </div>
  );
}
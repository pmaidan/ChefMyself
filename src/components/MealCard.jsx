
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router'; 
import { Plus } from 'lucide-react';
import MealCard from '../components/MealCard';
import { addToMealPlan } from '../logic/addToMealPlan';
import { removeFromMealPlan } from '../logic/removeFromMealPlan';
import './MealPlan.css';

export default function MealPlan() {
  const navigate = useNavigate(); // navigate hook

  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem('mealPlan');
    return savedMeals ? JSON.parse(savedMeals) : [
      { id: 1, title: 'Meal #1', mealName: 'Meal' },
      { id: 2, title: 'Meal #2', mealName: 'Meal' },
      { id: 3, title: 'Random', mealName: 'Meal' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(meals));
  }, [meals]);

  const handleAddMeal = () => {
    const sampleRecipe = { name: 'New Recipe', ingredients: [] };
    const nextMealNum = meals.length + 1;
    
    const updatedMeals = addToMealPlan(meals, sampleRecipe, 'Anyday', nextMealNum);
    setMeals(updatedMeals);
  };

  const handleDelete = (idOrInstanceId) => {
    const updatedMeals = removeFromMealPlan(meals, idOrInstanceId);
    setMeals(updatedMeals);
  };

  // 3. Handle routing based on which card is being edited
  const handleEdit = (meal) => {
    if (meal.title === 'Random') {
      navigate('/meal-randomizer'); // Go to the randomizer page
    } else {
      navigate(`/recipe/${meal.instanceId || meal.id}`); // Go to the individual meal page
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
          {meals.map((meal) => (
            <MealCard
              key={meal.instanceId || meal.id}
              title={meal.title || meal.name}
              mealName={meal.mealName || meal.name}
              onEdit={() => handleEdit(meal)} // <-- 4. Pass the meal object to handleEdit
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
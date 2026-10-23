
// import { Header } from "../components/Header";
// import { MealCard } from "../components/MealCard";
// import { FloatingActionButton } from "../components/FloatingActionButton";
// import { BottomNav } from "../components/BottomNav";

// export default function MealPlan() {
//   return (
//     <div style={{ maxWidth: '100%', minHeight: '100vh', padding: 0, position: 'relative' }}>
//       <Header title="Chef Me" />
      
//       <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2rem 1rem 8rem 1rem', backgroundColor: 'var(--color-secondary)' }}>
//         <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-dark)' }}>Meal Plan</h2>
        
//         <MealCard title="Meal #1" mealName="Meal" />
//         <MealCard title="Meal #2" mealName="Meal" />
//       </main>

//       <FloatingActionButton onClick={() => console.log("Add clicked")} />
//       <BottomNav activeTab="recipes" />
//     </div>
//   );
// }
import { useState } from 'react';
import { Plus } from 'lucide-react';
import MealCard from '../components/MealCard';
import BottomNav from '../components/BottomNav';
import './MealPlan.css';

export default function MealPlan() {
  const [meals, setMeals] = useState([
    { id: 1, title: 'Meal #1', mealName: 'Meal' },
    { id: 2, title: 'Meal #2', mealName: 'Meal' },
    { id: 3, title: 'Random', mealName: 'Meal' },
  ]);

  const handleAddMeal = () => {
    const newId = meals.length + 1;
    setMeals([...meals, { id: newId, title: `Meal #${newId}`, mealName: 'Meal' }]);
  };

  const handleDelete = (id) => {
    setMeals(meals.filter((m) => m.id !== id));
  };

  return (
    <div className="meal-plan-page">
      {/* Top Header */}
      <header className="page-header">
        <h1>Chef Me</h1>
      </header>

      {/* Main Content Area */}
      <main className="meal-plan-content">
        <h2 className="page-title">Meal Plan</h2>

        <div className="meal-list">
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              title={meal.title}
              mealName={meal.mealName}
              onEdit={() => console.log('Edit clicked for', meal.id)}
              onDelete={() => handleDelete(meal.id)}
            />
          ))}
        </div>
      </main>

      {/* Floating Add Button */}
      <button className="fab-add" onClick={handleAddMeal} aria-label="Add meal">
        <Plus size={32} />
      </button>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
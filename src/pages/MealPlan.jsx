// // src/pages/MealPlan.jsx
// import { Header } from "../components/Header";
// import { MealCard } from "../components/MealCard";
// import { FloatingActionButton } from "../components/FloatingActionButton";
// import { BottomNav } from "../components/BottomNav";

// export default function MealPlan() {
//   return (
//     <div className="container theme-cream">
//       <Header title="Chef Me" />
      
//       <main style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', padding: '2rem 0', paddingBottom: '6rem' }}>
//         <h2>Meal Plan</h2>
//         <MealCard title="Meal #1" mealName="Meal" />
//         <MealCard title="Meal #2" mealName="Meal" />
//       </main>

//       <FloatingActionButton onClick={() => console.log("Add clicked")} />
//       <BottomNav activeTab="recipes" />
//     </div>
//   );
// }
// src/pages/MealPlan.jsx
import { Header } from "../components/Header";
import { MealCard } from "../components/MealCard";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { BottomNav } from "../components/BottomNav";

export default function MealPlan() {
  return (
    <div style={{ maxWidth: '100%', minHeight: '100vh', padding: 0, position: 'relative' }}>
      <Header title="Chef Me" />
      
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '2rem 1rem 8rem 1rem', backgroundColor: 'var(--color-secondary)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-dark)' }}>Meal Plan</h2>
        
        <MealCard title="Meal #1" mealName="Meal" />
        <MealCard title="Meal #2" mealName="Meal" />
      </main>

      <FloatingActionButton onClick={() => console.log("Add clicked")} />
      <BottomNav activeTab="recipes" />
    </div>
  );
}
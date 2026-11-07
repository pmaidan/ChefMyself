import { createContext, useContext, useState, useEffect } from "react";
import { allRecipes } from "../data/loadRecipes";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  // Initialize recipe bank
  const [recipeBank, setRecipeBank] = useState(allRecipes);

  // Initialize meal plan, restoring from localStorage if saved
  const [mealPlan, setMealPlan] = useState(() => {
    const saved = localStorage.getItem("mealPlan");
    return saved ? JSON.parse(saved) : [];
  });

  // Automatically sync mealPlan to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
  }, [mealPlan]);

  // Temporary stubs until the real actions are written
  const addToMealPlan = () => console.warn("To be done");
  const removeFromMealPlan = () => console.warn("To be done");
  const getRandomMeal = () => null;

  return (
    <RecipeContext.Provider
      value={{
        recipeBank,
        mealPlan,
        addToMealPlan,
        removeFromMealPlan,
        getRandomMeal,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export const useRecipes = () => useContext(RecipeContext);

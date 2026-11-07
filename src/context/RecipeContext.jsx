import { createContext, useContext, useState, useEffect } from "react";
import { allRecipes } from "../data/loadRecipes";
import { getRandomMeal as selectRandomMeal } from "../logic/getRandomMeal";
import { removeFromMealPlan } from "../logic/removeFromMealPlan";

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
  const handleRemoveFromMealPlan = (recipeId) => {
    removeFromMealPlan(recipeId, setMealPlan);
  };
  const getRandomMeal = (filters = {}, excludeId = null) => {
  return selectRandomMeal(recipeBank, filters, excludeId);
};

  return (
    <RecipeContext.Provider
      value={{
        recipeBank,
        mealPlan,
        addToMealPlan,
        removeFromMealPlan: handleRemoveFromMealPlan,
        getRandomMeal,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export const useRecipes = () => useContext(RecipeContext);

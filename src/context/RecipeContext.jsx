import { createContext, useContext, useState, useEffect } from "react";
import { allRecipes } from "../data/loadRecipes";
import { getRandomMeal as selectRandomMeal } from "../logic/getRandomMeal";
import { addToMealPlan as addRecipeToMealPlan } from "../logic/addToMealPlan";
import { removeFromMealPlan as removeRecipeFromMealPlan } from "../logic/removeFromMealPlan";

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

  const addToMealPlan = (currentMealPlan, recipe, day, nextMealNumber) => {
    const updatedMealPlan = addRecipeToMealPlan(
      currentMealPlan,
      recipe,
      day,
      nextMealNumber
    );
    setMealPlan(updatedMealPlan);
    return updatedMealPlan;
  };

  const handleRemoveFromMealPlan = (currentMealPlan, instanceId) => {
    const updatedMealPlan = removeRecipeFromMealPlan(
      currentMealPlan,
      instanceId
    );
    setMealPlan(updatedMealPlan);
    return updatedMealPlan;
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

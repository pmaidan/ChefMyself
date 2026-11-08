import { createBrowserRouter, RouterProvider } from "react-router";
import { useState } from "react";
import { RecipeProvider } from "./context/RecipeContext";
import Home from "./pages/Home.jsx";
import RecipeBank from "./pages/RecipeBank.jsx";
import MealPlan from "./pages/MealPlan.jsx";
import './style.css';

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/recipe-bank", element: <RecipeBank /> },
    { path: "/individual-meal", element: <IndividualMeal /> },
    { path: "/recipe/:id", element: <IndividualMeal /> },
    { path: "/shopping-list", element: <ShoppingList items={shoppingItems} setItems={setShoppingItems} /> },
    { path: "/meal-randomizer", element: <MealRandomizer onAccept={acceptRecipe} /> },
    { path: "/meal-plan", element: <MealPlan /> },
  ]);

  return (
    <RecipeProvider>
      <RouterProvider router={router} />
    </RecipeProvider>
  );
}

export default App;

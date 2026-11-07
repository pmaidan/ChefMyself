
import { createBrowserRouter, RouterProvider } from "react-router";
import { useState, useEffect } from "react";
import { RecipeProvider } from "./context/RecipeContext";
import Home from "./pages/Home.jsx";
import RecipeBank from "./pages/RecipeBank.jsx";
import IndividualMeal from "./pages/IndividualMeal.jsx";
import ShoppingList from "./pages/ShoppingList";
import MealRandomizer from "./pages/MealRandomizer";
import MealPlan from "./pages/MealPlan.jsx";
import "./styles.css";

function App() {
  const [shoppingItems, setShoppingItems] = useState(() => {
    const savedItems = localStorage.getItem("shoppingItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "shoppingItems",
      JSON.stringify(shoppingItems)
    );
  }, [shoppingItems]);

  function acceptRecipe(recipe) {
    const newItems = recipe.ingredients.map((ingredient, index) => ({
      id: Date.now() + index,
      quantity: `${ingredient.quantity} ${ingredient.unit}`,
      name: ingredient.name,
      checked: false,
    }));

    setShoppingItems((items) => [...items, ...newItems]);
  }

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/recipe-bank", element: <RecipeBank /> },
    {
      path: "/individual-meal",
      element: <IndividualMeal onAccept={acceptRecipe} />,
    },
    { path: "/recipe/:id", element: <IndividualMeal /> },
    {
      path: "/shopping-list",
      element: (
        <ShoppingList
          items={shoppingItems}
          setItems={setShoppingItems}
        />
      ),
    },
    { path: "/meal-randomizer", element: <MealRandomizer /> },
    { path: "/meal-plan", element: <MealPlan /> },
  ]);

  return (
    <RecipeProvider>
      <RouterProvider router={router} />
    </RecipeProvider>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import RecipeBank from "./pages/RecipeBank.jsx";
import IndividualMeal from "./pages/IndividualMeal.jsx";
import ShoppingList from "./pages/ShoppingList";
import MealRandomizer from "./pages/MealRandomizer";
import './styles.css';

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

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
    { path: "/recipe/:id", element: <IndividualMeal /> },
    { path: "/shopping-list", element: <ShoppingList items={shoppingItems} setItems={setShoppingItems} /> },
    { path: "/meal-randomizer", element: <MealRandomizer onAccept={acceptRecipe} /> },
  ]);

  return <RouterProvider router={router} />
}

export default App;

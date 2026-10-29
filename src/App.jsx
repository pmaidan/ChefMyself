
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ShoppingList from "./pages/ShoppingList";
import MealRandomizer from "./pages/MealRandomizer";

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
    {
      path: "/",
      element: (
        <ShoppingList
          items={shoppingItems}
          setItems={setShoppingItems}
        />
      ),
    },
    {
      path: "/meal-randomizer",
      element: <MealRandomizer onAccept={acceptRecipe} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import RecipeBank from "./pages/RecipeBank.jsx";
import MealPlan from "./pages/MealPlan.jsx";
import './style.css';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recipe-bank", element: <RecipeBank /> },
  { path: "/daily-meal-plan", element: <MealPlan /> },
]);

function App() {
 return <RouterProvider router={router} />;
}

export default App;


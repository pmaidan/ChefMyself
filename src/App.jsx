import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import RecipeBank from "./pages/RecipeBank.jsx";
import IndividualMeal from "./pages/IndividualMeal.jsx";
import './style.css';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/recipe-bank", element: <RecipeBank /> },
  { path: "/individual-meal", element: <IndividualMeal /> },
]);

function App() {
 return <RouterProvider router={router} />;
}

export default App;


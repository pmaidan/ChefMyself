import { Routes, Route } from "react-router-dom";
import RecipeBank from "./pages/RecipeBank.jsx";
import IndividualMeal from "./pages/IndividualMeal.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/recipes" element={<RecipeBank />} />
      <Route path="/recipe/:id" element={<IndividualMeal />} />
    </Routes>
  );
}
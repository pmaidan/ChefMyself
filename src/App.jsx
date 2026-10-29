import Navbar from "./components/Navbar";
import ShoppingList from "./pages/ShoppingList";
import Home from "./pages/Home.jsx";
import MealRandomizer from "./pages/MealRandomizer.jsx";

function App() {
  return (
    <div>
      <Home />
      <MealRandomizer />
      <ShoppingList />
      <Navbar />
    </div>
  );
}

export default App;
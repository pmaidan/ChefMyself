import { House, Calendar, ChefHat, Menu } from "lucide-react";
import "./Navbar.css";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button
        className="nav-item"
        onClick={() => {
          navigate("/");
        }}
        aria-label="Home"
      >
        <House />
      </button>

      <button
        className="nav-item"
        onClick={() => {
          navigate("/meal-plan");
        }}
        aria-label="Calendar"
      >
        <Calendar />
      </button>

      <button
        className="nav-item"
        onClick={() => {
          navigate("/recipe-bank");
        }}
        aria-label="Recipes"
      >
        <ChefHat />
      </button>

      <label htmlFor="sidebar-toggle" className="nav-item" aria-label="Menu">
        <Menu />
      </label>
    </nav>
  );
}

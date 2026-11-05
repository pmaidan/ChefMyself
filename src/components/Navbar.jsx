
import { House, Calendar, ChefHat, Menu } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <button className="nav-item" aria-label="Home">
        <House />
      </button>

      <button className="nav-item" aria-label="Calendar">
        <Calendar />
      </button>

      <button className="nav-item" aria-label="Recipes">
        <ChefHat />
      </button>

      <button className="nav-item" aria-label="More">
        <Menu />
      </button>
    </nav>
  );
}

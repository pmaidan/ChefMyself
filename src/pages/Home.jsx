import { useNavigate } from "react-router";
import { ChefHat } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-icon">
        <ChefHat size={96} strokeWidth={1.5} />
      </div>

      <h1>Welcome to ChefMyself!</h1>

      <p className="home-description">
        Discover recipes and plan your meals with ease.
      </p>

      <div className="home-buttons">
        <button type="button" onClick={() => navigate("/meal-plan")}>
          Daily Meal Plan
        </button>

        <button type="button" onClick={() => navigate("/shopping-list")}>
          Shopping List
        </button>
      </div>
    </div>
  );
}

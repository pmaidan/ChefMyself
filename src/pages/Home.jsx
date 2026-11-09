import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome Back!</h1>

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

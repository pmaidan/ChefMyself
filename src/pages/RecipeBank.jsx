import { useState } from "react";
// import Navbar from "../components/Navbar.jsx"; // Turn on once Ibrahim's Navbar is merged
import PageHeader from "../components/PageHeader.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import { allRecipes } from "../data/loadRecipes.js";
import "./RecipeBank.css";

const FILTERS = ["All", "Breakfast", "Lunch", "Dinner", "Snack"];

export default function RecipeBank() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const visibleRecipes = allRecipes
    .filter((r) => r.title.toLowerCase().includes(search.toLowerCase()))
    .filter((r) => selectedFilter === "All" || r.mealType.includes(selectedFilter))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="recipe-bank">
      <PageHeader title="Recipe Bank" />

      <div className="recipe-bank-content">
        <input
          className="recipe-bank-search"
          type="text"
          placeholder="What do you want to make today?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="recipe-bank-filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={
                filter === selectedFilter
                  ? "filter-chip filter-chip-selected"
                  : "filter-chip"
              }
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="recipe-bank-list">
          {visibleRecipes.length > 0 ? (
            visibleRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No recipes match. Try a different search or filter.</p>
          )}
        </div>
      </div>

      {/* <Navbar /> */}
    </div>
  );
}
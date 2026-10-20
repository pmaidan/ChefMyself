import RecipeCard from "../components/RecipeCard.jsx";
export default function Home() {
  return (  //gives container a CSS (style) class name
    <div className="home"> 
      <h1>Welcome Back!</h1>

      <h2>Your Weekly Plate</h2>

      <div className="weekly-plate">
  <RecipeCard
    name="Mongolian Beef"
    info="Calories & Dish Information"
    date="Mon 10/11"
  />

  <RecipeCard
    name="Mongolian Beef"
    info="Calories & Dish Information"
    date="Tue 10/12"
  />

  <RecipeCard
    name="Mongolian Beef"
    info="Calories & Dish Information"
    date="Wed 10/13"
  />

  <RecipeCard
    name="Mongolian Beef"
    info="Calories & Dish Information"
    date="Thu 10/14"
  />

  <RecipeCard
    name="Mongolian Beef"
    info="Calories & Dish Information"
    date="Fri 10/15"
  />
</div>
    </div>
  );
}
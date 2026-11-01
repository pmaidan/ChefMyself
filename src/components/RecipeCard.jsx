export default function RecipeCard({ name, info, date }) {
  return (
    <div className="recipe-card">
      <h3>{name}</h3>
      <p>{info}</p>
      <p>{date}</p>
    </div>
  );
}
export function FloatingActionButton({ onClick }) {
  return (
    <button onClick={onClick} className="fab" aria-label="Add Meal">
      +
    </button>
  );
}
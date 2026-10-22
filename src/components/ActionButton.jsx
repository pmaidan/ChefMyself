export function FloatingActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#D87A64] text-white text-3xl shadow-lg hover:bg-[#c46853] transition"
      aria-label="Add"
    >
      +
    </button>
  );
}
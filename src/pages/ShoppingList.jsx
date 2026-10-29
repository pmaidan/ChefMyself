
import Navbar from "../components/Navbar";
import "./ShoppingList.css";

export default function ShoppingList({ items, setItems }) {
  function toggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  }

  return (
    <div className="shopping-page">
      <h1 className="shopping-title">
        Shopping
        <br />
        List
      </h1>

      <div className="shopping-card">
        {items.map((item) => (
          <div className="shopping-item" key={item.id}>
            <div className="shopping-quantity">{item.quantity}</div>

            <div className="shopping-divider"></div>

            <div
              className={`shopping-name ${
                item.checked ? "completed" : ""
              }`}
            >
              {item.name}
            </div>

            <button
              className={`shopping-checkbox ${
                item.checked ? "checked" : ""
              }`}
              onClick={() => toggleItem(item.id)}
              aria-label={`Mark ${item.name} as ${
                item.checked ? "not purchased" : "purchased"
              }`}
            >
              {item.checked ? "✓" : ""}
            </button>
          </div>
        ))}
      </div>

      <Navbar />
    </div>
  );
}

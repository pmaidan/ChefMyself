import Navbar from "../components/Navbar";
import "./ShoppingList.css";

export default function ShoppingList({ items, setItems }) {
  function toggleItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function clearList() {
    setItems([]);
  }

  function removeCheckedItems() {
    setItems((currentItems) => currentItems.filter((item) => !item.checked));
  }

  return (
    <div className="shopping-page">
      <h1 className="shopping-title">Shopping List</h1>

      {items.length > 0 && (
        <div className="shopping-actions">
          <button className="clear-checked-button" onClick={removeCheckedItems}>
            Clear Checked
          </button>
          <button className="clear-all-button" onClick={clearList}>
            Clear All
          </button>
        </div>
      )}

      <div className="shopping-card">
        {items.length === 0 ? (
          <div className="empty-message">
            Your shopping list is empty. Add items to your meal plan!
          </div>
        ) : (
          items.map((item) => (
            <div className="shopping-item" key={item.id}>
              <div className="shopping-quantity">{item.quantity}</div>

              <div className="shopping-divider"></div>

              <div
                className={`shopping-name ${item.checked ? "completed" : ""}`}
              >
                {item.name}
              </div>

              <button
                className={`shopping-checkbox ${item.checked ? "checked" : ""}`}
                onClick={() => toggleItem(item.id)}
                aria-label={`Mark ${item.name} as ${
                  item.checked ? "not purchased" : "purchased"
                }`}
              >
                {item.checked ? "✓" : ""}
              </button>
            </div>
          ))
        )}
      </div>

      <Navbar />
    </div>
  );
}


import { useState } from "react";
import Navbar from "../components/Navbar";
import "./ShoppingList.css";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, quantity: "400 gram", name: "Spaghetti Pasta", checked: false },
    { id: 2, quantity: "2 pieces", name: "Tomatoes", checked: false },
    { id: 3, quantity: "1 piece", name: "Onion", checked: false },
    { id: 4, quantity: "200 gram", name: "Ground Beef", checked: false },
  ]);

  function toggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
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
        ))}
      </div>

      <Navbar />
    </div>
  );
}

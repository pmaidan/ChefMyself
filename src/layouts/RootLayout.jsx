import { Outlet, Link } from "react-router";

export default function RootLayout() {
  return (
    <div className="app-container">
      {/* Hidden checkbox toggle for the sidebar */}
      <input type="checkbox" id="sidebar-toggle" style={{ display: "none" }} />



      {/* Persistent Navbar */}
      <nav className="navbar">
        <label htmlFor="sidebar-toggle" className="menu-btn">Menu</label>
        <Link to="/">Home</Link>
        <Link to="/recipe-bank">Recipe Bank</Link>
        <Link to="/meal-plan">Meal Plan</Link>
        <Link to="/shopping-list">ShoppingList</Link>
        <Link to="/meal-randomizer">MealRandomizer</Link>



      </nav>

      {/* Persistent Sidebar */}
      <aside className="sidebar">
        <label htmlFor="sidebar-toggle" className="close-btn">Close</label>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipe-bank">Recipe Bank</Link></li>
          <li><Link to="/meal-plan">Meal Plan</Link></li>
          <li><Link to="/shopping-list">ShoppingList</Link></li>
          <li><Link to="/meal-randomizer">MealRandomizer</Link></li>
        </ul>
      </aside>
      
      {/* Active page */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2>ChefMyself</h2>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/recipes">Recipe Bank</a></li>
          <li><a href="/shopping">Shopping List</a></li>
        </ul>
      </nav>
    </>
  );
}   
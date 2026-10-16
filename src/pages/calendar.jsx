const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const days = Array.from({ length: 28 }, (_, index) => index + 1);

function App() {
  return (
    <div className="app-container theme-cream">
      <header className="app-header">
        <h1 className="header-title">Chef Me</h1>
      </header>

      <main className="main-content">
        <h2 className="page-title">Calendar</h2>
        <div className="calendar-scroll-container">
          <div className="calendar-grid">
            {weekdays.map((weekday) => (
              <div className="day-header" key={weekday}>
                {weekday}
              </div>
            ))}
            {days.map((day) => (
              <div className="calendar-card" key={day}>
                <span className="day-number">{day}</span>
                <ul className="meal-list">
                  <li>
                    <span className="dot" />
                    Lunch
                  </li>
                  <li>
                    <span className="dot" />
                    Dinner
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

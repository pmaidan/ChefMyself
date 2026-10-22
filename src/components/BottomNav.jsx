// export function BottomNav({ activeTab }) {
//   const tabs = [
//     { id: "home", label: "Home", path: "M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" },
//     { id: "calendar", label: "Calendar", path: "M4 5h16v16H4z M8 3v4 M16 3v4 M4 10h16" },
//     { id: "recipes", label: "Recipes", path: "M4 3v7a4 4 0 0 0 8 0V3 M8 3v18 M18 3v18 M18 3a4 4 0 0 1 4 4v4h-4" },
//     { id: "list", label: "List", path: "M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01" },
//   ];

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-[#D87A64] py-3 px-6 flex justify-around items-center border-t border-[#c46853]">
//       {tabs.map((tab) => {
//         const isActive = activeTab === tab.id;
//         return <button key={tab.id} aria-label={tab.label} className={`text-white transition ${isActive ? "opacity-100 scale-110" : "opacity-60 hover:opacity-90"}`}>
//           <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d={tab.path} />
//           </svg>
//         </button>;
//       })}
//     </nav>
//   );
// }

export function BottomNav({ activeTab }) {
  return (
    <nav className="bottom-nav">
      {/* Home Icon */}
      <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} aria-label="home">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </button>

      {/* Calendar Icon */}
      <button className={`nav-item ${activeTab === 'calendar' ? 'active' : ''}`} aria-label="calendar">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </button>

      {/* Recipes / Chef Icon */}
      <button className={`nav-item ${activeTab === 'recipes' ? 'active' : ''}`} aria-label="recipes">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 00-4 4c0 1.5.8 2.8 2 3.5V11h4V9.5c1.2-.7 2-2 2-3.5a4 4 0 00-4-4zM6 15h12v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5z" />
        </svg>
      </button>

      {/* List Icon */}
      <button className={`nav-item ${activeTab === 'list' ? 'active' : ''}`} aria-label="list">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
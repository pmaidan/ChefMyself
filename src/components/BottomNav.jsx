

// export function BottomNav({ activeTab }) {
//   return (
//     <nav className="bottom-nav">
//       {/* Home Icon */}
//       <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} aria-label="home">
//         <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//         </svg>
//       </button>

//       {/* Calendar Icon */}
//       <button className={`nav-item ${activeTab === 'calendar' ? 'active' : ''}`} aria-label="calendar">
//         <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
//         </svg>
//       </button>

//       {/* Recipes / Chef Icon */}
//       <button className={`nav-item ${activeTab === 'recipes' ? 'active' : ''}`} aria-label="recipes">
//         <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 00-4 4c0 1.5.8 2.8 2 3.5V11h4V9.5c1.2-.7 2-2 2-3.5a4 4 0 00-4-4zM6 15h12v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5z" />
//         </svg>
//       </button>

//       {/* List Icon */}
//       <button className={`nav-item ${activeTab === 'list' ? 'active' : ''}`} aria-label="list">
//         <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>
//     </nav>
//   );
// }

import { Home, Calendar, ChefHat, List } from 'lucide-react';
import './BottomNav.css';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="nav-item" aria-label="Home">
        <Home size={28} />
      </button>
      <button className="nav-item active" aria-label="Meal Plan">
        <Calendar size={28} />
      </button>
      <button className="nav-item" aria-label="Recipes">
        <ChefHat size={28} />
      </button>
      <button className="nav-item" aria-label="Shopping List">
        <List size={28} />
      </button>
    </nav>
  );
}


import { ChefHat } from 'lucide-react';
import './SideBar.css';

export default function SideBar() {
  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Shopping List', href: '#' },
    { label: 'Meal Plan', href: '#' },
    { label: 'Weekly Plate', href: '#' },
    { label: 'Recipe Bank', href: '#' },
  ];

  return (
    <aside className="sidebar">
      {/* Top Header with Icon and Divider */}
      <div className="sidebar-header">
        <ChefHat className="sidebar-icon" size={56} strokeWidth={1.5} />
        <hr className="sidebar-divider" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="sidebar-nav">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="sidebar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
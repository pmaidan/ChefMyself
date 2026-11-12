import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

export default function RootLayout() {
  return (
    <div className="app-container">
      {/* Hidden checkbox toggle for the sidebar */}
      <input type="checkbox" id="sidebar-toggle" style={{ display: "none" }} />

      {/* Persistent Components */}
      <Navbar />
      <SideBar />

      {/* Active page */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

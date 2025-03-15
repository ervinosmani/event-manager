import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Reservations from "./components/Reservations";
import Menus from "./components/Menus";
import "./App.css"; // Sigurohu që është importuar CSS

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("reservations"); // State për faqen aktive

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} activePage={activePage} setActivePage={setActivePage} />

     {/* Përmbajtja kryesore */}
    <div className={`main-content ${isSidebarOpen ? "sidebar-active" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      {activePage === "reservations" && <Reservations />}
      {activePage === "menus" && <Menus />}
    </div>

    </div>
  );
};

export default App;

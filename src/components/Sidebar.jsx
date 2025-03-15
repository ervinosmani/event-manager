import React from "react";

const Sidebar = ({ isSidebarOpen, toggleSidebar, activePage, setActivePage }) => {
  return (
    <>
      {/* Overlay për të errësuar sfondin kur Sidebar-i është hapur */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {/* Butoni për mbylljen e Sidebar-it në mobile */}
        <button className="btn btn-danger close-sidebar-btn d-lg-none" onClick={toggleSidebar}>
          ✖
        </button>

        <h4 className="text-center fw-bold">Menu</h4>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button
              className={`nav-link ${activePage === "reservations" ? "active" : ""}`}
              onClick={() => { setActivePage("reservations"); toggleSidebar(); }}>
              Rezervimet
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activePage === "menus" ? "active" : ""}`}
              onClick={() => { setActivePage("menus"); toggleSidebar(); }}>
              Menytë
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

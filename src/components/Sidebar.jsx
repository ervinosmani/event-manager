import React, { useState } from "react";
import Reservations from "./Reservations";
import Menus from "./Menus";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("reservations");

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light shadow-sm" 
           style={{ width: "250px", height: "100vh", borderRight: "2px solid #ddd" }}>
        <h4 className="text-center fw-bold">Menu</h4>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button className={`nav-link ${activePage === "reservations" ? "active" : ""}`} 
                    onClick={() => setActivePage("reservations")}>
              Rezervimet
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activePage === "menus" ? "active" : ""}`} 
                    onClick={() => setActivePage("menus")}>
              Menytë
            </button>
          </li>
        </ul>
      </div>

      {/* Kjo pjesë do të marrë hapësirën që mbetet */}
      <div className="container-fluid mt-4 flex-grow-1">
        <div className="w-100">
          {activePage === "reservations" && <Reservations />}
          {activePage === "menus" && <Menus />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

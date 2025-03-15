import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-dark bg-primary p-3 shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        {/* Butoni hamburger për mobile */}
        <button className="btn btn-light d-lg-none me-2" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Teksti "Dashboard" që shfaqet në mes */}
        <span className="navbar-brand mx-auto text-white fw-bold">Binaki Restaurant</span>
      </div>
    </nav>
  );
};

export default Navbar;

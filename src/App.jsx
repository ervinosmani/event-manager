import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
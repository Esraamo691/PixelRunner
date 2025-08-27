import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
export default function Layout() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  function changeMode() {
    if (mode == "dark") {
      setMode("light");
      localStorage.setItem('mode','light')
    } else {
      setMode("dark");
      localStorage.setItem('mode','dark')
    }
  }
  return (
    <main className={mode == "dark" && "dark"}>
      <div className="bg-gray-200 min-h-screen dark:bg-gray-950 dark:text-gray-50">
        <Navbar mode={mode} changeMode={changeMode} />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

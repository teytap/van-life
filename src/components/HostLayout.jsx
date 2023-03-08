import React from "react";

import { NavLink, Outlet } from "react-router-dom";
export default function Layout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

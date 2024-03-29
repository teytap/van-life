import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <NavLink to="/" className="site-logo">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
        <NavLink to="/login" className="login-link">
          <img src="/images/Icon.png" alt="icon" width="20" />
        </NavLink>
      </nav>
    </header>
  );
}

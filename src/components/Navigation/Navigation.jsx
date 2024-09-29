import { NavLink } from "react-router-dom";
import clsx from "clsx";

import style from "./Navigation.module.css";

function generateLinkStyle({ isActive }) {
  return clsx(style.navLink, isActive && style.active);
}

export default function Navigation() {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={generateLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" className={generateLinkStyle}>
        Movies
      </NavLink>
    </nav>
  );
}
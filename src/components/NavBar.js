import "./NavBar.css";

import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";

export default function NavBar() {
  const ctx = useTheme();

  return (
    <div className="navbar" style={{ background: ctx.color }}>
      <nav>
        <NavLink to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </NavLink>
        <Searchbar />
        <NavLink to="/create">Create Recipe</NavLink>
      </nav>
    </div>
  );
}

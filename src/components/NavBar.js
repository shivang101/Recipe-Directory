import "./NavBar.css";

import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function NavBar() {
  return (
    <div className="navbar">
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

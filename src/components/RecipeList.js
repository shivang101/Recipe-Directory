import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const ctx = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes found</div>;
  } else
    return (
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="card"
            style={{
              background: ctx.mode === "#333" ? "#808080" : "#FFF",
            }}
          >
            <h3
              style={{
                color: ctx.mode === "#333" ? "#fff" : "#808080",
              }}
            >
              {recipe.Title}
            </h3>
            <p
              style={{
                color: ctx.mode === "#333" ? "#fff" : "#808080",
              }}
            >
              {recipe.cookingTime} to make.
            </p>
            <div
              style={{
                color: ctx.mode === "#333" ? "#fff" : "#808080",
              }}
            >
              {recipe.method.substring(0, 100)}...
            </div>
            <Link to={`/recipe/${recipe.id}`} style={{ background: ctx.color }}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    );
}

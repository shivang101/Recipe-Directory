import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const ctx = useTheme();

  if (recipes.length === 0) {
    return <div className="erro">No recipes found</div>;
  } else
    return (
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipe/${recipe.id}`} style={{ background: ctx.color }}>
              Read more
            </Link>
          </div>
        ))}
      </div>
    );
}

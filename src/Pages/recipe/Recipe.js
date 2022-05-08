import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

import "./Recipe.css";
export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();
  const url = `http://localhost:3000/recipes/${id}`;

  const { data: recipe, error, isPending } = useFetch(url);

  return (
    <div
      className="recipe"
      style={{
        background: mode === "#333" ? "#555" : "#fff",
        color: mode === "#333" ? "#e4e4e4" : "",
      }}
    >
      {error && <p className="error">{error}</p>}

      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>

          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
// import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

import "./Recipe.css";
export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  // const url = `http://localhost:3000/recipes/${id}`;
  // const { data: recipe, error, isPending } = useFetch(url);

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("Recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setRecipe(doc.data());
          setIsPending(false);
          setError(null);
        } else {
          setError("No recipe found");
          setIsPending(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [id]);

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

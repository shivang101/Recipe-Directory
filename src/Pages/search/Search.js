import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

export default function Search() {
  const queryString = useLocation().search;
  console.log(queryString);
  const queryParams = new URLSearchParams(queryString);
  console.log(queryParams);
  const query = queryParams.get("item");
  console.log(query);

  const url = `http://localhost:3000/recipes?title_like=${query}`;

  const { error, isPending, data } = useFetch(url);

  return (
    <>
      <div>
        <h2 className="page-title">Recipes including "{query}"</h2>
        {error && <p className="error">{error.message}</p>}
        {isPending && <p>Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </div>
    </>
  );
}

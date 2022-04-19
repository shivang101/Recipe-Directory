import { useState, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";

//styles
import "./Create.css";

export default function Create() {
  const [title, setTtile] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients);
    newRecipeData({
      title,
      ingredients,
      method,
      cookintTime: `${cookingTime} minutes`,
    });
  };

  const {
    postData: newRecipeData,
    data,
    error,
  } = useFetch("http://localhost:3000/recipes", "POST");

  const ingInput = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a new Recipe</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => setTtile(e.target.value)}
            value={title}
            required
            placeholder="Enter a Title"
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingInput}
            />
            <button onClick={handleAdd} className="btn">
              {" "}
              Add
            </button>
          </div>
        </label>
        <p>
          current ingredients:{" "}
          {ingredients.map((el) => (
            <em key={el}>{el}, </em>
          ))}
        </p>

        <label>
          <span>
            Recipe Method:
            <textarea
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </span>
        </label>

        <label>
          <span>Cooking Time:</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            required
            value={cookingTime}
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

import { useState } from "react";

//styles
import "./Create.css";

export default function Create() {
  const [title, setTtile] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
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
          />
        </label>
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

import { projectFirestore } from "../../firebase/config";
import { useEffect } from "react";
import { useState } from "react";

//styling
import "./Home.css";

//hooks
// import { useFetch } from "../../hooks/useFetch";
//components
import RecipeList from "../../components/RecipeList";

export default function Home() {
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("Recipes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No recipes found");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
          setError(null);
        }
      },
      (err) => {
        setError(err);
        setIsPending(false);
      }
    );

    return () => unsub();

    // setIsPending(true);
    // projectFirestore
    //   .collection("Recipes")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     if (snapshot.empty) {
    //       setError("No recipes found");
    //       setIsPending(false);
    //     } else {
    //       let results = [];
    //       snapshot.docs.forEach((doc) => {
    //         results.push({ id: doc.id, ...doc.data() });
    //       });
    //       setData(results);
    //       setIsPending(false);
    //       setError(null);
    //     }
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setIsPending(false);
    //   });
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {data && <RecipeList recipes={data} />}
    </div>
  );
}

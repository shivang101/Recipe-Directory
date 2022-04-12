import { BrowserRouter, Route, Routes } from "react-router-dom";

//page components
import Home from "./Pages/home/Home";
import Create from "./Pages/create/Create";
import Search from "./Pages/search/Search";
import Recipe from "./Pages/recipe/Recipe";
import NavBar from "./components/NavBar";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Create" element={<Create />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

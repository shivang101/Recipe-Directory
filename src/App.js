import { BrowserRouter, Route, Routes } from "react-router-dom";

//page components
import Home from "./Pages/home/Home";
import Create from "./Pages/create/Create";
import Search from "./Pages/search/Search";
import Recipe from "./Pages/recipe/Recipe";
import NavBar from "./components/NavBar";
//styles
import "./App.css";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div
      className="App"
      style={{ background: mode === "#333" ? "#333" : "#dfdfdf" }}
    >
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />
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

import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

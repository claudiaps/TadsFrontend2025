import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonInfo from "./pages/PokemonInfo";
import Forms from "./pages/Forms";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          element={
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          }
        >
          <Route path="/home/:id" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/pokedex/:name" element={<PokemonInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

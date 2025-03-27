import axios from "axios";
import { useState } from "react";
import "./Pokedex.css";
import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const Pokedex = () => {
  // Variável de estado para armazenar o valor do input
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState();
  const { logout } = useAuth();

  //   Função que irá buscar o Pokémon
  const searchPokemon = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${inputText}`
      );
      setPokemon(data);
      console.log({ data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(pokemon);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      {/* Declara o input e armazena no state o valor digitado */}
      <button onClick={() => logout()}>Log out</button>
      <div className="inputContainer">
        <input
          className="input"
          placeholder="Digite o nome do pokémon"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {/* Botão para disparar a busca do pokémon */}
        <button className="button" onClick={searchPokemon}>
          Buscar
        </button>
      </div>
      <p className="pokemonName">Nome: {pokemon?.name}</p>
      <Link to={`/pokedex/${pokemon?.name}`}>Ver detalhes</Link>
      <img src={pokemon?.sprites?.front_default} className="image" />
    </div>
  );
};

export default Pokedex;

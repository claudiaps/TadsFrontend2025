import axios from "axios";
import { useState } from "react";
import "./Pokedex.css";

const Pokedex = () => {
  // Variável de estado para armazenar o valor do input
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState();

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
      <img src={pokemon?.sprites?.front_default} className="image" />
    </div>
  );
};

export default Pokedex;

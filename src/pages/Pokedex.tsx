import axios from "axios";
import { useState } from "react";

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
    <div>
      {/* Declara o input e armazena no state o valor digitado */}
      <input
        placeholder="Digite o nome do pokémon"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {/* Botão para disparar a busca do pokémon */}
      <button onClick={searchPokemon}>Buscar</button>
      <p>Nome: {pokemon?.name}</p>
      <p>Peso: {pokemon?.weight}</p>
      <img src={pokemon?.sprites?.front_default} />
    </div>
  );
};

export default Pokedex;

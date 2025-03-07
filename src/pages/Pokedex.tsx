import { useState } from "react";

const Pokedex = () => {
  // Variável de estado para armazenar o valor do input
  const [inputText, setInputText] = useState("");

  //   Função que irá buscar o Pokémon
  const searchPokemon = () => {
    console.log(inputText);
  };

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
    </div>
  );
};

export default Pokedex;

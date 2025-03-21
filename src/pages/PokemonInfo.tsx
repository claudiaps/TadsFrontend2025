import { useCallback, useEffect } from "react";
import { useParams } from "react-router";

const PokemonInfo = () => {
  const { name } = useParams();

  const getPokemonInfo = useCallback(async () => {}, []);

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return (
    <div>
      <h1>Pokemon Info - {name}</h1>
    </div>
  );
};

export default PokemonInfo;

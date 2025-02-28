import { useState } from "react";

const Contador = () => {
  const [valorContador, setValorContador] = useState(0);

  const contadorMais1 = () => {
    setValorContador(valorContador + 1);
  };

  const contadorMenos1 = () => {
    setValorContador(valorContador - 1);
  };

  return (
    <div>
      <button onClick={contadorMais1}>+ 1</button>
      <button onClick={contadorMenos1}>- 1</button>
      <p style={{ color: "#f2f" }}>{valorContador}</p>
      {valorContador < 0 ? (
        <p style={{ color: "red" }}>Número negativo</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Contador;

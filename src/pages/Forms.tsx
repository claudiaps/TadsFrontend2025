import { useState } from "react";
import Input from "../components/Input";

const Forms = () => {
  const [inputName, setInputName] = useState<string>("");

  const validateRequired = (value: string) => {
    if (!value) return "Campo obrigatório";
    return undefined;
  };

  return (
    <div>
      <h1>Formulário</h1>
      <Input
        value={inputName}
        onChangeValue={(event) => setInputName(event.target.value)}
        label="Nome"
        validade={validateRequired}
      />
    </div>
  );
};

export default Forms;

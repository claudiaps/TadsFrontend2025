import { useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { useForm } from "react-hook-form";

type PostForm = {
  title: string;
  body: string;
};

const Forms = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputBody, setInputBody] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PostForm>();

  const validateRequired = (value: string) => {
    if (!value) return "Campo obrigatório";
    return undefined;
  };

  const validateLength = (value: string) => {
    if (value.length < 4) return "Digite ao menos 4 caracteres";
    return undefined;
  };

  const validateNumber = (value: string) => {
    if (!Number(value)) return "Digite ao menos 4 caracteres";
    return undefined;
  };

  const createPost = async (data: PostForm) => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: data.title,
        body: data.body,
        userId: 1,
      });
      alert("Post criado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Formulário</h1>
      <Input
        value={inputTitle}
        onChangeValue={(event) => setInputTitle(event.target.value)}
        label="Título"
        validade={validateRequired}
      />
      <Input
        value={inputBody}
        onChangeValue={(event) => setInputBody(event.target.value)}
        label="Conteúdo"
        validade={validateRequired}
      />
      <form onSubmit={handleSubmit(createPost)}>
        <input {...register("title", { minLength: 4 })} placeholder="Titulo" />
        <input
          {...register("body", { required: true })}
          placeholder="Conteúdo"
        />
        <button type="submit">Cadastrar Com Hook Form</button>
      </form>
      <button onClick={createPost}>Cadastrar</button>
    </div>
  );
};

export default Forms;

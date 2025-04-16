import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        username: email,
        password: password,
      });
      const token = response.data.accessToken;
      login(token);
      navigate("/pokedex");
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer login.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Senha"
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;

// const Login = ({ name }: { name: string }) => {
//   const [contador, setContador] = useState(0);

//   useEffect(() => {
//     console.log("Montagem: ", contador);
//     console.log("Nome: ", name);
//   }, []);

//   useEffect(() => {
//     console.log("Atualização: ", contador);
//     return () => {
//       console.log("Desmontagem: ", contador);
//     };
//   }, [contador]);

//   return (
//     <div>
//       <div>Contador: {contador}</div>
//       <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//       <button onClick={() => setContador(contador - 1)}>Decrementar</button>
//     </div>
//   );
// };

// export default Login;

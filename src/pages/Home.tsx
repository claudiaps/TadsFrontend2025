import { Link, useNavigate, useParams } from "react-router";

const Home = () => {
  const navigation = useNavigate();
  const { id, name } = useParams();

  return (
    <div>
      <button onClick={() => navigation(`/`)}>Ir para Login</button>
      <Link to={`/pokedex`} />
      Home - ID: {id}
      Name: {name}
    </div>
  );
};

export default Home;

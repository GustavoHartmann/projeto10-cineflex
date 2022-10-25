import { Link } from "react-router-dom";
import { FilmeContainer } from "./styles";

export default function Filme({ img, titulo, id }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <FilmeContainer data-identifier="movie-outdoor">
        <img src={img} alt={titulo} />
      </FilmeContainer>
    </Link>
  );
}

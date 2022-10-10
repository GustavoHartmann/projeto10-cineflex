import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filme({ img, titulo, id }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <FilmeContainer data-identifier="movie-outdoor">
        <img src={img} alt={titulo} />
      </FilmeContainer>
    </Link>
  );
}

const FilmeContainer = styled.div`
  width: 129px;
  height: 193px;

  background-color: #ffffff;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  margin: 10px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  img {
    width: 90%;
    height: 90%;

    object-fit: cover;
  }
`;

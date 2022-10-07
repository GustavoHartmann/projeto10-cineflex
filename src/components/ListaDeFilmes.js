import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Filme from "./Filme";

export default function ListaDeFilmes() {
  const [filmes, setfilmes] = useState([]);

  useEffect(() => {
    const Url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promise = axios.get(Url);

    promise.then((response) => setfilmes(response.data));

    promise.catch((erro) => console.log(erro));
  }, []);

  return (
    <>
      <h1>Selecione o filme</h1>
      <ListaDeFilmesContainer>
        {filmes.map((f) => (
          <Filme key={f.id} img={f.posterURL} titulo={f.title} id={f.id}/>
        ))}
      </ListaDeFilmesContainer>
    </>
  );
}

const ListaDeFilmesContainer = styled.div`
  width: 100%;

  margin: 0 auto;
  padding-bottom: 40px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

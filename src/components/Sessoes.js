import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FooterContainer from "./Footer";
import Sessao from "./Sessao";

export default function Sessoes() {
  const { filmeId } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    const Url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`;
    const promise = axios.get(Url);

    promise.then((response) => setFilme(response.data));

    promise.catch((erro) => console.log(erro));
  }, []);

  if (filme.days === undefined) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>Selecione o horário</h1>
      <SessoesContainer>
        {filme.days.map((s) => (
          <Sessao key={s.id} sessao={s} />
        ))}
      </SessoesContainer>
      <FooterContainer>
        <img src={filme.posterURL} alt={filme.title} />
        <InfoFilmeContainer>
          <p>{filme.title}</p>
          <p></p>
        </InfoFilmeContainer>
      </FooterContainer>
    </>
  );
}

const SessoesContainer = styled.div`
  width: 100%;

  padding: 0 0 160px 25px;
`;

const InfoFilmeContainer = styled.div`
  margin-left: 10px;

  font-size: 26px;

  color: #293845;
`;

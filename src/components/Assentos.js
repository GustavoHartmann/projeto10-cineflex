import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";
import Footer from "./Footer";

export default function Assentos() {
  const { sessaoId } = useParams();
  const [sessao, setSessao] = useState({});

  useEffect(() => {
    const Url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`;
    const promise = axios.get(Url);

    promise.then((response) => setSessao(response.data));

    promise.catch((erro) => console.log(erro));
  }, []);

  if (sessao.seats === undefined) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <h1>Selecione o(s) assentos(s)</h1>
      <AssentosContainer>
        {sessao.seats.map((a) => (
          <Assento key={a.id} assento={a} />
        ))}
      </AssentosContainer>
      <LegendaAssentosContainer>
        <div>
          <AssentoSelecionadoContainer />
          <p>Selecionado</p>
        </div>
        <div>
          <AssentoDisponivelContainer />
          <p>Disponível</p>
        </div>
        <div>
          <AssentoIndisponivelContainer />
          <p>Indisponível</p>
        </div>
      </LegendaAssentosContainer>
      <FormularioCompradorContainer>
        <form>
          <label htmlFor="name">Nome do comprador</label>
          <input id="name" type="text" placeholder="Digite seu nome..." />
          <label htmlFor="cpf">CPF do comprador</label>
          <input id="cpf" type="text" placeholder="Digite seu CPF..." />
          <button type="submit">Reservar assento(s)</button>
        </form>
      </FormularioCompradorContainer>
      <Footer>
        <img src={sessao.movie.posterURL} alt={sessao.movie.title} />
        <InfoSessãoContainer>
          <p>{sessao.movie.title}</p>
          <p>
            {sessao.day.weekday} - {sessao.name}
          </p>
        </InfoSessãoContainer>
      </Footer>
    </>
  );
}

const AssentosContainer = styled.div`
  width: 100%;

  padding-bottom: 40px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LegendaAssentosContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  div {
    margin: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 13px;

    color: #4e5a65;

    margin-top: 5px;
  }
`;

const AssentoSelecionadoContainer = styled.div`
  width: 26px;
  height: 26px;

  font-size: 11px;

  background-color: #1aae9e;

  border: 1px solid #0e7d71;
  border-radius: 50%;

  margin: 10px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AssentoDisponivelContainer = styled.div`
  width: 26px;
  height: 26px;

  font-size: 11px;

  background-color: #c3cfd9;

  border: 1px solid #808f9d;
  border-radius: 50%;

  margin: 10px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AssentoIndisponivelContainer = styled.div`
  width: 26px;
  height: 26px;

  font-size: 11px;

  background-color: #fbe192;

  border: 1px solid #f7c52b;
  border-radius: 50%;

  margin: 10px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormularioCompradorContainer = styled.div`
  width: 100%;

  margin-top: 20px;

  padding-bottom: 160px;

  form {
    width: 85%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 18px;

    color: #293845;

    margin: 20px 0 5px 0;
  }

  input {
    width: 100%;
    height: 50px;

    font-size: 18px;

    border: 1px solid #d4d4d4;
    border-radius: 3px;

    padding-left: 10px;
  }

  input::placeholder {
    font-style: italic;

    color: #afafaf;
  }

  button {
    width: 60%;
    height: 43px;

    font-size: 18px;

    background-color: #e8833a;
    color: white;
    text-decoration: none;

    border-radius: 3px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 50px auto 0 auto;

    cursor: pointer;
  }
`;

const InfoSessãoContainer = styled.div`
  margin-left: 10px;

  font-size: 26px;

  color: #293845;
`;

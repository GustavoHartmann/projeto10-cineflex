import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Assento from "./Assento";
import Footer from "./Footer";

export default function Assentos({
  sessao,
  setSessao,
  arraySelecionados,
  setArraySelecionados,
  inputNome,
  setInputNome,
  inputCPF,
  setInputCPF,
}) {
  const navigate = useNavigate();
  const { sessaoId } = useParams();

  useEffect(() => {
    const Url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`;
    const promise = axios.get(Url);

    promise.then((response) => setSessao(response.data));

    promise.catch((erro) => alert(erro));
  }, []);

  if (sessao.seats === undefined) {
    return <p>Carregando...</p>;
  }

  function enviarFormulario(e) {
    const Url =
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
    e.preventDefault();
    if (arraySelecionados.length !== 0) {
      const objAssentoSelecionado = sessao.seats.filter((a) =>
        arraySelecionados.includes(a.name)
      );
      const idsAssentosSelecionados = objAssentoSelecionado.map((o) => o.id);
      const promise = axios.post(Url, {
        ids: idsAssentosSelecionados,
        name: inputNome,
        cpf: inputCPF,
      });

      promise.then(() => navigate("/sucesso"));

      promise.catch((erro) => alert(erro));
    } else {
      alert("É necessário escolher pelo menos 1 assento");
    }
  }

  return (
    <>
      <h1>Selecione o(s) assentos(s)</h1>
      <AssentosContainer>
        {sessao.seats.map((a) => (
          <Assento
            key={a.id}
            assento={a}
            arraySelecionados={arraySelecionados}
            setArraySelecionados={setArraySelecionados}
          />
        ))}
      </AssentosContainer>
      <LegendaAssentosContainer>
        <div>
          <AssentoSelecionadoContainer data-identifier="seat-selected-subtitle" />
          <p>Selecionado</p>
        </div>
        <div>
          <AssentoDisponivelContainer data-identifier="seat-available-subtitle" />
          <p>Disponível</p>
        </div>
        <div>
          <AssentoIndisponivelContainer data-identifier="seat-unavailable-subtitle" />
          <p>Indisponível</p>
        </div>
      </LegendaAssentosContainer>
      <FormularioCompradorContainer>
        <form onSubmit={enviarFormulario}>
          <label htmlFor="name">Nome do comprador</label>
          <input
            id="name"
            type="text"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
            placeholder="Digite seu nome..."
            required
            data-identifier="buyer-name-input"
          />
          <label htmlFor="cpf">CPF do comprador</label>
          <input
            id="cpf"
            type="text"
            value={inputCPF}
            onChange={(e) => setInputCPF(e.target.value)}
            placeholder="Digite seu CPF..."
            required
            data-identifier="buyer-cpf-input"
          />
          <button type="submit" data-identifier="reservation-btn">
            Reservar assento(s)
          </button>
        </form>
      </FormularioCompradorContainer>
      <Footer>
        <img
          src={sessao.movie.posterURL}
          alt={sessao.movie.title}
          data-identifier="movie-img-preview"
        />
        <InfoSessãoContainer>
          <p data-identifier="movie-and-session-infos-preview">
            {sessao.movie.title}
          </p>
          <p data-identifier="movie-and-session-infos-preview">
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

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso({
  sessao,
  arraySelecionados,
  inputNome,
  inputCPF,
}) {
  return (
    <SucessoContainer>
      <h1>Pedido feito com sucesso!</h1>
      <InfoSucessoContainer>
        <h2>Filme e sessão</h2>
        <p>{sessao.movie.title}</p>
        <p>
          {sessao.day.date} {sessao.name}
        </p>
      </InfoSucessoContainer>
      <InfoSucessoContainer>
        <h2>Ingresso</h2>
        {arraySelecionados.map((a, index) => (
          <p key={index}>Assento {a}</p>
        ))}
      </InfoSucessoContainer>
      <InfoSucessoContainer>
        <h2>Comprador</h2>
        <p>Nome: {inputNome}</p>
        <p>CPF: {inputCPF}</p>
      </InfoSucessoContainer>
      <Link to={"/"}>
        <button>Voltar para o Home</button>
      </Link>
    </SucessoContainer>
  );
}

const SucessoContainer = styled.div`
  width: 100%;

  h1 {
    font-weight: bold;

    color: #247a6b;
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

    margin: 100px auto 0 auto;

    cursor: pointer;
  }
`;

const InfoSucessoContainer = styled.div`
  width: 100%;

  margin-top: 25px;

  padding-left: 30px;

  p {
    font-size: 22px;

    color: #293845;

    line-height: 25px;
  }
`;

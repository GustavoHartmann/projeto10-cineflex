import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import ListaDeFilmes from "./ListaDeFilmes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import Sucesso from "./Sucesso";
import { useState } from "react";

export default function App() {
  const [sessao, setSessao] = useState({});
  const [arraySelecionados, setArraySelecionados] = useState([]);
  const [inputNome, setInputNome] = useState("");
  const [inputCPF, setInputCPF] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>CINEFLEX</Header>
      <Routes>
        <Route path="/" element={<ListaDeFilmes />} />
        <Route path="/sessoes/:filmeId" element={<Sessoes />} />
        <Route
          path="/assentos/:sessaoId"
          element={
            <Assentos
              sessao={sessao}
              setSessao={setSessao}
              arraySelecionados={arraySelecionados}
              setArraySelecionados={setArraySelecionados}
              inputNome={inputNome}
              setInputNome={setInputNome}
              inputCPF={inputCPF}
              setInputCPF={setInputCPF}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <Sucesso
              sessao={sessao}
              arraySelecionados={arraySelecionados}
              inputNome={inputNome}
              inputCPF={inputCPF}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const Header = styled.header`
  width: 100%;
  height: 67px;

  font-size: 34px;

  color: #e8833a;
  background-color: #c3cfd9;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

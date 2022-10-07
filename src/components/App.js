import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import ListaDeFilmes from "./ListaDeFilmes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessoes from "./Sessoes";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header>CINEFLEX</Header>
      <Routes>
        <Route path="/" element={<ListaDeFilmes />} />
        <Route path="/sessoes/:filmeId" element={<Sessoes />} />
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

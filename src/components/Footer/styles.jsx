import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 120px;

  background-color: #c3cfd9;

  padding-left: 15px;

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;

  img {
    // TODO: deixar os tamanhos fixos
    width: 20%;
    height: 80%;

    object-fit: cover;
  }
`;

export const InfoFilmeContainer = styled.div`
  margin-left: 10px;

  font-size: 26px;

  color: #293845;
`;

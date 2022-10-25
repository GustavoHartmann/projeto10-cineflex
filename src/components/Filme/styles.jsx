import styled from "styled-components";

export const FilmeContainer = styled.div`
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

  &:hover {
    filter: brightness(0.8);
    transform: scale(1.1);
  }

  img {
    width: 90%;
    height: 90%;

    object-fit: cover;
  }
`;

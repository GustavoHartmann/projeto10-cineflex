import styled from "styled-components";

export default function Assento({ assento }) {
  return (
    <AssentoContainer isAvailable={assento.isAvailable}>
      {assento.name}
    </AssentoContainer>
  );
}

const AssentoContainer = styled.div`
  width: 26px;
  height: 26px;

  font-size: 11px;

  background-color: ${(props) => (props.isAvailable === true ? "#C3CFD9" : "#FBE192")};

  border: 1px solid ${(props) => (props.isAvailable === true ? "#808f9d" : "#F7C52B")};
  border-radius: 50%;

  margin: 10px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

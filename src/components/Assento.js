import styled from "styled-components";

export default function Assento({
  assento,
  arraySelecionados,
  setArraySelecionados,
}) {
  function selecionarAssento(e) {
    if (assento.isAvailable === true) {
      if (arraySelecionados.includes(e.target.innerText)) {
        const novoArray = arraySelecionados.filter(
          (a) => a !== e.target.innerText
        );
        setArraySelecionados(novoArray);
      } else {
        setArraySelecionados([...arraySelecionados, e.target.innerText]);
      }
    } else {
      alert("Esse assento não está disponível");
    }
  }

  return (
    <AssentoContainer
      isAvailable={assento.isAvailable}
      isSelected={arraySelecionados.includes(assento.name) ? true : false}
      onClick={selecionarAssento}
    >
      {assento.name}
    </AssentoContainer>
  );
}

const AssentoContainer = styled.div`
  width: 26px;
  height: 26px;

  font-size: 11px;

  background-color: ${(props) =>
    props.isAvailable === true
      ? props.isSelected === true
        ? "#1AAE9E"
        : "#C3CFD9"
      : "#FBE192"};

  border: 1px solid
    ${(props) =>
      props.isAvailable === true
        ? props.isSelected === true
          ? "#0E7D71"
          : "#808f9d"
        : "#F7C52B"};
  border-radius: 50%;

  margin: 10px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

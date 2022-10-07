import styled from "styled-components";

export default function Sessao({ sessao }) {
  return (
    <>
      <SessaoContainer>
        <h3>
          {sessao.weekday} - {sessao.date}
        </h3>
        <ListaHorariosContainer>
          {sessao.showtimes.map((h) => (
            <HorarioContainer key={h.id}>{h.name}</HorarioContainer>
          ))}
        </ListaHorariosContainer>
      </SessaoContainer>
    </>
  );
}

const SessaoContainer = styled.div`
  width: 100%;
  height: 100px;

  margin-bottom: 25px;
`;

const ListaHorariosContainer = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  align-items: center;
`;

const HorarioContainer = styled.div`
  width: 83px;
  height: 43px;

  margin-right: 10px;

  background-color: #e8833a;
  color: white;

  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

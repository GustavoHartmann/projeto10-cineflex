import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sessao({ sessao }) {
  return (
    <>
      <SessaoContainer>
        <h3 data-identifier="session-date">
          {sessao.weekday} - {sessao.date}
        </h3>
        <ListaHorariosContainer>
          {sessao.showtimes.map((h) => (
            <Link key={h.id} to={`/assentos/${h.id}`}>
              <HorarioContainer data-identifier="hour-minute-btn">
                {h.name}
              </HorarioContainer>
            </Link>
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

const HorarioContainer = styled.button`
  width: 83px;
  height: 43px;

  font-size: 18px;

  margin-right: 10px;

  background-color: #e8833a;
  color: white;
  text-decoration: none;

  border-radius: 3px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

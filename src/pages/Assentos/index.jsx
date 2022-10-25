import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Assento from "../../components/Assento";
import Footer from "../../components/Footer";
import { getSeatsBySessionId, reservarAssento } from "../../services/api";
import {
  AssentoDisponivelContainer,
  AssentoIndisponivelContainer,
  AssentoSelecionadoContainer,
  AssentosContainer,
  FormularioCompradorContainer,
  InfoSessãoContainer,
  LegendaAssentosContainer,
} from "./styles";

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
    const promise = getSeatsBySessionId(sessaoId);

    promise.then((response) => setSessao(response.data));

    promise.catch((erro) => alert(erro));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (sessao.seats === undefined) {
    return <p>Carregando...</p>;
  }

  function enviarFormulario(e) {
    e.preventDefault();
    if (arraySelecionados.length !== 0) {
      const objAssentoSelecionado = sessao.seats.filter((a) =>
        arraySelecionados.includes(a.name)
      );
      const idsAssentosSelecionados = objAssentoSelecionado.map((o) => o.id);
      const data = {
        ids: idsAssentosSelecionados,
        name: inputNome,
        cpf: inputCPF,
      };
      const promise = reservarAssento(data);
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

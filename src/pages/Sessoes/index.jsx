import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Sessao from "../../components/Sessao";
import { getSessionByMovieId } from "../../services/api";
import { SessoesContainer } from "./styles";

export default function Sessoes() {
  const { filmeId } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    const promise = getSessionByMovieId(filmeId);

    promise.then((response) => setFilme(response.data));

    promise.catch((erro) => alert(erro));
  }, []);

  if (filme.days === undefined) {
    // TODO: Pesquisar algumas libs para loading
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>Selecione o horário</h1>
      <SessoesContainer>
        {filme.days.map((s) => (
          <Sessao key={s.id} sessao={s} />
        ))}
      </SessoesContainer>
      <Footer posterURL={filme.posterURL} title={filme.title} />
    </>
  );
}

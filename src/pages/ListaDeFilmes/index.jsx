import { useEffect, useState } from "react";
import Filme from "../../components/Filme";
import { getMovies } from "../../services/api";
import { ListaDeFilmesContainer } from "./styles";

export default function ListaDeFilmes() {
  const [filmes, setfilmes] = useState([]);

  useEffect(() => {
    const promise = getMovies();

    promise.then((response) => setfilmes(response.data));

    promise.catch((erro) => alert(erro));
  }, []);

  return (
    <>
      <h1>Selecione o filme</h1>
      <ListaDeFilmesContainer>
        {filmes.map((f) => (
          <Filme key={f.id} img={f.posterURL} titulo={f.title} id={f.id} />
        ))}
      </ListaDeFilmesContainer>
    </>
  );
}

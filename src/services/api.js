import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v5/cineflex";

const api = axios.create({
  baseURL: BASE_URL,
});

export function getMovies() {
  return api.get("/movies");
}

export function getSessionByMovieId(movieId) {
  return api.get(`/movies/${movieId}/showtimes`);
}

export function getSeatsBySessionId(sessionId) {
  const promise = api.get(`showtimes/${sessionId}/seats`);
  return promise;
}

export function reservarAssento(data) {
  const promise = api.post("/seats/book-many", data);
  return promise;
}

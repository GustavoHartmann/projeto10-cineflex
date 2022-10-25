import { FooterContainer, InfoFilmeContainer } from "./styles";

export default function Footer({ posterURL, title }) {
  return (
    <FooterContainer>
      <img src={posterURL} alt={title} data-identifier="movie-img-preview" />
      <InfoFilmeContainer>
        <p data-identifier="movie-and-session-infos-preview">{title}</p>
      </InfoFilmeContainer>
    </FooterContainer>
  );
}

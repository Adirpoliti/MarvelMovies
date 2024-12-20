import { CardCoverStyle, CardStyled } from "../Styles/cardStyle";

interface CardProp {
  movieName?: string;
  movieImgUrl: string;
  movieReleaseYear?: number;
  movieLength?: string;
  movieTitles?: string[];
  movieDescription?: string;
  movieRateing?: number;
  movieTrailer?: string;
}

export const MovieCard = ({
  movieImgUrl,
  movieName,
  movieReleaseYear,
}: CardProp) => {
  return (
    <CardStyled imgurl={movieImgUrl}>
      <CardCoverStyle>
        {movieName} <br /> {movieReleaseYear}
      </CardCoverStyle>
    </CardStyled>
  );
};

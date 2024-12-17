import { CardCoverStyle, CardStyled } from '../Styles/cardStyle';

interface CardProp {
  movieId?: string;
  movieImgUrl?: string;
  movieName?: string;
  movieReleaseYear?: string;
  movieLength?: string;
  movieTitles?: string[];
  movieDescription?: string;
}

export const MovieCard = ({ movieImgUrl, movieName, movieReleaseYear }: CardProp) => {
  return (
    <CardStyled style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w200${movieImgUrl})`,
    }}>
      {/* <img src={movieImgUrl}/> */}

      <CardCoverStyle>{movieName} <br /> {movieReleaseYear}</CardCoverStyle>
    </CardStyled>
  )
}
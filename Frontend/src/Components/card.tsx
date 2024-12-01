import { Box, CardContent } from '@mui/joy'
import { CardCoverStyle, CardStyled } from '../Styles/cardStyle';

interface CardProp {
  movieId?: string;
  movieImgUrl?: string;
  movieName?: string;
  movieReleaseYear?: string;
  movieLength?: string;
  movieTitles?: string[];
  movieBudget?: string;
  movieBoxOffice?: string;
  movieDescription?: string;
}

export const MovieCard = ({ movieImgUrl, movieName, movieBoxOffice, movieBudget, movieDescription, movieLength, movieReleaseYear, movieTitles }: CardProp) => {
  return (
    <CardStyled >
      {/* <img src={movieImgUrl}/> */}

      <CardCoverStyle>jdvndskhvnsdkjvnasjlvnasjln</CardCoverStyle>
    </CardStyled>
  )
}

import {
  CardContainer,
  CardChipContainer,
  CardInfoBox,
  InnerCardContainer,
  MovieTitle,
  MovieDescription,
  ColoredChip,
  // RatioBox,
} from "../Styles/cardStyle";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

interface CardProp {
  movieName: string;
  movieImgUrl: string;
  movieReleaseYear: number;
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
  movieDescription,
  movieRateing,
}: CardProp) => {

  return (
    <CardContainer imgurl={movieImgUrl}>
      <InnerCardContainer>
        {/* <RatioBox>
          <AspectRatioIcon htmlColor="#fff"/>
        </RatioBox> */}
        <CardInfoBox>
          <MovieTitle>{movieName}</MovieTitle>
          <MovieDescription>{movieDescription}</MovieDescription>
        </CardInfoBox>

        <CardChipContainer>
          <ColoredChip
            label={movieRateing}
            color="info"
            size="small"
            icon={<StarIcon />}
          />
          <ColoredChip
            label={movieReleaseYear}
            color="info"
            size="small"
            icon={<CalendarTodayIcon />}
          />
        </CardChipContainer>
      </InnerCardContainer>
    </CardContainer>
  );
};

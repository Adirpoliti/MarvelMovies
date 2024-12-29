import {
  CardContainer,
  CardChipContainer,
  CardInfoBox,
  InnerCardContainer,
  MovieTitle,
  MovieDescription,
  ColoredChip,
} from "../Styles/cardStyle";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState } from "react";

interface CardProp {
  movieName: string;
  movieImgUrl: string;
  movieReleaseYear: number;
  movieLength?: string;
  movieTitles?: string[];
  movieDescription?: string;
  movieRateing?: number;
  movieTrailer?: string;
  onClick?: () => void;
}

export const MovieCard = ({
  movieName,
  movieImgUrl,
  movieReleaseYear,
  movieLength,
  movieTitles,
  movieDescription,
  movieRateing,
  movieTrailer,
  onClick
}: CardProp) => {
  return (
    <CardContainer imgurl={movieImgUrl}>
      <InnerCardContainer>
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
          <ColoredChip
            label="more info"
            color="info"
            size="small"
            icon={<OpenInNewIcon />}
            onClick={onClick}
          />
        </CardChipContainer>
      </InnerCardContainer>
    </CardContainer>
  );
};

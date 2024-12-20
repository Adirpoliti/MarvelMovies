import styled from "@emotion/styled";
import { Card, CardCover } from "@mui/joy";

interface StyledCardProps {
  imgurl: string;
}

export const CardStyled = styled(Card)(({ imgurl }: StyledCardProps) => ({
  height: "300px",
  width: "200px",
  backgroundImage: `url(${imgurl})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  flexShrink: 0,
  // filter: "blur(5px)",
}));

export const CardCoverStyle = styled(CardCover)({
  opacity: 0,
  ":hover": {
    opacity: 1,
  },
});

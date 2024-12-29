import styled from "@emotion/styled";
import { Box, Chip, Typography } from "@mui/material";

interface StyledCardProps {
  imgurl: string;
}

export const CardContainer = styled(Box)(({ imgurl }: StyledCardProps) => ({
  height: "300px",
  width: "200px",
  backgroundImage: `url(${imgurl})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  flexShrink: 0,
  borderRadius: "8px",
  display: "flex",
  boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.37)"
}));

export const InnerCardContainer = styled(Box)({
  opacity: 0,
  ":hover": {
    opacity: 1,
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(2px)",
    justifyContent: "space-between",
    padding: "20px",
  },
});

export const CardInfoBox = styled(Box)({
  color: "white",
});

export const MovieTitle = styled(Typography)({
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "#474747 3px 2px 5px",
  marginBottom: "5px",
});

export const MovieDescription = styled(Typography)({
  fontSize: "0.9rem",
  textShadow: "#474747 3px 2px 5px",
  textAlign: "center",
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
});

export const CardChipContainer = styled(Box)({
  gap: "10px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const ColoredChip = styled(Chip)({
  backgroundColor: "#ed1d24",
  "&:nth-of-type(3):hover": {
    backgroundColor: "#b5000a",
    cursor: "pointer",
  }
})
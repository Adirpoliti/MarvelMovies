import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MoviesBox = styled(Box)({
  width: "80vw",
  height: "360px",
  display: "flex",
  justifyContent: "flex-start",
  overflowX: "auto",
  overflowY: "hidden",
  gap: "15px",
  marginTop: "60px",
  alignItems: "center",
  "&::-webkit-scrollbar": {
    height: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "100vw",
    margin: "0 10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#ed1d24",
    borderRadius: "100vw",
    "&:hover": {
      background: "#c71016",
    },
  },
});

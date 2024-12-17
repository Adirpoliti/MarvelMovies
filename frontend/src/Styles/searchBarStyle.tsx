import styled from "@emotion/styled";
import { colors } from "@mui/joy";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export const SearchBarContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  gap: "5px",
});

export const SearchBarStyled = styled(TextField)({
  ".MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInput-underline::before": {
    borderColor: "white",
  },
  "& .MuiInput-underline::after": {
    borderColor: "black",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderColor: "white",
  },
});

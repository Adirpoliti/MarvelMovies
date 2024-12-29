import styled from "@emotion/styled";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export const SearchBarContainer = styled("form")({
  display: "flex",
  alignItems: "flex-end",
  gap: "5px",
});

export const SearchBarStyled = styled(TextField)({
  ".MuiInputBase-input": {
    color: "white",
    "&:-webkit-autofill, -webkit-autofill:hover, -webkit-autofill:focus, -webkit-autofill:active":
      {
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "#ffffff",
        transition: "background-color 5000s ease-in-out 0s",
        boxShadow: "inset 0 0 20px 20px #23232329",
      },
  },
  "& .MuiInput-underline::before": {
    borderColor: "white",
  },
  "& .MuiInput-underline::after": {
    borderColor: "#ed1d24",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderColor: "white",
  },
});

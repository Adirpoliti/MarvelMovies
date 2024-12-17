import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MoviesBox = styled(Box)({
    width: "80vw", 
    height: "360px", 
    display:"flex",
    justifyContent: "flex-start",
    overflowX: "auto",
    overflowY: "hidden",
    gap: "15px"
})
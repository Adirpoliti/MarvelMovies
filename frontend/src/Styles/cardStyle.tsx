import styled from "@emotion/styled";
import { Card, CardCover } from "@mui/joy";


export const CardStyled = styled(Card)({
    height: "300px",
    width: "200px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexShrink: 0,
    filter: "blur(5px)",
})


export const CardCoverStyle = styled(CardCover)({
    opacity: 0,
    
    ":hover": {
        opacity: 1,  
    }
})
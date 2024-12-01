import styled from "@emotion/styled";
import { Card, CardCover } from "@mui/joy";


export const CardStyled = styled(Card)({
    height: "300px",
    width: "200px",
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HdncADmyEtfUZImN0yDNkaB9M_HIt-Ng5w&s')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
})

export const CardCoverStyle = styled(CardCover)({
    opacity: 0,
    ":hover" : {
        opacity: 1,
    }
})
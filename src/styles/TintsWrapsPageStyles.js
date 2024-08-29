import styled from "styled-components";
import backGroundImage from "../Images/grunge-gray-concrete-textured-background.jpg";


export const TintsWrapsStyled = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: url(${backGroundImage});
    background-blend-mode: lighten;
`

export const InfoSection = styled.section`


`;

export const InfoWrapper = styled.div`
    width: 100%;
    

`;

export const InfoContainer = styled.div`
    width: fit-content;
    margin: 1em 1.5em 2.5em 1.5em;

`;

export const TitleCardContainer = styled.div`
    width: 100%;
    text-align: left;

    h1{
        text-decoration: underline;
        font-size: 70px;
        margin: 0;

    }
`;

export const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #212930;
    box-shadow: 8px 8px #000000;;

    p{
        color: #FFFFFF;
        text-align: left;
        margin: 1em;

    }
`
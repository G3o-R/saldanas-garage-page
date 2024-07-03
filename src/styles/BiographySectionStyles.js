import styled from "styled-components";

export const BiographyContainer = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #101010;
    padding:30px 0px 30px 0px;

    `;

export const PortraitImageContainer = styled.div`
    margin: 0px 0px 0px 20px ;
    display: flex;
    justify-content: center;
    align-content:center;
    align-items: center;
    overflow: hidden;
    width: auto;
    height: 100%;
    `;

export const PortraitImage = styled.img`
    height: 120%;
    object-fit: cover;
    width:auto;
    aspect-ratio:1/3;
`;

export const BiographyWrapper = styled.div`
    color: white;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em;
    text-align: left;
`;

export const BioText = styled.h1`
    font-size: 30px;

`;

export const TextStyles = styled.span`
    font-weight: 900;
`;
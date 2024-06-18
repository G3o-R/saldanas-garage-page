import styled from "styled-components";

export const BiographyContainer = styled.div`
    width: 100%;
    height: 650px;
    display: flex;
    flex-direction: row;
    align-content: center;

`;

export const PortraitImageContainer = styled.div`
    overflow: hidden;
    aspect-ratio: 1/5;
    width: 12.5em;
    `;

export const PortraitImage = styled.img`
    height:100%;
    object-fit: contain;
    /* width: 100%; */
`;

export const Biography = styled.div`
    color: white;

`;
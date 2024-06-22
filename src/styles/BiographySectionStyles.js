import styled from "styled-components";

export const BiographyContainer = styled.div`
    width: 100%;
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const PortraitImageContainer = styled.div`
    margin: 0px 0px 0px 20px ;
    display: flex;
    justify-content: center;
    align-content:center;
    align-items: center;
    overflow: hidden;
    width: 13.5em;
    height: 100%;
`;

export const PortraitImage = styled.img`
    height: 100%;
    object-fit: contain;
`;

export const BiographyWrapper = styled.div`
    color: white;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em;
    text-align: center;
`;

// HeroSectionStyles.js
import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
`;

export const HeroContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    background-color: #0F1D29;
`;

export const ImageWrapper = styled.div`
    flex: 1;
    overflow: hidden;
    position: relative;
    height: 100%;
    margin-left: -10%;
`;

export const ImageContainer = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
        z-index: 1;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    display: block;
    filter: grayscale(20%) contrast(1.2);
`;

export const TextContainer = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    right: 0;
    width: 75%;
    background: rgba(15, 29, 41, 0.9);
    backdrop-filter: blur(10px); 
    clip-path: polygon(45% 0%, 100% 0%, 100% 100%, 0% 100%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    padding: 2rem;
`;

export const TextWrapper = styled.div`
    text-align: center;
    width: 100%;
    max-width: 600px;
    padding: 1rem;
`;

export const HeroText = styled.h1`
    font-size: 4rem;
    color: #f7f7f7;
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* animation: fadeIn 2s ease-in-out;  */
    margin: 0;
`;
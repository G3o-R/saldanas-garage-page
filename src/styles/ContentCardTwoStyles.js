import styled from "styled-components";

export const CardWrapper = styled.div`
    max-width: 32em;
    width: 100%;
    display: flex;
    height: 36em;
    `;

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const ImageWrapper = styled.div`
    background-color: #202020;
    padding: 12px;
    border-radius: 24px;
    width: fit-content;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const Imagecontainer = styled.div`
    border-radius: 12px;
    overflow: hidden;
    
    &.landscape {
        display: flex;
        align-items: center;
        justify-items: space-between;
        height: 14em;
        max-width: 32em;
        
        img {
            width: 100%;
            height: auto;
        }
    }

    &.portrait{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32em;
        max-width: 14em;

        img {
            height: 100%;
            object-fit: cover;
        }

    }
`;

export const TextWrapper = styled.div`
    padding: 16px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    `;

export const TextContainer = styled.div`
    background: rgba(0, 0, 0, 0.7);
    color: #fff; 
    padding: 12px;
    border-radius: 12px;
`;

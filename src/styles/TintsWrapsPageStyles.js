import styled from 'styled-components';

export const TintsWrapsStyled = styled.div`
    background-color: #202020;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    `;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    padding: 50px 0;
    margin: 20px 0;
    border-radius: 10px;
    `;

export const GalleryWaveWrapper = styled.div`
    width: 100%;
    position: relative;
    background: #101010;
    padding-bottom: 30px;
    `;

export const GalleryWaveContainer = styled.div`
    overflow-y: hidden;
    position: relative;
    z-index: 0;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.8),
        rgba(245, 245, 245, 0.9)
    );
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.numofimagesperrow}, 1fr);
    gap: 10px;
`;

export const ImgWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }
`;

export const ImgContainer = styled.div`
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        border-radius: 8px;
        transition: transform 0.3s ease-in-out;
    }

    &.active img {
        transform: scale(1.1);
        filter: brightness(0.8); /* Darker overlay effect */
    }
`;

export const HeaderContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 30px;
    z-index: 2;
`;

export const StyledHeader = styled.h1`
    font-size: 4rem;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    width: 100%;
    margin: 0em 0rem 0rem 1em;
`;

export const CardsWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    background-color: #101010;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
    max-width: 400px;
    width: 100%;

    @media screen and (min-width: 800px){
        flex-direction: row;
        width: 100;
        max-width: 100%;
    }
`;

export const StyledFlexColumnWrapper = styled.div`
    background-color: #1D242B;
    width: 100%;
    max-width: 21rem;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
        color: #f7f7f7;
        line-height: 2;
        font-size: 1rem;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        svg {
            margin-right: 10px;
            /* width: 24px; */
            height: 52px;
            fill: #f7f7f7;
            font-weight: 700;
        }
    }
`;

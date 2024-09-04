import styled from 'styled-components';

export const TintsWrapsStyled = styled.div`
    background: #1D242B;
    padding: 50px 0;
    overflow-x: hidden;
    min-height: 100vh;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    background-color: #212930;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    border-radius: 10px;
`;

export const GalleryWaveWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;
    position: relative;
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

export const ShadowOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
    );
    z-index: 1;
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const DontKnowWhatToCallThisYetWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const DontKnowWhatToCallThisYetContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #101010;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
    max-width: 1200px;
    width: 100%;
`;

export const StyledFlexColumnWrapper = styled.div`
    background-color: #1D242B;
    width: auto;
    padding: 25px;
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

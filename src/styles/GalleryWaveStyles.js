import styled from "styled-components";

export const GalleryWaveContainer = styled.div`
    overflow-y: hidden;
    position: relative;
`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.numofimagesperrow}, 1fr);
    gap: 2px;
`;

export const ImgWrapper = styled.div`
    position: relative;
    display: contents;
`;

export const ImgContainer = styled.div`
    object-fit: cover;
    aspect-ratio: 1/1;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        transition: transform 0.5s ease, filter 0.5s ease;
    }

    &.active {
        img {
            transform: scale(1.1);
            filter: brightness(0.7); /* Apply darker tint */
        }

        /* Add an overlay for the darker tint effect */
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3); /* Darker overlay */
            pointer-events: none;
        }
    }
`;

export const ShadowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
        to top right, 
        rgba(0, 0, 0, 0.6) 10%,  /* Darker in the bottom-right corner */
        rgba(0, 0, 0, 0.2) 40%,  /* Rapid transition to lighter */
        rgba(0, 0, 0, 0.0) 100%  /* Fully transparent in the top-left corner */
    );
`;
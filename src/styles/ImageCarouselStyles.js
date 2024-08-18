import styled, {keyframes} from 'styled-components';

const textTransition = keyframes`
  0% { opacity: 0; transform: translateX(100%); }
  10% { opacity: 1; transform: translateX(0); }
  40% { opacity: 1; transform: translateX(0); }
  50% { opacity: 0; transform: translateX(-100%); }
  100% { opacity: 0; transform: translateX(-100%); }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
  cursor: grab;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: max-content;
  height: 100%;
`;

export const DisplayWrapper = styled.div`
  display: inline-block;
  position: relative;
  aspect-ratio: 5 / 3;
  width: 100%;
  height: auto;
  max-height: 100%;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const CarouselTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10em;
  transform: translate(-40%, -50%);
  width: 24em;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 2;
`;

export const CarouselTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CarouselText = styled.h1`
  /* animation: ${textTransition} 1500ms linear infinite; */
  font-size: 60px;
  font-family: Arial, Helvetica, sans-serif;
  color: #f7f7f7;
  margin: 0;
  text-align: left; /* Align text to the left */

  @media screen and (min-width: 480px) {
    font-size: 50px;
  }
  `;
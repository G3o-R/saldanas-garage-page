import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
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
  max-height: 240px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 240px;
  object-fit: cover;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const CarouselTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* Ensures text is not interactive */
  z-index: 2;
`;

export const CarouselText = styled.h1`
  font-size: 40px;
  color: #F7F7F7;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: 50px;
  }
`;

import styled, {keyframes} from 'styled-components';

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  aspect-ratio: 4/5;

  @media screen and (min-width: 1600px){
    aspect-ratio: 8/3;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const DisplayWrapper = styled.div`
  aspect-ratio: 4/5;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1600px){
    aspect-ratio: 8/3;
  }
`;

export const CarouselImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.active {
    animation: ${zoomIn} 10s ease-in-out forwards;
  }
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

export const CarouselText = styled.h1`
  position: absolute;
  font-size: 40px;
  color: #F7F7F7;
  padding-left: 1em;
  z-index: 2;
  margin: 0;

  @media screen and (min-width: 480px){
    font-size: 50px;
}
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 2;
  padding: 5px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

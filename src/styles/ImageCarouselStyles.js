import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  aspect-ratio: 5/3;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  `;

export const DisplayWrapper = styled.div`
  aspect-ratio: 5/3;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CarouselImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CarouselText = styled.h1`
  position: absolute;
  /* bottom: 80px; */
  left: 20px;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1;
  margin: 0;
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
  z-index: 1;
  padding: 5px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

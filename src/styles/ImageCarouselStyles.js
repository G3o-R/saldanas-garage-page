import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  /* width: 100%; */
  margin: auto;
  overflow: hidden;
  aspect-ratio: 5/3;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const CarouselImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  /* height:auto; */
  object-fit: cover;
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

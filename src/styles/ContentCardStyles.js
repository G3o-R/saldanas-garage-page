import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const CardStyles = styled.div`
  display: none;
  width: 400px;
  height: 200px;
  color: white;
  align-items: center;
  margin: 20px 0;
  padding: 10px 0;

  &.left.active {
    background: linear-gradient(130deg, #1D1D1D 65%, #4C5157 35%);

    display: flex;
    flex-direction: row;
    margin-right: auto;
    animation: ${slideInLeft} 850ms forwards;

    h4 {
      animation: ${slideInLeft} 750ms 750ms forwards;
      opacity: 0;
    }

    p {
      animation: ${slideInLeft} 500ms 1000ms forwards;
      opacity: 0;
    }
  }

  &.right.active {
      background: linear-gradient(130deg, #4C5157 45%,  #1D1D1D 20%);

    display: flex;
    flex-direction: row-reverse;
    margin-left: auto;
    animation: ${slideInRight} 850ms forwards;

    h4 {
      animation: ${slideInRight} 750ms 750ms forwards;
      opacity: 0;
    }

    p {
      animation: ${slideInRight} 500ms 1000ms forwards;
      opacity: 0;
    }
  }

  h4, p {
    width: 100%;
  }

  &.inactive {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 20px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  object-fit:cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: linear-gradient(to top right, transparent 50%, #000 50%);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: linear-gradient(to bottom right, transparent 50%, #000 50%);
  }

  &.left:after {
    display: none;
  }

  &.right:before {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

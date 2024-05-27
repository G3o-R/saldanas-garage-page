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
  width: 20rem;
  background-color: transparent;
  color: white;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 10px 0;

  &.left.active {
    display: flex;
    margin-right: auto;
    animation: ${slideInLeft} 1s forwards;

    h4 {
      animation: ${slideInLeft} 1100ms 750ms forwards;
      opacity: 0;
    }

    p {
      animation: ${slideInLeft} 1200ms 1250ms forwards;
      opacity: 0;
    }
  }

  &.right.active {
    display: flex;
    margin-left: auto;
    animation: ${slideInRight} 1s forwards;

    h4 {
      animation: ${slideInRight} 1100ms 750ms forwards;
      opacity: 0;
    }

    p {
      animation: ${slideInRight} 1200ms 1250ms forwards;
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
  margin: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

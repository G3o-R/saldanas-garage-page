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
  display:none;
  width: 20rem;
  background-color: transparent;
  color: white;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px 20px 0px;
  padding: 10px 0px 10px 0px ;

  &.left.active {
    display: flex;
    margin-right: auto;
    animation: ${slideInLeft} 2s forwards;
  }

  &.right.active {
    display: flex;
    margin-left: auto;
    animation: ${slideInRight} 2s forwards;
  }

  &.inactive {
    display: none;
  }

  h4, p {
    margin-top: 10px;
    text-align: center;
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

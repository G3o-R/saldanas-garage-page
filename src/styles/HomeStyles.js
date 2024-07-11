import styled, { keyframes } from "styled-components";
import backGroundImage from "../Images/grunge-gray-concrete-textured-background.jpg";

const bobble = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const HomePage = styled.div`
  background-image: url(${backGroundImage}), linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  background-blend-mode: lighten;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
`;

export const LogoContainer = styled.div`
  margin-top: 15rem;
  width: 20rem;
  aspect-ratio: 1 / 1;
  border: 10px solid #C0C0C0;
  border-radius: 50%;
  overflow: hidden;

  &.true {
    animation: ${bobble} 2s ease-in-out infinite;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
  margin: 4rem 0rem 4rem 0rem;

  @media screen and (min-width: 650px) {
    width: 650px;
  }

  @media screen {
    max-width: 950px;
    /* width:900px; */
    width:100%;
  }
`;

export const ReviewsContainer = styled.div`
  margin: 4em 0em 4em 0em;
  display: flex;
  flex-direction: row;
  background-color: #101010;
  overflow-x: auto;
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

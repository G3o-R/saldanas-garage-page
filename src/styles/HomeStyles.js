import styled, { keyframes } from "styled-components";
import backGroundImage from "../Images/grunge-gray-concrete-textured-background.jpg";
// import backGroundImage from "../Images/vecteezy_free-metal-texture-vector_110348.jpg"

const bobble = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const HomePage = styled.div`
  position: relative;
  /* background-color: rgba(0, 0, 128); */
  background-image: url(${backGroundImage});
  /* background-repeat: no-repeat; */
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
  margin: 4rem 0rem 55rem 0rem;

  @media screen and (min-width: 650px) {
    width: 650px;
  }

  @media screen {
    max-width: 950px;
    width:100%;
  }
`;

export const ReviewsContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  margin: 0em 0em 27em 0em;
  display: flex;
  gap: 15px;
  flex-direction: row;
  background: linear-gradient(to bottom, transparent 60%, black 40%);
  overflow: visible;
  overflow-x: auto;
  width: 100%;
  height:700px;
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
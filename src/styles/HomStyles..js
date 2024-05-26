import styled, { keyframes } from "styled-components";

const bobble = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const HomePage = styled.div`
  background: linear-gradient(145deg, #303030, #030303);
  width: 100vw;
  height: 100vh;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
`;

export const LogoContainer = styled.div`
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

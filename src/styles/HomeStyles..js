import styled, { keyframes } from "styled-components";

const bobble = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const HomePage = styled.div`
  overflow-y: scroll;
  background: linear-gradient(145deg, #303030, #030303);
  width: 100vw;
  /* height: 100; */
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-top: 22rem;
`;
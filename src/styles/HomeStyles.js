import styled, { keyframes } from "styled-components";
import backGroundImage from "../Images/grunge-gray-concrete-textured-background.jpg";
// import backGroundImage from "../Images/vecteezy_free-metal-texture-vector_110348.jpg"
import LogoJpg from "../Images/saldanas-garage-logo.jpg"


const bobble = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const HomePage = styled.div`
  position: relative;
  background-color: #0a0a0a;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
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
// don't forget to mess with media queries here so that it looks good with the images
export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
  margin: 4rem 0rem 0rem 0rem;
  background: linear-gradient(to bottom, #0a0a0a 99%, #adadad 100%);


  .swiper{
    height: 100%;
    width: 100%;
    
  }
  

  @media screen and (min-width: 650px) {
    max-width: 850px;
  }

  @media screen and (min-width: 950px){
    max-width: 1650px;
  }

  @media screen and (min-width: 1650px){
    flex-direction: row;
  }
`;

export const ReviewsContainer = styled.div`
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
  height:600px;
  padding: 1rem 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: #bcbfc1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d3d4d6;
  }
`;
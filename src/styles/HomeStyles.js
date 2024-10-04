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
  padding: 3rem 0rem 0rem 0rem;
  background: linear-gradient(to bottom, #0a0a0a 99%, #adadad 100%);

  .try-swiping{
    margin: 0;
    color: #333333;
    font-family: Sanchez;
  }
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

export const SwiperOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 10;
  transition: box-shadow 0.5s ease-in-out;    
  
  @media screen and (max-width: 768px) {
    &.glow-right{
      box-shadow: inset -20px -20px 20px rgba(200, 200, 200, 0.1);
      /* border-right: 1px solid grey; */
      
    }
    
    &.glow-left {
      box-shadow: inset 20px -20px 20px rgba(255, 255, 255, 0.1);
    }
    
    &.glow {
      box-shadow: inset 20px -20px 20px rgba(255, 255, 255, 0.1),
      inset -20px -20px 20px rgba(255, 255, 255, 0.1);
    }
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
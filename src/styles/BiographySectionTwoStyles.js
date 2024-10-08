import styled from "styled-components";

export const BiographySectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BiographySectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  /* background: linear-gradient(to bottom, #0a0a0a, #333333); */
  
  @media screen and (min-width: 750px) {
    flex-direction: row;
    /* background: linear-gradient(to right,  #0a0a0a, 80%, #333333); */
    height: 540px;

    }
`;

export const ImageContainer = styled.div`
  width: 70%;
  max-width: 300px;
  height: auto;
  margin: 15px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  /* Blue Tint Overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #0d192b80 5%, #00000000 ); /* Hexadecimal form */
    border-radius: 50%;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    position: relative;
  }
`;

export const TextBoxWrapper = styled.div`
  width: 80%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBoxContainer = styled.div`
  color: #ececec; /* White Text */
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;

  p {
    margin: 0;
    color: #b3b3b3;
    font-family: Sanchez, Helvetica, sans-serif
  }
`;

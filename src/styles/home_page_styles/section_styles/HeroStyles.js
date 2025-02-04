import styled from "styled-components";
import heroLarge from "../../../images/hero-Large.jpg";
import heroMed from "../../../images/hero-Med.jpg";
import heroSmall from "../../../images/hero-Small.jpg";

export const HeroSection = styled.section`
  height: 31.25rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  @media screen and (min-width: 1080px) {
    background-image: url(${heroLarge});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextWrapper = styled.div``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    max-width: 20.625rem;
  }
`;
export const LogoContainer = styled.div`
  max-width: 15.625rem;
  max-height: 15.625rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const ImageWrapper = styled.div``;

export const ImageContainer = styled.div`
  img {
  }
`;

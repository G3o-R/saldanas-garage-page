import styled from "styled-components";
import heroLarge from "../../../images/hero-Large.jpg";
import heroMed from "../../../images/hero-Med.jpg";
import heroSmall from "../../../images/hero-Small.jpg";

export const HeroSection = styled.section`
  max-height: 31.25rem;
  height: auto;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;

  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1080px) {
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  video{
    width: 100vw;
    object-fit: cover;
  }
`;
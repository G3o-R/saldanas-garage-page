import styled from "styled-components";
import divider from "../../../images/divider.svg";

export const ContentSection = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
  overflow: hidden;


  @media screen and (min-width: 1260px) {
    justify-content: center;
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .ribbons-large,
  .ribbons-medium {
    position: absolute;
    left: 0;
    top: 0;
  }

  .ribbons-large {
    opacity: 0;
    @media screen and (min-width: 768px) {
      width: calc(100% - 60vw);
      max-width: 34.375rem;
      opacity: 1;
    }
  }

  .ribbons-medium {
    opacity: 0;
    @media screen and (max-width: 767px) {
      opacity: 1;
      width: calc(100% - 60vw);
      max-width: 16rem;
    }
  }

  .scratches {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  padding-top: 0.5rem;
  right: 0;
  z-index: 2;
  max-width: 1560px;
  width: 100%; 
  

  @media screen and (min-width: 768px) {
    padding-top: 2rem;
    padding-left: 0;
  }
`;

export const ServiceGridWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: right;
  @media screen and (max-width: 767px) {
  padding-left: clamp(1rem, 20vw, 5.25rem);
}
`;

export const ServiceGridContainer = styled.div`
  display: grid;
  column-gap: 0.75rem;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: start;
  width: auto;

  & > *:nth-child(5) {
    grid-column: 1 / 3;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 20rem);
    row-gap: 2.625rem;
    justify-content: end;
    & > * {
      position: relative;
    }

    & > *::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0.75rem;
      height: 100%;
      background: url(${divider}) no-repeat center center;
      background-size: contain;
    }
  }

  @media screen and (min-width: 1260px) {
    grid-template-columns: repeat(3, minmax(15rem, 20rem));
    grid-template-rows: repeat(2, 1fr);
    & > *:nth-last-child(1) {
      grid-column: 3 / 4;
    }
  }
`;

export const ServiceInfoWrapper = styled.div`
  display: flex;
  padding: 0 1.25rem;
  /* justify-content: center; */
  @media screen and (max-width: 767px) {
  padding-left: clamp(1rem, 20vw, 5.25rem);
}


  @media screen and (min-width: 768px) and (max-width: 1259px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1260px) {
    justify-content: flex-end;
  }
`;

export const ServiceInfoContainer = styled.div`
  display: flex;
  max-width: 54.75rem;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 1260px) {
    margin-right: 21rem;
    margin-top: -14.25rem;
  }
`;

export const InfoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  &::before {
    content: "";
    display: block;
    height: 1px;
    background: linear-gradient(
      to right,
      #999999 0%,
      #ffffff 50%,
      #999999 100%
    );
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  span {
    display: flex;
    flex-direction: column;
    text-align: left;
    @media screen and (min-width: 768px) {
      gap: 0.5rem;
      height: 5.5rem;
      align-items: baseline;
      flex-direction: row;
    }

    h1 {
      font-style: italic;
      height: 4.5rem;
      margin: 0;
      @media screen and (min-width: 768px) {
        margin: 0 0.75rem;
      }
    }

    h2 {
      cursor: pointer;
      font-weight: bold;
      margin: 0 0.25rem;
      color: #999999;
      transition: color 0.3s ease-in-out;

      &.active{
        color: #ffffff;
      }
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;

  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .swiper-slide {
    position: relative;
    align-items: center;
    z-index: 1;
    transition: opacity 0.5s ease-in-out;
  }

  .swiper-slide-next, .swiper-slide-prev{
    @media screen and (max-width: 767px){
      opacity: 0;
    }
  }

  .swiper-slide-active{
    opacity: 1;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  max-width: 20.75rem;
  width: 100%;
  p {
    line-height: 1.75rem;
    margin: 0;
    color: #ffffff;
    padding-right: 50px;
    @media screen and (min-width: 425px) {
      line-height: 2rem;
    }
  }
`;

export const GuaranteesContainer = styled.div`
  width: 100%;
  max-width: 20.75rem;
  @media screen and (min-width: 1260px) {
    max-width: 31.25rem;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    gap: 1.25rem;
    padding: 0;
    @media screen and (min-width: 768px) {
      padding-left: 2.5rem;
    }
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
  }

  svg {
    width: 3.125;
    height: 3.125;
    color: white;
  }
`;

export const NavButton = styled.button`
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 50px;
  width: 50px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(3.4px);
  &::after {
    color: #c2c2c2;
    font-size: 1.5rem;
    font-weight: 700;
  }

  &.swiper-button-prev{
    margin-left: -50px;
    position: absolute;
    z-index: 10;
  }
`;

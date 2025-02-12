import styled from "styled-components";

export const StyledCTASection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: black;
  margin: 4rem 0rem;
`;

export const CTAWrapper = styled.div`
  width: 100%;
  max-width: 50rem;

  @media screen and (max-width: 767px) {
    padding-left: clamp(1rem, 20vw, 8.25rem);
  }

  @media screen and (min-width: 768px) {
    max-height: 31.25rem;
  }

  @media screen and (min-width: 1080px) {
    max-width: 63rem;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media screen and (min-width: 768px) {
    margin-bottom: 8rem;
  }

  @media screen and (min-width: 1080px) {
    margin-bottom: 5rem;
  }

  h1 {
    color: white;
    text-align: left;
    line-height: 4rem;
    margin: 2rem 0.75rem 0rem;
    max-width: 53.125rem;
    @media screen and (min-width: 768px) {
      line-height: 1.2;
    }
  }
`;

export const BookNowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(266.42deg, #999999 14.6%, #070707 85.4%);
  border-radius: 50px;
  height: 5.375rem;
  width: 12.5rem;
  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    margin-top: 1.5rem;
    height: 4rem;
    width: 14rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  a {
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const ImageContainer = styled.div`
  max-height: 18.75rem;
  max-width: 31.25rem;
  margin-top: -2.5rem;

  @media screen and (min-width: 420px) {
    margin-top: -2.75rem;
  }

  @media screen and (min-width: 540px) {
    margin-top: -3.5rem;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

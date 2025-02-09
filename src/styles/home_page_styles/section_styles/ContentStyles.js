import styled from "styled-components";
import divider from "../../../images/divider.svg";

export const ContentSection = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: flex-end;
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

  .ribbons {
    position: absolute;
    left: 0;
    top: 0;
  }

  .scratches {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  padding-top: 2rem;
  right: 0;
  z-index: 2;
  max-width: 1560px;
  width: 100%;
`;

export const ServiceGridWrapper = styled.div`
  width: auto;
`;

export const ServiceGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 20rem);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 2.625rem;
  justify-content: end;
  width: auto;

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

  @media screen and (min-width: 1260px) {
    grid-template-columns: repeat(3, 20rem);
    grid-template-rows: repeat(2, 1fr);
    & > *:nth-last-child(1) {
      grid-column: 3 / 4;
    }
  }
`;

export const ServiceInfoWrapper = styled.div`
  display: flex;
  padding: 0 1.25rem;
  justify-content: flex-start;
  @media screen and (min-width: 1260px) {
    justify-content: flex-end;
  }
`;

export const ServiceInfoContainer = styled.div`
  display: flex;
  max-width: 54.75rem;
  flex-direction: column;
  gap: 1rem;

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
    align-items: baseline;
    gap: 0.5rem;
    height: 5.5rem;

    h1 {
      font-style: italic;
      margin: 0 0.75rem;
    }

    h2 {
      font-weight: bold;
      margin: 0 0.25rem;
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
`;

export const TextContainer = styled.div`
  text-align: left;
  max-width: 20.75rem;
  width: 100%;
  p {
    line-height: 2rem;
    margin: 0;
    color: #ffffff;
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

import styled from "styled-components";

export const ServiceWrapper = styled.div`
  max-width: 20rem;
  max-height: 17.25rem;
`;

export const ServiceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  /* justify-content: f; */
  flex-direction: column;
  align-items: center;
`;

export const ServiceNameContainer = styled.div`
  h2 {
    margin: 0;
    line-height: 3rem;
  }
`;

export const ServiceDescription = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: contents;
  text-align: left;
  p {
    max-width: 14.75rem;
    left: calc(50% - 237px / 2 + 0.5px);
    line-height: 1.75rem;
    letter-spacing: -0.07em;
    margin-top: 0;
  }
`;

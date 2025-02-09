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
    width: 100%;
  }
`;

export const ServiceDescription = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: start;
    padding-left: .625rem;
    p{
      margin: 0;
    }
    svg{
      width: 70%;
    }
  }
  text-align: left;
  display: contents;
  p {
    max-width: 14.75rem;
    left: calc(50% - 237px / 2 + 0.5px);
    line-height: 1.75rem;
    letter-spacing: -0.07em;
    margin-top: 0;
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
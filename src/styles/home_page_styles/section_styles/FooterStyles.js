import styled from "styled-components";

export const FooterSection = styled.section`
  background-color: #000;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: 668px) {
    height: 31.25rem;
  }

  `;

export const FooterWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  `;

export const FooterContainer = styled.div`
  max-width: 42rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 668px) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  /* height: 100%; */
`;

export const LogoContainer = styled.div`
  max-width: 16rem;
  max-height: 16rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  
`;

export const InfoWrapper = styled.div`
  max-width: 18rem;

  @media screen and (min-width: 668px) {
  max-width: 23rem;
}
`;

export const InfoContainer = styled.div`
  text-align: left;
  a {
    color: #999999;
    text-decoration: none;
    font-weight: normal;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }
  h2{
    margin: 0.75rem 0;
  }
  p{
    margin: 0.25rem 0;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialMediaIconAnchor = styled.a`
    cursor: pointer;
    svg{
      width: 3.125rem;
    }
`;
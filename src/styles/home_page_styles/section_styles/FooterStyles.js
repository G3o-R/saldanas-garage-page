import styled from "styled-components";

export  const FooterSection = styled.section`
height: 31.25rem;
background-color: #000;
display: flex;
justify-content: center;

`;

export const FooterContainer = styled.div`
max-width: 42rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`;

export const LogoWrapper = styled.div`

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

export const SocialsWrapper = styled.div`
    max-width: 23rem;

`;

export const SocialsContainer = styled.div`
text-align: left;

`;

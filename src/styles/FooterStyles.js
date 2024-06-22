import styled from "styled-components";
import { LogoWrapper, Logo } from "./NavbarStyles";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    padding: 1em 0em 1em 0em;
`;

export const WidgetsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`;

export const FooterLogoWrapper = styled(LogoWrapper)`
    width: 120px;
    margin: 20px;
`;

export const FooterLogo = styled(Logo)`
    object-fit: cover;
`;

export const SocialsWrapper = styled.div`
    /* background-color: #2b2b2b; */
    padding: 10px;


`;

export const SocialsIconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 10px;
    align-items: center;
    width: 200px;
`;

export const SocialMediaIconAnchor = styled.a`
    cursor: pointer;
    svg {
        fill: white;
        transition: fill 0.3s ease-in-out;
        
        &:hover {
            fill: #262626;
        }
    }
`;

export const ContactInformation = styled.div`

`;
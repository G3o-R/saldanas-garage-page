import styled from "styled-components";
import { LogoWrapper, Logo } from "./NavbarStyles";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        fill: #d8d8d8;
        transition: fill 0.3s ease-in-out;
        
        &:hover {
            fill: #FFFFFF;
        }
    }
`;

export const ContactInformationContainer = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
    gap: 12px;
    color: #FFFFFF;
    font-size: 14px;
`;

export const ContactInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const ContactMethod = styled.span`
    margin-left: 5px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
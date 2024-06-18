import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #4C5157;
    height: 90px;
    margin-bottom: 20px;
`;

export const LogoWrapper = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 70px;
    aspect-ratio: 1/1;
    margin: 0em 1em 0em 1em;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AnchorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 1em;
`;

export const StyledAnchor = styled.a`
    color: white;
    text-decoration: underline;
    font-size: 1em;
    transition: color 0.3s;
    cursor: pointer;
    text-align: center;
    flex-grow: 1;
    padding: 0 1em;

    &:hover {
        color: #FFD700;
    }
`;

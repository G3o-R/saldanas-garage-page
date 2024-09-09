import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoJpg from "../Images/saldanas-garage-logo.jpg"

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #202020;
  height: 90px;
  transition: transform 0.3s ease-in-out;
  
  &.--hidden {
      transform: translateY(-100%);
    }
    
    @media screen and (max-width: 450px) {
        justify-content: center;
        /* background-image: url(${LogoJpg}); */
        background-position:center;
    }
`;


export const LogoWrapper = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 70px;
    aspect-ratio: 1/1;
    margin: 0em 1em 0em 1em;
    @media screen and (max-width: 450px) {
        &.nav-bar {
          display:none;
        }
    }
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

export const NavLinks = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 70%;
  padding-bottom: 5px;

  @media screen and (max-width: 450px) {
        background-color: #303030;
        padding: 5px 15px 5px;
        border-radius: 24px 24px 24px 24px;
      }

      button, a{
        padding: 0;
        height: fit-content;
        font-size: 16px;
      }
  `;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor:pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }

`;

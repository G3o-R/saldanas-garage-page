import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: #1b1b1b;
  height: 120px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 0 20px;

  &.--hidden {
    transform: translateY(-100%);
  }

  @media screen and (max-width: 450px) {
    justify-content: center;
    padding: 0;
    background-position: center;
  }
`;

export const LogoWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 70px;
  aspect-ratio: 1/1;
  margin: 0 2em 0 1em;
  border: 2px solid #f7f7f7;
  transition: border-color 0.3s ease;

  @media screen and (max-width: 450px) {
    /* margin: 0 0 0 1em; */
    width: 50px;
    border: none;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-direction: row;
  width: 400px;
  padding-bottom: 5px;

  button, a {
    padding: 0;
    font-family: Sanchez;
    font-size: 16px;
    font-weight: 500;
    align-content: center;
    color: white;
  }

  button {
    font-weight: 500;
  }

  @media screen and (max-width: 450px) {
    background-color: #303030;
    padding: 5px 15px;
    margin-left: 5px;
    border-radius: 24px;
    width: 70%;
    justify-content: space-around;
    gap: 10px;
    
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding-bottom: 3px;

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

export const BannerContainer = styled.div`
  width: 100%;
  margin-left: auto;
  text-align: left;

  @media screen and (max-width:450px) {
    display:none;
  }
`;

export const Banner = styled.div`
  font-family: Parisienne;
  font-size: clamp(30px, 2.5vw, 80px);
  color: #f7f7f7;
  letter-spacing: 2px;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;


// export const Banner = styled.div`
//   font-family: Parisienne;
//   font-size: 80px;
//   color: #f7f7f7;
//   letter-spacing: 2px;
//   line-height: 1.2;
//   text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);

//   @media screen and (max-width: 2050px){
//     font-size: 70px;
//   }
//   @media screen and (max-width: 1850px){
//     font-size: 60px;
//   }
//   @media screen and (max-width: 1650px){
//     font-size: 50px;
//   }
//   @media screen and (max-width: 1450px){
//     font-size: 40px;
//   }
//   @media screen and (max-width: 1250px){
//     font-size: 30px;
//   }
// `;

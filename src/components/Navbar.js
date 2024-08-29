import { 
    LogoWrapper,
    Logo,
    NavbarContainer,
    NavLinks,
    NavLink
 } from "../styles/NavbarStyles";
 import { useState } from "react";


export default function Navbar(){
  const [effect, setEffect] = useState("--visible")

    let lastScrollY = window.scrollY
    window.addEventListener("scroll",()=>{
        if(lastScrollY > window.scrollY && window.scrollY > 400){
            setEffect("--visible")
        }
        if(lastScrollY > window.scrollY && window.scrollY < 400){
            setEffect("--visible")
        }
        else if(lastScrollY < window.scrollY && window.scrollY > 400){
            setEffect("--hidden")
        }
        lastScrollY = window.scrollY
    })


    return(
        <NavbarContainer className={effect}>
            <LogoWrapper>
                <Logo src="/saldanas-garage-logo.jpg" alt="company logo" />
            </LogoWrapper>
            <NavLinks>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/" >About</NavLink>
                <NavLink to="/" >Reviews</NavLink>
                <NavLink to="/tints-wraps" >Tints N Wraps</NavLink>
            </NavLinks>
            
        </NavbarContainer>
    )
}
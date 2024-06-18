import { 
    AnchorContainer,
    Logo,
    LogoWrapper, 
    NavbarContainer,
    StyledAnchor
 } from "../styles/NavbarStyles";


export default function Navbar(){
    return(
        <NavbarContainer>
            <LogoWrapper>
                <Logo src="/saldanas-garage-logo.jpg" alt="company logo" />
            </LogoWrapper>
            <AnchorContainer>
                <StyledAnchor>About</StyledAnchor>
                <StyledAnchor>Reviews</StyledAnchor>
                <StyledAnchor>Contact Us</StyledAnchor>
            </AnchorContainer>
        </NavbarContainer>
    )
}
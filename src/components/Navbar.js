import { useNavigate } from "react-router";
import { 
    AnchorContainer,
    Logo,
    LogoWrapper, 
    NavbarContainer,
    StyledAnchor
 } from "../styles/NavbarStyles";


export default function Navbar(){

    const navigate = useNavigate()
    function GoToTintsNWraps(){
        navigate("/tints-wraps")
    }
    return(
        <NavbarContainer>
            <LogoWrapper>
                <Logo src="/saldanas-garage-logo.jpg" alt="company logo" />
            </LogoWrapper>
            <AnchorContainer>
                <StyledAnchor onClick={GoToTintsNWraps}>About</StyledAnchor>
                <StyledAnchor>Reviews</StyledAnchor>
                <StyledAnchor>Contact Us</StyledAnchor>
            </AnchorContainer>
        </NavbarContainer>
    )
}
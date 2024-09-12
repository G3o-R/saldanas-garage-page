import { 
    LogoWrapper,
    Logo,
    NavbarContainer,
    NavLinks,
    NavLink
} from "../styles/NavbarStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [effect, setEffect] = useState("--visible");
    const navigate = useNavigate();

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY > window.scrollY && window.scrollY > 100) {
            setEffect("--visible");
        } else if (lastScrollY < window.scrollY && window.scrollY > 100) {
            setEffect("--hidden");
        }
        lastScrollY = window.scrollY;
    });

    const handleScrollToSection = (sectionId) => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementsByName(sectionId)[0];
            if (section) {
                section.scrollIntoView({behaviour: "smooth"});
            }
        }, 100);
    };

    return (
        <NavbarContainer className={effect}>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink as="button" onClick={() => handleScrollToSection("about")}>
                    About
                </NavLink>
                <NavLink as="button" onClick={() => handleScrollToSection("reviews")}>
                    Reviews
                </NavLink>
                <NavLink to="/tints-wraps">Tints N Wraps</NavLink>
            </NavLinks>
            <LogoWrapper className="nav-bar">
                <Logo src="/saldanas-garage-logo.jpg" alt="company logo" />
            </LogoWrapper>
        </NavbarContainer>
    );
}

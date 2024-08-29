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
        if (lastScrollY > window.scrollY && window.scrollY > 400) {
            setEffect("--visible");
        } else if (lastScrollY < window.scrollY && window.scrollY > 400) {
            setEffect("--hidden");
        }
        lastScrollY = window.scrollY;
    });

    const handleScrollToSection = (sectionId) => {
        navigate("/"); // Navigate to the home page
        setTimeout(() => {
            const section = document.getElementsByName(sectionId)[0];
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Delay to ensure the page has loaded before scrolling
    };

    return (
        <NavbarContainer className={effect}>
            <LogoWrapper>
                <Logo src="/saldanas-garage-logo.jpg" alt="company logo" />
            </LogoWrapper>
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
        </NavbarContainer>
    );
}

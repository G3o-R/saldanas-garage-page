import {
  FooterContainer,
  FooterSection,
  LogoContainer,
  LogoWrapper,
  SocialsContainer,
  SocialsWrapper,
} from "../../styles/home_page_styles/section_styles/FooterStyles";
import SGLogo from "../../images/saldanas-garage-logo.jpg";

export default function Footer() {
  return (
    <FooterSection className="footer-section">
      <FooterContainer className="footer-container">
        <LogoWrapper className="logo-wrapper">
          <LogoContainer className="logo-container">
            <img src={SGLogo} alt="saldana's garage logo" />
          </LogoContainer>
        </LogoWrapper>
        <SocialsWrapper className="socials-wrapper">
          <SocialsContainer className="socials-container">
            <h2 className="bussiness-name">Saldana's Garage</h2>
            <p className="address">
              1017 E Indian School Rd, Phoenix, AZ 85014
            </p>
            <p className="phone#">Phone#: (602) 349-2192</p>
          </SocialsContainer>
        </SocialsWrapper>
      </FooterContainer>
    </FooterSection>
  );
}

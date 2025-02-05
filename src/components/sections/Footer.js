import {
  FooterContainer,
  FooterSection,
  LogoContainer,
  LogoWrapper,
  InfoContainer,
  InfoWrapper,
  SocialMediaContainer,
  FooterWrapper,
} from "../../styles/home_page_styles/section_styles/FooterStyles";
import SGLogo from "../../images/saldanas-garage-logo.jpg";

import { ReactComponent as FacebookIcon } from "../../images/facebook.svg"
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg"
import { ReactComponent as TiktokIcon } from "../../images/tiktok.svg"

export default function Footer() {
  return (
    <FooterSection className="footer-section">
      <FooterWrapper className="footer-wrapper">

      <FooterContainer className="footer-container">
        <LogoWrapper className="logo-wrapper">
          <LogoContainer className="logo-container">
            <img src={SGLogo} alt="saldana's garage logo" />
          </LogoContainer>
        </LogoWrapper>
        <InfoWrapper className="info-wrapper">
          <InfoContainer className="info-container">
            <h2 className="bussiness-name">Saldana's Garage</h2>
            <p className="address">
              1017 E Indian School Rd, Phoenix, AZ 85014
            </p>
            <p className="phone#">Phone#: (602) 349-2192</p>
            <SocialMediaContainer className="social-media">
              <FacebookIcon />
              <InstagramIcon />
              <TiktokIcon />
            </SocialMediaContainer>
          </InfoContainer>
        </InfoWrapper>
      </FooterContainer>
      </FooterWrapper>
    </FooterSection>
  );
}

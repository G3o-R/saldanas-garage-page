import {
  FooterContainer,
  FooterSection,
  LogoContainer,
  LogoWrapper,
  InfoContainer,
  InfoWrapper,
  SocialMediaContainer,
  FooterWrapper,
  SocialMediaIconAnchor,
} from "../../styles/home_page_styles/section_styles/FooterStyles";
import SGLogo from "../../images/saldanas-garage-logo.jpg";

import { ReactComponent as FacebookIcon } from "../../images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as TiktokIcon } from "../../images/tiktok.svg";

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
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1017+E+Indian+School+Rd,+Phoenix,+AZ+85014"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1017 E Indian School Rd, Phoenix, AZ 85014
                </a>
              </p>

              <p className="phone#">
                Phone#: <a href="tel:+16023492192">(602) 349-2192</a>
              </p>
              <SocialMediaContainer className="social-media">
                <SocialMediaIconAnchor
                  href="https://www.facebook.com/profile.php?id=100009616453915"
                  target="_blank"
                >
                  <FacebookIcon />
                </SocialMediaIconAnchor>
                <SocialMediaIconAnchor
                  href="https://www.instagram.com/saldanas_garage/"
                  target="_blank"
                >
                  <InstagramIcon />
                </SocialMediaIconAnchor>
                <SocialMediaIconAnchor
                  href="https://www.tiktok.com/@saldana602?lang=en"
                  target="_blank"
                >
                  <TiktokIcon />
                </SocialMediaIconAnchor>
              </SocialMediaContainer>
            </InfoContainer>
          </InfoWrapper>
        </FooterContainer>
      </FooterWrapper>
    </FooterSection>
  );
}

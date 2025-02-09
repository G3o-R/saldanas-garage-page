import {
  HeroContainer,
  HeroSection,
  ImageContainer,
  ImageWrapper,
  LogoContainer,
  TextContainer,
  TextWrapper,
} from "../../styles/home_page_styles/section_styles/HeroStyles";
import SGLogo from "../../images/saldanas-garage-logo.jpg";
import LuisPNGL from "../../images/luis-cut-out-large.png";
import LuisPNGM from "../../images/luis-cut-out-med.png";

export default function Hero() {
  // under 1080px I need the ImageWrapper OR TextWrapper to have a negative
  // margin left or right. this is to save space on tablets and to reduce the size reduction of the logo
  return (
    <HeroSection className="hero-section">
      <HeroContainer className="hero-container">
        <TextWrapper className="text-wrapper">
          <TextContainer className="text-container">
            <LogoContainer>
              <img src={SGLogo} alt="saldana's garage logo" />
            </LogoContainer>
            <h1>Saldana's Garage</h1>
          </TextContainer>
        </TextWrapper>
        <ImageWrapper className="image-wrapper">
          <ImageContainer className="image-container">
            <img src={LuisPNGM} alt="png of saldana's garage over" />
          </ImageContainer>
        </ImageWrapper>
      </HeroContainer>
    </HeroSection>
  );
}

import {
  HeroContainer,
  HeroSection,
  ImageContainer,
  ImageWrapper,
  LogoContainer,
  TextContainer,
  TextWrapper,
} from "../../styles/home_page_styles/section_styles/HeroVideoStyles";
import VideoPlayer from "./VideoPlayer";

export default function HeroVideo() {
  return (
    <HeroSection className="hero-section">
      <HeroContainer className="hero-container">
        <VideoPlayer />
      </HeroContainer>
    </HeroSection>
  );
}

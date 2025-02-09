import {
  BackgroundContainer,
  BackgroundWrapper,
  ContentContainer,
  ContentSection,
  InfoHeaderContainer,
  ServiceGridContainer,
  ServiceGridWrapper,
  ServiceInfoWrapper,
  ServiceInfoContainer,
  InfoWrapper,
  InfoContainer,
  TextContainer,
  GuaranteesContainer,
} from "../../styles/home_page_styles/section_styles/ContentStyles";
import { Tints, Wraps, Decals, LEDS } from "../ServiceComponents";

import SilverRibbons from "../../images/content-section-silver-ribbon.jpg";
import SilverRibbonsM from "../../images/silver-ribbons-M.jpg";
import Scratches from "../../images/content-section-scratch-marks.jpg";

import { ReactComponent as LifeTimeWarranty } from "../../images/serviceSVGs/shieldCheck.svg";
import { ReactComponent as Stable } from "../../images/serviceSVGs/stable.svg";
import { ReactComponent as Gradients } from "../../images/serviceSVGs/gradient.svg";
import { ReactComponent as PaintDrop } from "../../images/serviceSVGs/paintDrop.svg";
import { ReactComponent as MagnifyingGlass } from "../../images/serviceSVGs/magnifyingGlass.svg";
import { ReactComponent as Satellite } from "../../images/serviceSVGs/satellite.svg";
import { ReactComponent as UvRejection } from "../../images/serviceSVGs/UVRejection.svg";
import { ReactComponent as IRRejection } from "../../images/serviceSVGs/IRRejection.svg";

export default function Content() {
  return (
    <ContentSection className="content-section">
      <BackgroundWrapper className="background">
        <BackgroundContainer>
          <img
            src={SilverRibbons}
            alt="background image of ribbons"
            className="ribbons-large"
          />
          <img
            src={SilverRibbonsM}
            alt="background image of ribbons"
            className="ribbons-medium"
          />
          <img
            src={Scratches}
            alt="background image of scratch marks"
            className="scratches"
          />
        </BackgroundContainer>
      </BackgroundWrapper>
      <ContentContainer className="content-container">
        <ServiceGridWrapper className="service-grid-wrapper">
          <ServiceGridContainer className="service-grid-container">
            <Tints />
            <Wraps />
            <Decals />
            <LEDS />
          </ServiceGridContainer>
        </ServiceGridWrapper>
        {/* service info related elements */}
        <ServiceInfoWrapper className="service-info-wrapper">
          <ServiceInfoContainer className="service-info-container">
            <InfoHeaderContainer className="info-header-container">
              <span>
                <h1>Tints:</h1>
                <h2>Pro-Nano</h2>
                <h2>C2 Carbon</h2>
              </span>
            </InfoHeaderContainer>
            <InfoWrapper className="info-wrapper">
              <InfoContainer className="info-container">
                <TextContainer className="text-container">
                  <p>
                    C2 Carbon is an advanced nano carbon film produced using the
                    latest technology in the industry. Using this technology, we
                    created a film that not only looks great, it performs great
                    too. In addition, this process has allowed us to bring
                    premium looks and performance to you at a
                    mid-range price point.
                  </p>
                </TextContainer>
                <GuaranteesContainer className="">
                  <ul>
                    <li>
                      <LifeTimeWarranty /> Lifetime Warranty
                    </li>
                    <li>
                      <Stable /> Color Stable
                    </li>
                    <li>
                      <Gradients /> Matches Most Factory Tint
                    </li>
                    <li>
                      <PaintDrop /> Deep Dyed + Ceramic Technology
                    </li>
                    <li>
                      <MagnifyingGlass /> High Optical Clarity
                    </li>
                    <li>
                      <Satellite /> No Signal Interferance
                    </li>
                    <li>
                      <UvRejection /> 99% UV Rejection
                    </li>
                    <li>
                      <IRRejection /> High IR Rejection
                    </li>
                  </ul>
                </GuaranteesContainer>
              </InfoContainer>
            </InfoWrapper>
          </ServiceInfoContainer>
        </ServiceInfoWrapper>
        {/* end of service info related elements */}
      </ContentContainer>
    </ContentSection>
  );
}

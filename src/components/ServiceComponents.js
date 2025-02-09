import {
  ServiceContainer,
  ServiceDescription,
  ServiceNameContainer,
  ServiceWrapper,
} from "../styles/home_page_styles/ServiceComponentsStyles";
import {ReactComponent as Flourish} from "../images/Flourish.svg"

export function Tints() {
  return (
      <ServiceWrapper className="service-wrapper tints">
        <ServiceContainer className="service-container">
          <ServiceNameContainer className="service-name">
            <h2>Tints</h2>
          </ServiceNameContainer>
          <ServiceDescription className="service-description">
            <p>custom tints keep your car cool even when it’s hot as hell...</p>
          <Flourish />
          </ServiceDescription>

        </ServiceContainer>
      </ServiceWrapper>
  );
}

export function Wraps() {
  return (
      <ServiceWrapper className="service-wrapper wraps">
        <ServiceContainer className="service-container">
          <ServiceNameContainer className="service-name">
            <h2>wraps</h2>
          </ServiceNameContainer>
          <ServiceDescription className="service-description">
            <p>Blah blah something here make your car look brand new.</p>
          <Flourish />
          </ServiceDescription>

        </ServiceContainer>
      </ServiceWrapper>
  );
}

export function Decals() {
  return (
      <ServiceWrapper className="service-wrapper decals">
        <ServiceContainer className="service-container">
          <ServiceNameContainer className="service-name">
            <h2>Decals</h2>
          </ServiceNameContainer>
          <ServiceDescription className="service-description">
            <p>Promotions, racing stripes, hello kitty, stickers we do it al.l</p>
          <Flourish />
          </ServiceDescription>

        </ServiceContainer>
      </ServiceWrapper>
  );
}

export function LEDS() {
  return (
      <ServiceWrapper className="service-wrapper leds">
        <ServiceContainer className="service-container">
          <ServiceNameContainer className="service-name">
            <h2>LEDS</h2>
          </ServiceNameContainer>
          <ServiceDescription className="service-description">
            <p>We make you shine bright like a diamond fr fr.</p>
          <Flourish />
          </ServiceDescription>

        </ServiceContainer>
      </ServiceWrapper>
  );
}
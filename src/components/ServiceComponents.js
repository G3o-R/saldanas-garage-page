import {
  ServiceContainer,
  ServiceDescription,
  ServiceNameContainer,
  ServiceWrapper,
} from "../styles/home_page_styles/ServiceComponentsStyles";
import { ReactComponent as Flourish } from "../images/Flourish.svg";
import { createPortal } from "react-dom";



export function Tints({ selectedService = "", isLarge }) {
  const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper tints">
      <ServiceContainer className="service-container">
        <ServiceNameContainer className="service-name">
          <h2>Tints</h2>
        </ServiceNameContainer>
        
        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>Custom tints keep your car cool even when it’s hot as hell</p>
            <Flourish />
          </ServiceDescription>
        ) : (
          selectedService === "tints" && serviceGridContainer && !isLarge
            ? createPortal(
                <ServiceDescription className="service-description from portal">
                  <p>Custom tints keep your car cool even when it’s hot as hell</p>
                  <Flourish />
                </ServiceDescription>,
                serviceGridContainer
              )
            : null
        )}
      </ServiceContainer>
    </ServiceWrapper>
  );
}


export function Wraps({ selectedService, isLarge }) {
const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper wraps">
      <ServiceContainer className="service-container">
        <ServiceNameContainer className="service-name">
          <h2>wraps</h2>
        </ServiceNameContainer>
        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>Blah blah something here make your car look brand new.</p>
            <Flourish />
          </ServiceDescription>
        ) : (
          selectedService === "wraps" && serviceGridContainer
            ? createPortal(
                <ServiceDescription className="service-description">
                  <p>Blah blah something here make your car look brand new.</p>
                  <Flourish />
                </ServiceDescription>,
                serviceGridContainer
              )
            : null
        )}
      </ServiceContainer>
    </ServiceWrapper>
  );
}

export function Decals({ selectedService, isLarge }) {
const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper decals">
      <ServiceContainer className="service-container">
        <ServiceNameContainer className="service-name">
          <h2>Decals</h2>
        </ServiceNameContainer>
        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>Promotions, racing stripes, hello kitty, stickers we do it all.</p>
            <Flourish />
          </ServiceDescription>
        ) : (
          selectedService === "decals" && serviceGridContainer
            ? createPortal(
                <ServiceDescription className="service-description">
                  <p>Promotions, racing stripes, hello kitty, stickers we do it all.</p>
                  <Flourish />
                </ServiceDescription>,
                serviceGridContainer
              )
            : null
        )}
      </ServiceContainer>
    </ServiceWrapper>
  );
}

export function LEDS({ selectedService, isLarge }) {
const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper leds">
      <ServiceContainer className="service-container">
        <ServiceNameContainer className="service-name">
          <h2>LEDS</h2>
        </ServiceNameContainer>
        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>We make you shine bright like a diamond fr fr.</p>
            <Flourish />
          </ServiceDescription>
        ) : (
          selectedService === "leds" && serviceGridContainer
            ? createPortal(
                <ServiceDescription className="service-description">
                  <p>We make you shine bright like a diamond fr fr.</p>
                  <Flourish />
                </ServiceDescription>,
                serviceGridContainer
              )
            : null
        )}
      </ServiceContainer>
    </ServiceWrapper>
  );
}

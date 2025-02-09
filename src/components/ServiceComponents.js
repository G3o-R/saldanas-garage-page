import {
  ServiceContainer,
  ServiceDescription,
  ServiceNameContainer,
  ServiceWrapper,
  GuaranteesContainer,
} from "../styles/home_page_styles/ServiceComponentsStyles";
import { ReactComponent as Flourish } from "../images/Flourish.svg";
import { createPortal } from "react-dom";

import { ReactComponent as LifeTimeWarranty } from "../images/serviceSVGs/shieldCheck.svg";
import { ReactComponent as Stable } from "../images/serviceSVGs/stable.svg";
import { ReactComponent as Gradients } from "../images/serviceSVGs/gradient.svg";
import { ReactComponent as PaintDrop } from "../images/serviceSVGs/paintDrop.svg";
import { ReactComponent as MagnifyingGlass } from "../images/serviceSVGs/magnifyingGlass.svg";
import { ReactComponent as Satellite } from "../images/serviceSVGs/satellite.svg";
import { ReactComponent as UvRejection } from "../images/serviceSVGs/UVRejection.svg";
import { ReactComponent as IRRejection } from "../images/serviceSVGs/IRRejection.svg";

export function Tints({ selectedService = "", handleServiceSelect, isLarge }) {
  const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper tints">
      <ServiceContainer className="service-container">
        <ServiceNameContainer
          className="service-name"
          onClick={() => handleServiceSelect("Tints")}
        >
          <h2>Tints</h2>
        </ServiceNameContainer>

        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>Custom tints keep your car cool even when it’s hot as hell</p>
            <Flourish />
          </ServiceDescription>
        ) : selectedService === "tints" && serviceGridContainer && !isLarge ? (
          createPortal(
            <ServiceDescription className="service-description from portal">
              <p>Custom tints keep your car cool even when it’s hot as hell</p>
              <Flourish />
            </ServiceDescription>,
            serviceGridContainer
          )
        ) : null}
      </ServiceContainer>
    </ServiceWrapper>
  );
}

export function TintsGuarantees(){
  return (
    <GuaranteesContainer className="tints-guarantees">
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
  )
};

export function Wraps({ selectedService, handleServiceSelect, isLarge }) {
  const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper wraps">
      <ServiceContainer className="service-container">
        <ServiceNameContainer
          className="service-name"
          onClick={() => handleServiceSelect("Wraps")}
        >
          <h2>Wraps</h2>
        </ServiceNameContainer>
        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>Blah blah something here make your car look brand new.</p>
            <Flourish />
          </ServiceDescription>
        ) : selectedService === "wraps" && serviceGridContainer ? (
          createPortal(
            <ServiceDescription className="service-description">
              <p>Blah blah something here make your car look brand new.</p>
              <Flourish />
            </ServiceDescription>,
            serviceGridContainer
          )
        ) : null}
      </ServiceContainer>
    </ServiceWrapper>
  );
}

export function Decals({ selectedService, handleServiceSelect, isLarge }) {
  const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper decals">
      <ServiceContainer className="service-container">
        <ServiceNameContainer
          className="service-name"
          onClick={() => handleServiceSelect("Decals")}
        >
          <h2>Decals</h2>
        </ServiceNameContainer>
        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>
              Promotions, racing stripes, hello kitty, stickers we do it all.
            </p>
            <Flourish />
          </ServiceDescription>
        ) : selectedService === "decals" && serviceGridContainer ? (
          createPortal(
            <ServiceDescription className="service-description">
              <p>
                Promotions, racing stripes, hello kitty, stickers we do it all.
              </p>
              <Flourish />
            </ServiceDescription>,
            serviceGridContainer
          )
        ) : null}
      </ServiceContainer>
    </ServiceWrapper>
  );
}

export function LEDS({ selectedService, handleServiceSelect, isLarge }) {
  const serviceGridContainer = document.getElementById("services");

  return (
    <ServiceWrapper className="service-wrapper leds">
      <ServiceContainer className="service-container">
        <ServiceNameContainer
          className="service-name"
          onClick={() => handleServiceSelect("LEDS")}
        >
          <h2>LEDS</h2>
        </ServiceNameContainer>
        {isLarge ? (
          <ServiceDescription className="service-description">
            <p>We make you shine bright like a diamond fr fr.</p>
            <Flourish />
          </ServiceDescription>
        ) : selectedService === "leds" && serviceGridContainer ? (
          createPortal(
            <ServiceDescription className="service-description">
              <p>We make you shine bright like a diamond fr fr.</p>
              <Flourish />
            </ServiceDescription>,
            serviceGridContainer
          )
        ) : null}
      </ServiceContainer>
    </ServiceWrapper>
  );
}

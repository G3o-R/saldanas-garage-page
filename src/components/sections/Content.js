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
  NavButton,
} from "../../styles/home_page_styles/section_styles/ContentStyles";
import { useState, useRef } from "react";
import { Tints, Wraps, Decals, LEDS } from "../ServiceComponents";
import { ReactComponent as LifeTimeWarranty } from "../../images/serviceSVGs/shieldCheck.svg";
import { ReactComponent as Stable } from "../../images/serviceSVGs/stable.svg";
import { ReactComponent as Gradients } from "../../images/serviceSVGs/gradient.svg";
import { ReactComponent as PaintDrop } from "../../images/serviceSVGs/paintDrop.svg";
import { ReactComponent as MagnifyingGlass } from "../../images/serviceSVGs/magnifyingGlass.svg";
import { ReactComponent as Satellite } from "../../images/serviceSVGs/satellite.svg";
import { ReactComponent as UvRejection } from "../../images/serviceSVGs/UVRejection.svg";
import { ReactComponent as IRRejection } from "../../images/serviceSVGs/IRRejection.svg";
import SilverRibbons from "../../images/content-section-silver-ribbon.jpg";
import SilverRibbonsM from "../../images/silver-ribbons-M.jpg";
import Scratches from "../../images/content-section-scratch-marks.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Content() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const [selectedService, setSelectedService] = useState("tints");

  const isLarge = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setSlidesLength(swiper.slides.length);
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

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
        <ServiceGridWrapper
          className="service-grid-wrapper"
          id="services-wrapper"
        >
          <ServiceGridContainer
            className="service-grid-container"
            id="services"
          >
            <Tints selectedService={selectedService} isLarge={isLarge} />
            <Wraps selectedService={selectedService} isLarge={isLarge} />
            <Decals selectedService={selectedService} isLarge={isLarge} />
            <LEDS selectedService={selectedService} isLarge={isLarge} />
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
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  spaceBetween={0}
                  slidesPerView={isLarge ? 2 : 1}
                  initialSlide={0}
                  onSwiper={handleSwiperInit}
                  onSlideChange={handleSlideChange}
                  centeredSlides={isLarge ? false : true}
                  className="my-slider"
                >
                  <SwiperSlide>
                    <TextContainer className="text-container">
                      <p>
                        C2 Carbon is an advanced nano carbon film produced using
                        the latest technology in the industry. Using this
                        technology, we created a film that not only looks great,
                        it performs great too. In addition, this process has
                        allowed us to bring premium looks and performance to you
                        at a mid-range price point.
                      </p>
                    </TextContainer>
                  </SwiperSlide>
                  <SwiperSlide>
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
                  </SwiperSlide>
                  <NavButton className="swiper-button-prev"></NavButton>
                  <NavButton className="swiper-button-next"></NavButton>
                </Swiper>
              </InfoContainer>
            </InfoWrapper>
          </ServiceInfoContainer>
        </ServiceInfoWrapper>
        {/* end of service info related elements */}
      </ContentContainer>
    </ContentSection>
  );
}

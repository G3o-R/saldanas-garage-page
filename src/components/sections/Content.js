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
import {
  Tints,
  TintsGuarantees,
  Wraps,
  Decals,
  LEDS,
} from "../ServiceComponents";
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
  const [selectedService, setSelectedService] = useState("Tints");
  const [selectedOption, setSelectedOption] = useState("Pro-Nano");

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

  const services = {
    "Tints": {
      "Pro-Nano": {
        description:
          "Pro-nano is Geoshield's most advanced spectrally selective window film designed for automotive applications. The film is virtually clear and haze free but blocks a significant amount of UV and heat. IR blocking ceramic nano particles, in combination with UV stabilized film provides long lasting protection to your home, office or vehicle. ",
        guarantees: <TintsGuarantees />,
      },
      "C2 Carbon": {
        description:
          "C2 Carbon is an advanced nano carbon film produced using the latest technology in the industry. Using this technology, we created a film that not only looks great, it performs great too. In addition, this process has allowed us to bring premium looks and performance to you at a mid-range price point.",
        guarantees: <TintsGuarantees />,
      },
    },
    "Wraps": {
      "PPF": {
        description:
          "This is just some filler text until I can actually get information on the benefits of PPF and it's protective properties, blah blah words words and even way more words",
        guarantees: <TintsGuarantees />,
      },
      "Vinyl": {
        description:
          "lorem ipsum tacos gummy bears I want more coffee the fitness gram pacer test is an anerobic if you or your loved one was diagnosed with mesothelioma you be qualified for I like trains",
        guarantees: <TintsGuarantees />,
      },
    },
    "Decals": {
      "Promotions": {
        description:
          "show of your business and stuff",
        guarantees: <TintsGuarantees />,
      },
      "racing stripes": {
        description:
          "It won't make you drive faster, but it'll make you look cooler going 0 to 60 eventually",
        guarantees: <TintsGuarantees />,
      },
    },
    "LEDS": {
      "Interior": {
        description:
          "Yall ever watch that movie Tron? It'll make you feel that bro, trust",
        guarantees: <TintsGuarantees />,
      },
      "Exterior": {
        description:
          "They're like interior lights but on the outside",
        guarantees: <TintsGuarantees />,
      },
    },
  };

  function handleServiceSelect(serviceName) {
    setSelectedService(serviceName);
    const firstOption = Object.keys(services[serviceName])[0];
    setSelectedOption(firstOption);
  }

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
            <Tints
              selectedService={selectedService}
              handleServiceSelect={handleServiceSelect}
              isLarge={isLarge}
            />
            <Wraps
              selectedService={selectedService}
              handleServiceSelect={handleServiceSelect}
              isLarge={isLarge}
            />
            <Decals
              selectedService={selectedService}
              handleServiceSelect={handleServiceSelect}
              isLarge={isLarge}
            />
            <LEDS
              selectedService={selectedService}
              handleServiceSelect={handleServiceSelect}
              isLarge={isLarge}
            />
          </ServiceGridContainer>
        </ServiceGridWrapper>
        <ServiceInfoWrapper className="service-info-wrapper">
          <ServiceInfoContainer className="service-info-container">
            <InfoHeaderContainer className="info-header-container">
              <span>
                <h1>{selectedService}:</h1>
                {Object.keys(services[selectedService]).map((option) => (
                  <h2
                    key={option}
                    className={selectedOption === option ? "active" : ""}
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </h2>
                ))}
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
                        {services[selectedService][selectedOption].description}
                      </p>
                    </TextContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                    {services[selectedService][selectedOption].guarantees}
                  </SwiperSlide>
                  <NavButton className="swiper-button-prev"></NavButton>
                  <NavButton className="swiper-button-next"></NavButton>
                </Swiper>
              </InfoContainer>
            </InfoWrapper>
          </ServiceInfoContainer>
        </ServiceInfoWrapper>
      </ContentContainer>
    </ContentSection>
  );
}

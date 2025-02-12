import { BookNowContainer, CTAContainer, CTAWrapper, StyledCTASection, CallToAction, ImageContainer } from "../../styles/home_page_styles/section_styles/CTASectionStyles";
import GWagonPNG from "../../images/GWagon.png"

export default function CTA(){
    return(
        <StyledCTASection className="call-to-action-section">
            <CTAWrapper className="call-to-action-wrapper">
                <CTAContainer className="call-to-action-container">
                    <CallToAction>
                        <h1>Keeping your car cool and you looking cooler</h1>
                        <BookNowContainer>
                            <a href="tel:+16023492192">Book Now</a>
                        </BookNowContainer>
                    </CallToAction>
                    <ImageContainer className="image-container">
                        <img src={GWagonPNG} alt="G Wagon PNG" className="G-Wagon-PNG"/>
                    </ImageContainer>
                </CTAContainer>
            </CTAWrapper>
        </StyledCTASection>
    )
}
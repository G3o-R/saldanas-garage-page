import { 
    HeroContainer,
    HeroText,
    HeroWrapper,
    Image,
    ImageContainer,
    ImageOverlay,
    ImageWrapper,
    TextContainer,
    TextWrapper,
 } from "../styles/HeroSectionStyles";


export default function HeroSection(){
    return(
        <HeroWrapper>
            <HeroContainer>
                <ImageWrapper>
                    <ImageContainer>
                        <Image src="/car1.jpg" alt="car image" />
                    </ImageContainer>
                </ImageWrapper>
                <TextContainer>
                    <TextWrapper>
                        <HeroText>Wraps lorem ipsum filam </HeroText>
                    </TextWrapper>
                </TextContainer>
            </HeroContainer>
        </HeroWrapper>
    )
}
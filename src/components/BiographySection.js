import { 
    BiographyContainer,
    PortraitImageContainer,
    PortraitImage,
    BiographyWrapper,
    BioText,
    TextStyles
 } from "../styles/BiographySectionStyles";
 


export default function BiographySection(){
    return (
        <BiographyContainer>
            <PortraitImageContainer>
                <PortraitImage src="/LuisPortrait.jpg"
                    alt="portrait image"
                />
            </PortraitImageContainer>
                <BiographyWrapper>
                    <BioText>No matter what I'll get it <TextStyles>done...</TextStyles></BioText>
                </BiographyWrapper>
        </BiographyContainer>
    )
}
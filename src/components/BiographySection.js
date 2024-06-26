import { 
    BiographyContainer,
    PortraitImageContainer,
    PortraitImage,
    BiographyWrapper,
    BioText
 } from "../styles/BiographySectionStyles";
 


export default function BiographySection(){
    return (
        <BiographyContainer className="container-here">
            <PortraitImageContainer>
                <PortraitImage src="/LuisPortrait.jpg"
                    alt="portrait image"
                />
            </PortraitImageContainer>
                <BiographyWrapper>
                    <BioText>No matter what I'll get it done...</BioText>
                </BiographyWrapper>
        </BiographyContainer>
    )
}
import { 
    BiographyContainer,
    PortraitImageContainer,
    PortraitImage,
    BiographyWrapper
 } from "../styles/BiographySectionStyles";


export default function BiographySection(){
    return (
        <BiographyContainer className="container-here">
            <PortraitImageContainer>
                <PortraitImage src="https://thumbs.dreamstime.com/b/young-man-standing-full-length-portrait-white-background-141971362.jpg"
                    alt="portrait image"
                />
            </PortraitImageContainer>
                <BiographyWrapper>
                    <h1>No matter what I'll get it done</h1>
                </BiographyWrapper>
        </BiographyContainer>
    )
}
import { 
    BiographyContainer,
    PortraitImageContainer,
    PortraitImage,
    Biography
 } from "../styles/BiographySectionStyles";


export default function BiographySection(){
    return (
        <BiographyContainer>
            <PortraitImageContainer>
                <PortraitImage src="https://thumbs.dreamstime.com/b/young-man-standing-full-length-portrait-white-background-141971362.jpg"
                    alt="portrait image"
                />
                <Biography>
                    No matter what I'll get it done
                </Biography>
            </PortraitImageContainer>
        </BiographyContainer>
    )
}
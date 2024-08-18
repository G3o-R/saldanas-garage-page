import {
     CardWrapper,
     Imagecontainer,
     ImageWrapper, 
     TextWrapper,
     TextContainer
    } from "../styles/ContentCardTwoStyles";


export default function ContentCardTwo({content}){
    const { image, text, title } = content;

    return(
        <CardWrapper>
            <ImageWrapper>
                <Imagecontainer>
                    <img src={image} alt="car photos"/>
                </Imagecontainer>
            </ImageWrapper>
            <TextWrapper>
                <TextContainer>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </TextContainer>
            </TextWrapper>

        </CardWrapper>
    )
}
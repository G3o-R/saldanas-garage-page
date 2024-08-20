import {
     CardWrapper,
     Imagecontainer,
     ImageWrapper, 
     TextWrapper,
     TextContainer,
     CardContainer
    } from "../styles/ContentCardTwoStyles";


export default function ContentCardTwo({content}){
    const { image, text, title, orientation } = content;

    return (
      <CardWrapper id="card-wrapper">
        <CardContainer id="card-container" className={orientation}>
          <ImageWrapper id="image-wrapper">
            <Imagecontainer className={orientation}>
              <img src={image} alt="car photos" />
            </Imagecontainer>
          </ImageWrapper>
          <TextWrapper>
            <TextContainer className={orientation}>
                    <h4>{title}</h4>
                    <p>{text}</p>
            </TextContainer>
          </TextWrapper>
        </CardContainer>
      </CardWrapper>
    );
}
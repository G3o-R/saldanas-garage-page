import { 
    InfoCardWrapper,
    TitleCardContainer,
    TextBox,
    InfoCardContainer
 } from "../styles/InfoCardStyles"

export default function InfoCard({infoObj}){
    const {title, text} = infoObj

    return (
      <InfoCardWrapper className="info-card-container">
        <InfoCardContainer>
          <TitleCardContainer>
            <h1>{title}</h1>
          </TitleCardContainer>
          <TextBox>
            <p>{text}</p>
          </TextBox>
        </InfoCardContainer>
      </InfoCardWrapper>
    );
}
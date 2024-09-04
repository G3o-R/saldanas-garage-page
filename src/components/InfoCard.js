import { 
    InfoCardWrapper,
    InfoContainer,
    TitleCardContainer,
    TextBox
 } from "../styles/InfoCardStyles"

export default function InfoCard({infoObj}){
    const {title, text} = infoObj

    return(
        <InfoCardWrapper>
        <InfoContainer>
            <TitleCardContainer>
                <h1>{title}</h1>
            </TitleCardContainer>
            <TextBox>
                <p>
                {text}
                </p>
            </TextBox>
        </InfoContainer>
    </InfoCardWrapper>
    )
}
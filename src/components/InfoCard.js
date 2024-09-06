import { 
    InfoCardContainer,
    TitleCardContainer,
    TextBox
 } from "../styles/InfoCardStyles"

export default function InfoCard({infoObj}){
    const {title, text} = infoObj

    return(
        <InfoCardContainer>
            <TitleCardContainer>
                <h1>{title}</h1>
            </TitleCardContainer>
            <TextBox>
                <p>
                {text}
                </p>
            </TextBox>
    </InfoCardContainer>
    )
}
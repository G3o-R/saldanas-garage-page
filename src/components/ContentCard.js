import { 
    CardStyles,
    ImageContainer
} from "../styles/ContentCardStyles"

export default function ContentCard({content, leftOriented}){
    const {image, text, title} = content

    return(
        <CardStyles className={leftOriented ? "left" : "right"}>
            <ImageContainer>
                <img src={image} alt="car photos"/>
            </ImageContainer>
            <h4>{title}</h4>
            <p>{text}</p>
        </CardStyles>
    )
}
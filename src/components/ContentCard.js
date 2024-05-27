import { 
    CardStyles,
    ImageContainer
} from "../styles/ContentCardStyles";

export default function ContentCard({ content, className }) {
    const { image, text, title } = content;

    return (
        <CardStyles className={className}>
            <ImageContainer>
                <img src={image} alt="car photos" />
            </ImageContainer>
            <h4>{title}</h4>
            <p>{text}</p>
        </CardStyles>
    );
}

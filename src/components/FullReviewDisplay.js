import { 
    Header,
    ReviewContainer,
    ReviewDisplay,
    Reviewer,
} from "../styles/FullReviewDisplayStyles";
import { Stars } from "../styles/ReviewCardStyles";

export default function FullReviewDisplay({ review }) {
    const completeReview = review.review.split("[BR]").map((segment, index) => (
        <p key={index}>{segment.trim()}</p>
    ));

    return (
        <ReviewDisplay className="full-review">
            <Header>
            <Reviewer>{review.reviewer}</Reviewer>
            <Stars>{"★".repeat(review.stars)}</Stars>
            </Header>
            <ReviewContainer>
                {completeReview}
            </ReviewContainer>
        </ReviewDisplay>
    );
}

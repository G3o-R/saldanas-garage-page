import { 
    Review,
    ReviewContainer,
    ReviewDisplay,
    Reviewer,
} from "../styles/FullReviewDisplayStyles";

export default function FullReviewDisplay({ review }) {
    const completeReview = review.review.split("[BR]").map((segment, index) => (
        <p key={index}>{segment.trim()}</p>
    ));

    return (
        <ReviewDisplay className="full-review">
            <Reviewer>{review.reviewer}</Reviewer>
            <ReviewContainer>
                {completeReview}
            </ReviewContainer>
        </ReviewDisplay>
    );
}

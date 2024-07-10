import { 
    Card,
    Reviewer,
    ReviewContainer,
    Stars,
    ReviewLink
 } from "../styles/ReviewCardStyles";
 import TextTruncate from "react-text-truncate";

export default function ReviewCard({review}){
    return (
        <Card>
          <Reviewer>{review.reviewer}</Reviewer>
          <ReviewContainer>
          <TextTruncate
          line={3}
          element="p"
          truncateText="..."
          text={review.review}
        />
          </ReviewContainer>
          <Stars>{'★'.repeat(review.stars)}</Stars>
          <ReviewLink href={review.review_link} target="_blank" rel="noopener noreferrer">
            Read full review
          </ReviewLink>
        </Card>
      );
}
import { 
    Card,
    Reviewer,
    Review,
    Stars,
    ReviewLink
 } from "../styles/ReviewCardStyles";

export default function ReviewCard({review}){
    return (
        <Card>
          <Reviewer>{review.reviewer}</Reviewer>
          <Review>{review.review}</Review>
          <Stars>{'★'.repeat(review.stars)}</Stars>
          <ReviewLink href={review.review_link} target="_blank" rel="noopener noreferrer">
            Read full review
          </ReviewLink>
        </Card>
      );
}
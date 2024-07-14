import { useRef } from "react";
import { createPortal } from "react-dom";
import { 
  CardWrapper,
  Card,
  Reviewer,
  ReviewContainer,
  Stars,
  ReviewLink
} from "../styles/ReviewCardStyles";
import TextTruncate from "react-text-truncate";
import FullReviewDisplay from "./FullReviewDisplay";

export default function ReviewCard({ review, selectedReview, handleSetReviewToDisplay, selectedReviewPosition }) {
  const cardRef = useRef(null);

  const handleClick = () => {
    const cardPosition = cardRef.current.getBoundingClientRect();
    handleSetReviewToDisplay(review, cardPosition);
  };

  const isSelected = selectedReview === review;

  return (
    <>
    <CardWrapper ref={cardRef}>
      <Card onClick={handleClick} isSelected={isSelected}>
        <Reviewer>{review.reviewer}</Reviewer>
        <ReviewContainer>
          <TextTruncate
            line={3}
            element="p"
            truncateText="..."
            text={review.review}
            />
        </ReviewContainer>
        <Stars>{"★".repeat(review.stars)}</Stars>
        <ReviewLink
          href={review.review_link}
          target="_blank"
          rel="noopener noreferrer"
          >
          Read full review
        </ReviewLink>
      </Card>
      {isSelected &&
        // createPortal(
          <FullReviewDisplay review={review} selectedReviewPosition={selectedReviewPosition} />
        //   document.getElementById("reviews-wrapper")
        // )
        }
      </CardWrapper>
        </>
  );
}

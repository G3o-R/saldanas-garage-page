import { useEffect, useRef } from "react";
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

export default function ReviewCard({ review, selectedReview, setSelectedReview, handleSetReviewToDisplay, selectedReviewPosition }) {
  const cardRef = useRef(null);

  const handleClick = () => {
    const cardPosition = cardRef.current.getBoundingClientRect();
    handleSetReviewToDisplay(review, cardPosition);
  };

  const isSelected = selectedReview === review;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setSelectedReview(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSelectedReview]);

  return (
    <CardWrapper ref={cardRef}>
      <Card onClick={handleClick}>
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
        <ReviewLink>
          Read full review
        </ReviewLink>
      </Card>
      {isSelected && 
        <FullReviewDisplay review={review} selectedReviewPosition={selectedReviewPosition} />
      }
    </CardWrapper>
  );
}

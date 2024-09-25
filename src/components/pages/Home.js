import { 
    ContentContainer,
    HomePage,
    ReviewsContainer,
} from "../../styles/HomeStyles";
import { useState } from "react";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";
import BiographySectionTwo from "../unused/BiographySectionTwo";
import ReviewCard from "../ReviewCard";
import ContentCardTwo from "../ContentCardTwo";

import { InfoCardC2Carbon, InfoCardProNano } from "../InfoCards";
import { useMediaQuery } from 'react-responsive'; // For screen size detection

function Home({ pageComponents }) {
    const { images_arr, reviews } = pageComponents;
    const [selectedReview, setSelectedReview] = useState(null);
    const [selectedReviewPosition, setSelectedReviewPosition] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0); // State for current content index

    // Array of components to display
    const contentArray = [
        <BiographySectionTwo key="bio" />, 
        <InfoCardProNano key="proNano" />, 
        <InfoCardC2Carbon key="c2Carbon" />
    ];

    // Media query to check if screen is large (e.g., min-width: 768px)
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

    // Function to handle swipe or button clicks
    const handleNext = () => {
        console.log("next")
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + contentArray.length) % contentArray.length);
    };

    function handleSetReviewToDisplay(selectedReview, position) {
        setSelectedReview(selectedReview);
    }

    const reviewsToDisplay = reviews.map((review) => (
        <ReviewCard 
            review={review} 
            key={review.id} 
            selectedReview={selectedReview}
            setSelectedReview={setSelectedReview}
            selectedReviewPosition={selectedReviewPosition}
            handleSetReviewToDisplay={handleSetReviewToDisplay}
        />
    ));

    return (
        <HomePage>
            <ImageCarousel images_arr={images_arr} />
            <ContentContainer id="content-column" name="about">
                { isLargeScreen ? (
                    <div>nav here</div>
                ): null }
                {contentArray[currentIndex]}
                {isLargeScreen ? (
                    <div >
                        <button onClick={handlePrevious}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                ) : (
                    <div
                        onTouchStart={(e) => (this.touchStart = e.changedTouches[0].clientX)}
                        className="swip here"
                        onTouchEnd={(e) => {
                            const touchEnd = e.changedTouches[0].clientX;
                            if (this.touchStart - touchEnd > 50) {
                                handleNext();
                            } else if (touchEnd - this.touchStart > 50) {
                                handlePrevious();
                            }
                        }}
                    >
                    </div>
                )}
            </ContentContainer>
            <ReviewsContainer name="reviews">
                {reviewsToDisplay}
            </ReviewsContainer>
            <Footer />
        </HomePage>
    );
}

export default Home;

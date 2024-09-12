import { 
    ContentContainer,
    HomePage,
    LogoContainer,
    ReviewsContainer,
    ReviewsWrapper
} from "../../styles/HomeStyles";
import { useState } from "react";
// import ContentCard from "./ContentCard";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import BiographySection from "../BiographySection";
import BiographySectionTwo from "../BiographySectionTwo";
import ReviewCard from "../ReviewCard";
// import HeroSection from "./HeroSection";
import ContentCardTwo from "../ContentCardTwo";

function Home({pageComponents}) {
    const {cards, images_arr, reviews } = pageComponents
    const [selectedReview, setSelectedReview] = useState(null)
    const [selectedReviewPosition, setSelectedReviewPosition] = useState(null);

    const contentToDisplay = cards.map((content) => <ContentCardTwo key={content.id} content={content} />)

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
    ))

    return (
        <HomePage> 
            <ImageCarousel images_arr={images_arr}/>
            <BiographySectionTwo />
            <ContentContainer id="content-column" name="about">
                {contentToDisplay}
            </ContentContainer>
                <ReviewsContainer name="reviews">
                    {reviewsToDisplay}
                </ReviewsContainer>
            <Footer />
        </HomePage>
    );
}

export default Home;

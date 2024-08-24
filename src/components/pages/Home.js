import { 
    ContentContainer,
    HomePage,
    LogoContainer,
    ReviewsContainer,
    ReviewsWrapper
} from "../../styles/HomeStyles";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";
// import ContentCard from "./ContentCard";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";
import Navbar from "../Navbar";
import BiographySection from "../BiographySection";
import ReviewCard from "../ReviewCard";
// import HeroSection from "./HeroSection";
import ContentCardTwo from "../ContentCardTwo";

function Home() {
    const {isLoading, content, imagesArr, reviewsArray} = useContext(Context)
    const [selectedReview, setSelectedReview] = useState(null)
    const [selectedReviewPosition, setSelectedReviewPosition] = useState(null);

    const contentToDisplay = content.map((content) => <ContentCardTwo key={content.id} content={content} />)

    function handleSetReviewToDisplay(selectedReview, position) {
        setSelectedReview(selectedReview);
      }

    const reviewsToDisplay = reviewsArray.map((review) => (
        <ReviewCard 
        review={review} 
        key={review.id} 
        selectedReview={selectedReview}
        position={selectedReviewPosition}
        handleSetReviewToDisplay={handleSetReviewToDisplay}
        />
    ))

    return (
        <HomePage> 
            <ImageCarousel imagesArr={imagesArr}/>
            <Navbar />
            <BiographySection />
            <ContentContainer id="content-column">
                {contentToDisplay}
            </ContentContainer>
                <ReviewsContainer>
                    {reviewsToDisplay}
                </ReviewsContainer>
            <Footer />
        </HomePage>
    );
}

export default Home;

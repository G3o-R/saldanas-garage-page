import { 
    ContentContainer,
    HomePage,
    LogoContainer,
    ReviewsContainer,
    ReviewsWrapper
} from "../styles/HomeStyles";
import { useContext, useState } from "react";
import { Context } from "./Context/Context";
import ContentCard from "./ContentCard";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BiographySection from "./BiographySection";
import ReviewCard from "./ReviewCard";
import HeroSection from "./HeroSection";

function Home() {
    const {isLoading, content, carouselContent, reviewsArray} = useContext(Context)
    const [selectedReview, setSelectedReview] = useState(null)
    const [selectedReviewPosition, setSelectedReviewPosition] = useState(null);

    let leftOriented = true;

    const contentToDisplay = content.map((content) => {
        leftOriented = !leftOriented;
        return (<ContentCard key={content.id} content={content} className={leftOriented ? "left" : "right" }/>)
    })

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
            {/* <HeroSection/> */}
            <ImageCarousel carouselContent={carouselContent}/>
            <Navbar />
            <BiographySection />
            <ContentContainer>
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

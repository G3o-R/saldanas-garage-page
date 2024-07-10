import { 
    ContentContainer,
    HomePage,
    LogoContainer,
    ReviewsContainer
} from "../styles/HomeStyles";
import { useContext } from "react";
import { Context } from "./Context/Context";
import ContentCard from "./ContentCard";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BiographySection from "./BiographySection";
import ReviewCard from "./ReviewCard";

function Home() {
    const {isLoading, content, carouselContent, reviewsArray} = useContext(Context)

    let leftOriented = true;

    const contentToDisplay = content.map((content) => {
        leftOriented = !leftOriented;
        return (<ContentCard key={content.id} content={content} className={leftOriented ? "left" : "right" }/>)
    })

    const reviewsToDisplay = reviewsArray.map((review) => (
        <ReviewCard review={review} key={review.id}/>
    ))

    return (
        <HomePage> 
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

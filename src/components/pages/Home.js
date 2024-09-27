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
import ContentNav from "../ContentNav";
// import ContentCardTwo from "../ContentCardTwo";

import { ContentCardC2Carbon, ContentCardProNano } from "../ContentCards";
import { useMediaQuery } from 'react-responsive';

// code involving swiping
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"


// ----------------------------

function Home({ pageComponents }) {
    const { images_arr, reviews } = pageComponents;
    const [selectedReview, setSelectedReview] = useState(null);
    const [selectedReviewPosition, setSelectedReviewPosition] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const contentArray = [
        <BiographySectionTwo key="bio" />, 
        <ContentCardProNano key="proNano" />, 
        <ContentCardC2Carbon key="c2Carbon" />
    ];

    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

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
          {isLargeScreen ? <ContentNav /> : null}
          {/* <BiographySectionTwo /> */}
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            className="my-swiper-here"
          >
            <SwiperSlide> <BiographySectionTwo/> </SwiperSlide>
            <SwiperSlide> <ContentCardProNano key="proNano" /> </SwiperSlide>
            <SwiperSlide> <ContentCardC2Carbon key="c2Carbon" /> </SwiperSlide>
          </Swiper>
        </ContentContainer>
        <ReviewsContainer name="reviews">{reviewsToDisplay}</ReviewsContainer>
        <Footer />
      </HomePage>
    );
}

export default Home;

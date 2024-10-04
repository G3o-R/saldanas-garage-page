import { 
    ContentContainer,
    HomePage,
    ReviewsContainer,
    SwiperOverlay,
} from "../../styles/HomeStyles";
import { useState, useRef } from "react";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";
import BiographySectionTwo from "../unused/BiographySectionTwo";
import ReviewCard from "../ReviewCard";
import ContentNav from "../ContentNav";
// import ContentCardTwo from "../ContentCardTwo";

import { ContentCardC2Carbon, ContentCardProNano } from "../ContentCards";
import { useMediaQuery } from 'react-responsive';

// code involving swiping
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css"


// ----------------------------

function Home({ pageComponents }) {
    const { images_arr, reviews } = pageComponents;
    const [selectedReview, setSelectedReview] = useState(null);
    const [selectedReviewPosition, setSelectedReviewPosition] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const [slidesLength, setSlidesLength] = useState(0)

    function handleSetReviewToDisplay(selectedReview, position) {
        setSelectedReview(selectedReview);
    }

    function handleSlideTo(index) {
        if (swiperRef.current && swiperRef.current.slideTo) {
            swiperRef.current.slideTo(index, 0);
        }
    }

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        setSlidesLength(swiper.slides.length);
    };

    function handleSlideChange(swiper){
        setCurrentIndex(swiper.activeIndex)
    }

    const glowDirection = 
    currentIndex === 0
    ? "glow-right" 
    : currentIndex === slidesLength - 1
    ? "glow-left" 
    : "glow";

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
                {isLargeScreen ? <ContentNav handleSlideTo={handleSlideTo}/> : null}
                {!isLargeScreen ?<p className="try-swiping"> Try Swiping</p> : null}
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    className="my-swiper-here"
                    onSwiper={handleSwiperInit}
                    onSlideChange={handleSlideChange}
                >
                    <SwiperSlide> <BiographySectionTwo /> </SwiperSlide>
                    <SwiperSlide> <ContentCardProNano key="proNano" /> </SwiperSlide>
                    <SwiperSlide> <ContentCardC2Carbon key="c2Carbon" /> </SwiperSlide>
                </Swiper>
                <SwiperOverlay className={glowDirection}></SwiperOverlay>
            </ContentContainer>
            <ReviewsContainer name="reviews">{reviewsToDisplay}</ReviewsContainer>
            <Footer />
        </HomePage>
    );
}

export default Home;
import { 
    ContentContainer,
    HomePage,
    LogoContainer,
    ReviewsContainer
} from "../styles/HomeStyles";
import { useEffect, useState, useContext } from "react";
import { Context } from "./Context/Context";
import ContentCard from "./ContentCard";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [preloadedIndexes, setPreloadedIndexes] = useState([0]);
    const {isLoading, content, carouselContent} = useContext(Context)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => Math.min(prevIndex + 1, content.length - 1));
        }, 1750);

        return () => clearInterval(interval);
    }, [content]);

    useEffect(() => {
        const handleScroll = () => {
            const visibleIndexes = getVisibleIndexes();
            const newIndexes = visibleIndexes.filter(index => !preloadedIndexes.includes(index));
            if (newIndexes.length > 0) {
                setPreloadedIndexes(prevIndexes => [...prevIndexes, ...newIndexes]);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [preloadedIndexes]);

    const getVisibleIndexes = () => {
        const scrollTop = window.scrollY;
        const scrollBottom = scrollTop + window.innerHeight;
        const cardElements = document.querySelectorAll('.active');
        const visibleIndexes = [];
        cardElements.forEach((cardElement, index) => {
            const cardTop = cardElement.offsetTop;
            const cardBottom = cardTop + cardElement.offsetHeight;
            if (cardBottom > scrollTop && cardTop < scrollBottom) {
                visibleIndexes.push(index);
            }
        });
        return visibleIndexes;
    };

    let leftOriented = true;

    const contentToDisplay = content.map((content, index) => {
        leftOriented = !leftOriented;
        const isActive = index <= activeIndex;
        const isPreloaded = preloadedIndexes.includes(index);
        const orientationClass = leftOriented ? "left" : "right";
        const className = isActive ? `${orientationClass} active` : (isPreloaded ? 'inactive' : 'off-screen');
        return (<ContentCard key={content.id} content={content} className={className} />);
    });

    return (
        <HomePage> 
            <ImageCarousel carouselContent={carouselContent}/>
            <ContentContainer>
                {contentToDisplay}
            </ContentContainer>
            <ReviewsContainer>
                
            </ReviewsContainer>
            <Footer />
        </HomePage>
    );
}

export default Home;

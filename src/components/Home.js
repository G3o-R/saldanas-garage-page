import { 
    ContentContainer,
    HomePage,
    LogoContainer
} from "../styles/HomeStyles";
import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [preloadedIndexes, setPreloadedIndexes] = useState([0]); // Initially preload the first card

    useEffect(() => {
        fetch("http://localhost:3001/content")
        .then(res => res.json())
        .then(content => {
            setContent(content);
            setIsLoading(false);
        });
    }, []);

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
            <LogoContainer className={isLoading ? "true" : "false"}>
                <img src="/saldanas-garage-logo.jpg" alt="logo" />
            </LogoContainer>
            <ContentContainer>
                {contentToDisplay}
            </ContentContainer>
        </HomePage>
    );
}

export default Home;
